"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[6217],{57354:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var i=a(72791),r=a(57689),n=a(11087),o=a(30690),s=a.n(o),l=a(16354),d=a(33237),c=a(97892),p=a.n(c),u=(a(75391),a(48089)),m=a(94061),g=a(94113),h=a(88009),f=a(31043),v=a(80184);const b=()=>{const e=(0,i.useRef)(),{idDoc:t}=(0,r.UO)(),[a]=(0,n.lr)(),o=a.get("type"),[c,b]=(0,i.useState)(!1),[y,x]=(0,i.useState)(!1),[j,w]=(0,i.useState)(!1),[E,N]=(0,i.useState)(),k=(0,u.Z)();(0,i.useEffect)((()=>{!async function(){x(!0),await k.post(`dapi/verif/${t}`,{type:o}).then((e=>{console.log(e.data.data),"approve"===e.data.data.status?(x(!1),N(e.data.data)):(b(!0),x(!1))})).catch((()=>{b(!0),x(!1)}))}()}),[]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"verified-status",children:(0,v.jsx)("div",{className:"content-status",children:y?(0,v.jsx)("h5",{children:"Loading..."}):c||null===E?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{src:m,alt:"logo"}),(0,v.jsxs)("div",{className:"verified",children:[(0,v.jsxs)("div",{className:"icon-close",children:[(0,v.jsx)("br",{}),"  ",(0,v.jsx)("br",{}),(0,v.jsx)(s(),{icon:"close"})]}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{style:{marginBottom:"-10px",textTransform:"uppercase"},children:(0,v.jsxs)("strong",{children:[" Dokumen ",null===E||void 0===E?void 0:E.jenis_name]})}),(0,v.jsx)("span",{className:"small mt-0",children:"ini tidak terdaftar di database kami"})]}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),(0,v.jsxs)("div",{className:"copyright",children:[(0,v.jsx)("span",{children:"DOCUMENT VERIFICATION SYSTEM"}),(0,v.jsxs)("span",{children:["\xa9 ",(new Date).getFullYear()," PT Pembangunan Aceh"]})]}),(0,v.jsx)("br",{})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{src:m,alt:"logo"}),(0,v.jsxs)("div",{className:"verified",children:[(0,v.jsx)("div",{className:"icon-check",children:(0,v.jsx)(s(),{icon:"check"})}),(0,v.jsx)("span",{style:{marginBottom:"-10px",textTransform:"uppercase"},children:(0,v.jsxs)("strong",{children:[" Dokumen ",null===E||void 0===E?void 0:E.jenis_name]})}),(0,v.jsx)("span",{className:"small mt-0",children:"ini benar telah ditandatangani"})]}),(0,v.jsxs)("div",{className:"spda-status-container",children:[(0,v.jsxs)("div",{className:"no-spda",children:[(0,v.jsx)("span",{children:"oleh"}),(0,v.jsx)("span",{children:null===E||void 0===E?void 0:E.employe_name})]}),(0,v.jsxs)("div",{className:"spda-status",children:[(0,v.jsx)("span",{children:"sebagai"}),(0,v.jsx)("span",{children:null===E||void 0===E?void 0:E.id_current_position})]}),(0,v.jsxs)("div",{className:"spda-status",children:[(0,v.jsx)("span",{children:"Pada"}),(0,v.jsx)("span",{children:p()(null===E||void 0===E?void 0:E.updated_at).locale("id").format("dddd, DD MMMM YYYY")||""})]})]}),2===(null===E||void 0===E?void 0:E.jenis_doc)&&(0,v.jsxs)(l.Z,{color:"info",style:{zIndex:3,cursor:"pointer"},onClick:()=>(async()=>{var t;w(!0);const a=await(0,h.Z)(null===E||void 0===E?void 0:E.detail,e);(0,g.Z)(a,null===E||void 0===E||null===(t=E.detail)||void 0===t?void 0:t.fileLampiran).then((e=>{const t=window.open(e,"_blank");t&&!t.closed&&"undefined"!==typeof t.closed||(0,f.Z)(!0,"Surat berhasil diunduh"),URL.revokeObjectURL(e),w(!1)}))})(),children:[" ",j?"Loading...":"Lihat Surat"," "]}),(0,v.jsx)("br",{}),(0,v.jsxs)("div",{className:"copyright",children:[(0,v.jsx)("span",{children:"DOCUMENT VERIFICATION SYSTEM"}),(0,v.jsxs)("span",{children:["\xa9 ",(new Date).getFullYear()," PT Pembangunan Aceh"]})]})]})})}),(0,v.jsx)("div",{ref:e,style:{display:"none"},children:(0,v.jsx)(d.QRCode,{value:`https://sys.ptpema.co.id/verification/${null===E||void 0===E?void 0:E.no_document}?type=sign`,size:400,qrStyle:"dots",logoImage:m,logoWidth:100,logoHeight:100,eyeRadius:20,fgColor:"#0F52BA"})})]})}},94113:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(36963);const r=async(e,t)=>{if(!t){const t=Uint8Array.from(atob(e),(e=>e.charCodeAt(0))),a=new Blob([t],{type:"application/pdf"});return URL.createObjectURL(a)}const a=new Uint8Array(atob(e).split("").map((e=>e.charCodeAt(0)))),r=new Uint8Array(atob(t).split("").map((e=>e.charCodeAt(0)))),n=await(async(e,t)=>{const a=await i.PDFDocument.create(),r=await i.PDFDocument.load(e),n=await i.PDFDocument.load(t),o=await a.copyPages(r,r.getPageIndices()),s=await a.copyPages(n,n.getPageIndices());o.forEach((e=>{a.addPage(e)})),s.forEach((e=>{a.addPage(e)}));return await a.save()})(a,r),o=new Blob([n],{type:"application/pdf"});return URL.createObjectURL(o)}},88009:(e,t,a)=>{a.d(t,{Z:()=>d});var i=a(66435),r=a(59437),n=a.n(r),o=a(74228);const s=function(e){const t=["Nol","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"];if(e<12)return t[e];const a=["","Belas","Puluh","Ratus","Ribu","Juta","Miliar","Triliun"];let i="";const r=e.toString(),n=null===r||void 0===r?void 0:r.length;if(n>12)return"Angka terlalu besar";for(let o=0;o<n;o++){const e=parseInt(r.charAt(o),10),s=n-o-1;if(0===e&&(i+=""),1===s&&1===e&&"0"!==r.charAt(o+1)){i+=" Sebelas";break}i+=` ${t[e]} ${a[s]}`}return i.trim()},l=a(64073),d=(e,t)=>new Promise(((a,r)=>{i.vfs=l.pdfMake.vfs,i.fonts={Archivo:{normal:"Archivo-Regular.ttf",bold:"Archivo-SemiBold.ttf",italics:"Archivo-Italic.ttf",bolditalics:"Archivo-SemiBoldItalic.ttf"}};const d=`<p style="margin-bottom:5px">Banda Aceh, ${new Intl.DateTimeFormat("id-ID",{day:"2-digit",month:"long",year:"numeric"}).format(new Date(null===e||void 0===e?void 0:e.tglSurat))}</p>  \n      \n        <table style="border-collapse: collapse; width: 100%; border: 0px;" border="1"; padding="0";><colgroup><col style="width: 13%;"><col style="width: 2%;"><col style="width: 85%;"></colgroup>\n        <tbody>\n          <tr style="margin-left:-5">\n            <td style="vertical-align: top; border: 0px; line-height: 1.2; " >Nomor</td>\n            <td style="vertical-align: top; border: 0px; line-height: 1.2;" >:</td>\n            <td style="vertical-align: top; border: 0px; line-height: 1.2;">${null===e||void 0===e?void 0:e.nomorSurat}</td>\n          </tr>\n          <tr style="margin-left:-5">\n            <td style="vertical-align: top; border: 0px; line-height: 1.2;">Lampiran</td>\n            <td style="vertical-align: top; border: 0px; line-height: 1.2;">:</td>\n            <td style="vertical-align: top; border: 0px; line-height: 1.2;">${Number(null===e||void 0===e?void 0:e.lampiran)>0?`${null===e||void 0===e?void 0:e.lampiran} (${s(Number(null===e||void 0===e?void 0:e.lampiran))}) ${(null===e||void 0===e?void 0:e.jenisLampiran)||" Eks"}`:"-"}</td>\n          </tr>\n          <tr style="margin-left:-5">\n            <td style="vertical-align: top; border: 0px; line-height: 1.2;">Perihal</td>\n            <td style="vertical-align: top; border: 0px; line-height: 1.2;">:</td>\n            <td style="vertical-align: top; border: 0px; line-height: 1.2;">${null===e||void 0===e?void 0:e.perihal}</td>\n          </tr>\n        </tbody>\n      </table>\n\n        <div style="line-height: 1.2; margin-top:3; margin-bottom:-12">Kepada Yth<br>\n            <strong style="line-height: 0.9!important;">${null===e||void 0===e?void 0:e.kepada}</strong><br>\n            di - <br>\n            <span>          Tempat</span>\n        </div>\n       <span style="line-height: 1.3; text-align:justify">  ${null===e||void 0===e?void 0:e.isiSurat}</span>\n  \n      `;if(t.current){const s=t.current.querySelector("canvas");if(s){var c,p,u;const t=s.toDataURL(),l={pageOrientation:"portrait",pageSize:"A4",pageMargins:[50,70,50,70],content:[n()(d,{defaultStyles:{p:{margin:[0,3,0,-12]},td:{verticalAlign:"top",marginBottom:-4,heigt:"auto"},ol:{margin:[0,0,0,-15],padding:[0,0,0,0]},ul:{margin:[0,0,0,-15],padding:[0,0,0,0]},li:{marginBottom:2},tr:{margin:[-5,0,0,0]},table:{margin:[0,-3,0,-7],width:"100%"},br:{margin:[0,0,0,0]}},tableAutoSize:!0}),{stack:[{text:"Hormat Kami, ",style:"normal"},{text:"PT PEMBANGUNAN ACEH",style:"boldText"},{image:`${"signed"===(null===e||void 0===e?void 0:e.status)?t:o.Z.placeholder}`,width:60},{text:`${null===e||void 0===e||null===(c=e.signer)||void 0===c?void 0:c.first_name}`,style:"boldText"},{text:`${null===e||void 0===e||null===(p=e.signer)||void 0===p?void 0:p.position_name}`,style:"normal"}],unbreakable:!0,margin:[0,10]},{text:(null===e||void 0===e||null===(u=e.tembusans)||void 0===u?void 0:u.length)>0?"Tembusan Yth : ":"",style:"normal"},{ol:null===e||void 0===e?void 0:e.tembusans}],background:()=>null!==e&&void 0!==e&&e.draft?{image:o.Z.draft,width:300,height:300,opacity:.2,marginTop:250,marginLeft:150}:"",styles:{boldText:{bold:!0}},images:d.images,header:e=>1!==e?{text:""}:{image:o.Z.headSurat,width:"595"},footer:(e,t)=>e!==t?{text:""}:{image:o.Z.footSurat,width:"595"},defaultStyle:{font:"Archivo",fontSize:10,color:"#000",ol:{margin:[0,0,0,0],padding:[0,0,0,0]}}};i.createPdf(l).getBase64((e=>{e?a(e):r(new Error("Error generating base64 PDF"))}))}}}))},16354:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(72791),r=a(52007),n=a.n(r),o=a(81694),s=a.n(o),l=a(9622),d=["className","cssModule","color","innerRef","pill","tag"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u={children:n().node,className:n().string,color:n().string,cssModule:n().object,innerRef:n().oneOfType([n().object,n().func,n().string]),pill:n().bool,tag:l.iC};function m(e){var t=e.className,a=e.cssModule,r=e.color,n=void 0===r?"secondary":r,o=e.innerRef,u=e.pill,m=void 0!==u&&u,g=e.tag,h=void 0===g?"span":g,f=p(e,d),v=(0,l.mx)(s()(t,"badge","bg-"+n,!!m&&"rounded-pill"),a);return f.href&&"span"===h&&(h="a"),i.createElement(h,c({},f,{className:v,ref:o}))}m.propTypes=u;const g=m},65218:(e,t,a)=>{a.d(t,{x7:()=>ae,ZP:()=>ie});var i=a(72791);let r={data:""},n=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||r,o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,d=(e,t)=>{let a="",i="",r="";for(let n in e){let o=e[n];"@"==n[0]?"i"==n[1]?a=n+" "+o+";":i+="f"==n[1]?d(o,n):n+"{"+d(o,"k"==n[1]?"":t)+"}":"object"==typeof o?i+=d(o,t?t.replace(/([^,])+/g,(e=>n.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):n):null!=o&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=d.p?d.p(n,o):n+":"+o+";")}return a+(t&&r?t+"{"+r+"}":r)+i},c={},p=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+p(e[a]);return t}return e},u=(e,t,a,i,r)=>{let n=p(e),u=c[n]||(c[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!c[u]){let t=n!==e?e:(e=>{let t,a,i=[{}];for(;t=o.exec(e.replace(s,""));)t[4]?i.shift():t[3]?(a=t[3].replace(l," ").trim(),i.unshift(i[0][a]=i[0][a]||{})):i[0][t[1]]=t[2].replace(l," ").trim();return i[0]})(e);c[u]=d(r?{["@keyframes "+u]:t}:t,a?"":"."+u)}let m=a&&c.g?c.g:null;return a&&(c.g=c[u]),((e,t,a,i)=>{i?t.data=t.data.replace(i,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(c[u],t,i,m),u},m=(e,t,a)=>e.reduce(((e,i,r)=>{let n=t[r];if(n&&n.call){let e=n(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+i+(null==n?"":n)}),"");function g(e){let t=this||{},a=e.call?e(t.p):e;return u(a.unshift?a.raw?m(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,n(t.target),t.g,t.o,t.k)}g.bind({g:1});let h,f,v,b=g.bind({k:1});function y(e,t){let a=this||{};return function(){let i=arguments;function r(n,o){let s=Object.assign({},n),l=s.className||r.className;a.p=Object.assign({theme:f&&f()},s),a.o=/ *go\d+/.test(l),s.className=g.apply(a,i)+(l?" "+l:""),t&&(s.ref=o);let d=e;return e[0]&&(d=s.as||e,delete s.as),v&&d[0]&&v(s),h(d,s)}return t?t(r):r}}var x=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,j=(()=>{let e=0;return()=>(++e).toString()})(),w=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),E=new Map,N=e=>{if(E.has(e))return;let t=setTimeout((()=>{E.delete(e),O({type:4,toastId:e})}),1e3);E.set(e,t)},k=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=E.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?k(e,{type:1,toast:a}):k(e,{type:0,toast:a});case 3:let{toastId:i}=t;return i?N(i):e.toasts.forEach((e=>{N(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===i||void 0===i?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+r})))}}},A=[],S={toasts:[],pausedAt:void 0},O=e=>{S=k(S,e),A.forEach((e=>{e(S)}))},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=e=>(t,a)=>{let i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",a=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||j()}}(t,e,a);return O({type:2,toast:i}),i.id},D=(e,t)=>P("blank")(e,t);D.error=P("error"),D.success=P("success"),D.loading=P("loading"),D.custom=P("custom"),D.dismiss=e=>{O({type:3,toastId:e})},D.remove=e=>O({type:4,toastId:e}),D.promise=(e,t,a)=>{let i=D.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>(D.success(x(t.success,e),{id:i,...a,...null==a?void 0:a.success}),e))).catch((e=>{D.error(x(t.error,e),{id:i,...a,...null==a?void 0:a.error})})),e};var T=(e,t)=>{O({type:1,toast:{id:e,height:t}})},C=()=>{O({type:5,time:Date.now()})},I=e=>{let{toasts:t,pausedAt:a}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,a]=(0,i.useState)(S);(0,i.useEffect)((()=>(A.push(a),()=>{let e=A.indexOf(a);e>-1&&A.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var a,i;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||$[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}}));return{...t,toasts:r}}(e);(0,i.useEffect)((()=>{if(a)return;let e=Date.now(),i=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>D.dismiss(t.id)),a);t.visible&&D.dismiss(t.id)}));return()=>{i.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let r=(0,i.useCallback)((()=>{a&&O({type:6,time:Date.now()})}),[a]),n=(0,i.useCallback)(((e,a)=>{let{reverseOrder:i=!1,gutter:r=8,defaultPosition:n}=a||{},o=t.filter((t=>(t.position||n)===(e.position||n)&&t.height)),s=o.findIndex((t=>t.id===e.id)),l=o.filter(((e,t)=>t<s&&e.visible)).length;return o.filter((e=>e.visible)).slice(...i?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+r),0)}),[t]);return{toasts:t,handlers:{updateHeight:T,startPause:C,endPause:r,calculateOffset:n}}},M=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,L=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,_=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${U} 1s linear infinite;
`,z=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Z=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=y("div")`
  position: absolute;
`,H=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,V=e=>{let{toast:t}=e,{icon:a,type:r,iconTheme:n}=t;return void 0!==a?"string"==typeof a?i.createElement(K,null,a):a:"blank"===r?null:i.createElement(H,null,i.createElement(_,{...n}),"loading"!==r&&i.createElement(Y,null,"error"===r?i.createElement(F,{...n}):i.createElement(Z,{...n})))},G=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,J=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Q=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=i.memo((e=>{let{toast:t,position:a,style:r,children:n}=e,o=t.height?((e,t)=>{let a=e.includes("top")?1:-1,[i,r]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(a),J(a)];return{animation:t?`${b(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||a||"top-center",t.visible):{opacity:0},s=i.createElement(V,{toast:t}),l=i.createElement(W,{...t.ariaProps},x(t.message,t));return i.createElement(Q,{className:t.className,style:{...o,...r,...t.style}},"function"==typeof n?n({icon:s,message:l}):i.createElement(i.Fragment,null,s,l))}));!function(e,t,a,i){d.p=t,h=e,f=a,v=i}(i.createElement);var ee=e=>{let{id:t,className:a,style:r,onHeightUpdate:n,children:o}=e,s=i.useCallback((e=>{if(e){let a=()=>{let a=e.getBoundingClientRect().height;n(t,a)};a(),new MutationObserver(a).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,n]);return i.createElement("div",{ref:s,className:a,style:r},o)},te=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ae=e=>{let{reverseOrder:t,position:a="top-center",toastOptions:r,gutter:n,children:o,containerStyle:s,containerClassName:l}=e,{toasts:d,handlers:c}=I(r);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map((e=>{let r=e.position||a,s=((e,t)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...i,...r}})(r,c.calculateOffset(e,{reverseOrder:t,gutter:n,defaultPosition:a}));return i.createElement(ee,{id:e.id,key:e.id,onHeightUpdate:c.updateHeight,className:e.visible?te:"",style:s},"custom"===e.type?x(e.message,e):o?o(e):i.createElement(X,{toast:e,position:r}))})))},ie=D}}]);
//# sourceMappingURL=6217.af9ebad8.chunk.js.map