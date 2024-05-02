"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9706],{88160:function(e,t,a){a.d(t,{Z:function(){return o}});var s=a(85893),n=a(67294),i=a(32171),r=a(35005),l=a(13137),c=a(49486);function o(e){let{show:t=!1,handleClose:a,handleCreateANewItem:o}=e;(0,c.qu)(!1,"Rendering NewItemModal: ","".concat(t,"}"));let u=(0,n.useRef)(null);return(0,s.jsx)(i.Z,{show:t,onHide:a,onEntered:()=>{u.current.focus()},children:(0,s.jsxs)(i.Z.Body,{children:[(0,s.jsx)("h3",{children:"Title"}),(0,s.jsx)(l.Z.Control,{ref:u,size:"lg",type:"text"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(r.Z,{variant:"primary",onClick:()=>{o(u.current.value)},className:"pull-right",children:"Create"}),(0,s.jsx)(r.Z,{variant:"secondary",onClick:a,className:"pull-right",children:"Close"})]})})}},32132:function(e,t,a){var s=a(85893),n=a(67294),i=a(11163),r=a(9473),l=a(39332),c=a(10682),o=a(42298),u=a(38712),h=a.n(u),d=a(24638),f=a(49411),m=a(49486);t.Z=e=>{let{itemId:t,children:a}=e,u=(0,r.I0)(),p=(0,i.useRouter)(),g=(0,l.useSearchParams)(),[x,v]=(0,n.useState)(!1),j=(0,r.v9)(e=>e.auth.accountVersion),k=(0,r.v9)(e=>e.auth.isLoggedIn),N=(0,r.v9)(e=>e.auth.searchKey),Z=(0,r.v9)(e=>e.auth.searchIV),C=(0,r.v9)(e=>e.auth.expandedKey),w=(0,r.v9)(e=>e.container.navigationInSameContainer),I=(0,r.v9)(e=>e.container.container),y=(0,r.v9)(e=>e.container.workspace),P=(0,r.v9)(e=>e.container.workspaceKey),b=(0,r.v9)(e=>e.container.workspaceKeyReady),q=(0,r.v9)(e=>e.container.startDateValue),[E,W]=(0,n.useState)(new Date(q)),S=(0,r.v9)(e=>e.page.aborted),z=(0,r.v9)(e=>e.page.id),B=(0,r.v9)(e=>e.page.pageNumber),D=(0,r.v9)(e=>e.page.navigationMode),K=(0,r.v9)(e=>e.page.space),R=(0,r.v9)(e=>e.page.container),A=(0,r.v9)(e=>e.page.itemCopy);(0,m.qu)(!1,"aborted: ",S),(0,m.qu)(!1,"itemId: ",t),(0,m.qu)(!1,"pageItemId: ",z);let T=()=>{(0,m.qu)(!1,"Reload a page: ",t),u((0,f.cD)(!1)),u((0,d.vB)(!1)),(0,m.qu)(!1,"set pageItemId: ",p.query.itemId),u((0,f.sF)(p.query.itemId));let e=p.asPath;"contents"===(e=e.split("/")[2])&&(u((0,d.H5)()),"d"===t.split(":")[0]&&(u((0,d.Pm)(new Date().getTime())),u((0,d.p8)(!1))))};return(0,n.useEffect)(()=>{(0,m.qu)(!1,"pageItemWrapper useEffect, []");let e=(e,t)=>{let{shallow:a}=t;console.log("App is changing to ".concat(e," ").concat(a?"with":"without"," shallow routing")),u((0,f.JG)()),u((0,f.rs)()),u((0,d.H5)())},t=()=>{(0,m.qu)(!1,"handleRouteChangeComplete - initPage"),u((0,f.df)())};return p.events.on("routeChangeStart",e),p.events.on("routeChangeComplete",t),()=>{(0,m.qu)(!1,"pageItemWrapper events.off"),p.events.off("routeChangeStart",e),p.events.off("routeChangeComplete",t)}},[]),(0,n.useEffect)(()=>{(0,m.qu)(!1,"initPage"),u((0,f.df)())},[t]),(0,n.useEffect)(()=>{(0,m.qu)(!1,"".concat(k,", ").concat(t,", ").concat(z)),k&&t&&!z&&!S&&T()},[k,t,z,S]),(0,n.useEffect)(()=>{if(z){let e=g.get("version");(0,m.qu)(!1,"Dispatch getPageItemThunk ...");let t={itemId:z,navigationInSameContainer:w};e&&(t.version=parseInt(e)),u((0,f.Ed)(t))}},[z]),(0,n.useEffect)(()=>{D&&((0,m.qu)(!1,"setContainerData ..."),u((0,f.BT)({itemId:z,container:{space:y,id:I}})))},[D]),(0,n.useEffect)(()=>{B&&((0,m.qu)(!1,"pageNumber: ",B),B%2?u((0,f.ml)(h().leftPagePanel)):u((0,f.ml)(h().rightPagePanel)))},[B]),(0,n.useEffect)(()=>{if(K){let e=p.asPath;if("contents"!==(e=e.split("/")[2])&&R===I){u((0,d.vB)(!0));return}if("contents"===e&&K===y){z!==I&&u((0,d.ef)({container:z})),u((0,d.vB)(!0));return}if(K===y){R!==I&&u((0,d.ef)({container:R})),u((0,d.vB)(!0));return}u((0,d.k_)()),v(!0)}},[K]),(0,n.useEffect)(()=>{if(x){let e=p.asPath;if(e=e.split("/")[2],"u"===K.substring(0,1))(0,m.qu)(!1,"Dispatch initWorkspace ..."),"contents"!==e?u((0,d.XZ)({container:R,workspaceId:K,workspaceKey:C,searchKey:N,searchIV:Z})):u((0,d.XZ)({container:z,workspaceId:K,workspaceKey:C,searchKey:N,searchIV:Z})),u((0,d.vB)(!0));else{let t;t="v1"===j?K.substring(0,K.length-4):K,"contents"!==e?u((0,d.VM)({teamId:t,container:R})):u((0,d.VM)({teamId:t,container:z}))}}},[x]),(0,n.useEffect)(()=>{if((0,m.qu)(!1,"useEffect [workspaceKey] ..."),!b||!A)return;let e=p.asPath;if("contents"!==(e=e.split("/")[2])&&b&&P&&A){let e=z.split(":")[0];(0,m.qu)(!1,"Dispatch decryptPageItemThunk ..."),u((0,f.t_)({itemId:z,workspaceKey:P})),"f"===e||"b"===e||"n"===e||"d"===e||u((0,f.s6)({itemId:z})),v(!1)}},[b]),(0,n.useEffect)(()=>{if((0,m.qu)(!1,"useEffect [workspaceKey] ..."),b&&z&&I&&b){let e=z.split(":")[0],t=p.asPath;"contents"===(t=t.split("/")[2])&&(v(!1),(0,m.qu)(!1,"listItemsThunk ..."),"d"!==e?u((0,d.bZ)({pageNumber:1})):(u((0,d.bZ)({startDate:(0,o.default)(E,"yyyyLL")})),u((0,d.p8)(!1))))}},[b,I]),(0,s.jsx)(c.Z,{fluid:!0,children:a})}},69563:function(e,t,a){a.d(t,{Z:function(){return N}});var s=a(85893),n=a(67294),i=a(11163),r=a(9473),l=a(34051),c=a(31555),o=a(76515),u=a(35005),h=a(2086),d=a(52686),f=a(13137),m=a(6763),p=a(38712),g=a.n(p),x=a(88160),v=a(49486),j=a(24638),k=a(51892);function N(e){let{pageNumber:t=null,onCoverClicked:a=null,onContentsClicked:p,onPageNumberChanged:N=null,onGotoFirstItem:Z=null,onGotoLastItem:C=null,onSubmitSearch:w=null,onCancelSearch:I=null}=e;(0,v.qu)(!1,"Rendering TopControlPanel:",t);let y=(0,r.I0)(),P=(0,n.useRef)(null),b=(0,n.useRef)(null),q=(0,i.useRouter)(),[E,W]=(0,n.useState)(!1),[S,z]=(0,n.useState)(""),[B,D]=(0,n.useState)(null),[K,R]=(0,n.useState)(null),[A,T]=(0,n.useState)(null),[V,F]=(0,n.useState)(null),[_,L]=(0,n.useState)(!1),M=(0,r.v9)(e=>e.page.activity),G=(0,r.v9)(e=>e.page.id),H=(0,r.v9)(e=>e.page.container),X=(0,r.v9)(e=>e.page.position),J=(0,r.v9)(e=>e.page.title),O=(0,r.v9)(e=>e.page.itemCopy),Q=(0,r.v9)(e=>e.container.activity),U=(0,r.v9)(e=>e.container.workspace),Y=(0,r.v9)(e=>e.container.newItem),$=(0,r.v9)(e=>e.container.container),ee=(0,r.v9)(e=>e.container.workspaceKey),et=(0,r.v9)(e=>e.container.searchKey),ea=(0,r.v9)(e=>e.container.searchIV),es=(0,r.v9)(e=>e.container.reloadAPage),en=(0,r.v9)(e=>e.container.itemTrashed),ei=(0,n.forwardRef)(function(e,t){let{children:a,onClick:n}=e;return(0,s.jsxs)("a",{href:"",ref:t,onClick:e=>{e.preventDefault(),n(e)},children:[(0,s.jsx)("i",{className:"fa fa-plus fa-lg text-white","aria-hidden":"true"}),a]})}),er=e=>{D("Page"),R(e),T(G),F(X),L(!0)},el=async e=>{(0,v.qu)(!1,"createANewItem",e),L(!1),y((0,j.Ag)({titleStr:e,currentContainer:$,selectedItemType:B,addAction:K,targetItem:A,targetPosition:V,workspaceKey:ee,searchKey:et,searchIV:ea}))},ec=e=>{W(!0)},eo=e=>{e.preventDefault(),w(S)};return(0,n.useEffect)(()=>{P.current&&(P.current.value=t)},[t]),(0,n.useEffect)(()=>{E&&b.current.focus()},[E]),(0,n.useEffect)(()=>{if(Y){let e=(0,k.vp)(Y,!0);y((0,j.Ej)()),q.push(e)}},[Y]),(0,n.useEffect)(()=>{es&&(y((0,j.vp)()),q.reload())},[es]),(0,n.useEffect)(()=>{en&&(y((0,j.aP)(!1)),q.push("/trashBox/"+U))},[en]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{children:(0,s.jsx)(c.Z,{xs:12,sm:{span:10,offset:1},lg:{span:8,offset:2},children:(0,s.jsx)(d.Z,{className:"".concat(g().containerControlPanel),children:(0,s.jsx)(d.Z.Body,{className:"",children:(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)(c.Z,{xs:4,children:[0===M&&0===Q&&!$&&(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",children:(0,s.jsx)("i",{className:"fa fa-square fa-lg","aria-hidden":"true"})}),0===M&&0===Q&&$&&($.startsWith("u")||$.startsWith("t"))&&(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",onClick:a,children:(0,s.jsx)("i",{className:"fa fa-square fa-lg","aria-hidden":"true"})}),0===M&&0===Q&&(t||$&&$.startsWith("n"))&&(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",onClick:a,children:(0,s.jsx)("i",{className:"fa fa-book fa-lg","aria-hidden":"true"})}),0===M&&0===Q&&$&&$.startsWith("f")&&(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",onClick:a,children:(0,s.jsx)("i",{className:"fa fa-folder-o fa-lg","aria-hidden":"true"})}),0===M&&0===Q&&$&&$.startsWith("b")&&(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",onClick:a,children:(0,s.jsx)("i",{className:"fa fa-archive fa-lg","aria-hidden":"true"})}),(t||$&&($.startsWith("n")&&!q.asPath.includes("/contents/")||$.startsWith("f")&&!q.asPath.includes("/contents/")||$.startsWith("b")&&!q.asPath.includes("/contents/")))&&(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",onClick:p,children:(0,s.jsx)("i",{className:"fa fa-list-ul fa-lg","aria-hidden":"true"})})]}),(0,s.jsxs)(c.Z,{xs:8,children:[(t||$&&$.startsWith("n"))&&(0,s.jsxs)(f.Z.Group,{className:"pull-right",children:[(0,s.jsx)(f.Z.Control,{ref:P,type:"text",defaultValue:t||"",className:"".concat(g().pageNavigationPart," ").concat(g().pageNumberInput," pt-0 pb-0")}),(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",id:"gotoPageBtn",onClick:e=>{N&&N(P.current.value)},children:(0,s.jsx)("i",{className:"fa fa-arrow-right fa-lg","aria-hidden":"true"})}),(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",id:"gotoFirstItemBtn",onClick:Z,children:(0,s.jsx)("i",{className:"fa fa-step-backward fa-lg","aria-hidden":"true"})}),(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",id:"gotoLastItemBtn",onClick:C,children:(0,s.jsx)("i",{className:"fa fa-step-forward fa-lg","aria-hidden":"true"})}),q.asPath.includes("/contents/")&&!E&&(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",onClick:ec,children:(0,s.jsx)("i",{className:"fa fa-search fa-lg","aria-hidden":"true"})})]}),$&&($.startsWith("u")||$.startsWith("t")||$.startsWith("f")||$.startsWith("b"))&&(0,s.jsxs)(h.Z,{className:"pull-right",children:[$.startsWith("f")&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",id:"gotoFirstItemBtn",onClick:Z,children:(0,s.jsx)("i",{className:"fa fa-step-backward fa-lg","aria-hidden":"true"})}),(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",id:"gotoLastItemBtn",onClick:C,children:(0,s.jsx)("i",{className:"fa fa-step-forward fa-lg","aria-hidden":"true"})})]}),G&&G.startsWith("p")&&(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(m.Z,{align:"end",className:"justify-content-end ".concat(g().mt3px),children:[(0,s.jsx)(m.Z.Toggle,{as:ei,variant:"link"}),(0,s.jsxs)(m.Z.Menu,{children:[(0,s.jsx)(m.Z.Item,{onClick:()=>er("addAnItemBefore"),children:"Add before"}),(0,s.jsx)(m.Z.Item,{onClick:()=>er("addAnItemAfter"),children:"Add after"})]})]})}),!q.asPath.includes("/contents/")&&G&&(G.startsWith("p")||G.startsWith("b")||G.startsWith("f"))&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",onClick:e=>{let t={id:G,container:H,position:X,title:J,itemPack:{type:O.type}};(0,k.dO)(G)?(t.itemPack.totalItemVersions=O.totalItemVersions,t.itemPack.totalStorage=O.totalStorage):(t.itemPack.version=O.version,t.itemPack.totalItemSize=O.usage.totalItemSize),t.fromTopControlPanel=!0,y((0,j.Gh)(t))},children:(0,s.jsx)("i",{className:"fa fa-ellipsis-v fa-lg","aria-hidden":"true"})})}),q.asPath.includes("/contents/")&&!E&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u.Z,{variant:"link",size:"sm",className:"text-white",onClick:ec,children:(0,s.jsx)("i",{className:"fa fa-search fa-lg","aria-hidden":"true"})})})]})]})]})})})})}),E&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),(0,s.jsx)(l.Z,{children:(0,s.jsx)(c.Z,{xs:12,sm:{span:10,offset:1},lg:{span:8,offset:2},children:(0,s.jsx)(d.Z,{className:"".concat(g().containerSearchPanel),children:(0,s.jsx)(f.Z,{onSubmit:eo,className:g().searchBar,children:(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(f.Z.Control,{ref:b,type:"text",className:"".concat(g().searchBarInput,"  display-1"),value:S,onChange:e=>{(0,v.qu)(!1,"search value:",e.target.value),z(e.target.value)}}),(0,s.jsx)(u.Z,{variant:"link",children:(0,s.jsx)("i",{id:"1",className:"fa fa-search fa-lg text-black","aria-hidden":"true",onClick:eo})}),(0,s.jsx)(u.Z,{variant:"link",children:(0,s.jsx)("i",{id:"1",className:"fa fa-times fa-lg text-black","aria-hidden":"true",onClick:e=>{e.preventDefault(),z(""),W(!1),I()}})})]})})})})})]}),(0,s.jsx)(x.Z,{show:_,handleClose:()=>L(!1),handleCreateANewItem:el})]})}}}]);