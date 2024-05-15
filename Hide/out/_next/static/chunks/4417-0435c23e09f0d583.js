"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4417],{88255:function(e,r,a){a.d(r,{Z:function(){return o}});var n=a(85893),s=a(67294),t=a(35005),l=a(91820),i=a(38712),c=a.n(i),d=a(49486);function o(e){let{forcedType:r=null,addAnItem:a,pageOnly:i=!1}=e,[o,u]=(0,s.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.Z,{variant:"primary",className:c().btnCircle,onClick:()=>{r?a(r,"addAnItemOnTop"):u(!0)},children:(0,n.jsx)("i",{id:"1",className:"fa fa-plus fa-lg","aria-hidden":"true"})}),(0,n.jsx)(l.Z,{pageOnly:i,show:o,handleClose:()=>u(!1),optionSelected:e=>{(0,d.qu)(!1,e),u(!1),a(e,"addAnItemOnTop")}})]})}},88160:function(e,r,a){a.d(r,{Z:function(){return d}});var n=a(85893),s=a(67294),t=a(32171),l=a(35005),i=a(13137),c=a(49486);function d(e){let{show:r=!1,handleClose:a,handleCreateANewItem:d}=e;(0,c.qu)(!1,"Rendering NewItemModal: ","".concat(r,"}"));let o=(0,s.useRef)(null);return(0,n.jsx)(t.Z,{show:r,onHide:a,onEntered:()=>{o.current.focus()},children:(0,n.jsxs)(t.Z.Body,{children:[(0,n.jsx)("h3",{children:"Title"}),(0,n.jsx)(i.Z.Control,{ref:o,size:"lg",type:"text"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(l.Z,{variant:"primary",onClick:()=>{d(o.current.value)},className:"pull-right",children:"Create"}),(0,n.jsx)(l.Z,{variant:"secondary",onClick:a,className:"pull-right",children:"Close"})]})})}},32405:function(e,r,a){a.d(r,{Z:function(){return E}});var n=a(85893),s=a(67294),t=a(9473),l=a(11163),i=a(41664),c=a.n(i),d=a(10682),o=a(34051),u=a(31555),h=a(35005),f=a(13137),x=a(76515),j=a(52686),m=a(38712),g=a.n(m),p=a(88255),v=a(88160),Z=a(77280),N=a(49541),b=a(51892),y=a(24638),C=a(49411),w=a(49486);let k=-1!=="hide;default;".indexOf("hide");function E(e){let{readyToList:r=!1}=e;(0,w.qu)(!1,"Rendering Workspace");let a=(0,l.useRouter)(),i=(0,t.I0)(),m=(0,t.v9)(e=>e.container.workspace),E=(0,t.v9)(e=>e.container.workspaceKey),I=(0,t.v9)(e=>e.container.workspaceKeyReady),R=(0,t.v9)(e=>e.container.searchKey),S=(0,t.v9)(e=>e.container.searchIV),D=(0,t.v9)(e=>e.container.container),T=(0,t.v9)(e=>e.container.mode),A=(0,t.v9)(e=>e.container.listingDone),[B,q]=(0,s.useState)(""),H=(0,t.v9)(e=>e.container.items),O=(0,t.v9)(e=>e.container.newItem),$=(0,t.v9)(e=>e.container.pageNumber),P=(0,t.v9)(e=>e.container.itemsPerPage),F=(0,t.v9)(e=>e.container.total),[K,_]=(0,s.useState)(null),[z,L]=(0,s.useState)(null),[W,G]=(0,s.useState)(null),[V,J]=(0,s.useState)(null),[M,Y]=(0,s.useState)(!1),Q=(e,r,a,n)=>{(0,w.qu)(!1,"".concat(e," ").concat(r," ").concat(a," ").concat(n)),X(e,r,a,n)},U=H.map((e,r)=>(0,n.jsx)(Z.Z,{itemIndex:r,item:e,onAdd:Q},r)),X=function(e,r){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;_(e),L(r),G(a),J(n),Y(!0)},ee=async e=>{(0,w.qu)(!1,"createANewItem",e),Y(!1),i((0,y.Ag)({titleStr:e,currentContainer:m,selectedItemType:K,addAction:z,targetItem:W,targetPosition:V,workspaceKey:E,searchKey:R,searchIV:S}))},er=e=>{e.preventDefault(),i((0,y.zs)({searchValue:B,pageNumber:1}))},ea=e=>{let{pageNumber:r=1,searchMode:a}=e,n=a||T;"listAll"===n?i((0,y.bZ)({pageNumber:r})):"search"===n&&i((0,y.zs)({searchValue:B,pageNumber:r}))};return(0,s.useEffect)(()=>{let e=(e,r)=>{let{shallow:a}=r;console.log("App is changing to ".concat(e," ").concat(a?"with":"without"," shallow routing")),i((0,y.No)(!1)),i((0,C.JG)()),i((0,C.rs)()),i((0,y.H5)())},r=()=>{(0,w.qu)(!1,"handleRouteChangeComplete")};return a.events.on("routeChangeStart",e),a.events.on("routeChangeComplete",r),()=>{a.events.off("routeChangeStart",e),a.events.off("routeChangeComplete",r)}},[]),(0,s.useEffect)(()=>{if((0,w.qu)(!1,"workspaceKeyReady: ".concat(I," ")),r&&m&&I&&"root"===D&&((0,w.qu)(!1,"listItemsThunk"),i((0,C.df)()),i((0,C.rs)()),!k)){let e=[{_id:m}];i((0,C.rJ)(e)),i((0,y.bZ)({pageNumber:1}))}},[r,D,m,I]),(0,s.useEffect)(()=>{if(O){let e=(0,b.vp)(O,!0);i((0,y.Ej)()),a.push(e)}},[O]),(0,n.jsxs)(d.Z,{className:g().container,children:[k&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),(0,n.jsx)(o.Z,{hidden:k,children:(0,n.jsx)(f.Z,{onSubmit:er,children:(0,n.jsxs)(x.Z,{className:"mb-3",children:[(0,n.jsx)(f.Z.Control,{size:"lg",type:"text",value:B,onChange:e=>{(0,w.qu)(!1,"search value:",e.target.value),q(e.target.value)}}),(0,n.jsx)(h.Z,{variant:"link",children:(0,n.jsx)("i",{id:"1",className:"fa fa-search fa-lg text-dark","aria-hidden":"true",onClick:er})})]})})}),(0,n.jsx)(o.Z,{className:"justify-content-center",children:(0,n.jsx)(p.Z,{forcedType:"Page",addAnItem:X})}),(0,n.jsx)(v.Z,{show:M,handleClose:()=>Y(!1),handleCreateANewItem:ee}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"search"===T&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{children:(0,n.jsx)(u.Z,{children:(0,n.jsx)(h.Z,{variant:"default",className:"".concat(g().btnCircle," pull-right"),onClick:e=>{e.preventDefault(),q(""),i((0,y.bZ)({pageNumber:1}))},children:(0,n.jsx)("i",{id:"1",className:"fa fa-times fa-lg","aria-hidden":"true"})})})}),(0,n.jsx)("br",{})]}),k&&(0,n.jsx)(o.Z,{className:"justify-content-center",children:(0,n.jsx)(u.Z,{sm:8,children:(0,n.jsxs)(j.Z,{children:[(0,n.jsx)(j.Z.Header,{children:"\uD83D\uDD30 Welcome!"}),(0,n.jsxs)(j.Z.Body,{children:[(0,n.jsx)(j.Z.Title,{children:"Instructions"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Hide"})," - Click the blue + button to hide a page full of words, videos, photos, and files."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"View"})," - You can access your hidden pages on any device with a browser. Go to bsafes.com and open your ",(0,n.jsx)("span",{style:{backgroundColor:"#990000",color:"white",fontWeight:"bold",padding:"7px"},children:"BSafes"}),"."]})]})]})]})})}),A&&"search"!==T&&0===U.length&&(0,n.jsx)(o.Z,{className:"justify-content-center",children:(0,n.jsx)(u.Z,{sm:8,children:(0,n.jsxs)(j.Z,{children:[(0,n.jsx)(j.Z.Header,{children:"\uD83D\uDD30 Welcome!"}),(0,n.jsxs)(j.Z.Body,{children:[(0,n.jsx)(j.Z.Title,{children:"Instructions"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Adding items"})," - Click on the central blue button, then select an item type."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Searching for items"})," - Enter keywords in central field, then click on search button."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Opening a new tab"})," - Click on the blue button on upper right, then select an item."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Lock"})," - Click on the Lock button on upper right."]})]})]})]})})}),U,H&&H.length>0&&(0,n.jsx)(o.Z,{children:(0,n.jsx)(u.Z,{sm:{span:10,offset:1},md:{span:8,offset:2},children:(0,n.jsx)("div",{className:"mt-4 d-flex justify-content-center",children:(0,n.jsx)(N.Z,{page:$,total:F,limit:P,changePage:e=>{ea({pageNumber:e})},ellipsis:1})})})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),!k&&m&&(0,n.jsx)(o.Z,{children:(0,n.jsx)(u.Z,{xs:12,children:(0,n.jsx)(c(),{href:"/trashBox/"+m,legacyBehavior:!0,children:(0,n.jsx)(h.Z,{variant:"light",className:"pull-right border-0 shadow-none",children:(0,n.jsx)("i",{className:"fa fa-5x fa-trash","aria-hidden":"true"})})})})})]})}},2086:function(e,r,a){var n=a(94184),s=a.n(n),t=a(67294),l=a(76792),i=a(85893);let c=t.forwardRef(({bsPrefix:e,size:r,vertical:a=!1,className:n,role:t="group",as:c="div",...d},o)=>{let u=(0,l.vE)(e,"btn-group"),h=u;return a&&(h=`${u}-vertical`),(0,i.jsx)(c,{...d,ref:o,role:t,className:s()(n,h,r&&`${u}-${r}`)})});c.displayName="ButtonGroup",r.Z=c},52686:function(e,r,a){a.d(r,{Z:function(){return b}});var n=a(94184),s=a.n(n),t=a(67294),l=a(76792),i=a(85893);let c=t.forwardRef(({className:e,bsPrefix:r,as:a="div",...n},t)=>(r=(0,l.vE)(r,"card-body"),(0,i.jsx)(a,{ref:t,className:s()(e,r),...n})));c.displayName="CardBody";let d=t.forwardRef(({className:e,bsPrefix:r,as:a="div",...n},t)=>(r=(0,l.vE)(r,"card-footer"),(0,i.jsx)(a,{ref:t,className:s()(e,r),...n})));d.displayName="CardFooter";var o=a(49059);let u=t.forwardRef(({bsPrefix:e,className:r,as:a="div",...n},c)=>{let d=(0,l.vE)(e,"card-header"),u=(0,t.useMemo)(()=>({cardHeaderBsPrefix:d}),[d]);return(0,i.jsx)(o.Z.Provider,{value:u,children:(0,i.jsx)(a,{ref:c,...n,className:s()(r,d)})})});u.displayName="CardHeader";let h=t.forwardRef(({bsPrefix:e,className:r,variant:a,as:n="img",...t},c)=>{let d=(0,l.vE)(e,"card-img");return(0,i.jsx)(n,{ref:c,className:s()(a?`${d}-${a}`:d,r),...t})});h.displayName="CardImg";let f=t.forwardRef(({className:e,bsPrefix:r,as:a="div",...n},t)=>(r=(0,l.vE)(r,"card-img-overlay"),(0,i.jsx)(a,{ref:t,className:s()(e,r),...n})));f.displayName="CardImgOverlay";let x=t.forwardRef(({className:e,bsPrefix:r,as:a="a",...n},t)=>(r=(0,l.vE)(r,"card-link"),(0,i.jsx)(a,{ref:t,className:s()(e,r),...n})));x.displayName="CardLink";var j=a(39602);let m=(0,j.Z)("h6"),g=t.forwardRef(({className:e,bsPrefix:r,as:a=m,...n},t)=>(r=(0,l.vE)(r,"card-subtitle"),(0,i.jsx)(a,{ref:t,className:s()(e,r),...n})));g.displayName="CardSubtitle";let p=t.forwardRef(({className:e,bsPrefix:r,as:a="p",...n},t)=>(r=(0,l.vE)(r,"card-text"),(0,i.jsx)(a,{ref:t,className:s()(e,r),...n})));p.displayName="CardText";let v=(0,j.Z)("h5"),Z=t.forwardRef(({className:e,bsPrefix:r,as:a=v,...n},t)=>(r=(0,l.vE)(r,"card-title"),(0,i.jsx)(a,{ref:t,className:s()(e,r),...n})));Z.displayName="CardTitle";let N=t.forwardRef(({bsPrefix:e,className:r,bg:a,text:n,border:t,body:d=!1,children:o,as:u="div",...h},f)=>{let x=(0,l.vE)(e,"card");return(0,i.jsx)(u,{ref:f,...h,className:s()(r,x,a&&`bg-${a}`,n&&`text-${n}`,t&&`border-${t}`),children:d?(0,i.jsx)(c,{children:o}):o})});N.displayName="Card";var b=Object.assign(N,{Img:h,Title:Z,Subtitle:g,Body:c,Link:x,Text:p,Header:u,Footer:d,ImgOverlay:f})}}]);