(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4271],{94044:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(67294),s=a(6454),r=a(76852);let i=2147483648-1;function o(){let e=(0,s.Z)(),t=(0,n.useRef)();return(0,r.Z)(()=>clearTimeout(t.current)),(0,n.useMemo)(()=>{let a=()=>clearTimeout(t.current);return{set:function(n,s=0){e()&&(a(),s<=i?t.current=setTimeout(n,s):function e(t,a,n){let s=n-Date.now();t.current=s<=i?setTimeout(a,s):setTimeout(()=>e(t,a,n),i)}(t,n,Date.now()+s))},clear:a}},[])}},51958:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/diary/contents/[itemId]",function(){return a(56556)}])},93530:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(85893),s=a(67294),r=a(35005),i=a(35015),o=a(72021),l=a(38712),c=a.n(l);function d(e){let{onNextClicked:t,onPreviousClicked:a,cover:l=!1,showAlert:d=!1,alertClosed:u=null}=e,[f,m]=(0,s.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{className:"".concat(c().previousPageBtn," ").concat(l?c().coverBtnFixed:c().pageBtnFixed),onClick:()=>{m(!1),a()},children:(0,n.jsx)("i",{className:"fa fa-chevron-left fa-lg","aria-hidden":"true"})}),(0,n.jsx)(r.Z,{className:"".concat(c().nextPageBtn," ").concat(l?c().coverBtnFixed:c().pageBtnFixed," pull-right"),onClick:()=>{m(!1),t()},children:(0,n.jsx)("i",{className:"fa fa-chevron-right fa-lg","aria-hidden":"true"})}),(0,n.jsx)(o.Z,{className:"p-3",position:l?"top-center":"middle-center",style:{zIndex:1e4},children:(0,n.jsxs)(i.Z,{show:d&&!f,onClose:()=>{m(!0),u()},bg:"warning",children:[(0,n.jsxs)(i.Z.Header,{children:[(0,n.jsx)("strong",{className:"me-auto",children:"Alert"}),(0,n.jsx)("small",{})]}),(0,n.jsx)(i.Z.Body,{children:"Hello, your have reached the end."})]})})]})}},56556:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var n=a(85893),s=a(67294),r=a(9473),i=a(11163),o=a(34051),l=a(31555),c=a(42298),d=a(38712),u=a.n(d),f=a(31243),m=a(32132),h=a(61926),x=a(45289),p=a(93530),g=a(49541),j=a(24638);a(49411);var y=a(49486);function v(){(0,y.qu)(!1,"Rendering Contents");let e=(0,r.I0)(),t=(0,i.useRouter)(),[a,d]=(0,s.useState)(null),v=(0,r.v9)(e=>e.page.space),N=(0,r.v9)(e=>e.container.mode),Z=(0,r.v9)(e=>e.container.container),b=(0,r.v9)(e=>e.container.startDateValue),[w,C]=(0,s.useState)(new Date(b)),E=(0,r.v9)(e=>e.container.diaryContentsPageFirstLoaded),P=(0,r.v9)(e=>e.container.items),k=(0,r.v9)(e=>e.container.pageNumber),D=(0,r.v9)(e=>e.container.itemsPerPage),T=(0,r.v9)(e=>e.container.total),_=(0,r.v9)(e=>e.container.workspaceKeyReady),L=(0,r.v9)(e=>e.page.id),[R,B]=(0,s.useState)([]),F=(0,c.default)(w,"MMM. yyyy"),I=R.map((e,t)=>(0,n.jsx)(x.Z,{itemIndex:t,item:e,mode:N},t)),M=t=>{let{pageNumber:n=1,searchMode:s}=t;"search"===(s||N)&&e((0,j.zs)({searchValue:a,pageNumber:n}))};return(0,s.useEffect)(()=>{!E&&((0,y.qu)(!1,"startDate changed:",(0,c.default)(w,"yyyyLL")),B([]),_&&Z&&((0,y.qu)(!1,"startDate changed -> list items"),e((0,j.bZ)({startDate:(0,c.default)(w,"yyyyLL")}))))},[w]),(0,s.useEffect)(()=>{if(!L||!v||!_)return;if((0,y.qu)(!1,"itemsState changed:"),"search"===N){B(P);return}let e=w.getFullYear(),t=w.getMonth(),a=new Date(e,t+1,0).getDate(),n=[],s=0;for(let r=0;r<a;r++){let a,i;for(a=parseInt((0,c.default)(new Date(e,t,r+1),"yyyyLLdd")),i=s;i<P.length;i++)if(P[i].itemPack.pageNumber===a){n.push(P[i]),s=i+1;break}if(i===P.length){let s={id:L.replace("d:","dp:")+":"+(0,c.default)(new Date(e,t,r+1),"yyyy-LL-dd"),title:"",itemPack:{pageNumber:a}};n.push(s)}}B(n)},[P]),(0,n.jsx)("div",{className:u().pageBackground,children:(0,n.jsx)(f.Z,{children:(0,n.jsxs)(m.Z,{itemId:t.query.itemId,children:[(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{startDate:w,setStartDate:C,onCoverClicked:()=>{t.push("/diary/".concat(L))},onSubmitSearch:t=>{d(t),e((0,j.zs)({searchValue:t,pageNumber:1}))},onCancelSearch:()=>{e((0,j.bZ)({startDate:(0,c.default)(w,"yyyyLL")}))},datePickerViewMode:"monthYear",showSearchIcon:!0}),(0,n.jsx)("br",{}),(0,n.jsx)(o.Z,{children:(0,n.jsx)(l.Z,{lg:{span:10,offset:1},children:(0,n.jsxs)("div",{className:"".concat(u().pagePanel," ").concat(u().diaryPanel),children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{className:"fs-1 text-center",children:F}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(l.Z,{xs:{span:2,offset:1},sm:{span:2,offset:1},xl:{span:1,offset:1},children:(0,n.jsx)("p",{className:"fs-5",children:"Day"})}),(0,n.jsx)(l.Z,{xs:8,sm:8,xl:9,children:(0,n.jsx)("p",{className:"fs-5",children:"Title"})})]}),(0,n.jsx)(o.Z,{children:(0,n.jsx)(l.Z,{xs:{span:10,offset:1},children:(0,n.jsx)("hr",{className:"mt-1 mb-1"})})}),I,"search"===N&&P&&P.length>0&&T>D&&(0,n.jsx)(o.Z,{children:(0,n.jsx)(l.Z,{sm:{span:10,offset:1},md:{span:8,offset:2},children:(0,n.jsx)("div",{className:"mt-4 d-flex justify-content-center",children:(0,n.jsx)(g.Z,{page:k,total:T,limit:D,changePage:e=>{M({pageNumber:e})},ellipsis:1})})})})]})})}),(0,n.jsx)(p.Z,{onNextClicked:()=>{(0,y.qu)(!1,"Next Page "),C(new Date(w.getFullYear(),w.getMonth()+1,1))},onPreviousClicked:()=>{(0,y.qu)(!1,"Previous Page "),C(new Date(w.getFullYear(),w.getMonth()-1,1))}})]})})})}},35015:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var n=a(67294),s=a(94184),r=a.n(s),i=a(94044),o=a(16592),l=a(41068),c=a(85893);let d={[o.d0]:"showing",[o.Ix]:"showing show"},u=n.forwardRef((e,t)=>(0,c.jsx)(l.Z,{...e,ref:t,transitionClasses:d}));u.displayName="ToastFade";var f=u,m=a(78146),h=a(76792),x=a(41485);let p=n.createContext({onClose(){}}),g=n.forwardRef(({bsPrefix:e,closeLabel:t="Close",closeVariant:a,closeButton:s=!0,className:i,children:o,...l},d)=>{e=(0,h.vE)(e,"toast-header");let u=(0,n.useContext)(p),f=(0,m.Z)(e=>{null==u||null==u.onClose||u.onClose(e)});return(0,c.jsxs)("div",{ref:d,...l,className:r()(e,i),children:[o,s&&(0,c.jsx)(x.Z,{"aria-label":t,variant:a,onClick:f,"data-dismiss":"toast"})]})});g.displayName="ToastHeader";let j=n.forwardRef(({className:e,bsPrefix:t,as:a="div",...n},s)=>(t=(0,h.vE)(t,"toast-body"),(0,c.jsx)(a,{ref:s,className:r()(e,t),...n})));j.displayName="ToastBody";let y=n.forwardRef(({bsPrefix:e,className:t,transition:a=f,show:s=!0,animation:o=!0,delay:l=5e3,autohide:d=!1,onClose:u,onEntered:m,onExit:x,onExiting:g,onEnter:j,onEntering:y,onExited:v,bg:N,...Z},b)=>{e=(0,h.vE)(e,"toast");let w=(0,n.useRef)(l),C=(0,n.useRef)(u);(0,n.useEffect)(()=>{w.current=l,C.current=u},[l,u]);let E=(0,i.Z)(),P=!!(d&&s),k=(0,n.useCallback)(()=>{P&&(null==C.current||C.current())},[P]);(0,n.useEffect)(()=>{E.set(k,w.current)},[E,k]);let D=(0,n.useMemo)(()=>({onClose:u}),[u]),T=!!(a&&o),_=(0,c.jsx)("div",{...Z,ref:b,className:r()(e,t,N&&`bg-${N}`,!T&&(s?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,c.jsx)(p.Provider,{value:D,children:T&&a?(0,c.jsx)(a,{in:s,onEnter:j,onEntering:y,onEntered:m,onExit:x,onExiting:g,onExited:v,unmountOnExit:!0,children:_}):_})});y.displayName="Toast";var v=Object.assign(y,{Body:j,Header:g})},72021:function(e,t,a){"use strict";var n=a(94184),s=a.n(n),r=a(67294),i=a(76792),o=a(85893);let l={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},c=r.forwardRef(({bsPrefix:e,position:t,containerPosition:a,className:n,as:r="div",...c},d)=>(e=(0,i.vE)(e,"toast-container"),(0,o.jsx)(r,{ref:d,...c,className:s()(e,t&&l[t],a&&`position-${a}`,n)})));c.displayName="ToastContainer",t.Z=c}},function(e){e.O(0,[6760,6743,9198,1243,4856,8370,9774,2888,179],function(){return e(e.s=51958)}),_N_E=e.O()}]);