"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[4138],{12220:(e,t,n)=>{n.d(t,{A:()=>y});var o=n(89379),r=n(80045),i=n(65043),a=n(58387),s=n(65049),l=n(34535),c=n(96665),d=n(4162),u=n(56258),p=n(14987),f=n(60239);function v(e){return(0,f.Ay)("MuiBackdrop",e)}(0,p.A)("MuiBackdrop",["root","invisible"]);var m=n(70579);const A=["children","className","component","invisible","open","components","componentsProps","slotProps","slots","TransitionComponent","transitionDuration"],h=(0,l.Ay)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),y=i.forwardRef((function(e,t){const n=(0,c.b)({props:e,name:"MuiBackdrop"}),{children:i,className:l,component:p="div",invisible:f=!1,open:y,components:g={},componentsProps:b={},slotProps:E={},slots:x={},TransitionComponent:P,transitionDuration:w}=n,R=(0,r.A)(n,A),T=(0,o.A)((0,o.A)({},n),{},{component:p,invisible:f}),k=(e=>{const{classes:t,invisible:n}=e,o={root:["root",n&&"invisible"]};return(0,s.A)(o,v,t)})(T),S={slots:(0,o.A)({transition:P,root:g.Root},x),slotProps:(0,o.A)((0,o.A)({},b),E)},[C,M]=(0,d.A)("root",{elementType:h,externalForwardedProps:S,className:(0,a.A)(k.root,l),ownerState:T}),[N,I]=(0,d.A)("transition",{elementType:u.A,externalForwardedProps:S,ownerState:T});return(0,m.jsx)(N,(0,o.A)((0,o.A)((0,o.A)({in:y,timeout:w},R),I),{},{children:(0,m.jsx)(C,(0,o.A)((0,o.A)({"aria-hidden":!0},M),{},{classes:k,ref:t,children:i}))}))}))},56258:(e,t,n)=>{n.d(t,{A:()=>m});var o=n(89379),r=n(80045),i=n(65043),a=n(88692),s=n(58629),l=n(26240),c=n(80653),d=n(95849),u=n(70579);const p=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],f=["ownerState"],v={entering:{opacity:1},entered:{opacity:1}},m=i.forwardRef((function(e,t){const n=(0,l.A)(),m={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:A,appear:h=!0,children:y,easing:g,in:b,onEnter:E,onEntered:x,onEntering:P,onExit:w,onExited:R,onExiting:T,style:k,timeout:S=m,TransitionComponent:C=a.Ay}=e,M=(0,r.A)(e,p),N=i.useRef(null),I=(0,d.A)(N,(0,s.A)(y),t),F=e=>t=>{if(e){const n=N.current;void 0===t?e(n):e(n,t)}},L=F(P),j=F(((e,t)=>{(0,c.q)(e);const o=(0,c.c)({style:k,timeout:S,easing:g},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",o),e.style.transition=n.transitions.create("opacity",o),E&&E(e,t)})),O=F(x),B=F(T),D=F((e=>{const t=(0,c.c)({style:k,timeout:S,easing:g},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),w&&w(e)})),W=F(R);return(0,u.jsx)(C,(0,o.A)((0,o.A)({appear:h,in:b,nodeRef:N,onEnter:j,onEntered:O,onEntering:L,onExit:D,onExited:W,onExiting:B,addEndListener:e=>{A&&A(N.current,e)},timeout:S},M),{},{children:(e,t)=>{let{ownerState:n}=t,a=(0,r.A)(t,f);return i.cloneElement(y,(0,o.A)({style:(0,o.A)((0,o.A)((0,o.A)({opacity:0,visibility:"exited"!==e||b?void 0:"hidden"},v[e]),k),y.props.style),ref:I},a))}}))}))},86328:(e,t,n)=>{n.d(t,{A:()=>g});var o=n(89379),r=n(80045),i=n(65043),a=n(67872),s=n(58629),l=n(88692),c=n(26240),d=n(80653),u=n(95849),p=n(70579);const f=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],v=["ownerState"];function m(e){return"scale(".concat(e,", ").concat(e**2,")")}const A={entering:{opacity:1,transform:m(1)},entered:{opacity:1,transform:"none"}},h="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),y=i.forwardRef((function(e,t){const{addEndListener:n,appear:y=!0,children:g,easing:b,in:E,onEnter:x,onEntered:P,onEntering:w,onExit:R,onExited:T,onExiting:k,style:S,timeout:C="auto",TransitionComponent:M=l.Ay}=e,N=(0,r.A)(e,f),I=(0,a.A)(),F=i.useRef(),L=(0,c.A)(),j=i.useRef(null),O=(0,u.A)(j,(0,s.A)(g),t),B=e=>t=>{if(e){const n=j.current;void 0===t?e(n):e(n,t)}},D=B(w),W=B(((e,t)=>{(0,d.q)(e);const{duration:n,delay:o,easing:r}=(0,d.c)({style:S,timeout:C,easing:b},{mode:"enter"});let i;"auto"===C?(i=L.transitions.getAutoHeightDuration(e.clientHeight),F.current=i):i=n,e.style.transition=[L.transitions.create("opacity",{duration:i,delay:o}),L.transitions.create("transform",{duration:h?i:.666*i,delay:o,easing:r})].join(","),x&&x(e,t)})),z=B(P),H=B(k),q=B((e=>{const{duration:t,delay:n,easing:o}=(0,d.c)({style:S,timeout:C,easing:b},{mode:"exit"});let r;"auto"===C?(r=L.transitions.getAutoHeightDuration(e.clientHeight),F.current=r):r=t,e.style.transition=[L.transitions.create("opacity",{duration:r,delay:n}),L.transitions.create("transform",{duration:h?r:.666*r,delay:h?n:n||.333*r,easing:o})].join(","),e.style.opacity=0,e.style.transform=m(.75),R&&R(e)})),K=B(T);return(0,p.jsx)(M,(0,o.A)((0,o.A)({appear:y,in:E,nodeRef:j,onEnter:W,onEntered:z,onEntering:D,onExit:q,onExited:K,onExiting:H,addEndListener:e=>{"auto"===C&&I.start(F.current||0,e),n&&n(j.current,e)},timeout:"auto"===C?null:C},N),{},{children:(e,t)=>{let{ownerState:n}=t,a=(0,r.A)(t,v);return i.cloneElement(g,(0,o.A)({style:(0,o.A)((0,o.A)((0,o.A)({opacity:0,transform:m(.75),visibility:"exited"!==e||E?void 0:"hidden"},A[e]),S),g.props.style),ref:O},a))}}))}));y&&(y.muiSupportAuto=!0);const g=y},71245:(e,t,n)=>{n.d(t,{A:()=>D});var o=n(89379),r=n(80045),i=n(65043),a=n(58387),s=n(65049),l=n(69869),c=n(67022),d=n(34535),u=n(52094),p=n(96665),f=n(12220),v=n(68057),m=n(28387),A=n(34969),h=n(303),y=n(30277),g=n(99),b=n(98963);function E(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function x(e){return parseInt((0,g.A)(e).getComputedStyle(e).paddingRight,10)||0}function P(e,t,n,o,r){const i=[t,n,...o];[].forEach.call(e.children,(e=>{const t=!i.includes(e),n=!function(e){const t=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&E(e,r)}))}function w(e,t){let n=-1;return e.some(((e,o)=>!!t(e)&&(n=o,!0))),n}function R(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,m.A)(e);return t.body===e?(0,g.A)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){const e=(0,b.A)((0,g.A)(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight="".concat(x(o)+e,"px");const t=(0,m.A)(o).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight="".concat(x(t)+e,"px")}))}let e;if(o.parentNode instanceof DocumentFragment)e=(0,m.A)(o).body;else{const t=o.parentElement,n=(0,g.A)(o);e="HTML"===(null===t||void 0===t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:o}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((e=>{let{value:t,el:n,property:o}=e;t?n.style.setProperty(o,t):n.style.removeProperty(o)}))}}const T=()=>{},k=new class{constructor(){this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&E(e.modalRef,!1);const o=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);P(t,e.mount,e.modalRef,o,!0);const r=w(this.containers,(e=>e.container===t));return-1!==r?(this.containers[r].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:o}),n)}mount(e,t){const n=w(this.containers,(t=>t.modals.includes(e))),o=this.containers[n];o.restore||(o.restore=R(o,t))}remove(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=this.modals.indexOf(e);if(-1===n)return n;const o=w(this.containers,(t=>t.modals.includes(e))),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(n,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&E(e.modalRef,t),P(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{const e=r.modals[r.modals.length-1];e.modalRef&&E(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}};const S=function(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,closeAfterTransition:a=!1,onTransitionEnter:s,onTransitionExited:l,children:c,onClose:d,open:u,rootRef:p}=e,f=i.useRef({}),g=i.useRef(null),b=i.useRef(null),x=(0,v.A)(b,p),[P,w]=i.useState(!u),R=function(e){return!!e&&e.props.hasOwnProperty("in")}(c);let S=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(S=!1);const C=()=>(f.current.modalRef=b.current,f.current.mount=g.current,f.current),M=()=>{k.mount(C(),{disableScrollLock:r}),b.current&&(b.current.scrollTop=0)},N=(0,A.A)((()=>{const e=function(e){return"function"===typeof e?e():e}(t)||(0,m.A)(g.current).body;k.add(C(),e),b.current&&M()})),I=()=>k.isTopModal(C()),F=(0,A.A)((e=>{g.current=e,e&&(u&&I()?M():b.current&&E(b.current,S))})),L=i.useCallback((()=>{k.remove(C(),S)}),[S]);i.useEffect((()=>()=>{L()}),[L]),i.useEffect((()=>{u?N():R&&a||L()}),[u,L,R,a,N]);const j=e=>t=>{var o;null===(o=e.onKeyDown)||void 0===o||o.call(e,t),"Escape"===t.key&&229!==t.which&&I()&&(n||(t.stopPropagation(),d&&d(t,"escapeKeyDown")))},O=e=>t=>{var n;null===(n=e.onClick)||void 0===n||n.call(e,t),t.target===t.currentTarget&&d&&d(t,"backdropClick")};return{getRootProps:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=(0,y.A)(e);delete n.onTransitionEnter,delete n.onTransitionExited;const r=(0,o.A)((0,o.A)({},n),t);return(0,o.A)((0,o.A)({role:"presentation"},r),{},{onKeyDown:j(r),ref:x})},getBackdropProps:function(){const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.A)((0,o.A)({"aria-hidden":!0},e),{},{onClick:O(e),open:u})},getTransitionProps:()=>{var e,t;return{onEnter:(0,h.A)((()=>{w(!1),s&&s()}),null!==(e=null===c||void 0===c?void 0:c.props.onEnter)&&void 0!==e?e:T),onExited:(0,h.A)((()=>{w(!0),l&&l(),a&&L()}),null!==(t=null===c||void 0===c?void 0:c.props.onExited)&&void 0!==t?t:T)}},rootRef:x,portalRef:F,isTopModal:I,exited:P,hasTransition:R}};var C=n(14987),M=n(60239);function N(e){return(0,M.Ay)("MuiModal",e)}(0,C.A)("MuiModal",["root","hidden","backdrop"]);var I=n(4162),F=n(95849),L=n(70579);const j=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],O=(0,d.Ay)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((0,u.A)((e=>{let{theme:t}=e;return{position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:e=>{let{ownerState:t}=e;return!t.open&&t.exited},style:{visibility:"hidden"}}]}}))),B=(0,d.Ay)(f.A,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),D=i.forwardRef((function(e,t){const n=(0,p.b)({name:"MuiModal",props:e}),{BackdropComponent:d=B,BackdropProps:u,classes:f,className:v,closeAfterTransition:m=!1,children:A,container:h,component:y,components:g={},componentsProps:b={},disableAutoFocus:E=!1,disableEnforceFocus:x=!1,disableEscapeKeyDown:P=!1,disablePortal:w=!1,disableRestoreFocus:R=!1,disableScrollLock:T=!1,hideBackdrop:k=!1,keepMounted:C=!1,onBackdropClick:M,onClose:D,onTransitionEnter:W,onTransitionExited:z,open:H,slotProps:q={},slots:K={},theme:U}=n,Y=(0,r.A)(n,j),X=(0,o.A)((0,o.A)({},n),{},{closeAfterTransition:m,disableAutoFocus:E,disableEnforceFocus:x,disableEscapeKeyDown:P,disablePortal:w,disableRestoreFocus:R,disableScrollLock:T,hideBackdrop:k,keepMounted:C}),{getRootProps:_,getBackdropProps:V,getTransitionProps:J,portalRef:G,isTopModal:Q,exited:Z,hasTransition:$}=S((0,o.A)((0,o.A)({},X),{},{rootRef:t})),ee=(0,o.A)((0,o.A)({},X),{},{exited:Z}),te=(e=>{const{open:t,exited:n,classes:o}=e,r={root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]};return(0,s.A)(r,N,o)})(ee),ne={};if(void 0===A.props.tabIndex&&(ne.tabIndex="-1"),$){const{onEnter:e,onExited:t}=J();ne.onEnter=e,ne.onExited=t}const oe=(0,o.A)((0,o.A)({},Y),{},{slots:(0,o.A)({root:g.Root,backdrop:g.Backdrop},K),slotProps:(0,o.A)((0,o.A)({},b),q)}),[re,ie]=(0,I.A)("root",{elementType:O,externalForwardedProps:oe,getSlotProps:_,additionalProps:{ref:t,as:y},ownerState:ee,className:(0,a.A)(v,null===te||void 0===te?void 0:te.root,!ee.open&&ee.exited&&(null===te||void 0===te?void 0:te.hidden))}),[ae,se]=(0,I.A)("backdrop",{elementType:d,externalForwardedProps:oe,additionalProps:u,getSlotProps:e=>V((0,o.A)((0,o.A)({},e),{},{onClick:t=>{M&&M(t),null!==e&&void 0!==e&&e.onClick&&e.onClick(t)}})),className:(0,a.A)(null===u||void 0===u?void 0:u.className,null===te||void 0===te?void 0:te.backdrop),ownerState:ee}),le=(0,F.A)(null===u||void 0===u?void 0:u.ref,se.ref);return C||H||$&&!Z?(0,L.jsx)(c.A,{ref:G,container:h,disablePortal:w,children:(0,L.jsxs)(re,(0,o.A)((0,o.A)({},ie),{},{children:[!k&&d?(0,L.jsx)(ae,(0,o.A)((0,o.A)({},se),{},{ref:le})):null,(0,L.jsx)(l.A,{disableEnforceFocus:x,disableAutoFocus:E,disableRestoreFocus:R,isEnabled:Q,open:H,children:i.cloneElement(A,ne)})]}))}):null}))},61596:(e,t,n)=>{n.d(t,{A:()=>b});var o=n(89379),r=n(80045),i=n(65043),a=n(58387),s=n(65049),l=n(19381),c=n(34535),d=n(26240),u=n(52094),p=n(96665),f=n(63582),v=n(14987),m=n(60239);function A(e){return(0,m.Ay)("MuiPaper",e)}(0,v.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=n(70579);const y=["className","component","elevation","square","variant"],g=(0,c.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((0,u.A)((e=>{let{theme:t}=e;return{backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),variants:[{props:e=>{let{ownerState:t}=e;return!t.square},style:{borderRadius:t.shape.borderRadius}},{props:{variant:"outlined"},style:{border:"1px solid ".concat((t.vars||t).palette.divider)}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}}))),b=i.forwardRef((function(e,t){var n;const i=(0,p.b)({props:e,name:"MuiPaper"}),c=(0,d.A)(),{className:u,component:v="div",elevation:m=1,square:b=!1,variant:E="elevation"}=i,x=(0,r.A)(i,y),P=(0,o.A)((0,o.A)({},i),{},{component:v,elevation:m,square:b,variant:E}),w=(e=>{const{square:t,elevation:n,variant:o,classes:r}=e,i={root:["root",o,!t&&"rounded","elevation"===o&&"elevation".concat(n)]};return(0,s.A)(i,A,r)})(P);return(0,h.jsx)(g,(0,o.A)((0,o.A)({as:v,ownerState:P,className:(0,a.A)(w.root,u),ref:t},x),{},{style:(0,o.A)((0,o.A)({},"elevation"===E&&(0,o.A)((0,o.A)({"--Paper-shadow":(c.vars||c).shadows[m]},c.vars&&{"--Paper-overlay":null===(n=c.vars.overlays)||void 0===n?void 0:n[m]}),!c.vars&&"dark"===c.palette.mode&&{"--Paper-overlay":"linear-gradient(".concat((0,l.X4)("#fff",(0,f.A)(m)),", ").concat((0,l.X4)("#fff",(0,f.A)(m)),")")})),x.style)}))}))},41020:(e,t,n)=>{n.d(t,{IJ:()=>N,Ay:()=>I});var o=n(89379),r=n(80045),i=n(65043),a=n(58387),s=n(65049),l=n(43700),c=n(34535),d=n(96665),u=n(80950),p=n(22427),f=n(36078),v=n(95849),m=n(86328),A=n(71245),h=n(61596),y=n(14987),g=n(60239);function b(e){return(0,g.Ay)("MuiPopover",e)}(0,y.A)("MuiPopover",["root","paper"]);var E=n(4162),x=n(70579);const P=["onEntering"],w=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],R=["slotProps"];function T(e,t){let n=0;return"number"===typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function k(e,t){let n=0;return"number"===typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function S(e){return[e.horizontal,e.vertical].map((e=>"number"===typeof e?"".concat(e,"px"):e)).join(" ")}function C(e){return"function"===typeof e?e():e}const M=(0,c.Ay)(A.A,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),N=(0,c.Ay)(h.A,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),I=i.forwardRef((function(e,t){var n;const c=(0,d.b)({props:e,name:"MuiPopover"}),{action:A,anchorEl:h,anchorOrigin:y={vertical:"top",horizontal:"left"},anchorPosition:g,anchorReference:I="anchorEl",children:F,className:L,container:j,elevation:O=8,marginThreshold:B=16,open:D,PaperProps:W={},slots:z={},slotProps:H={},transformOrigin:q={vertical:"top",horizontal:"left"},TransitionComponent:K=m.A,transitionDuration:U="auto",TransitionProps:{onEntering:Y}={},disableScrollLock:X=!1}=c,_=(0,r.A)(c.TransitionProps,P),V=(0,r.A)(c,w),J=null!==(n=null===H||void 0===H?void 0:H.paper)&&void 0!==n?n:W,G=i.useRef(),Q=(0,o.A)((0,o.A)({},c),{},{anchorOrigin:y,anchorReference:I,elevation:O,marginThreshold:B,externalPaperSlotProps:J,transformOrigin:q,TransitionComponent:K,transitionDuration:U,TransitionProps:_}),Z=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"],paper:["paper"]},b,t)})(Q),$=i.useCallback((()=>{if("anchorPosition"===I)return g;const e=C(h),t=(e&&1===e.nodeType?e:(0,p.A)(G.current).body).getBoundingClientRect();return{top:t.top+T(t,y.vertical),left:t.left+k(t,y.horizontal)}}),[h,y.horizontal,y.vertical,g,I]),ee=i.useCallback((e=>({vertical:T(e,q.vertical),horizontal:k(e,q.horizontal)})),[q.horizontal,q.vertical]),te=i.useCallback((e=>{const t={width:e.offsetWidth,height:e.offsetHeight},n=ee(t);if("none"===I)return{top:null,left:null,transformOrigin:S(n)};const o=$();let r=o.top-n.vertical,i=o.left-n.horizontal;const a=r+t.height,s=i+t.width,l=(0,f.A)(C(h)),c=l.innerHeight-B,d=l.innerWidth-B;if(null!==B&&r<B){const e=r-B;r-=e,n.vertical+=e}else if(null!==B&&a>c){const e=a-c;r-=e,n.vertical+=e}if(null!==B&&i<B){const e=i-B;i-=e,n.horizontal+=e}else if(s>d){const e=s-d;i-=e,n.horizontal+=e}return{top:"".concat(Math.round(r),"px"),left:"".concat(Math.round(i),"px"),transformOrigin:S(n)}}),[h,I,$,ee,B]),[ne,oe]=i.useState(D),re=i.useCallback((()=>{const e=G.current;if(!e)return;const t=te(e);null!==t.top&&e.style.setProperty("top",t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,oe(!0)}),[te]);i.useEffect((()=>(X&&window.addEventListener("scroll",re),()=>window.removeEventListener("scroll",re))),[h,X,re]);i.useEffect((()=>{D&&re()})),i.useImperativeHandle(A,(()=>D?{updatePosition:()=>{re()}}:null),[D,re]),i.useEffect((()=>{if(!D)return;const e=(0,u.A)((()=>{re()})),t=(0,f.A)(h);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[h,D,re]);let ie=U;"auto"!==U||K.muiSupportAuto||(ie=void 0);const ae=j||(h?(0,p.A)(C(h)).body:void 0),se={slots:z,slotProps:(0,o.A)((0,o.A)({},H),{},{paper:J})},[le,ce]=(0,E.A)("paper",{elementType:N,externalForwardedProps:se,additionalProps:{elevation:O,className:(0,a.A)(Z.paper,null===J||void 0===J?void 0:J.className),style:ne?J.style:(0,o.A)((0,o.A)({},J.style),{},{opacity:0})},ownerState:Q}),[de,ue]=(0,E.A)("root",{elementType:M,externalForwardedProps:se,additionalProps:{slotProps:{backdrop:{invisible:!0}},container:ae,open:D},ownerState:Q,className:(0,a.A)(Z.root,L)}),{slotProps:pe}=ue,fe=(0,r.A)(ue,R),ve=(0,v.A)(G,ce.ref);return(0,x.jsx)(de,(0,o.A)((0,o.A)((0,o.A)((0,o.A)({},fe),!(0,l.A)(de)&&{slotProps:pe,disableScrollLock:X}),V),{},{ref:t,children:(0,x.jsx)(K,(0,o.A)((0,o.A)({appear:!0,in:D,onEntering:(e,t)=>{Y&&Y(e,t),re()},onExited:()=>{oe(!1)},timeout:ie},_),{},{children:(0,x.jsx)(le,(0,o.A)((0,o.A)({},ce),{},{ref:ve,children:F}))}))}))}))},67022:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(65043),r=n(97950),i=n(68057),a=n(58629),s=n(21823),l=n(54987);const c=o.forwardRef((function(e,t){const{children:n,container:c,disablePortal:d=!1}=e,[u,p]=o.useState(null),f=(0,i.A)(o.isValidElement(n)?(0,a.A)(n):null,t);if((0,s.A)((()=>{d||p(function(e){return"function"===typeof e?e():e}(c)||document.body)}),[c,d]),(0,s.A)((()=>{if(u&&!d)return(0,l.A)(t,u),()=>{(0,l.A)(t,null)}}),[t,u,d]),d){if(o.isValidElement(n)){const e={ref:f};return o.cloneElement(n,e)}return n}return u?r.createPortal(n,u):u}))},85865:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(89379),r=n(80045),i=n(65043),a=n(58387),s=n(65049),l=n(10726),c=n(34535),d=n(52094),u=n(96665),p=n(6803),f=n(52445),v=n(14987),m=n(60239);function A(e){return(0,m.Ay)("MuiTypography",e)}(0,v.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=n(70579);const y=["color"],g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},E=(0,l.Dg)(),x=(0,c.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,p.A)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((0,d.A)((e=>{var t;let{theme:n}=e;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(n.typography).filter((e=>{let[t,n]=e;return"inherit"!==t&&n&&"object"===typeof n})).map((e=>{let[t,n]=e;return{props:{variant:t},style:n}})),...Object.entries(n.palette).filter((0,f.A)()).map((e=>{let[t]=e;return{props:{color:t},style:{color:(n.vars||n).palette[t].main}}})),...Object.entries((null===(t=n.palette)||void 0===t?void 0:t.text)||{}).filter((e=>{let[,t]=e;return"string"===typeof t})).map((e=>{let[t]=e;return{props:{color:"text".concat((0,p.A)(t))},style:{color:(n.vars||n).palette.text[t]}}})),{props:e=>{let{ownerState:t}=e;return"inherit"!==t.align},style:{textAlign:"var(--Typography-textAlign)"}},{props:e=>{let{ownerState:t}=e;return t.noWrap},style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:e=>{let{ownerState:t}=e;return t.gutterBottom},style:{marginBottom:"0.35em"}},{props:e=>{let{ownerState:t}=e;return t.paragraph},style:{marginBottom:16}}]}}))),P={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w=i.forwardRef((function(e,t){const n=(0,u.b)({props:e,name:"MuiTypography"}),{color:i}=n,l=(0,r.A)(n,y),c=!b[i],d=E((0,o.A)((0,o.A)({},l),c&&{color:i})),{align:f="inherit",className:v,component:m,gutterBottom:w=!1,noWrap:R=!1,paragraph:T=!1,variant:k="body1",variantMapping:S=P}=d,C=(0,r.A)(d,g),M=(0,o.A)((0,o.A)({},d),{},{align:f,color:i,className:v,component:m,gutterBottom:w,noWrap:R,paragraph:T,variant:k,variantMapping:S}),N=m||(T?"p":S[k]||P[k])||"span",I=(e=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:r,variant:i,classes:a}=e,l={root:["root",i,"inherit"!==e.align&&"align".concat((0,p.A)(t)),n&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,s.A)(l,A,a)})(M);return(0,h.jsx)(x,(0,o.A)((0,o.A)({as:N,ref:t,className:(0,a.A)(I.root,v)},C),{},{ownerState:M,style:(0,o.A)((0,o.A)({},"inherit"!==f&&{"--Typography-textAlign":f}),C.style)}))}))},69869:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(65043),r=n(68057),i=n(58629),a=n(28387),s=n(70579);const l=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function c(e){const t=[],n=[];return Array.from(e.querySelectorAll(l)).forEach(((e,o)=>{const r=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector('input[type="radio"]'.concat(t));let n=t('[name="'.concat(e.name,'"]:checked'));return n||(n=t('[name="'.concat(e.name,'"]'))),n!==e}(e))}(e)&&(0===r?t.push(e):n.push({documentOrder:o,tabIndex:r,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function d(){return!0}const u=function(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:l=!1,disableRestoreFocus:u=!1,getTabbable:p=c,isEnabled:f=d,open:v}=e,m=o.useRef(!1),A=o.useRef(null),h=o.useRef(null),y=o.useRef(null),g=o.useRef(null),b=o.useRef(!1),E=o.useRef(null),x=(0,r.A)((0,i.A)(t),E),P=o.useRef(null);o.useEffect((()=>{v&&E.current&&(b.current=!n)}),[n,v]),o.useEffect((()=>{if(!v||!E.current)return;const e=(0,a.A)(E.current);return E.current.contains(e.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex","-1"),b.current&&E.current.focus()),()=>{u||(y.current&&y.current.focus&&(m.current=!0,y.current.focus()),y.current=null)}}),[v]),o.useEffect((()=>{if(!v||!E.current)return;const e=(0,a.A)(E.current),t=t=>{P.current=t,!l&&f()&&"Tab"===t.key&&e.activeElement===E.current&&t.shiftKey&&(m.current=!0,h.current&&h.current.focus())},n=()=>{const t=E.current;if(null===t)return;if(!e.hasFocus()||!f()||m.current)return void(m.current=!1);if(t.contains(e.activeElement))return;if(l&&e.activeElement!==A.current&&e.activeElement!==h.current)return;if(e.activeElement!==g.current)g.current=null;else if(null!==g.current)return;if(!b.current)return;let n=[];if(e.activeElement!==A.current&&e.activeElement!==h.current||(n=p(E.current)),n.length>0){var o,r;const e=Boolean((null===(o=P.current)||void 0===o?void 0:o.shiftKey)&&"Tab"===(null===(r=P.current)||void 0===r?void 0:r.key)),t=n[0],i=n[n.length-1];"string"!==typeof t&&"string"!==typeof i&&(e?i.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);const o=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()}),50);return()=>{clearInterval(o),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}),[n,l,u,f,v,p]);const w=e=>{null===y.current&&(y.current=e.relatedTarget),b.current=!0};return(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)("div",{tabIndex:v?0:-1,onFocus:w,ref:A,"data-testid":"sentinelStart"}),o.cloneElement(t,{ref:x,onFocus:e=>{null===y.current&&(y.current=e.relatedTarget),b.current=!0,g.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,s.jsx)("div",{tabIndex:v?0:-1,onFocus:w,ref:h,"data-testid":"sentinelEnd"})]})}},41989:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(89379),r=n(80045),i=n(45603),a=n(84869);const s=["sx"],l=e=>{var t,n;const o={systemProps:{},otherProps:{}},r=null!==(t=null===e||void 0===e||null===(n=e.theme)||void 0===n?void 0:n.unstable_sxConfig)&&void 0!==t?t:a.A;return Object.keys(e).forEach((t=>{r[t]?o.systemProps[t]=e[t]:o.otherProps[t]=e[t]})),o};function c(e){const{sx:t}=e,n=(0,r.A)(e,s),{systemProps:a,otherProps:c}=l(n);let d;return d=Array.isArray(t)?[a,...t]:"function"===typeof t?function(){const e=t(...arguments);return(0,i.Q)(e)?(0,o.A)((0,o.A)({},a),e):a}:(0,o.A)((0,o.A)({},a),t),(0,o.A)((0,o.A)({},c),{},{sx:d})}},303:(e,t,n)=>{function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>null==t?e:function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];e.apply(this,o),t.apply(this,o)}),(()=>{}))}n.d(t,{A:()=>o})},58629:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(65043);function r(e){var t;return parseInt(o.version,10)>=19?(null===e||void 0===e||null===(t=e.props)||void 0===t?void 0:t.ref)||null:(null===e||void 0===e?void 0:e.ref)||null}},98963:(e,t,n)=>{function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;const t=e.document.documentElement.clientWidth;return e.innerWidth-t}n.d(t,{A:()=>o})},80653:(e,t,n)=>{n.d(t,{c:()=>r,q:()=>o});const o=e=>e.scrollTop;function r(e,t){var n,o;const{timeout:r,easing:i,style:a={}}=e;return{duration:null!==(n=a.transitionDuration)&&void 0!==n?n:"number"===typeof r?r:r[t.mode]||0,easing:null!==(o=a.transitionTimingFunction)&&void 0!==o?o:"object"===typeof i?i[t.mode]:i,delay:a.transitionDelay}}},43700:(e,t,n)=>{n.d(t,{A:()=>o});const o=function(e){return"string"===typeof e}},4162:(e,t,n)=>{n.d(t,{A:()=>p});var o=n(89379),r=n(80045),i=n(68057),a=n(51565),s=n(2443),l=n(95319);const c=["className","elementType","ownerState","externalForwardedProps","internalForwardedProps"],d=["component","slots","slotProps"],u=["component"];function p(e,t){const{className:n,elementType:p,ownerState:f,externalForwardedProps:v,internalForwardedProps:m}=t,A=(0,r.A)(t,c),{component:h,slots:y={[e]:void 0},slotProps:g={[e]:void 0}}=v,b=(0,r.A)(v,d),E=y[e]||p,x=(0,s.A)(g[e],f),P=(0,l.A)((0,o.A)((0,o.A)({className:n},A),{},{externalForwardedProps:"root"===e?b:void 0,externalSlotProps:x})),{props:{component:w},internalRef:R}=P,T=(0,r.A)(P.props,u),k=(0,i.A)(R,null===x||void 0===x?void 0:x.ref,t.ref),S="root"===e?w||h:w;return[E,(0,a.A)(E,(0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)({},"root"===e&&!h&&!y[e]&&m),"root"!==e&&!y[e]&&m),T),S&&{as:S}),{},{ref:k}),f)]}},10726:(e,t,n)=>{n.d(t,{Dp:()=>f,Dg:()=>v});var o=n(89379),r=(n(65043),n(41989)),i=n(83290),a=n(70579);function s(e){const{styles:t,defaultTheme:n={}}=e,o="function"===typeof t?e=>{return t(void 0===(o=e)||null===o||0===Object.keys(o).length?n:e);var o}:t;return(0,a.jsx)(i.mL,{styles:o})}var l=n(64347);const c=function(e){let{styles:t,themeId:n,defaultTheme:o={}}=e;const r=(0,l.A)(o),i="function"===typeof t?t(n&&r[n]||r):t;return(0,a.jsx)(s,{styles:i})};var d=n(15170),u=n(13375);const p=function(e){return(0,a.jsx)(c,(0,o.A)((0,o.A)({},e),{},{defaultTheme:d.A,themeId:u.A}))};function f(e){return function(t){return(0,a.jsx)(p,{styles:"function"===typeof e?n=>e((0,o.A)({theme:n},t)):e})}}function v(){return r.A}}}]);
//# sourceMappingURL=4138.70e72978.chunk.js.map