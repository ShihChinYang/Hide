(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4442],{82657:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/box/contents/[itemId]",function(){return t(59580)}])},88255:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(85893),s=t(67294),c=t(35005),r=t(91820),i=t(38712),l=t.n(i),o=t(49486);function u(e){let{forcedType:n=null,addAnItem:t,pageOnly:i=!1}=e,[u,d]=(0,s.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{variant:"primary",className:l().btnCircle,onClick:()=>{n?t(n,"addAnItemOnTop"):d(!0)},children:(0,a.jsx)("i",{id:"1",className:"fa fa-plus fa-lg","aria-hidden":"true"})}),(0,a.jsx)(r.Z,{pageOnly:i,show:u,handleClose:()=>d(!1),optionSelected:e=>{(0,o.qu)(!1,e),d(!1),t(e,"addAnItemOnTop")}})]})}},59580:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var a=t(85893),s=t(67294),c=t(11163),r=t(9473),i=t(34051),l=t(31555),o=t(38712),u=t.n(o),d=t(31243),h=t(32132),m=t(69563),x=t(77280),f=t(88255),j=t(88160),p=t(49541),g=t(24638);t(49411);var v=t(49486),b=t(51892);function N(){(0,v.qu)(!1,"Rendering Contents");let e=(0,r.I0)(),n=(0,c.useRouter)(),[t,o]=(0,s.useState)(null),[N,Z]=(0,s.useState)(null),[C,I]=(0,s.useState)(null),[w,y]=(0,s.useState)(null),[_,S]=(0,s.useState)(!1),[k,A]=(0,s.useState)(null),E=(0,r.v9)(e=>e.container.container),P=(0,r.v9)(e=>e.container.mode),q=(0,r.v9)(e=>e.container.items),O=(0,r.v9)(e=>e.container.newItem),T=(0,r.v9)(e=>e.container.pageNumber),G=(0,r.v9)(e=>e.container.itemsPerPage),K=(0,r.v9)(e=>e.container.total),V=(0,r.v9)(e=>e.container.workspaceKey),z=(0,r.v9)(e=>e.container.searchKey),F=(0,r.v9)(e=>e.container.searchIV),R=(e,n,t,a)=>{(0,v.qu)(!1,"".concat(e," ").concat(n," ").concat(t," ").concat(a)),B(e,n,t,a)},X=q.map((e,n)=>(0,a.jsx)(i.Z,{children:(0,a.jsx)(l.Z,{lg:{span:10,offset:1},children:(0,a.jsx)(x.Z,{itemIndex:n,item:e,onAdd:R})})},n)),B=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;o(e),Z(n),I(t),y(a),S(!0)},D=async()=>{try{let t=await (0,g.Nl)(E,e);t&&n.push("/".concat(t))}catch(e){alert("Could not get the first item in the container")}},L=async()=>{try{let t=await (0,g.DG)(E,e);t&&n.push("/".concat(t))}catch(e){alert("Could not get the first item in the container")}},H=async n=>{(0,v.qu)(!1,"createANewItem",n),S(!1),e((0,g.Ag)({titleStr:n,currentContainer:E,selectedItemType:t,addAction:N,targetItem:C,targetPosition:w,workspaceKey:V,searchKey:z,searchIV:F}))},J=n=>{let{pageNumber:t=1,searchMode:a}=n,s=a||P;"listAll"===s?e((0,g.bZ)({pageNumber:t})):"search"===s&&e((0,g.zs)({searchValue:k,pageNumber:t}))};return(0,s.useEffect)(()=>{if(O){let t=(0,b.vp)(O,!0);e((0,g.Ej)()),n.push(t)}},[O]),(0,a.jsx)("div",{className:u().pageBackground,children:(0,a.jsx)(d.Z,{children:(0,a.jsxs)(h.Z,{itemId:n.query.itemId,children:[(0,a.jsx)("br",{}),(0,a.jsx)(m.Z,{onCoverClicked:()=>{let e="/box/".concat(E);n.push(e)},onGotoFirstItem:D,onGotoLastItem:L,onSubmitSearch:n=>{A(n),e((0,g.zs)({searchValue:n,pageNumber:1}))},onCancelSearch:()=>{e((0,g.bZ)({pageNumber:1}))}}),(0,a.jsx)("br",{}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(l.Z,{lg:{span:10,offset:1},children:(0,a.jsxs)("div",{className:"".concat(u().pagePanel," ").concat(u().boxPanel),children:[(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{className:"fs-1 text-center",children:"Contents"}),(0,a.jsx)(i.Z,{className:"justify-content-center",children:(0,a.jsx)(f.Z,{addAnItem:B})}),(0,a.jsx)(j.Z,{show:_,handleClose:()=>S(!1),handleCreateANewItem:H}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),X,q&&q.length>0&&K>G&&(0,a.jsx)(i.Z,{children:(0,a.jsx)(l.Z,{sm:{span:10,offset:1},md:{span:8,offset:2},children:(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)(p.Z,{page:T,total:K,limit:G,changePage:e=>{J({pageNumber:e})},ellipsis:1})})})})]})})})]})})})}}},function(e){e.O(0,[6760,1664,6743,1243,9706,9840,9774,2888,179],function(){return e(e.s=82657)}),_N_E=e.O()}]);