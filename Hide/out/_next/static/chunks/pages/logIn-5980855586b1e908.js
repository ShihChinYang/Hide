(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5206],{70902:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logIn",function(){return r(8115)}])},80740:function(e,a,r){"use strict";r.d(a,{Z:function(){return o}});var s=r(85893),t=r(67294),n=r(35005),l=r(13137),c=r(76515),i=r(38712),d=r.n(i);function o(e){let{onKeyChanged:a,recoveredKeyPassword:r,focus:i=!1}=e,o=(0,t.useRef)(null),[u,f]=(0,t.useState)(""),[x,h]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{r&&f(r)},[r]),(0,t.useEffect)(()=>{i&&o.current.focus()},[i]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(l.Z.Control,{ref:o,type:x?"password":"text",onChange:e=>{f(e.target.value),a(e.target.value)},value:u,className:d().inputBox}),(0,s.jsx)(n.Z,{className:d().inputButton,onClick:e=>{h(!x)},variant:"dark",children:x?(0,s.jsx)("i",{id:"1",className:"fa fa-eye-slash fa-lg","aria-hidden":"true"}):(0,s.jsx)("i",{id:"1",className:"fa fa-eye fa-lg","aria-hidden":"true"})})]})})}r(49486)},8115:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return Z}});var s=r(85893),t=r(67294),n=r(9473),l=r(11163),c=r(10682),i=r(52686),d=r(34051),o=r(31555),u=r(13137),f=r(35005),x=r(38712),h=r.n(x),j=r(49486),v=r(31243),m=r(80740),y=r(32171);function p(e){let{callback:a}=e;(0,n.I0)();let r=(0,n.v9)(e=>e.account.newAccountCreated),[l,i]=(0,t.useState)(""),[x,h]=(0,t.useState)(null),v=(0,t.useRef)(null);return(0,t.useEffect)(()=>{if(r){let e=new File([r.accountRecoveryPhrase],"abc.txt",{type:"text/plain"});h(URL.createObjectURL(e))}},[r]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(y.Z,{show:!0,fullscreen:!0,onHide:()=>{a({recover:!1})},children:[(0,s.jsx)(y.Z.Header,{closeButton:!0,children:(0,s.jsxs)(y.Z.Title,{children:[(0,s.jsx)("i",{className:"fa fa-ambulance","aria-hidden":"true"})," Recover Your Account"]})}),(0,s.jsx)(y.Z.Body,{children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)("p",{children:"If you forget your Nickname and Key Password, using account recovery code is the only way to recover your account."}),(0,s.jsx)("p",{children:"You can either enter your account recovery code below"}),(0,s.jsx)(d.Z,{children:(0,s.jsx)(o.Z,{children:(0,s.jsx)(u.Z.Control,{type:"text",placeholder:"Account Recovery Code",onChange:e=>{i(e.target.value)},value:l})})}),(0,s.jsx)("br",{}),(0,s.jsx)(d.Z,{children:(0,s.jsx)(o.Z,{className:"d-flex justify-content-center",children:(0,s.jsx)(f.Z,{className:"text-center",variant:"primary",onClick:()=>{a({recover:!0,recoveryCode:l})},children:"Recover"})})}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:"or open your account recovery file."}),(0,s.jsxs)("div",{className:"recoveryFile",children:[(0,s.jsx)("input",{ref:v,onChange:e=>{e.preventDefault(),(0,j.qu)(!1,"handleRecoveryFile: ",e.target.id);let r=e.target.files[0],s=new FileReader;s.addEventListener("load",()=>{a({recover:!0,recoveryCode:s.result})},!1),r&&s.readAsText(r)},type:"file",id:"recoveryFile",className:"d-none editControl"}),(0,s.jsx)(d.Z,{children:(0,s.jsx)(o.Z,{id:"recoveryFile",sm:{span:10,offset:1},md:{span:8,offset:2},className:"text-center",children:(0,s.jsx)(f.Z,{id:"recoveryFile",onClick:e=>{var a;(0,j.qu)(!1,"handleRecoveryFile"),e.preventDefault(),v.current.value=null,null===(a=v.current)||void 0===a||a.click()},variant:"link",className:"text-dark btn btn-labeled",children:(0,s.jsx)("h4",{children:(0,s.jsx)("i",{id:"recoveryFile",className:"fa fa-paperclip fa-lg","aria-hidden":"true"})})})})})]})]})})]})})}r(17384);var N=r(40606),g=r(94882);function Z(){let e=(0,l.useRouter)(),a=(0,n.I0)(),[r,x]=(0,t.useState)(""),[y,Z]=(0,t.useState)(""),[b,w]=(0,t.useState)(!1);(0,t.useRef)(null);let k=(0,n.v9)(e=>e.auth.clientEncryptionKey),C=(0,n.v9)(e=>e.auth.activity),R=(0,n.v9)(e=>e.auth.isLoggedIn),E=async e=>{(0,j.qu)(!1,"handleSubmit"),a((0,N.hO)({nickname:r,keyPassword:y}))};return(0,t.useEffect)(()=>{},[]),(0,t.useEffect)(()=>{R&&e.push("/safe")},[R]),(0,s.jsx)("div",{className:"".concat(h().metalBackground," ").concat(h().minHeight100Percent),children:(0,s.jsx)(v.Z,{showNaveBar:!1,showNavbarMenu:!1,showPathRow:!1,children:(0,s.jsx)("div",{children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(d.Z,{className:h().keyPanel,children:(0,s.jsx)(o.Z,{sm:{span:10,offset:1},lg:{span:6,offset:3},children:(0,s.jsxs)(i.Z,{className:"p-3",children:[(0,s.jsx)("p",{children:"This app securely hides your stories, videos, photos, and files using the reliable cloud service BSafes."}),(0,s.jsx)("hr",{}),(0,s.jsxs)("h1",{className:"text-center",children:["Open Your ",(0,s.jsx)("span",{style:{backgroundColor:"#990000",color:"white",fontWeight:"bold",padding:"7px"},children:"BSafes"})]}),(0,s.jsx)("hr",{}),(0,s.jsxs)(u.Z,{children:[(0,s.jsxs)(u.Z.Group,{className:"mb-3",controlId:"Nickname",children:[(0,s.jsx)(u.Z.Label,{children:"Nickname"}),(0,s.jsx)(u.Z.Control,{type:"text",placeholder:"",autoComplete:"off",className:h().inputBox,value:r,onChange:e=>{x(e.target.value)}})]}),(0,s.jsxs)(u.Z.Group,{className:"mb-3",controlId:"keyPassword",children:[(0,s.jsx)(u.Z.Label,{children:"Key Password"}),(0,s.jsx)(m.Z,{onKeyChanged:e=>{(0,j.qu)(!1,"keyPassword: ",e),Z(e)},recoveredKeyPassword:y})]})]}),(0,s.jsx)(d.Z,{className:"p-2",children:(0,s.jsx)(o.Z,{className:"text-center",children:(0,s.jsx)(f.Z,{variant:"dark",onClick:E,disabled:"LoggingIn"===C,children:"Unlock"})})}),(0,s.jsx)(d.Z,{children:(0,s.jsx)(o.Z,{className:"text-center",children:(0,s.jsx)(f.Z,{variant:"link",onClick:()=>{w(!0)},disabled:"LoggingIn"===C,style:{color:"gray",textTransform:"none",textDecoration:"none"},children:"Recover"})})}),b&&(0,s.jsx)(p,{callback:e=>{if(e.recover){let a=(0,g.jc)(e.recoveryCode,k);x(a.nickname),Z(a.keyPassword)}w(!1)}}),(0,s.jsx)(d.Z,{children:(0,s.jsxs)(o.Z,{className:"text-center",children:[(0,s.jsx)("img",{className:"mx-auto d-block",src:"/images/mySafe_Small.png",style:{width:"52px"}}),(0,s.jsxs)(f.Z,{size:"lg",variant:"link",onClick:()=>{e.push("/keySetup")},disabled:"LoggingIn"===C,style:{textTransform:"none",textDecoration:"none"},children:["Own Your ",(0,s.jsx)("span",{style:{fontWeight:"bold"},children:"BSafes"})]})]})}),(0,s.jsx)("p",{hidden:!0,className:"text-center",children:"30-Day Free"})]})})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})})})})}},52686:function(e,a,r){"use strict";r.d(a,{Z:function(){return Z}});var s=r(94184),t=r.n(s),n=r(67294),l=r(76792),c=r(85893);let i=n.forwardRef(({className:e,bsPrefix:a,as:r="div",...s},n)=>(a=(0,l.vE)(a,"card-body"),(0,c.jsx)(r,{ref:n,className:t()(e,a),...s})));i.displayName="CardBody";let d=n.forwardRef(({className:e,bsPrefix:a,as:r="div",...s},n)=>(a=(0,l.vE)(a,"card-footer"),(0,c.jsx)(r,{ref:n,className:t()(e,a),...s})));d.displayName="CardFooter";var o=r(49059);let u=n.forwardRef(({bsPrefix:e,className:a,as:r="div",...s},i)=>{let d=(0,l.vE)(e,"card-header"),u=(0,n.useMemo)(()=>({cardHeaderBsPrefix:d}),[d]);return(0,c.jsx)(o.Z.Provider,{value:u,children:(0,c.jsx)(r,{ref:i,...s,className:t()(a,d)})})});u.displayName="CardHeader";let f=n.forwardRef(({bsPrefix:e,className:a,variant:r,as:s="img",...n},i)=>{let d=(0,l.vE)(e,"card-img");return(0,c.jsx)(s,{ref:i,className:t()(r?`${d}-${r}`:d,a),...n})});f.displayName="CardImg";let x=n.forwardRef(({className:e,bsPrefix:a,as:r="div",...s},n)=>(a=(0,l.vE)(a,"card-img-overlay"),(0,c.jsx)(r,{ref:n,className:t()(e,a),...s})));x.displayName="CardImgOverlay";let h=n.forwardRef(({className:e,bsPrefix:a,as:r="a",...s},n)=>(a=(0,l.vE)(a,"card-link"),(0,c.jsx)(r,{ref:n,className:t()(e,a),...s})));h.displayName="CardLink";var j=r(39602);let v=(0,j.Z)("h6"),m=n.forwardRef(({className:e,bsPrefix:a,as:r=v,...s},n)=>(a=(0,l.vE)(a,"card-subtitle"),(0,c.jsx)(r,{ref:n,className:t()(e,a),...s})));m.displayName="CardSubtitle";let y=n.forwardRef(({className:e,bsPrefix:a,as:r="p",...s},n)=>(a=(0,l.vE)(a,"card-text"),(0,c.jsx)(r,{ref:n,className:t()(e,a),...s})));y.displayName="CardText";let p=(0,j.Z)("h5"),N=n.forwardRef(({className:e,bsPrefix:a,as:r=p,...s},n)=>(a=(0,l.vE)(a,"card-title"),(0,c.jsx)(r,{ref:n,className:t()(e,a),...s})));N.displayName="CardTitle";let g=n.forwardRef(({bsPrefix:e,className:a,bg:r,text:s,border:n,body:d=!1,children:o,as:u="div",...f},x)=>{let h=(0,l.vE)(e,"card");return(0,c.jsx)(u,{ref:x,...f,className:t()(a,h,r&&`bg-${r}`,s&&`text-${s}`,n&&`border-${n}`),children:d?(0,c.jsx)(i,{children:o}):o})});g.displayName="Card";var Z=Object.assign(g,{Img:f,Title:N,Subtitle:m,Body:i,Link:h,Text:y,Header:u,Footer:d,ImgOverlay:x})}},function(e){e.O(0,[6760,1243,9774,2888,179],function(){return e(e.s=70902)}),_N_E=e.O()}]);