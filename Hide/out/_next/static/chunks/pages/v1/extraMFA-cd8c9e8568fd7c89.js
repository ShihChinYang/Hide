(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2738],{98009:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/v1/extraMFA",function(){return n(75432)}])},80740:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(85893),s=n(67294),r=n(35005),i=n(13137),c=n(76515),l=n(38712),u=n.n(l);function o(e){let{onKeyChanged:t,recoveredKeyPassword:n,focus:l=!1}=e,o=(0,s.useRef)(null),[f,d]=(0,s.useState)(""),[h,x]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{n&&d(n)},[n]),(0,s.useEffect)(()=>{l&&o.current.focus()},[l]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(i.Z.Control,{ref:o,type:h?"password":"text",onChange:e=>{d(e.target.value),t(e.target.value)},value:f,className:u().inputBox}),(0,a.jsx)(r.Z,{className:u().inputButton,onClick:e=>{x(!h)},variant:"dark",children:h?(0,a.jsx)("i",{id:"1",className:"fa fa-eye-slash fa-lg","aria-hidden":"true"}):(0,a.jsx)("i",{id:"1",className:"fa fa-eye fa-lg","aria-hidden":"true"})})]})})}n(49486)},75432:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(85893),s=n(67294),r=n(9473),i=n(11163),c=n(10682),l=n(34051),u=n(31555),o=n(13137),f=n(35005),d=n(36968),h=n(38712),x=n.n(h);n(49486);var p=n(31243);n(80740);var v=n(58935);function m(){let e=(0,r.I0)(),t=(0,i.useRouter)(),[n,h]=(0,s.useState)(""),m=(0,r.v9)(e=>e.v1Account.activity),j=(0,r.v9)(e=>e.v1Account.nextAuthStep);return(0,s.useEffect)(()=>{j&&"KeyRequired"===j.step&&t.push("/v1/keyEnter")},[j]),(0,a.jsx)("div",{className:x().managedMemberLoginBackground,children:(0,a.jsx)(p.Z,{showNavbarMenu:!1,showPathRow:!1,children:(0,a.jsxs)(c.Z,{className:"mt-5",children:[(0,a.jsx)(l.Z,{className:"text-center",children:(0,a.jsx)("h1",{className:"display-5",children:"Multi-Factor Authentication"})}),(0,a.jsx)("br",{}),(0,a.jsx)(l.Z,{children:(0,a.jsxs)(u.Z,{xs:{span:6,offset:3},sm:{span:6,offset:3},md:{span:6,offset:3},lg:{span:6,offset:3},children:[(0,a.jsxs)(o.Z.Group,{className:"mb-3",controlId:"MFA",children:[(0,a.jsx)(o.Z.Label,{children:"Please enter the token"}),(0,a.jsx)(o.Z.Control,{className:"py-2",type:"text",value:n,onChange:e=>{h(e.target.value)},placeholder:"",autoComplete:"off"})]}),(0,a.jsx)(f.Z,{variant:"primary",className:"py-2",onClick:t=>{e((0,v.Sf)({MFAToken:n}))},children:"VerifyMFA"===m?(0,a.jsx)(d.Z,{animation:"border"}):"Verify"}),"InvalidMFA"===m&&(0,a.jsx)("p",{className:"text-danger",children:"Invalid Token"})]})})]})})})}},36968:function(e,t,n){"use strict";var a=n(94184),s=n.n(a),r=n(67294),i=n(76792),c=n(85893);let l=r.forwardRef(({bsPrefix:e,variant:t,animation:n="border",size:a,as:r="div",className:l,...u},o)=>{e=(0,i.vE)(e,"spinner");let f=`${e}-${n}`;return(0,c.jsx)(r,{ref:o,...u,className:s()(l,f,a&&`${f}-${a}`,t&&`text-${t}`)})});l.displayName="Spinner",t.Z=l}},function(e){e.O(0,[6760,1243,9774,2888,179],function(){return e(e.s=98009)}),_N_E=e.O()}]);