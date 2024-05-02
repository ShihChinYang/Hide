let videoChunkSize;
const broadcastChannelName = 'streamService';
let streams = {};
let videoStreams = {};
let streamWaitingList = {};

// ======== Support functions =================================

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// indexedDB
const DBName = "streams";
const chunkStoreName = "videoChunksStore";
const streamStoreName = "streamStore";

const myIndexedDB = self.indexedDB;

let streamDB = null;

function helloDB() {
  console.log("Hello indexedDB :", myIndexedDB);
}

function openDB() {
  return new Promise((resolve, reject) => {
    const request = myIndexedDB.open(DBName, 1);
    let upgradedNeeded = false;


    request.onerror = (e) => {
      console.log("openDB error: ", error);
      reject(error);
    };

    request.onsuccess = (e) => {
      const db = e.target.result;
      if (!upgradedNeeded) resolve(db);
    }

    request.onupgradeneeded = (e) => {
      upgradedNeeded = true;
      const db = e.target.result;
      const transaction = e.target.transaction;
      db.createObjectStore(chunkStoreName, { keyPath: "chunkId" });
      db.createObjectStore(streamStoreName, { keyPath: "videoId" });
      transaction.oncomplete = (e) => {
        resolve(db);
      }
    }
  })

}

function deleteDB() {
  return new Promise((resolve, reject) => {
    streamDB.close();
    streamDB = null;
    const request = myIndexedDB.deleteDatabase(DBName);

    request.onerror = (e) => {
      console.log("Couldn't delete database");
      reject();
    };

    request.onsuccess = (e) => {
      console.log("Deleted database successfully");
      resolve();
    }

    request.onblocked = function () {
      console.log("Couldn't delete database due to the operation being blocked");
  };
  })
}

function addChunkToDB(videoId, chunkIndex, dataInBinary) {
  return new Promise((resolve) => {

    const chunkId = `${videoId}_${chunkIndex}`;

    const chunkDataInBinary = {
      chunkId,
      dataInBinary
    }

    const request = streamDB
      .transaction(chunkStoreName, "readwrite")
      .objectStore(chunkStoreName)
      .put(chunkDataInBinary);

    request.onsuccess = async (e) => {
      console.log("chunk added: ", e.target.result);
      const chunksMap = await updateChunksMap('Add', videoId, chunkIndex);
      resolve(chunksMap);
    }

    request.onerror = (e) => {
      console.log("addChunkToDB failed: ", e.target.error);
      if (e.target.error.name == "ConstraintError") {
        resolve();
      }
    }

  })

}

function updateChunksMap(action, videoId, chunkIndex) {
  return new Promise(async (resolve, reject) => {
    const chunksMapId = videoId + '_chunksMap'
    let chunksMap = await getChunkFromDB(videoId, 'chunksMap');
    if (chunksMap) {
      chunksMap.map[chunkIndex] = (action === 'Add') ? true : false;
    } else {
      chunksMap = { chunkId: chunksMapId, map: {} };
      chunksMap.map[chunkIndex] = (action === 'Add') ? true : false;
    }

    const request = streamDB
      .transaction(chunkStoreName, "readwrite")
      .objectStore(chunkStoreName)
      .put(chunksMap);

    request.onsuccess = (e) => {
      console.log("chunksMap updated: ", e.target.result);
      resolve(chunksMap);
    }

    request.onerror = (e) => {
      console.log("Updating chunksMap failed: ", e.target.error);
      if (e.target.error.name == "ConstraintError") {
        resolve();
      }
    }
  });
}

function deleteChunkInDB(chunkId) {
  return new Promise((resolve) => {

    streamDB
      .transaction(chunkStoreName, "readwrite")
      .objectStore(chunkStoreName)
      .delete(chunkId)
      .onsuccess = (e) => {
        console.log("chunk deleted: ", chunkId);
        resolve();
      }

  })
}

function getChunkFromDB(videoId, chunkIndex) {

  return new Promise((resolve) => {
    const chunkId = `${videoId}_${chunkIndex}`;
    let time1, time2;
    time1 = Date.now();
    const request = streamDB
      .transaction(chunkStoreName)
      .objectStore(chunkStoreName)
      .get(chunkId);

    request.onsuccess = (e) => {
      //console.log("got chunk: ", e.target.result );
      time2 = Date.now();
      //console.log("getChunkFromDB takes time: ", time2-time1)
      resolve(e.target.result);
    }

    request.onerror = (e) => {
      console.log("getChunkFromDB failed: ", e.target.error);
      resolve(null);
    }

  })
}

function addStreamToDB(streamId, streamInfo) {
  return new Promise((resolve) => {

    const data = {
      streamId,
      streamInfo
    }

    const request = streamDB
      .transaction(streamStoreName, "readwrite")
      .objectStore(streamStoreName)
      .add(data);

    request.onsuccess = (e) => {
      console.log("stream added: ", e.target.result);
      resolve();
    }

    request.onerror = (e) => {
      console.log("addStreamToDB failed: ", e.target.error);
      if (e.target.error.name == "ConstraintError") {
        resolve();
      }
    }

  })

}

function deleteStreamInDB(streamId) {
  return new Promise((resolve) => {

    streamDB
      .transaction(streamStoreName, "readwrite")
      .objectStore(streamStoreName)
      .delete(streamId)
      .onsuccess = (e) => {
        console.log("stream deleted: ", streamId);
        resolve();
      }

  })
}

function getStreamFromDB(streamId) {

  return new Promise((resolve) => {

    const request = streamDB
      .transaction(streamStoreName)
      .objectStore(streamStoreName)
      .get(streamId);

    request.onsuccess = (e) => {
      //console.log("got chunk: ", e.target.result );
      resolve(e.target.result);
    }

    request.onerror = (e) => {
      console.log("getStreamFromDB failed: ", e.target.error);
      resolve(null);
    }

  })
}


self.addEventListener('install', event => {
  // Bypass the waiting lifecycle stage,
  // just in case there's an older version of this SW registration.
  console.log('Service worker installed.');
  event.waitUntil(self.skipWaiting());
});

// ============================================================

self.addEventListener('activate', event => {
  // Take control of all pages under this SW's scope immediately,
  // instead of waiting for reload/navigation. https://stackoverflow.com/questions/33978993/serviceworker-no-fetchevent-for-javascript-triggered-request

  function beforeActivate() {
    return new Promise(async (resolve, reject) => {
      try {
        await self.clients.claim();

        console.log('Activating service worker');
        resolve();
      } catch (error) {
        console.log("beforeActivate error: ", error)
        reject(error);
      }
    })
  }

  event.waitUntil(beforeActivate());
});

function findNextChunkToDownload(id, numberOfChunks, from) {
  return new Promise(async (resolve) => {
    console.log(`findNextChunkToDownload: ${id}, ${numberOfChunks}, ${from}`)
    const chunksMap = await getChunkFromDB(id, 'chunksMap');
    if (chunksMap) {
      let fromIndex = from;
      if ((fromIndex >= numberOfChunks) || from < 0) {
        fromIndex = 1;
      }
      let i = 0;
      console.log('fromIndex: ', fromIndex)
      for (i = fromIndex; i < numberOfChunks; i++) {
        let result = chunksMap.map[i];
        if (!result) {
          break;
        }
      }
      console.log('next chunk to download: ', i)
      resolve((i === numberOfChunks) ? -99999 : i);
    } else {
      resolve(from);
    }
  })
}

self.addEventListener("message", async (event) => {
  console.log("Service worker received message: ", event.data);
  if (!streamDB) {
    streamDB = await openDB();
  }
  function setupNewStream(event) {
    let newStream;
    let port;

    newStream = new ReadableStream({
      start: async controller => {
        port = event.ports[0];
        const encoder = new TextEncoder();
        controller.enqueue(encoder.encode(''));
        port.onmessage = event => {
          if (event.data) {
            switch (event.data.type) {
              case 'BINARY':
                let chunkLength = event.data.chunk.length;
                console.log("chunk length: ", chunkLength);
                let chunkArrary = new Uint8Array(chunkLength);
                for (let i = 0; i < chunkLength; i++) {
                  chunkArrary[i] = event.data.chunk.charCodeAt(i);
                }
                controller.enqueue(chunkArrary);
                break;
              case 'END_OF_FILE':
                console.log("END_OF_FILE ");
                controller.close();
                port.postMessage({ type: "STREAM_CLOSED" });
                break;
              default:
            }
          }
        }
      }
    });

    let fileName = event.data.fileName;
    let fileSize = event.data.fileSize;
    let browserInfo = event.data.browserInfo;

    let id = encodeURI(fileName + Date.now());
    let streamInfo = {
      id,
      fileName,
      fileSize,
      browserInfo,
      stream: newStream
    };
    streams[id] = streamInfo;
    port.postMessage({ type: "STREAM_OPENED", stream: { id } });
  }

  async function setupVideoStream(event) {

    let port = event.ports[0];
    let timeStamp = event.data.s3KeyPrefix.split(':').pop();
    let fileName = event.data.fileName;
    let fileType = event.data.fileType;
    let fileSize = event.data.fileSize;
    let browserInfo = event.data.browserInfo;
    let resumeForNewStream = event.data.resumeForNewStream;
    let start = event.data.start;
    videoChunkSize = event.data.videoChunkSize;
    let numberOfChunks = Math.floor(fileSize / videoChunkSize);


    if (fileSize % videoChunkSize) numberOfChunks += 1;


    let id = encodeURI(`${timeStamp}_${fileName}`);

    let streamInfo = {
      port,
      id,
      fileType,
      fileName,
      fileSize,
      browserInfo,
      numberOfChunks,
      twoBytesSent: false,
      nextChunkIndex: (numberOfChunks === 1) ? -99999 : 1,
      chunksInfo: {}
    };

    videoStreams[id] = streamInfo;
    if (streamWaitingList[id]) {
      let target = streamWaitingList[id].target;
      target.dispatchEvent(new CustomEvent("STREAM_AVAILABLE", { detail: streamInfo }));
    }

    let initialChunkIndex = await findNextChunkToDownload(id, numberOfChunks, 0);
    let nextChunkIndex = await findNextChunkToDownload(id, numberOfChunks, initialChunkIndex + 1);
    streamInfo.nextChunkIndex = nextChunkIndex;

    console.log(`Service Worker SEND: STREAM_OPENED initialChunkIndex: ${initialChunkIndex}`)
    port.postMessage({ type: "STREAM_OPENED", stream: { id }, initialChunkIndex });
    streamInfo.requestedChunkIndex = initialChunkIndex;

    port.onmessage = async event => {
      if (event.data) {
        try {
          switch (event.data.type) {
            case 'BINARY':
              let chunkLength = event.data.chunk.length;
              console.log("chunk length: ", chunkLength);
              console.log(`Service Worker RECEIVE: chunkIndex: ${event.data.chunkIndex}`)
              const chunksMap = await addChunkToDB(id, event.data.chunkIndex, event.data.chunk);

              if (streamInfo.chunksInfo[event.data.chunkIndex] && streamInfo.chunksInfo[event.data.chunkIndex].pendingFetches) {
                console.log(`Pending fetches exist for chunkIndex: ${event.data.chunkIndex}`);
                streamInfo.chunksInfo[event.data.chunkIndex].pendingFetches.forEach((target) => {
                  console.log(`dispatch CHUNK_AVAILABLE for chunkIndex:${event.data.chunkIndex}`)
                  target.dispatchEvent(new Event("CHUNK_AVAILABLE"));
                })
              }
              if (streamInfo.jumpToChunk) {
                console.log("jumpToChunk: ", streamInfo.jumpToChunk);
                streamInfo.nextChunkIndex = streamInfo.jumpToChunk;
                streamInfo.jumpToChunk = null;
              }
              console.log(`Service Worker SEND: NEXT_CHUNK nextChunkIndex: ${streamInfo.nextChunkIndex}`)
              port.postMessage({ type: "NEXT_CHUNK", chunksMap, nextChunkIndex: streamInfo.nextChunkIndex });
              streamInfo.requestedChunkIndex = streamInfo.nextChunkIndex;

              nextChunkIndex = await findNextChunkToDownload(id, numberOfChunks, streamInfo.nextChunkIndex + 1)
              streamInfo.nextChunkIndex = nextChunkIndex;

              break;
            default:
          }
        } catch (error) {
          console.log("port.onmessage failed: ", error)
        }

      }
    }
  }

  async function setupEditorVideoStream(event) {

    let port = event.ports[0];
    let timeStamp = event.data.s3KeyPrefix.split(':').pop();
    let fileName = event.data.fileName;
    let fileType = event.data.fileType;
    let fileSize = event.data.fileSize;
    let browserInfo = event.data.browserInfo;
    videoChunkSize = event.data.videoChunkSize;
    let numberOfChunks = Math.floor(fileSize / videoChunkSize);

    if (fileSize % videoChunkSize) numberOfChunks += 1;

    let id = encodeURI(`${timeStamp}_${fileName}`);

    let streamInfo = {
      id,
      fileType,
      fileName,
      fileSize,
      browserInfo,
      numberOfChunks
    };

    videoStreams[id] = streamInfo;
    //await addStreamToDB(id, streamInfo);

    port.postMessage({ type: "STREAM_OPENED", stream: { id } });

    port.onmessage = async event => {
      if (event.data) {
        try {
          switch (event.data.type) {
            case 'BINARY':
              let chunkLength = event.data.chunk.length;
              console.log("chunk length: ", chunkLength);

              await addChunkToDB(id, event.data.chunkIndex, event.data.chunk);

              break;
            default:
          }
        } catch (error) {
          console.log("port.onmessage failed: ", error)
        }

      }
    }
  }

  if (event.data) {
    await self.clients.claim();
    switch (event.data.type) {
      case 'INIT_PORT':
        setupNewStream(event);
        break;
      case 'INIT_VIDEO_PORT':
        setupVideoStream(event);
        break;
      case 'INIT_EDITOR_VIDEO_PORT':
        setupEditorVideoStream(event);
        break;
      case 'DELETE_DB':
        await deleteDB();
        break;
      default:
    }
  }
})

self.addEventListener("fetch", async (event) => {
  console.log(`Handling fetch event for ${event.request.url}`);

  let idParts = event.request.url.split('/downloadFile/');
  if (!idParts[1]) return null;

  idParts = idParts[1].split('/');
  const isVideo = (idParts[0] === 'video');
  const id = idParts.pop();

  let streamInfo;

  if (isVideo) {

    function waitForResponse() {
      let range = event.request.headers.get('Range');
      let start, end;
      console.log(`new video request range: ${range}`);
      range = range.split('=')[1].split('-');
      start = parseInt(range[0]);
      end = range[1];
      console.log(`new video request range start: ${start} end: ${end}`);

      function getStreamInfo(client) {
        return new Promise(resolve => {
          let streamInfo = videoStreams[id];
          if (streamInfo) {
            resolve(streamInfo);
          } else {
            // Send a message to the client.
            client.postMessage({
              type: "STREAM_NOT_FOUND",
              id,
              start
            });

            let target = new EventTarget();
            streamWaitingList[id] = {
              target
            }
            target.addEventListener("STREAM_AVAILABLE", async (e) => {
              console.log("STREAM_AVAILABLE: ", e.detail);
              resolve(e.detail);
            });
          }
        })
      }

      return new Promise(async (resolve, reject) => {
        console.log("waitForStream");
        let client;
        client = await self.clients.get(event.clientId)
        console.log("client: ", client);

        streamInfo = await getStreamInfo(client);

        if (streamInfo) {
          let fileName = encodeURIComponent(streamInfo.fileName).replace(/['()]/g).replace(/\*/g, '%2A')
          let fileSize = streamInfo.fileSize;
          let fileType = streamInfo.fileType;

          let timeOut = streamInfo.timeOut;
          if (timeOut) clearTimeout(timeOut);

          let chunkIndex = Math.floor(start / videoChunkSize);
          if (end === "") {
            if (!streamInfo.twoBytesSent) {
              end = start + 1;
              streamInfo.twoBytesSent = true;
            } else {
              end = start + (chunkIndex + 1) * videoChunkSize - 1;
            }
          } else {
            end = parseInt(end);
          }

          if (end >= fileSize) {
            end = fileSize - 1;
          }

          const waitForResult = () => {
            function responseFromDBResult(result) {
              let responseData, response;
              if (end < (chunkIndex + 1) * videoChunkSize - 1) {
                responseData = result.dataInBinary.substring(start % videoChunkSize, end % videoChunkSize + 1)
              } else {
                responseData = result.dataInBinary.substring(start % videoChunkSize);
                end = (chunkIndex + 1) * videoChunkSize - 1;
              }
              let headers = {
                'Content-Type': fileType || 'application/octet-stream; charset=utf-8',
              }
              headers['Accept-Ranges'] = 'bytes';
              headers['Content-Range'] = `bytes ${start}-${end}/${fileSize}`;
              headers['Content-Length'] = responseData.length;
              console.log("Response Content-Range: ", headers['Content-Range']);

              let responseHeader = {
                status: 206,
                statusText: 'OK',
                headers
              };

              let responseDataInUint8Arrary = new Uint8Array(responseData.length);
              for (let i = 0; i < responseData.length; i++) {
                responseDataInUint8Arrary[i] = responseData.charCodeAt(i);
              }
              response = new Response(responseDataInUint8Arrary, responseHeader);
              return response;
            }

            return new Promise(async (resolve) => {
              let numberOfChunks = streamInfo.numberOfChunks;
              let result = await getChunkFromDB(id, chunkIndex);
              if (result) {
                let response = responseFromDBResult(result);
                resolve(response);
              } else {
                console.log(`chunkIndex: ${chunkIndex} not in DB`);
                if (chunkIndex !== streamInfo.requestedChunkIndex) {
                  console.log(`chunkIndex: ${chunkIndex} becomes next chunk`);

                  if (streamInfo.requestedChunkIndex < 0) {
                    console.log("service worker onfetch: requestedChunkIndex < 0 ");
                    let port = streamInfo.port;
                    port.postMessage({ type: "NEXT_CHUNK", nextChunkIndex: chunkIndex });
                    streamInfo.requestedChunkIndex = chunkIndex;

                    let nextChunkIndex = await findNextChunkToDownload(id, numberOfChunks, chunkIndex + 1)
                    streamInfo.nextChunkIndex = nextChunkIndex;
                  } else {
                    streamInfo.jumpToChunk = chunkIndex;
                  }
                }

                let eventTarget = new EventTarget();
                eventTarget.addEventListener("CHUNK_AVAILABLE", async (e) => {
                  console.log("CHUNK_AVAILABLE: ", chunkIndex);
                  let result = await getChunkFromDB(id, chunkIndex);
                  let response = responseFromDBResult(result);
                  resolve(response);
                });

                console.log(`Add eventTarget for chunkIndex: ${chunkIndex}`)

                if (!streamInfo.chunksInfo[chunkIndex]) {
                  streamInfo.chunksInfo[chunkIndex] = {
                    pendingFetches: [eventTarget],
                  }
                } else {
                  let pendingFetches = streamInfo.chunksInfo[chunkIndex].pendingFetches;
                  if (pendingFetches) {
                    pendingFetches.push(eventTarget);
                  } else {
                    pendingFetches = [eventTarget];
                  }
                  streamInfo.chunksInfo[chunkIndex].pendingFetches = pendingFetches;
                }
              }
              /*timeOut = setTimeout(()=> {
                streamInfo.nextChunkIndex = -99998;
              }, 3000);
              streamInfo.timeOut = timeOut;*/
            });

          }

          try {
            let result = await waitForResult();
            resolve(result);
          } catch (error) {
            reject();
          }
        }
      })
    }

    event.respondWith(waitForResponse());

  } else {
    streamInfo = streams[id];

    if (!streamInfo) {
      return null;
    }

    let fileName = encodeURIComponent(streamInfo.fileName).replace(/['()]/g).replace(/\*/g, '%2A')
    let fileSize = streamInfo.fileSize;
    let fileType = streamInfo.fileType;

    let headers = {
      'Content-Type': fileType || 'application/octet-stream; charset=utf-8',
      'Content-Disposition': "attachment; filename*=UTF-8''" + fileName,
      'Content-Length': fileSize,
      //'Content-Security-Policy': "default-src 'none'",
      //'X-Content-Security-Policy': "default-src 'none'",
      //'X-WebKit-CSP': "default-src 'none'",
      //'X-XSS-Protection': '1; mode=block'
    }

    var responseHeader = {
      // status/statusText default to 200/OK, but we're explicitly setting them here.
      status: 200,
      statusText: 'OK',
      headers
    };

    var response = new Response(streamInfo.stream, responseHeader);
    event.respondWith(response);

  }

});
