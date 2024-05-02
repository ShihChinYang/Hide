window.bsafesFroala ={
    name: "abc",
}

export function bSafesPreflight(fn) {
    window.bsafesFroala.bSafesPreflight(fn);
}

export function rotateImage(link, exifOrientation, callback) {
    window.bsafesFroala.rotateImage(link, exifOrientation, callback);
}

export function convertUint8ArrayToBinaryString(u8Array) {
    return window.bsafesFroala.convertUint8ArrayToBinaryString(u8Array);
}

export function compareArraryBufferAndUnit8Array(thisBuffer, thisArray) {
    return window.bsafesFroala.compareArraryBufferAndUnit8Array(thisBuffer, thisArray);
}

export function encryptBinaryString(binaryString, key) {
    return window.bsafesFroala.encryptBinaryString(binaryString, key);
}

export function encryptLargeBinaryString(binaryStr, itemKey, itemIV) {
    return window.bsafesFroala.encryptLargeBinaryString(binaryStr, itemKey, itemIV);
}

export function encryptChunkBinaryStringToBinaryStringAsync(arrayBuffer, key) {
    return window.bsafesFroala.encryptChunkBinaryStringToBinaryStringAsync(arrayBuffer, key);
}

export function preS3Upload() {
    return  window.bsafesFroala.preS3Upload();
}

export function preS3ChunkUpload(itemId, chunkIndex, timeStamp){
    return window.bsafesFroala.preS3ChunkUpload(itemId, chunkIndex, timeStamp);
}

export function uploadData(data, s3Key, signedURL, onProgress) {
    return window.bsafesFroala.uploadData(data, s3Key, signedURL, onProgress);    
}

export function getBrowserInfo() {
    return window.bsafesFroala.getBrowserInfo();
}

export function arraryBufferToStr(arrayBuffer) {
    return window.bsafesFroala.arraryBufferToStr(arrayBuffer);
}

export function getEditorConfig() {
    return window.bsafesFroala.getEditorConfig();
}