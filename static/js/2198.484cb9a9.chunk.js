"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[2198],{31043:(e,t,s)=>{s.d(t,{F:()=>a,Z:()=>i});s(72791);var r=s(65218),n=s(80184);const a=()=>(0,n.jsx)(r.x7,{toastOptions:{className:"",style:{}}}),i=(e,t)=>{((e,t)=>{"success"===e?r.ZP.success(t):"create"===e?(0,r.ZP)(t,{icon:"\ud83e\udd17"}):"start"===e?(0,r.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,r.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):r.ZP.error(t)})(e,t)}},22198:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var r=s(72791),n=s(16354),a=s(43464),i=s(49037),l=s(63009),o=s(39773),c=s(19127),d=s(71513),u=s(46724),h=s(55211),p=s(94938),v=s(8118),m=s(76167),g=s(42976),b=s(55472),f=s(30690),j=s.n(f),x=s(90235),y=s(43513),O=s(10829),Z=s(57689),N=s(48089),w=s(17834),_=s(23606),P=(s(87369),s(31043)),C=s(80184);const S=(0,x.ZP)(),k=()=>{var e,t,s,f,x,k,R,E,q,A,D,M,L,Q,$,T,z;const{auth:I}=(0,w.Z)(),F=(0,r.useRef)(null),{assetId:H}=(0,Z.UO)(),[U,V]=(0,r.useState)(!1),[B,K]=(0,r.useState)(!1),[J,G]=(0,r.useState)(!1),[W,X]=(0,r.useState)([]),[Y,ee]=(0,r.useState)(),[te,se]=(0,r.useState)([]),[re,ne]=(0,r.useState)(""),[ae,ie]=(0,r.useState)(""),[le,oe]=(0,r.useState)(""),[ce,de]=(0,r.useState)(""),[ue,he]=(0,r.useState)(""),[pe,ve]=(0,r.useState)(""),[me]=(0,r.useState)(new Date),ge=(0,N.Z)(),be=(0,O.h)({queries:[{queryKey:["assetDetail",0],queryFn:()=>ge.get(`dapi/inven/${H}`).then((e=>(console.log(e.data.data),e.data.data)))},{queryKey:["assigne",1],queryFn:()=>ge.get("api/employe/assignment-list?search=all").then((e=>e.data.data))}]}),{refetch:fe}=be[0],je=()=>{K(!B)},xe=()=>{if(G(!J),!J){var e,t,s;ie(be[0].data.name),oe(be[0].data.price),de(be[0].data.vendor),he(be[0].data.acquisition),ve(be[0].data.location);const r=[];null===(e=be[0])||void 0===e||null===(t=e.data)||void 0===t||null===(s=t.responsible_list)||void 0===s||s.map((e=>r.push({label:e.first_name,value:e.employe_id}))),X(r)}},ye=(e,t)=>{if(V(!U),!U){ee(e);const s=[];null===t||void 0===t||t.map((e=>s.push({label:e.first_name,value:e.employe_id}))),X(s)}},Oe=e=>{X(e)},Ze={weekday:"long",year:"numeric",month:"short",day:"numeric"},Ne=[{name:"Asset Number",selector:e=>e.asset_number},{name:"Responsible",selector:e=>{var t;return(0,C.jsxs)(C.Fragment,{children:[I.user.roles.includes("PicAsset")?(0,C.jsx)(n.Z,{color:"warning",onClick:()=>ye(null===e||void 0===e?void 0:e.id,null===e||void 0===e?void 0:e.res_list),className:"ms-2",children:"+ add"}):"",null===e||void 0===e||null===(t=e.res_list)||void 0===t?void 0:t.map((e=>(0,C.jsx)(n.Z,{color:"primary",className:"ms-2",children:null===e||void 0===e?void 0:e.first_name},null===e||void 0===e?void 0:e.employe_id)))]})}},{name:"Last Udpate",selector:e=>`${new Date(e.updated_at).toLocaleDateString("en-us",Ze)} ${new Date(e.updated_at).toLocaleTimeString()} `}];(0,r.useEffect)((()=>{var e;fe(),console.log(null===(e=be[0])||void 0===e?void 0:e.data)}),[H]);const we={id:0,responsible:""},_e=e=>{var t;(t=e.target.files[0],new Promise((e=>{let s="";const r=new FileReader;r.readAsDataURL(t),r.onload=()=>{s=r.result,e(s)}}))).then((e=>{(async e=>{const t={id:H,file:e};await ge.post("dapi/inven/update/image",t).then((e=>{var t,s;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.success?((0,P.Z)("success",`${null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.message}`),fe(),me(new Date)):(0,P.Z)("error","failed !!")})).catch((e=>{(0,P.Z)("error",e)}))})(e)})).catch((e=>{console.log(e)}))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a.Z,{children:(0,C.jsxs)(i.Z,{children:[(0,C.jsxs)(l.Z,{className:"content",children:[(0,C.jsx)(o.Z,{sm:"12",lg:"5",className:" py-4 image",style:{backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:`url(${null===(e=be[0])||void 0===e||null===(t=e.data)||void 0===t?void 0:t.file_image})`},children:I.user.roles.includes("PicAsset")?(0,C.jsx)("div",{className:"d-flex justify-content-end",children:(0,C.jsx)(c.Z,{color:"dark",outline:!0,className:"pb-0",size:"sm",onClick:()=>{F.current.click()},children:(0,C.jsx)(j(),{icon:"photo_camera"})})}):""}),(0,C.jsxs)(o.Z,{sm:"12",lg:"7",className:"py-4 text",children:[(0,C.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,C.jsx)("h2",{className:"text-bold mb-0",children:null===(s=be[0].data)||void 0===s?void 0:s.name}),I.user.roles.includes("PicAsset")?(0,C.jsx)(c.Z,{color:"dark",size:"sm",outline:!0,className:"pb-0",onClick:xe,children:(0,C.jsx)(j(),{icon:"mode_edit"})}):""]}),(0,C.jsx)("hr",{}),(0,C.jsx)("table",{className:"w-100",children:(0,C.jsxs)("tbody",{children:[(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:"Parent Asset Number"}),(0,C.jsx)("td",{className:"text-end",children:null===(f=be[0].data)||void 0===f?void 0:f.asset_number})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:"Type"}),(0,C.jsx)("td",{className:"text-end",children:null===(x=be[0].data)||void 0===x?void 0:x.type_name})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:"Acquisition Price"}),(0,C.jsx)("td",{className:"text-end",children:(0,_.Z)(null===(k=be[0].data)||void 0===k?void 0:k.price)})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:"Current Asset Value"}),(0,C.jsx)("td",{className:"text-end",children:(0,_.Z)(null===(R=be[0].data)||void 0===R?void 0:R.current)})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:"Vendor"}),(0,C.jsx)("td",{className:"text-end",children:null===(E=be[0].data)||void 0===E?void 0:E.vendor})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:"Acquisition Time"}),(0,C.jsx)("td",{className:"text-end",children:null===(q=be[0].data)||void 0===q?void 0:q.acquisition})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:"Age "}),(0,C.jsx)("td",{className:"text-end",children:null===(A=be[0].data)||void 0===A?void 0:A.old})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:"Amount "}),(0,C.jsxs)("td",{className:"text-end",children:[null===(D=be[0].data)||void 0===D?void 0:D.amount," items"]})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:"Location "}),(0,C.jsx)("td",{className:"text-end",children:null===(M=be[0].data)||void 0===M?void 0:M.location})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:"Last Update"}),(0,C.jsx)("td",{className:"text-end",children:`${new Date(null===(L=be[0].data)||void 0===L?void 0:L.updated_at).toLocaleDateString("en-us",Ze)} ${new Date(null===(Q=be[0].data)||void 0===Q?void 0:Q.updated_at).toLocaleTimeString()}`})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:"Responsible "}),(0,C.jsx)("td",{className:"text-end",children:null===($=be[0].data)||void 0===$||null===(T=$.responsible_list)||void 0===T?void 0:T.map((e=>(0,C.jsx)(n.Z,{color:"primary",className:"ms-2",children:null===e||void 0===e?void 0:e.first_name},null===e||void 0===e?void 0:e.employe_id)))})]})]})})]})]}),(0,C.jsx)(y.ZP,{className:"mt-0",columns:Ne,data:null===(z=be[0].data)||void 0===z?void 0:z.child,pagination:!0,selectableRows:!!I.user.roles.includes("PicAsset")||"",onSelectedRowsChange:e=>{let{selectedRows:t}=e;se(t)},subHeader:!0,subHeaderComponent:I.user.roles.includes("PicAsset")?(0,C.jsxs)(d.Z,{className:"me-auto mt-5",size:"sm",children:[(0,C.jsx)(c.Z,{className:"pb-0",outline:!0,disabled:0===(null===te||void 0===te?void 0:te.length),onClick:async()=>{await ge.post("dapi/inven/child/del",{data:te}).then((e=>{var t,s,r;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.success?((0,P.Z)("success",`${null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.message}`),fe(),se([])):(0,P.Z)("error",`${null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message}`)})).catch((e=>{ye(),se([]),(0,P.Z)("error",e)}))},children:(0,C.jsx)(j(),{icon:"delete_forever"})}),(0,C.jsx)(c.Z,{outline:!0,color:"success",onClick:je,children:"+ Add Child"})]}):""})]})}),(0,C.jsxs)(u.Z,{isOpen:U,toggle:ye,children:[(0,C.jsx)(h.Z,{toggle:ye,children:"Add Another Employee"}),(0,C.jsxs)(p.Z,{children:[(0,C.jsx)(b.ZP,{components:S,isMulti:!0,value:W,options:be[1].data,onChange:Oe,isClearable:W.some((e=>!e.isFixed))}),(0,C.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,C.jsx)(c.Z,{onClick:()=>(async()=>{const e=[];null===W||void 0===W||W.map((t=>e.push(`//${t.value}//`))),we.id=Y,we.responsible=e.toLocaleString(),await ge.post("dapi/inven/child/update",we).then((e=>{var t;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.success&&(ye(),fe())})).catch((e=>{ye(),(0,P.Z)("error",e)}))})(),children:"Update Data"})})]})]}),(0,C.jsxs)(u.Z,{isOpen:B,toggle:je,children:[(0,C.jsx)(h.Z,{toggle:je,children:"Set Number Of Child"}),(0,C.jsxs)(p.Z,{children:[(0,C.jsx)(v.Z,{type:"number",min:"1",onChange:e=>ne(e.target.value)}),(0,C.jsx)("div",{className:"d-grid gap-2 mt-3",children:(0,C.jsx)(c.Z,{onClick:()=>(async()=>{const e={id_parent:+H,amount:+re};console.log(e),await ge.post("dapi/inven/child/add",e).then((e=>{var t;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.success&&(je(),fe(),(0,P.Z)("success","added succesfully !"))})).catch((e=>{je(),(0,P.Z)("error",e)}))})(),children:"Add Childs"})})]})]}),(0,C.jsxs)(u.Z,{isOpen:J,toggle:xe,children:[(0,C.jsx)(h.Z,{toggle:xe,children:"New Inventory Data"}),(0,C.jsxs)(p.Z,{children:[(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(g.Z,{for:"in_name",children:"Inventory Name"}),(0,C.jsx)(v.Z,{id:"in_name",name:"in_name",type:"text",onChange:e=>ie(e.target.value),value:ae})]}),(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(g.Z,{for:"in_harga_beli",children:"Purchase Price"}),(0,C.jsx)(v.Z,{id:"in_harga_beli",name:"in_harga_beli",type:"number",onChange:e=>oe(e.target.value),value:le})]}),(0,C.jsxs)(m.Z,{children:[(0,C.jsxs)(g.Z,{for:"in_vendor",children:["Vendor ",(0,C.jsx)("small",{children:"(optional)"})]}),(0,C.jsx)(v.Z,{id:"in_vendor",name:"in_vendor",type:"text",accept:"image/*",onChange:e=>de(e.target.value),value:ce})]}),(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(g.Z,{for:"time",children:"Acquisition Time"}),(0,C.jsx)(v.Z,{id:"time",name:"date",placeholder:"date placeholder",type:"date",onChange:e=>he(e.target.value),value:ue})]}),(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(g.Z,{for:"in_location",children:"Detail Location"}),(0,C.jsx)(v.Z,{id:"in_location",name:"in_location",type:"textarea",onChange:e=>ve(e.target.value),value:pe})]}),(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(g.Z,{for:"in_harga_beli",children:"Responsible"}),(0,C.jsx)(b.ZP,{components:S,isMulti:!0,value:W,options:be[1].data,onChange:Oe})]}),(0,C.jsx)(m.Z,{children:(0,C.jsx)("div",{className:"d-grid gap-2 mt-4",children:(0,C.jsx)(c.Z,{type:"submit",onClick:async()=>{const e=[];null===W||void 0===W||W.map((t=>e.push(`//${t.value}//`)));const t={id:H,name:ae,price:le,vendor:ce,acquisition:ue,location:pe,responsible:e.toLocaleString()};await ge.post("dapi/inven/update",t).then((e=>{var t,s,r;(xe(),null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.success)?((0,P.Z)("success",`${null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.message}`),fe()):(0,P.Z)("error",`${null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message}`)})).catch((e=>{xe(),(0,P.Z)("error",e)})),console.log(t)},children:"Save Data"})})})]})]}),(0,C.jsx)("input",{style:{display:"none"},ref:F,type:"file",accept:"image/*",onChange:e=>_e(e)})]})}},23606:(e,t,s)=>{s.d(t,{Z:()=>r});const r=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e)},16354:(e,t,s)=>{s.d(t,{Z:()=>v});var r=s(72791),n=s(52007),a=s.n(n),i=s(81694),l=s.n(i),o=s(9622),c=["className","cssModule","color","innerRef","pill","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var h={children:a().node,className:a().string,color:a().string,cssModule:a().object,innerRef:a().oneOfType([a().object,a().func,a().string]),pill:a().bool,tag:o.iC};function p(e){var t=e.className,s=e.cssModule,n=e.color,a=void 0===n?"secondary":n,i=e.innerRef,h=e.pill,p=void 0!==h&&h,v=e.tag,m=void 0===v?"span":v,g=u(e,c),b=(0,o.mx)(l()(t,"badge","bg-"+a,!!p&&"rounded-pill"),s);return g.href&&"span"===m&&(m="a"),r.createElement(m,d({},g,{className:b,ref:i}))}p.propTypes=h;const v=p},71513:(e,t,s)=>{s.d(t,{Z:()=>g});var r=s(72791),n=s(52007),a=s.n(n),i=s(81694),l=s.n(i),o=s(9622),c=["className","cssModule","size","vertical","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},d.apply(this,arguments)}function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function h(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function p(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var v={"aria-label":a().string,className:a().string,cssModule:a().object,role:a().string,size:a().string,tag:o.iC,vertical:a().bool};function m(e){var t=e.className,s=e.cssModule,n=e.size,a=e.vertical,i=e.tag,v=void 0===i?"div":i,m=p(e,c),g=(0,o.mx)(l()(t,!!n&&"btn-group-"+n,a?"btn-group-vertical":"btn-group"),s);return r.createElement(v,d({},function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){h(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({role:"group"},m),{className:g}))}m.propTypes=v;const g=m},55211:(e,t,s)=>{s.d(t,{Z:()=>v});var r=s(72791),n=s(52007),a=s.n(n),i=s(81694),l=s.n(i),o=s(9622),c=["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","close"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var h={children:a().node,className:a().string,close:a().object,closeAriaLabel:a().string,cssModule:a().object,tag:o.iC,toggle:a().func,wrapTag:o.iC};function p(e){var t,s=e.className,n=e.cssModule,a=e.children,i=e.toggle,h=e.tag,p=void 0===h?"h5":h,v=e.wrapTag,m=void 0===v?"div":v,g=e.closeAriaLabel,b=void 0===g?"Close":g,f=e.close,j=u(e,c),x=(0,o.mx)(l()(s,"modal-header"),n);return!f&&i&&(t=r.createElement("button",{type:"button",onClick:i,className:(0,o.mx)("btn-close",n),"aria-label":b})),r.createElement(m,d({},j,{className:x}),r.createElement(p,{className:(0,o.mx)("modal-title",n)},a),f||t)}p.propTypes=h;const v=p},87369:()=>{},10829:(e,t,s)=>{s.d(t,{h:()=>m});var r=s(72791),n=s(73734),a=s(69538),i=s(21135),l=s(55511);class o extends l.l{constructor(e,t){super(),this.client=e,this.queries=[],this.result=[],this.observers=[],this.observersMap={},t&&this.setQueries(t)}onSubscribe(){1===this.listeners.size&&this.observers.forEach((e=>{e.subscribe((t=>{this.onUpdate(e,t)}))}))}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.observers.forEach((e=>{e.destroy()}))}setQueries(e,t){this.queries=e,a.V.batch((()=>{const e=this.observers,s=this.findMatchingObservers(this.queries);s.forEach((e=>e.observer.setOptions(e.defaultedQueryOptions,t)));const r=s.map((e=>e.observer)),a=Object.fromEntries(r.map((e=>[e.options.queryHash,e]))),i=r.map((e=>e.getCurrentResult())),l=r.some(((t,s)=>t!==e[s]));(e.length!==r.length||l)&&(this.observers=r,this.observersMap=a,this.result=i,this.hasListeners()&&((0,n.e5)(e,r).forEach((e=>{e.destroy()})),(0,n.e5)(r,e).forEach((e=>{e.subscribe((t=>{this.onUpdate(e,t)}))})),this.notify()))}))}getCurrentResult(){return this.result}getQueries(){return this.observers.map((e=>e.getCurrentQuery()))}getObservers(){return this.observers}getOptimisticResult(e){return this.findMatchingObservers(e).map((e=>e.observer.getOptimisticResult(e.defaultedQueryOptions)))}findMatchingObservers(e){const t=this.observers,s=new Map(t.map((e=>[e.options.queryHash,e]))),r=e.map((e=>this.client.defaultQueryOptions(e))),n=r.flatMap((e=>{const t=s.get(e.queryHash);return null!=t?[{defaultedQueryOptions:e,observer:t}]:[]})),a=new Set(n.map((e=>e.defaultedQueryOptions.queryHash))),l=r.filter((e=>!a.has(e.queryHash))),o=new Set(n.map((e=>e.observer))),c=t.filter((e=>!o.has(e))),d=e=>{const t=this.client.defaultQueryOptions(e),s=this.observersMap[t.queryHash];return null!=s?s:new i.z(this.client,t)},u=l.map(((e,t)=>{if(e.keepPreviousData){const s=c[t];if(void 0!==s)return{defaultedQueryOptions:e,observer:s}}return{defaultedQueryOptions:e,observer:d(e)}}));return n.concat(u).sort(((e,t)=>r.indexOf(e.defaultedQueryOptions)-r.indexOf(t.defaultedQueryOptions)))}onUpdate(e,t){const s=this.observers.indexOf(e);-1!==s&&(this.result=(0,n.Rc)(this.result,s,t),this.notify())}notify(){a.V.batch((()=>{this.listeners.forEach((e=>{let{listener:t}=e;t(this.result)}))}))}}var c=s(97413),d=s(96403),u=s(30909),h=s(76153),p=s(49952),v=s(38447);function m(e){let{queries:t,context:s}=e;const n=(0,d.NL)({context:s}),i=(0,u.S)(),l=(0,h._)(),m=r.useMemo((()=>t.map((e=>{const t=n.defaultQueryOptions(e);return t._optimisticResults=i?"isRestoring":"optimistic",t}))),[t,n,i]);m.forEach((e=>{(0,v.Fb)(e),(0,p.pf)(e,l)})),(0,p.JN)(l);const[g]=r.useState((()=>new o(n,m))),b=g.getOptimisticResult(m);(0,c.$)(r.useCallback((e=>i?()=>{}:g.subscribe(a.V.batchCalls(e))),[g,i]),(()=>g.getCurrentResult()),(()=>g.getCurrentResult())),r.useEffect((()=>{g.setQueries(m,{listeners:!1})}),[m,g]);const f=b.some(((e,t)=>(0,v.SB)(m[t],e,i)))?b.flatMap(((e,t)=>{const s=m[t],r=g.getObservers()[t];if(s&&r){if((0,v.SB)(s,e,i))return(0,v.j8)(s,r,l);(0,v.Z$)(e,i)&&(0,v.j8)(s,r,l)}return[]})):[];if(f.length>0)throw Promise.all(f);const j=g.getQueries(),x=b.find(((e,t)=>{var s,r;return(0,p.KJ)({result:e,errorResetBoundary:l,useErrorBoundary:null!=(s=null==(r=m[t])?void 0:r.useErrorBoundary)&&s,query:j[t]})}));if(null!=x&&x.error)throw x.error;return b}}}]);
//# sourceMappingURL=2198.484cb9a9.chunk.js.map