(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1335],{98284:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/payment",function(){return a(9698)}])},9698:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return p}});var t=a(85893),n=a(67294),r=a(9473),d=a(11163),l=a(10682),c=a(34051),i=a(31555),o=a(13137),h=a(94562),x=a(35005),y=a(75147),u=a(42298),j=a(31243),f=a(17384);function p(){let e,s,a;let p=(0,d.useRouter)(),m=(0,r.I0)(),[g,D]=(0,n.useState)("yearly"),N=(0,r.v9)(e=>e.auth.isLoggedIn),w=(0,r.v9)(e=>e.account.invoice),b=(0,r.v9)(e=>e.account.transactions),M=w&&w.dueTime,v=w&&w.dues,Z=w&&w.planOptions,$=w&&w.monthlyInvoice.storageUsage,C=w&&w.monthlyInvoice.requiredStorage,k=w&&w.monthlyInvoice.monthlyPrice,E=w&&w.monthlyInvoice.currency,F=w&&w.remainingDays,T=w&&w.upgradePrice,I=w&&w.waived;0===$?e="0.000 MB":$&&(e=$<1e6?($/1e6).toFixed(3)+" MB":($/1e9).toFixed(3)+" GB"),Z&&(s=Z.monthly.firstDue===Z.monthly.lastDue?(0,u.default)(new Date(Z.monthly.firstDue),"MM/dd/yyyy"):"".concat((0,u.default)(new Date(Z.monthly.firstDue),"MM/dd/yyyy")," ... ").concat((0,u.default)(new Date(Z.monthly.lastDue),"MM/dd/yyyy")),a=Z.yearly.firstDue===Z.yearly.lastDue?"".concat((0,u.default)(new Date(Z.yearly.firstDue),"MM/dd/yyyy")):"".concat((0,u.default)(new Date(Z.yearly.firstDue),"MM/dd/yyyy")," ... ").concat((0,u.default)(new Date(Z.yearly.lastDue),"MM/dd/yyyy")));let _=v&&0!==v.length&&v.toReversed().map((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,u.default)(new Date(e.dueTime),"MM/dd/yyyy")}),(0,t.jsx)("td",{children:e.monthlyInvoice.requiredStorage}),(0,t.jsxs)("td",{children:["$",e.monthlyInvoice.monthlyPrice]})]},s)),S=0!==b.length&&b.map((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,u.default)(new Date(e.time),"MM/dd/yyyy")}),(0,t.jsx)("td",{children:"$".concat(e.amount," ").concat(e.currency)}),(0,t.jsxs)("td",{children:[e.requiredStorage,", ",e.plan]}),"upgrade"===e.plan?(0,t.jsx)("td",{}):(0,t.jsx)("td",{children:e.firstDue===e.lastDue?(0,u.default)(new Date(e.firstDue),"MM/dd/yyyy"):"".concat((0,u.default)(new Date(e.firstDue),"MM/dd/yyyy")," - ").concat((0,u.default)(new Date(e.lastDue),"MM/dd/yyyy"))})]},s)),U=e=>{D(e.target.value)};return(0,n.useEffect)(()=>{N&&(m((0,f.OC)()),m((0,f.c1)()))},[N]),(0,t.jsx)(j.Z,{children:(0,t.jsxs)(l.Z,{className:"px-4",children:[(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),v&&(0,t.jsxs)("div",{children:[(0,t.jsx)(c.Z,{children:(0,t.jsxs)(i.Z,{xs:{span:12,offset:0},md:{span:8,offset:2},style:{border:"solid",paddingTop:"12px",backgroundColor:"#FEF9E7"},children:[(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," Your current storage usage is ",(0,t.jsx)("span",{className:"fw-bold",children:e}),". "]}),(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," You need the ",(0,t.jsx)("span",{className:"fw-bold",children:C})," storage, ",(0,t.jsxs)("span",{className:"fw-bold",children:["$",k," USD"]})," per month."]}),0===v.length&&(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," Next due date is ",(0,t.jsx)("span",{className:"fw-bold",children:(0,u.default)(new Date(M),"MM/dd/yyyy")})]})]})}),0!==v.length&&(0,t.jsx)(c.Z,{children:(0,t.jsxs)(i.Z,{xs:{span:12,offset:0},md:{span:8,offset:2},style:{border:"solid",paddingTop:"12px",backgroundColor:"#EBF5FB"},children:[(0,t.jsx)("hr",{}),(0,t.jsx)("h1",{children:"Invoice"}),(0,t.jsxs)(y.Z,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Date"}),(0,t.jsx)("th",{children:"Storage(GB)"}),(0,t.jsx)("th",{children:"Due(USD)"})]})}),(0,t.jsx)("tbody",{children:_})]}),(0,t.jsx)("hr",{}),(0,t.jsxs)("h1",{children:["Total : ","$".concat(Z.monthly.totalDues," USD")]})]})}),0!==v.length&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)(i.Z,{xs:{span:12,offset:0},md:{span:8,offset:2},children:[(0,t.jsx)(o.Z,{children:(0,t.jsxs)(o.Z.Group,{controlId:"plan",children:[(0,t.jsx)("hr",{}),(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(h.Z.Input,{type:"radio",value:"yearly",onChange:U,checked:"yearly"===g}),(0,t.jsx)(h.Z.Label,{children:(0,t.jsx)("h5",{className:"px-3",style:{backgroundColor:"#48C9B0"},children:"Pay yearly, get 2 months free."})})]}),(0,t.jsx)("br",{}),(0,t.jsx)("h4",{className:"px-4",children:Z&&"$".concat(Z.yearly.totalDues," USD.")}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:Z&&"For ".concat(a,".")}),(0,t.jsx)("p",{children:Z&&"Next due date:  ".concat((0,u.default)(new Date(Z.yearly.nextDueTime),"MM/dd/yyyy"))}),(0,t.jsx)("hr",{}),(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(h.Z.Input,{type:"radio",value:"monthly",onChange:U,checked:"monthly"===g}),(0,t.jsx)(h.Z.Label,{children:(0,t.jsx)("h5",{className:"px-3",style:{backgroundColor:"#F7DC6F"},children:"Pay monthly."})})]}),(0,t.jsx)("br",{}),(0,t.jsx)("h4",{className:"px-4",children:Z&&"$".concat(Z.monthly.totalDues," USD.")}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:Z&&"For ".concat(s,".")}),(0,t.jsx)("p",{children:Z&&"Next due date:  ".concat((0,u.default)(new Date(Z.monthly.nextDueTime),"MM/dd/yyyy"))}),(0,t.jsx)("hr",{})]})}),(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)(x.Z,{onClick:e=>{m((0,f.rC)(g)),p.push("/services/checkout")},children:"Checkout"})})]})})})]}),T&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)(i.Z,{xs:{span:12,offset:0},md:{span:8,offset:2},style:{border:"solid",paddingTop:"12px",backgroundColor:"#FEF9E7"},children:[(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," Your current storage usage is ",(0,t.jsx)("span",{className:"fw-bold",children:e}),". "]}),(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," You need the ",C," storage, ",(0,t.jsxs)("span",{className:"fw-bold",children:["$",k]})," USD per month."]}),(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," Next due date is ",(0,t.jsx)("span",{className:"fw-bold",children:(0,u.default)(new Date(M),"MM/dd/yyyy")})]}),(0,t.jsxs)("p",{className:"fw-light",children:[(0,t.jsx)("i",{className:"fa fa-dot-circle-o","aria-hidden":"true"})," Upgrade price for the remaining ",(0,t.jsx)("span",{className:"fw-bold",children:F})," days until the next due date - "]}),(0,t.jsx)("h5",{className:"p-3",children:"$".concat(T," ").concat(E.toUpperCase())}),I?(0,t.jsx)("h5",{children:"\uD83D\uDE42 The fee is waived because it is less than one dollar."}):(0,t.jsx)(c.Z,{children:(0,t.jsx)(i.Z,{sm:{span:8,offset:2},className:"text-center",children:(0,t.jsx)(x.Z,{onClick:e=>{m((0,f.rC)("upgrade")),p.push("/services/checkout")},children:"Upgrade"})})})]})})}),(0,t.jsx)("br",{}),(0,t.jsx)(c.Z,{children:(0,t.jsxs)(i.Z,{xs:{span:12,offset:0},md:{span:8,offset:2},style:{border:"solid",paddingTop:"12px",backgroundColor:"#EAEDED",overflow:"auto"},children:[(0,t.jsx)("h1",{children:"Transaction History"}),(0,t.jsxs)(y.Z,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Date"}),(0,t.jsx)("th",{children:"Amount"}),(0,t.jsx)("th",{children:"Plan"}),(0,t.jsx)("th",{children:"Paid Dues"})]})}),0!==b.length&&(0,t.jsx)("tbody",{children:S})]}),0===b.length&&(0,t.jsx)("p",{children:"Empty"})]})}),(0,t.jsx)("br",{})]})})}a(49486)},75147:function(e,s,a){"use strict";var t=a(94184),n=a.n(t),r=a(67294),d=a(76792),l=a(85893);let c=r.forwardRef(({bsPrefix:e,className:s,striped:a,bordered:t,borderless:r,hover:c,size:i,variant:o,responsive:h,...x},y)=>{let u=(0,d.vE)(e,"table"),j=n()(s,u,o&&`${u}-${o}`,i&&`${u}-${i}`,a&&`${u}-${"string"==typeof a?`striped-${a}`:"striped"}`,t&&`${u}-bordered`,r&&`${u}-borderless`,c&&`${u}-hover`),f=(0,l.jsx)("table",{...x,className:j,ref:y});if(h){let e=`${u}-responsive`;return"string"==typeof h&&(e=`${e}-${h}`),(0,l.jsx)("div",{className:e,children:f})}return f});s.Z=c}},function(e){e.O(0,[6760,1243,9774,2888,179],function(){return e(e.s=98284)}),_N_E=e.O()}]);