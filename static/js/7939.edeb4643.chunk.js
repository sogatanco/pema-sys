"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[7939],{37939:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(72791),s=r(11087),l=r(76807),i=r(43464),a=r(49037),c=r(14448),o=r(16354),d=r(48089),u=r(80184);const h=()=>{const[e,t]=(0,n.useState)([]),r=(0,d.Z)(),{isLoading:h,error:p,data:f}=(0,l.a)({queryKey:["general-list-company"],queryFn:()=>r.get("dapi/vendor/company").then((e=>e.data.data))});(0,n.useEffect)((()=>{t(f)}),[f]);return(0,u.jsx)(i.Z,{children:(0,u.jsxs)(a.Z,{children:[(0,u.jsxs)("div",{className:"d-flex justify-content-between mb-4",children:[(0,u.jsx)(c.Z,{tag:"h4",children:"List Of Vendors"}),(0,u.jsx)("div",{className:"md-6",children:(0,u.jsx)("input",{type:"search",className:"form-control w-100",placeholder:"Cari",onChange:e=>(e=>{const r=f.filter((t=>t.nama_perusahaan.toLowerCase().includes(e.toLowerCase())));t(r)})(e.target.value)})})]}),h?(0,u.jsx)("p",{className:"text-center",children:"Loading.."}):p?(0,u.jsx)("p",{className:"text-center",children:"Something went wrong."}):(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)("table",{className:"table table-bordered table-hover",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{width:"50",style:{textAlign:"center"},children:"ID"}),(0,u.jsx)("th",{width:"420",style:{textAlign:"center"},children:"Vendor"}),(0,u.jsx)("th",{style:{textAlign:"center"},children:"Email"}),(0,u.jsx)("th",{style:{textAlign:"center"},children:"Phone Number"}),(0,u.jsx)("th",{style:{textAlign:"center"},children:"Status"}),(0,u.jsx)("th",{style:{textAlign:"center"},children:"Action"})]})}),(0,u.jsx)("tbody",{children:(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map(((e,t)=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{style:{verticalAlign:"middle",textAlign:"center"},children:t+1}),(0,u.jsx)("td",{children:(0,u.jsxs)("div",{className:"d-flex flex-column gap-0",children:[(0,u.jsx)("span",{className:"fw-bold",style:{fontSize:"16px"},children:`${e.bentuk_usaha} ${e.nama_perusahaan}`}),(0,u.jsx)("span",{className:"text-muted mb-0",children:e.tipe})]})}),(0,u.jsx)("td",{style:{verticalAlign:"middle"},children:e.email===e.email_alternatif?e.email:(0,u.jsxs)("div",{className:"d-flex flex-column",children:[(0,u.jsx)("span",{children:e.email}),(0,u.jsx)("span",{children:e.email_alternatif})]})}),(0,u.jsx)("td",{style:{verticalAlign:"middle"},children:e.hp}),(0,u.jsxs)("td",{style:{verticalAlign:"middle",textAlign:"center"},children:[null===e.status_verifikasi&&(0,u.jsx)(o.Z,{color:"primary",children:"Register"}),"terverifikasi"===e.status_verifikasi&&(0,u.jsx)(o.Z,{color:"success",children:"Terverifikasi"}),"revisi"===e.status_verifikasi&&(0,u.jsx)(o.Z,{color:"warning",children:"Revisi Data"})]}),(0,u.jsx)("td",{style:{verticalAlign:"middle"},children:(0,u.jsx)(s.rU,{to:`/vendor/requests/check/${e.id}`,children:(0,u.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-sm",style:{width:"100%"},children:"Detail"})})})]},e.id))):(0,u.jsx)("tr",{children:(0,u.jsx)("td",{colSpan:6,style:{textAlign:"center"},children:"No Data"})})})]})})]})})},p=()=>(0,u.jsx)(h,{})},16354:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(72791),s=r(52007),l=r.n(s),i=r(81694),a=r.n(i),c=r(9622),o=["className","cssModule","color","innerRef","pill","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var h={children:l().node,className:l().string,color:l().string,cssModule:l().object,innerRef:l().oneOfType([l().object,l().func,l().string]),pill:l().bool,tag:c.iC};function p(e){var t=e.className,r=e.cssModule,s=e.color,l=void 0===s?"secondary":s,i=e.innerRef,h=e.pill,p=void 0!==h&&h,f=e.tag,x=void 0===f?"span":f,m=u(e,o),g=(0,c.mx)(a()(t,"badge","bg-"+l,!!p&&"rounded-pill"),r);return m.href&&"span"===x&&(x="a"),n.createElement(x,d({},m,{className:g,ref:i}))}p.propTypes=h;const f=p},14448:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(72791),s=r(52007),l=r.n(s),i=r(81694),a=r.n(i),c=r(9622),o=["className","cssModule","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var h={className:l().string,cssModule:l().object,tag:c.iC};function p(e){var t=e.className,r=e.cssModule,s=e.tag,l=void 0===s?"div":s,i=u(e,o),h=(0,c.mx)(a()(t,"card-title"),r);return n.createElement(l,d({},i,{className:h}))}p.propTypes=h;const f=p},76807:(e,t,r)=>{r.d(t,{a:()=>p});var n=r(73734),s=r(21135),l=r(72791),i=r(69538),a=r(97413),c=r(76153),o=r(96403),d=r(30909),u=r(49952),h=r(38447);function p(e,t,r){return function(e,t){const r=(0,o.NL)({context:e.context}),n=(0,d.S)(),s=(0,c._)(),p=r.defaultQueryOptions(e);p._optimisticResults=n?"isRestoring":"optimistic",p.onError&&(p.onError=i.V.batchCalls(p.onError)),p.onSuccess&&(p.onSuccess=i.V.batchCalls(p.onSuccess)),p.onSettled&&(p.onSettled=i.V.batchCalls(p.onSettled)),(0,h.Fb)(p),(0,u.pf)(p,s),(0,u.JN)(s);const[f]=l.useState((()=>new t(r,p))),x=f.getOptimisticResult(p);if((0,a.$)(l.useCallback((e=>{const t=n?()=>{}:f.subscribe(i.V.batchCalls(e));return f.updateResult(),t}),[f,n]),(()=>f.getCurrentResult()),(()=>f.getCurrentResult())),l.useEffect((()=>{f.setOptions(p,{listeners:!1})}),[p,f]),(0,h.SB)(p,x,n))throw(0,h.j8)(p,f,s);if((0,u.KJ)({result:x,errorResetBoundary:s,useErrorBoundary:p.useErrorBoundary,query:f.getCurrentQuery()}))throw x.error;return p.notifyOnChangeProps?x:f.trackResult(x)}((0,n._v)(e,t,r),s.z)}}}]);
//# sourceMappingURL=7939.edeb4643.chunk.js.map