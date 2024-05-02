"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4856],{45289:function(e,s,a){a.d(s,{Z:function(){return Z}});var n=a(85893),t=a(67294),r=a(9473),l=a(11163),i=a(34051),c=a(31555),d=a(2086),o=a(6763),f=a(13137),h=a(80567),x=a(42298),m=a(3151),j=a(91820),p=a(38712),u=a.n(p),N=a(49486),g=a(51892),k=a(24638);function Z(e){let{itemIndex:s,item:a,mode:p="listAll",onAdd:Z,onSelect:y}=e,I=(0,l.useRouter)(),v=(0,r.I0)(),[w,C]=(0,t.useState)(!1),[b,_]=(0,t.useState)(null),L=(0,r.v9)(e=>e.container.workspace),T=(0,r.v9)(e=>e.container.selectedItems),M=a.id,P=document.createElement("span");P.innerHTML=a.title;let S=P.textContent||P.innerText,E=(0,h.default)(a.itemPack.pageNumber,"yyyyLLdd",new Date),D=E.getDay(),H=(0,t.forwardRef)(function(e,s){let{children:a,onClick:t}=e;return(0,n.jsxs)("a",{href:"",ref:s,onClick:e=>{e.preventDefault(),t(e)},children:[(0,n.jsx)("i",{className:"fa fa-plus text-dark","aria-hidden":"true"}),a]})}),R=(0,t.forwardRef)(function(e,s){let{children:a,onClick:t}=e;return(0,n.jsxs)("a",{href:"",ref:s,onClick:e=>{e.preventDefault(),t(e)},children:[(0,n.jsx)("i",{className:"fa fa-sort text-dark","aria-hidden":"true"}),a]})}),A=()=>{(0,N.qu)(!1,"rowClicked ...");let e=(0,g.vp)(a);I.push(e)},B=e=>{_(e),C(!0)},F=async e=>{let n={space:L,targetContainer:a.container,items:T,targetItem:a.id,targetItemIndex:s,targetPosition:a.position};try{v((0,k.Xy)({action:e,payload:n}))}catch(e){(0,N.qu)(!1,"Moving items failed.")}};return(0,n.jsxs)(n.Fragment,{children:[a.id.startsWith("np")&&(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(c.Z,{xs:{span:2,offset:1},sm:{span:2,offset:1},md:{span:1,offset:1},onClick:A,style:{cursor:"pointer"},children:(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:a.itemPack.pageNumber}})}),(0,n.jsx)(c.Z,{xs:7,sm:7,md:8,onClick:A,style:{cursor:"pointer"},children:(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:S}})}),(0,n.jsx)(c.Z,{xs:1,children:(0,n.jsx)("a",{className:u().externalLink,target:"_blank",href:(0,g.vp)(a),rel:"noopener noreferrer",children:(0,n.jsx)("i",{className:"me-2 fa fa-external-link fa-lg text-dark","aria-hidden":"true"})})})]}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(c.Z,{xs:{span:10,offset:1},children:(0,n.jsx)("hr",{className:"mt-1 mb-1"})})})]}),a.id.startsWith("dp")&&(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Z,{className:u().contentsItemRow,children:[(0,n.jsx)(c.Z,{className:"".concat(0===D||6===D?u().diaryWeekendItem:""," ").concat((0,m.default)(new Date,E)?u().diaryTodayItem:""),xs:{span:3,offset:1},sm:{span:2,offset:1},xl:{span:1,offset:1},onClick:A,style:{cursor:"pointer"},children:"listAll"===p?(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:(0,x.default)(E,"dd EEEEE")}}):(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:(0,x.default)(E,"yyyy-LL-dd")}})}),(0,n.jsx)(c.Z,{xs:6,sm:7,xl:8,onClick:A,style:{cursor:"pointer"},children:(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:S}})}),(0,n.jsx)(c.Z,{xs:1,children:(0,n.jsx)("a",{className:u().externalLink,target:"_blank",href:(0,g.vp)(a),rel:"noopener noreferrer",children:(0,n.jsx)("i",{className:"me-2 fa fa-external-link fa-lg text-dark","aria-hidden":"true"})})})]}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(c.Z,{xs:{span:10,offset:1},children:(0,n.jsx)("hr",{className:"mt-1 mb-1"})})})]}),a.id.startsWith("p")&&(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Z,{className:u().contentsItemRow,children:[(0,n.jsxs)(c.Z,{xs:{span:7,offset:1},onClick:A,style:{cursor:"pointer"},children:[(0,n.jsx)("i",{className:"fa fa-file-text-o fa-lg ".concat(u().safeItemTypeIcon),"aria-hidden":"true"}),(0,n.jsx)("span",{className:"fs-5",dangerouslySetInnerHTML:{__html:S}})]}),(0,n.jsx)(c.Z,{xs:3,className:"p-1",children:(0,n.jsxs)(d.Z,{className:"pull-right",children:[(0,n.jsx)("a",{className:u().externalLink,target:"_blank",href:(0,g.vp)(a),rel:"noopener noreferrer",children:(0,n.jsx)("i",{className:"me-2 fa fa-external-link fa-lg text-dark","aria-hidden":"true"})}),(0,n.jsx)(f.Z.Group,{className:"me-2",children:(0,n.jsx)(f.Z.Check,{type:"checkbox",checked:!!T.find(e=>e.id===a.id),onChange:e=>{if(e.target.checked){let e=JSON.parse(JSON.stringify(a));v((0,k.Gh)(e))}else v((0,k.z_)(a.id))}})}),!T.length&&(0,n.jsxs)(o.Z,{align:"end",className:"justify-content-end",children:[(0,n.jsx)(o.Z.Toggle,{as:H,variant:"link"}),(0,n.jsxs)(o.Z.Menu,{children:[(0,n.jsx)(o.Z.Item,{onClick:()=>B("addAnItemBefore"),children:"Add before"}),(0,n.jsx)(o.Z.Item,{onClick:()=>B("addAnItemAfter"),children:"Add after"})]})]}),!!T.length&&(0,n.jsxs)(o.Z,{align:"end",className:"justify-content-end",children:[(0,n.jsx)(o.Z.Toggle,{as:R,variant:"link"}),(0,n.jsxs)(o.Z.Menu,{children:[(0,n.jsx)(o.Z.Item,{onClick:()=>F("dropItemsBefore"),children:"Drop before"}),(0,n.jsx)(o.Z.Item,{onClick:()=>F("dropItemsAfter"),children:"Drop after"})]})]})]})})]}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(c.Z,{xs:{span:10,offset:1},children:(0,n.jsx)("hr",{className:"mt-1 mb-1"})})}),(0,n.jsx)(j.Z,{show:w,handleClose:()=>C(!1),optionSelected:e=>{C(!1),Z(e,b,M,a.position)}})]})]})}},91820:function(e,s,a){a.d(s,{Z:function(){return i}});var n=a(85893),t=a(32171),r=a(18695),l=a(49486);function i(e){let{show:s=!1,optionSelected:a,handleClose:i,pageOnly:c=!1}=e;return(0,l.qu)(!1,"Rendering ItemTypeModal: ","".concat(s,"}")),(0,n.jsxs)(t.Z,{show:s,onHide:i,children:[(0,n.jsx)(t.Z.Header,{closeButton:!0,children:(0,n.jsx)(t.Z.Title,{children:"Please Select a Type"})}),(0,n.jsx)(t.Z.Body,{children:(0,n.jsxs)(r.Z,{children:[(0,n.jsxs)(r.Z.Item,{id:"Page",action:!0,onClick:()=>a("Page"),className:"pt-3 pb-3",children:[(0,n.jsx)("i",{className:"fa fa-file-text-o me-2 fs-5 fw-light","aria-hidden":"true"}),(0,n.jsx)("em",{className:"fs-5 fw-light",children:"Page"})]}),c?"":(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.Z.Item,{id:"Notebook",action:!0,onClick:()=>a("Notebook"),className:"pt-3 pb-3",children:[(0,n.jsx)("i",{className:"fa fa-book me-2 fs-5 fw-light","aria-hidden":"true"}),(0,n.jsx)("em",{className:"fs-5 fw-light",children:"Notebook"})]}),(0,n.jsxs)(r.Z.Item,{id:"Diary",action:!0,onClick:()=>a("Diary"),className:"pt-3 pb-3",children:[(0,n.jsx)("i",{className:"fa fa-calendar me-2 fs-5 fw-light","aria-hidden":"true"}),(0,n.jsx)("em",{className:"fs-5 fw-light",children:"Diary"})]}),(0,n.jsxs)(r.Z.Item,{id:"Box",action:!0,onClick:()=>a("Box"),className:"pt-3 pb-3",variant:"primary",children:[(0,n.jsx)("i",{className:"fa fa-archive me-2 fs-5 fw-light","aria-hidden":"true"}),(0,n.jsx)("em",{className:"fs-5 fw-light",children:"Box"})]}),(0,n.jsxs)(r.Z.Item,{id:"Folder",action:!0,onClick:()=>a("Folder"),className:"pt-3 pb-3",variant:"warning",children:[(0,n.jsx)("i",{className:"fa fa-folder-o me-2 fs-5 fw-light","aria-hidden":"true"}),(0,n.jsx)("em",{className:"fs-5 fw-light",children:"Folder"})]})]})]})})]})}},49541:function(e,s,a){a.d(s,{Z:function(){return k}});var n=a(85893),t=a(34051),r=a(31555),l=a(94184),i=a.n(l),c=a(67294),d=a(76792),o=a(13551);let f=c.forwardRef(({active:e=!1,disabled:s=!1,className:a,style:t,activeLabel:r="(current)",children:l,linkStyle:c,linkClassName:d,...f},h)=>{let x=e||s?"span":o.Z;return(0,n.jsx)("li",{ref:h,style:t,className:i()(a,"page-item",{active:e,disabled:s}),children:(0,n.jsxs)(x,{className:i()("page-link",d),style:c,...f,children:[l,e&&r&&(0,n.jsx)("span",{className:"visually-hidden",children:r})]})})});function h(e,s,a=e){let t=c.forwardRef(({children:e,...t},r)=>(0,n.jsxs)(f,{...t,ref:r,children:[(0,n.jsx)("span",{"aria-hidden":"true",children:e||s}),(0,n.jsx)("span",{className:"visually-hidden",children:a})]}));return t.displayName=e,t}f.displayName="PageItem";let x=h("First","\xab"),m=h("Prev","‹","Previous"),j=h("Ellipsis","…","More"),p=h("Next","›"),u=h("Last","\xbb"),N=c.forwardRef(({bsPrefix:e,className:s,size:a,...t},r)=>{let l=(0,d.vE)(e,"pagination");return(0,n.jsx)("ul",{ref:r,...t,className:i()(s,l,a&&`${l}-${a}`)})});N.displayName="Pagination";var g=Object.assign(N,{First:x,Prev:m,Ellipsis:j,Item:f,Next:p,Last:u});function k(e){let{page:s,total:a,limit:l,changePage:i}=e,c=[],d=Math.ceil(a/l),o=Math.ceil(d/5);for(let e=1;e<=o;e++){let a=!1;5*e>=d&&(a=!0);let t=[];for(let r=(e-1)*5+1;r<=(a?d:5*e);r++)t.push((0,n.jsx)(g.Item,{active:r===s,onClick:()=>i(r),children:r},r));c.push((0,n.jsx)(r.Z,{children:(0,n.jsx)(g,{children:t})},e))}return(0,n.jsx)(t.Z,{children:c})}}}]);