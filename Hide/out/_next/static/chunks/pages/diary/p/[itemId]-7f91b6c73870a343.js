(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9264],{50517:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/diary/p/[itemId]",function(){return a(30274)}])},30274:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var n=a(85893),s=a(67294),d=a(11163),i=a(9473),l=a(34051),c=a(31555),u=a(80567),r=a(42298),o=a(3151),y=a(38712),f=a.n(y),p=a(41975),h=a(31243),x=a(32132),g=a(61926),j=a(37865),m=a(85056),L=a(93530),w=a(24638),P=a(49411),_=a(49486);function k(){(0,_.qu)(!1,"Rendering item");let e=(0,i.I0)(),t=(0,d.useRouter)(),[a]=(0,s.useState)((0,u.default)((0,r.default)(new Date,"yyyy-LL-dd"),"yyyy-LL-dd",new Date)),[y,k]=(0,s.useState)(),[v,D]=(0,s.useState)(null),N=(0,i.v9)(e=>e.page.id),Z=(0,i.v9)(e=>e.page.style),E=a=>{let n,s;if(!(N&&y))return;(n=N.split(":")).splice(-1);let d=new Date(y.valueOf());switch(a){case"-1":d.setDate(d.getDate()-1),n.push((0,r.default)(d,"yyyy-LL-dd"));break;case"+1":d.setDate(d.getDate()+1),n.push((0,r.default)(d,"yyyy-LL-dd"));break;default:n.push(a)}s=n.join(":"),(0,_.qu)(!1,"setNavigationInSameContainer ..."),e((0,w.RB)(!0)),t.push("/diary/p/".concat(s))};return(0,s.useEffect)(()=>{if(t.query.itemId){let n,s,d;n=t.query.itemId.split(":").pop(),k(s=(0,u.default)(n,"yyyy-LL-dd",new Date)),D(d=(0,o.default)(s,a)?"Today":a>s?1===(d=Math.ceil((a-s)/864e5))?"1 day ago":2===d?"2 days ago":null:1===(d=Math.ceil((s-a)/864e5))?"Tomorrow":null),parseInt(n.split("-")[2])%2?e((0,P.ml)(f().leftPagePanel)):e((0,P.ml)(f().rightPagePanel))}},[t.query.itemId]),(0,n.jsxs)("div",{className:f().pageBackground,children:[(0,n.jsx)(h.Z,{children:(0,n.jsxs)(x.Z,{itemId:t.query.itemId,children:[(0,n.jsx)("br",{}),(0,n.jsx)(g.Z,{showListIcon:!0,startDate:y,setStartDate:e=>{(0,o.default)(e,y)||((0,_.qu)(!1,"date chagned: ",e),E((0,r.default)(e,"yyyy-LL-dd")))},onCoverClicked:()=>{let e=N.split(":");t.push("/diary/d:".concat(e[1],":").concat(e[2],":").concat(e[3],"?initialDisplay=cover"))},onContentsClicked:()=>{let e=N.split(":");t.push("/diary/contents/d:".concat(e[1],":").concat(e[2],":").concat(e[3]))}}),(0,n.jsx)("br",{}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(c.Z,{lg:{span:10,offset:1},children:(0,n.jsxs)("div",{className:"".concat(f().pagePanel," ").concat(f().diaryPanel," ").concat(Z),children:[(0,n.jsx)(j.Z,{}),(0,n.jsx)(l.Z,{className:"mt-5",children:(0,n.jsxs)(c.Z,{xs:12,sm:{span:10,offset:1},md:{span:10,offset:1},children:[v&&(0,n.jsx)("h2",{children:v}),(0,n.jsx)("h4",{children:y&&(0,r.default)(y,"EEEE, LLL. dd, yyyy")})]})}),(0,n.jsx)(m.Z,{})]})})}),(0,n.jsx)(L.Z,{onNextClicked:()=>{(0,_.qu)(!1,"Next Page "),E("+1")},onPreviousClicked:()=>{(0,_.qu)(!1,"Previous Page "),E("-1")}})]})}),(0,n.jsx)(p.Z,{})]})}}},function(e){e.O(0,[571,6760,6743,2890,416,9198,1243,6536,3362,8370,9774,2888,179],function(){return e(e.s=50517)}),_N_E=e.O()}]);