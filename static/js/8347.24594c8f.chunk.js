"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[8347],{31043:(e,t,r)=>{r.d(t,{F:()=>a,Z:()=>s});r(72791);var o=r(65218),n=r(80184);const a=()=>(0,n.jsx)(o.x7,{toastOptions:{className:"",style:{}}}),s=(e,t)=>{((e,t)=>{"success"===e?o.ZP.success(t):"create"===e?(0,o.ZP)(t,{icon:"\ud83e\udd17"}):"start"===e?(0,o.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,o.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):o.ZP.error(t)})(e,t)}},18347:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var o=r(72791),n=r(63009),a=r(39773),s=r(43464),i=r(49037),l=r(69399),c=r(76167),d=r(42976),u=r(8118),p=r(19127),f=r(57689),m=r(31043),y=r(48089),h=r(17834),b=r(80184);const g=()=>{const{dispatch:e}=(0,h.Z)(),[t,r]=(0,o.useState)(),[g,v]=(0,o.useState)(!1),w=(0,f.s0)(),x=e=>{r((t=>({...t,[e.target.id]:e.target.value})))},j=(0,y.Z)();return(0,b.jsx)(n.Z,{className:"justify-content-center",children:(0,b.jsx)(a.Z,{lg:"8",children:(0,b.jsx)(s.Z,{className:"rounded-4",children:(0,b.jsx)(i.Z,{children:(0,b.jsxs)(l.Z,{onSubmit:async r=>{r.preventDefault(),v(!0),null!==t&&void 0!==t&&t.password?null!==t&&void 0!==t&&t.confirmpassword||(0,m.Z)("error","Confirm New password cannot be empty"):(0,m.Z)("error","New password cannot be empty"),(null===t||void 0===t?void 0:t.password)!==(null===t||void 0===t?void 0:t.confirmpassword)?(0,m.Z)("error","Confirm password does not match"):await j.post("api/auth/change-pas",{newpas:null===t||void 0===t?void 0:t.password}).then((()=>{(0,m.Z)("success","Password changed successfully"),document.getElementById("form-pass").reset(),setTimeout((()=>{e({type:"LOGOUT"}),w("/auth/login")}),2e3)})).catch((()=>(0,m.Z)("error","Something went wrong"))),v(!1)},id:"form-pass",children:[(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(d.Z,{children:"New Password"}),(0,b.jsx)(u.Z,{type:"password",name:"password",id:"password",onChange:e=>x(e),required:!0,minLength:"8"})]}),(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(d.Z,{children:"Confirm New Password"}),(0,b.jsx)(u.Z,{type:"password",name:"confirmpassword",id:"confirmpassword",onChange:e=>x(e),required:!0,minLength:"8"})]}),(0,b.jsx)(c.Z,{children:(0,b.jsx)(p.Z,{type:"submit",disabled:g,children:g?"Loading..":"Save"})})]})})})})})}},69399:(e,t,r)=>{r.d(t,{Z:()=>g});var o=r(72791),n=r(52007),a=r.n(n),s=r(9622);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var l=["className","cssModule","tag","innerRef"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=y(e);if(t){var n=y(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,r)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var h={children:a().node,tag:s.iC,innerRef:a().oneOfType([a().object,a().func,a().string]),className:a().string,cssModule:a().object},b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(i,e);var t,r,n,a=f(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).getRef=t.getRef.bind(m(t)),t.submit=t.submit.bind(m(t)),t}return t=i,(r=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"submit",value:function(){this.ref&&this.ref.submit()}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.cssModule,n=e.tag,a=void 0===n?"form":n,i=e.innerRef,u=d(e,l),p=(0,s.mx)(t,r);return o.createElement(a,c({},u,{ref:i,className:p}))}}])&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.Component);b.propTypes=h;const g=b},65218:(e,t,r)=>{r.d(t,{x7:()=>re,ZP:()=>oe});var o=r(72791);let n={data:""},a=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,i=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",o="",n="";for(let a in e){let s=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+s+";":o+="f"==a[1]?c(s,a):a+"{"+c(s,"k"==a[1]?"":t)+"}":"object"==typeof s?o+=c(s,t?t.replace(/([^,])+/g,(e=>a.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):a):null!=s&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=c.p?c.p(a,s):a+":"+s+";")}return r+(t&&n?t+"{"+n+"}":n)+o},d={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e},p=(e,t,r,o,n)=>{let a=u(e),p=d[a]||(d[a]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(a));if(!d[p]){let t=a!==e?e:(e=>{let t,r,o=[{}];for(;t=s.exec(e.replace(i,""));)t[4]?o.shift():t[3]?(r=t[3].replace(l," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(l," ").trim();return o[0]})(e);d[p]=c(n?{["@keyframes "+p]:t}:t,r?"":"."+p)}let f=r&&d.g?d.g:null;return r&&(d.g=d[p]),((e,t,r,o)=>{o?t.data=t.data.replace(o,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(d[p],t,o,f),p},f=(e,t,r)=>e.reduce(((e,o,n)=>{let a=t[n];if(a&&a.call){let e=a(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+o+(null==a?"":a)}),"");function m(e){let t=this||{},r=e.call?e(t.p):e;return p(r.unshift?r.raw?f(r,[].slice.call(arguments,1),t.p):r.reduce(((e,r)=>Object.assign(e,r&&r.call?r(t.p):r)),{}):r,a(t.target),t.g,t.o,t.k)}m.bind({g:1});let y,h,b,g=m.bind({k:1});function v(e,t){let r=this||{};return function(){let o=arguments;function n(a,s){let i=Object.assign({},a),l=i.className||n.className;r.p=Object.assign({theme:h&&h()},i),r.o=/ *go\d+/.test(l),i.className=m.apply(r,o)+(l?" "+l:""),t&&(i.ref=s);let c=e;return e[0]&&(c=i.as||e,delete i.as),b&&c[0]&&b(i),y(c,i)}return t?t(n):n}}var w=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,x=(()=>{let e=0;return()=>(++e).toString()})(),j=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),O=new Map,E=e=>{if(O.has(e))return;let t=setTimeout((()=>{O.delete(e),N({type:4,toastId:e})}),1e3);O.set(e,t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=O.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:r}=t;return e.toasts.find((e=>e.id===r.id))?P(e,{type:1,toast:r}):P(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?E(o):e.toasts.forEach((e=>{E(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===o||void 0===o?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+n})))}}},Z=[],k={toasts:[],pausedAt:void 0},N=e=>{k=P(k,e),Z.forEach((e=>{e(k)}))},C={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=e=>(t,r)=>{let o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",r=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||x()}}(t,e,r);return N({type:2,toast:o}),o.id},S=(e,t)=>$("blank")(e,t);S.error=$("error"),S.success=$("success"),S.loading=$("loading"),S.custom=$("custom"),S.dismiss=e=>{N({type:3,toastId:e})},S.remove=e=>N({type:4,toastId:e}),S.promise=(e,t,r)=>{let o=S.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then((e=>(S.success(w(t.success,e),{id:o,...r,...null==r?void 0:r.success}),e))).catch((e=>{S.error(w(t.error,e),{id:o,...r,...null==r?void 0:r.error})})),e};var R=(e,t)=>{N({type:1,toast:{id:e,height:t}})},T=()=>{N({type:5,time:Date.now()})},_=e=>{let{toasts:t,pausedAt:r}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=(0,o.useState)(k);(0,o.useEffect)((()=>(Z.push(r),()=>{let e=Z.indexOf(r);e>-1&&Z.splice(e,1)})),[t]);let n=t.toasts.map((t=>{var r,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||C[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}}));return{...t,toasts:n}}(e);(0,o.useEffect)((()=>{if(r)return;let e=Date.now(),o=t.map((t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout((()=>S.dismiss(t.id)),r);t.visible&&S.dismiss(t.id)}));return()=>{o.forEach((e=>e&&clearTimeout(e)))}}),[t,r]);let n=(0,o.useCallback)((()=>{r&&N({type:6,time:Date.now()})}),[r]),a=(0,o.useCallback)(((e,r)=>{let{reverseOrder:o=!1,gutter:n=8,defaultPosition:a}=r||{},s=t.filter((t=>(t.position||a)===(e.position||a)&&t.height)),i=s.findIndex((t=>t.id===e.id)),l=s.filter(((e,t)=>t<i&&e.visible)).length;return s.filter((e=>e.visible)).slice(...o?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+n),0)}),[t]);return{toasts:t,handlers:{updateHeight:R,startPause:T,endPause:n,calculateOffset:a}}},D=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,I=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,A=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z} 0.15s ease-out forwards;
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
    animation: ${I} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,F=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,H=g`
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
}`,B=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${H} 0.2s ease-out forwards;
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
`,q=v("div")`
  position: absolute;
`,U=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${G} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=e=>{let{toast:t}=e,{icon:r,type:n,iconTheme:a}=t;return void 0!==r?"string"==typeof r?o.createElement(Y,null,r):r:"blank"===n?null:o.createElement(U,null,o.createElement(M,{...a}),"loading"!==n&&o.createElement(q,null,"error"===n?o.createElement(A,{...a}):o.createElement(B,{...a})))},K=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Q=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,V=v("div")`
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
`,W=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=o.memo((e=>{let{toast:t,position:r,style:n,children:a}=e,s=t.height?((e,t)=>{let r=e.includes("top")?1:-1,[o,n]=j()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[K(r),Q(r)];return{animation:t?`${g(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||r||"top-center",t.visible):{opacity:0},i=o.createElement(J,{toast:t}),l=o.createElement(W,{...t.ariaProps},w(t.message,t));return o.createElement(V,{className:t.className,style:{...s,...n,...t.style}},"function"==typeof a?a({icon:i,message:l}):o.createElement(o.Fragment,null,i,l))}));!function(e,t,r,o){c.p=t,y=e,h=r,b=o}(o.createElement);var ee=e=>{let{id:t,className:r,style:n,onHeightUpdate:a,children:s}=e,i=o.useCallback((e=>{if(e){let r=()=>{let r=e.getBoundingClientRect().height;a(t,r)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,a]);return o.createElement("div",{ref:i,className:r,style:n},s)},te=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,re=e=>{let{reverseOrder:t,position:r="top-center",toastOptions:n,gutter:a,children:s,containerStyle:i,containerClassName:l}=e,{toasts:c,handlers:d}=_(n);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let n=e.position||r,i=((e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:j()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...n}})(n,d.calculateOffset(e,{reverseOrder:t,gutter:a,defaultPosition:r}));return o.createElement(ee,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?te:"",style:i},"custom"===e.type?w(e.message,e):s?s(e):o.createElement(X,{toast:e,position:n}))})))},oe=S}}]);
//# sourceMappingURL=8347.24594c8f.chunk.js.map