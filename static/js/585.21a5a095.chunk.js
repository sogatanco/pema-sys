(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[585],{16581:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var n=r(72791),s=r(76807),l=r(39773),i=r(43464),o=r(49037),a=r(14448),d=r(19127),c=r(63009),u=r(8118),h=r(16354),f=r(4828),p=r(30690),x=r.n(p),b=r(46272),m=r(11087),v=r(74458),j=r(14097),y=r(48089),g=r(87681),w=r(17834),O=r(31043),N=r(21234),C=(r(42459),r(35754),r(80184));const k=()=>{const{auth:e}=(0,w.Z)(),[t,r]=(0,n.useState)(!1),[p,k]=(0,n.useState)(void 0),[S,_]=(0,n.useState)(),[Z,P]=(0,n.useState)(),[R,T]=(0,n.useState)(!1),[z,G]=(0,n.useState)(),[D,M]=(0,n.useState)(),E=(0,y.Z)(),{isLoading:F,error:$,data:A,refetch:B}=(0,s.a)({queryKey:["inprogresstasks"],queryFn:()=>E.get("api/task/director/inprogress/list").then((e=>(G(e.data.project),e.data.data)))});(0,n.useEffect)((()=>{M(A)}),[A]);const W=e=>{r(!0),k(e)},I=async t=>{_(t),P(!0),await E.post(`api/task/${null===e||void 0===e?void 0:e.user.employe_id}/${t}/favorite`).then((e=>{B(),(0,O.Z)("success",e.data.message)})).catch((()=>{(0,O.Z)("error","Something went wrong.")})),_(),P(!1)},L=["Director"],U=["Manager"];(0,n.useEffect)((()=>{null!==e&&void 0!==e&&e.user.roles.find((e=>L.includes(e)))&&T(!0)}),[e]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.Z,{children:(0,C.jsx)(i.Z,{className:"rounded-3",children:(0,C.jsxs)(o.Z,{children:[(0,C.jsx)(a.Z,{tag:"h4",children:(0,C.jsxs)("div",{className:"d-flex justify-content-between",children:["Inprogress Tasks",(0,C.jsx)(m.rU,{to:"/",style:{textDecoration:"none"},children:(0,C.jsxs)(d.Z,{size:"sm",color:"info",outline:!0,className:"d-flex align-items-center",children:[(0,C.jsx)(x(),{icon:"chevron_left"}),"Back to Dashboard"]})})]})}),F?"loading...":$?"Something went wrong.":(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.Z,{className:"bg-light-secondary my-auto p-2 rounded-3",children:(0,C.jsxs)(c.Z,{children:[(0,C.jsx)(l.Z,{sm:"12 mb-2",md:"6",children:(0,C.jsxs)("div",{className:"d-flex gap-2",children:[(0,C.jsxs)(d.Z,{type:"button",className:"d-flex align-items-center gap-2 rounded-3",color:"light",size:"sm",children:[(0,C.jsx)(x(),{icon:"filter_list",style:{fontSize:"12px"}}),"Sort"]}),(0,C.jsxs)(d.Z,{type:"button",className:"d-flex align-items-center gap-2 rounded-3",color:"light",size:"sm",children:[(0,C.jsx)(x(),{icon:"tune",style:{fontSize:"12px"}}),"Filters"]})]})}),(0,C.jsx)(l.Z,{sm:"12",md:"6",children:(0,C.jsxs)("div",{className:"d-flex gap-3 col-md-6 w-100",children:[(0,C.jsx)("div",{className:"w-100 position-relative",children:(0,C.jsx)(u.Z,{type:"text",className:"rounded-3",bsSize:"md",placeholder:"Search task...",onChange:e=>(e=>{const t=A.filter((t=>t.task_title.toLowerCase().includes(e.toLowerCase())));M(t)})(e.target.value)})}),(null===e||void 0===e?void 0:e.user.roles.find((e=>U.includes(e))))&&(0,C.jsx)(b.WD,{document:(0,C.jsx)(j.Z,{projectTitle:z,data:A}),fileName:`Task Report - ${null===z||void 0===z?void 0:z.project_number} - ${null===z||void 0===z?void 0:z.division}`,style:{textDecoration:"none"},children:(0,C.jsx)(d.Z,{type:"button",className:"btn btn-light-info text-info rounded-3 d-flex py-2",children:(0,C.jsx)(x(),{icon:"file_download",style:{fontSize:"18px"}})})})]})})]})}),(0,C.jsxs)(l.Z,{sm:"12 overflow-auto",children:[(0,C.jsxs)("h6",{className:"fw-bold mt-3",children:["List of tasks from ",null===z||void 0===z?void 0:z.division]}),(0,C.jsxs)("table",{className:"rounded-corners",children:[(0,C.jsx)("thead",{children:(0,C.jsxs)("tr",{children:[(0,C.jsx)("th",{width:"30",children:"#"}),(0,C.jsx)("th",{children:"Task title"}),(0,C.jsx)("th",{width:"",children:"Status"}),(0,C.jsx)("th",{children:"Progress"}),(0,C.jsx)("th",{width:"100",children:"PIC"}),R&&(0,C.jsx)("th",{width:"50"})]})}),(0,C.jsx)("tbody",{children:(null===D||void 0===D?void 0:D.length)>0?null===D||void 0===D?void 0:D.map(((e,t)=>{var r,s,l,i,o,a;return(0,C.jsxs)(n.Fragment,{children:[(0,C.jsxs)("tr",{children:[(0,C.jsxs)("td",{children:[t+1,"."]}),(0,C.jsxs)("td",{style:{cursor:"pointer"},onClick:()=>W(e),children:[(0,C.jsx)("span",{style:{fontWeight:"600"},children:e.task_title}),(0,C.jsx)("br",{}),(0,C.jsxs)(h.Z,{color:"light",className:"text-muted",children:[null===e||void 0===e||null===(r=e.subtasks)||void 0===r?void 0:r.length," subtask"]}),"  ",(0,C.jsxs)(h.Z,{color:"light",className:"text-muted",children:[(0,C.jsx)(x(),{icon:"comment",style:{fontSize:"12px"}}),e.comments]})]}),(0,C.jsx)("td",{children:0===e.status?(0,C.jsx)(h.Z,{color:"light",className:"text-dark",children:"To Do"}):1===e.status?(0,C.jsx)(h.Z,{color:"warning",children:"In Progress"}):2===e.status?(0,C.jsx)(h.Z,{color:"light",className:"text-dark",children:"Under Review"}):3===e.status?(0,C.jsx)(h.Z,{color:"success",children:"Approved"}):(0,C.jsx)(h.Z,{color:"danger",children:"Revision"})}),(0,C.jsx)("td",{children:(0,C.jsxs)("span",{className:"badge bg-light-success text-primary rounded-pill d-inline-block fw-bold",children:[null===e||void 0===e||null===(s=e.task_progress)||void 0===s?void 0:s.toFixed(),"%"]})}),(0,C.jsx)("td",{children:(0,C.jsx)("div",{className:"members",children:(0,C.jsxs)("div",{className:"members-item",children:[null===e||void 0===e||null===(l=e.pics)||void 0===l?void 0:l.map(((e,t)=>{var r;return t<2&&(0,C.jsxs)(n.Fragment,{children:[(0,C.jsx)("img",{id:`tooltip-${e.id}`,src:g,className:"ava-pic rounded-circle",alt:"avatar",width:"35",height:"35"}),(0,C.jsx)(N.Z,{title:e.first_name,id:null===(r=e.id)||void 0===r?void 0:r.toString()})]},e.id)})),(null===e||void 0===e||null===(i=e.pics)||void 0===i?void 0:i.length)>2&&(0,C.jsxs)("div",{className:"member-plus bg-light-info text-info fw-bold",children:["+",(null===e||void 0===e||null===(o=e.pics)||void 0===o?void 0:o.length)-2]})]})})}),R&&(0,C.jsx)("td",{className:"text-center",children:Z&&S===e.task_id?(0,C.jsx)(f.Z,{size:"sm",color:"warning"}):(0,C.jsx)("abbr",{title:"Mark task",style:{textDecoration:"none"},children:(0,C.jsx)("button",{type:"button",className:"fav-btn",onClick:()=>I(e.task_id),children:(0,C.jsx)(x(),{icon:"star",className:`${e.isFavorite&&"is_favorite"}`})})})})]}),(null===e||void 0===e||null===(a=e.subtasks)||void 0===a?void 0:a.length)>0&&e.subtasks.map((e=>{var t,r,s;return(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsxs)("td",{onClick:()=>W(e),style:{cursor:"pointer"},children:[e.task_title,(0,C.jsx)("br",{}),(0,C.jsxs)(h.Z,{color:"light",className:"text-muted",children:[(0,C.jsx)(x(),{icon:"comment",style:{fontSize:"12px"}}),e.comments]})]}),(0,C.jsx)("td",{children:"-"}),(0,C.jsx)("td",{children:(0,C.jsxs)("span",{className:"badge bg-light-primary text-primary rounded-pill d-inline-block fw-bold",children:[null===e||void 0===e||null===(t=e.task_progress)||void 0===t?void 0:t.toFixed(),"%"]})}),(0,C.jsx)("td",{children:(0,C.jsx)("div",{className:"members",children:(0,C.jsxs)("div",{className:"members-item",children:[null===e||void 0===e||null===(r=e.pics)||void 0===r?void 0:r.map(((e,t)=>{var r;return t<2&&(0,C.jsxs)(n.Fragment,{children:[(0,C.jsx)("img",{id:`tooltip-${e.id}`,src:g,className:"ava-pic rounded-circle",alt:"avatar",width:"35",height:"35"},e.id),(0,C.jsx)(N.Z,{title:e.first_name,id:null===(r=e.id)||void 0===r?void 0:r.toString()})]},e.id)})),(null===e||void 0===e||null===(s=e.pics)||void 0===s?void 0:s.length)>2&&(0,C.jsxs)("div",{className:"member-plus bg-light-info text-info fw-bold",children:["+",e.pics.length-2]})]})})}),R&&(0,C.jsx)("td",{className:"text-center",children:Z&&S===e.task_id?(0,C.jsx)(f.Z,{size:"sm",color:"warning"}):(0,C.jsx)("abbr",{title:"Mark task",style:{textDecoration:"none"},children:(0,C.jsx)("button",{type:"button",className:"fav-btn",onClick:()=>I(e.task_id),children:(0,C.jsx)(x(),{icon:"star",className:`${e.isFavorite&&"is_favorite"}`})})})})]},e.task_id)}))]},e.task_id)})):(0,C.jsx)("tr",{children:(0,C.jsx)("td",{colSpan:"5",align:"center",children:"Data not found."})})})]})]})]})]})})}),t&&(0,C.jsx)(v.Z,{modal:t,setModal:r,toggle:()=>{r(!t)},task:p,mode:"activities"})]})}},14097:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(72791),s=r(46272),l=r(80184);const i=s.mM.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:10,textAlign:"center"},text:{margin:10,fontSize:10,textAlign:"justify"},image:{marginVertical:4,marginHorizontal:15,width:50,height:50},header:{fontSize:10,marginBottom:5,textAlign:"left",color:"#3f3f3f",fontWeight:"bold"},pageNumber:{position:"absolute",fontSize:10,bottom:30,left:0,right:0,textAlign:"center",color:"grey"},printAt:{position:"absolute",fontSize:8,bottom:30,left:35,right:0,textAlign:"left",color:"grey"},table:{display:"table",width:"auto",borderStyle:"solid",borderWidth:1,borderRightWidth:0,borderBottomWidth:0,color:"#3f3f3f"},tableRow:{margin:"auto",flexDirection:"row"},tableCol:{borderStyle:"solid",borderWidth:1,borderLeftWidth:0,borderTopWidth:0},tableCell:{marginTop:3,marginBottom:3,marginLeft:3,marginRight:3,fontSize:10}}),o=()=>{const e=new Date;return`${e.toDateString()}, ${e.toLocaleString().split(",")[1]}`},a=e=>{let{projectTitle:t,data:r}=e;return(0,l.jsx)(s.BB,{children:(0,l.jsxs)(s.T3,{style:{...i.body,backgroundColor:"#fff"},children:[(0,l.jsxs)(s.xv,{style:i.header,fixed:!0,children:["Project : ",null===t||void 0===t?void 0:t.project_name]}),(0,l.jsxs)(s.xv,{style:i.header,fixed:!0,children:["Partner : ",null===t||void 0===t?void 0:t.partner]}),(0,l.jsxs)(s.xv,{style:i.header,fixed:!0,children:["Division : ",null===t||void 0===t?void 0:t.division]}),(0,l.jsxs)(s.xv,{style:i.header,fixed:!0,children:["Phase : ",null===t||void 0===t?void 0:t.phase]}),(0,l.jsxs)(s.xv,{style:i.header,fixed:!0,children:["Schema : ","jo"===(null===t||void 0===t?void 0:t.schema)?"Join Operational":"Join Venture"]}),(0,l.jsxs)(s.G7,{style:i.table,children:[(0,l.jsxs)(s.G7,{style:i.tableRow,children:[(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"5%"},children:(0,l.jsx)(s.xv,{style:i.tableCell,children:"No."})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"35%"},children:(0,l.jsx)(s.xv,{style:i.tableCell,children:"Task Title"})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"15%"},children:(0,l.jsx)(s.xv,{style:i.tableCell,children:"Status"})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"15%"},children:(0,l.jsx)(s.xv,{style:i.tableCell,children:"Deadline"})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"30%"},children:(0,l.jsx)(s.xv,{style:i.tableCell,children:"PIC"})})]}),null===r||void 0===r?void 0:r.map(((e,t)=>{var r,o;return(0,l.jsxs)(n.Fragment,{children:[(0,l.jsxs)(s.G7,{style:i.tableRow,children:[(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"5%"},children:(0,l.jsx)(s.xv,{style:{...i.tableCell,textAlign:"center"},children:t+1})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"35%"},children:(0,l.jsx)(s.xv,{style:i.tableCell,children:e.task_title})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"15%"},children:(0,l.jsx)(s.xv,{style:{...i.tableCell,fontSize:"10px"},children:0===e.status?"To do":1===e.status?"In progress":2===e.status?"Under review":3===e.status?"Approved":"Revision"})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"15%"},children:(0,l.jsx)(s.xv,{style:i.tableCell,children:e.end_date})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"30%"},children:null===(r=e.pics)||void 0===r?void 0:r.map((e=>(0,l.jsx)(s.xv,{style:i.tableCell,children:e.first_name},e.id)))})]}),null===(o=e.level_2)||void 0===o?void 0:o.map((e=>{var t;return(0,l.jsxs)(s.G7,{style:i.tableRow,children:[(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"5%"},children:(0,l.jsx)(s.xv,{style:i.tableCell})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"35%"},children:(0,l.jsx)(s.xv,{style:i.tableCell,children:e.task_title})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"15%"},children:(0,l.jsx)(s.xv,{style:i.tableCell,children:"-"})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"15%"},children:(0,l.jsx)(s.xv,{style:i.tableCell,children:e.end_date})}),(0,l.jsx)(s.G7,{style:{...i.tableCol,width:"30%"},children:null===(t=e.pics)||void 0===t?void 0:t.map((e=>(0,l.jsx)(s.xv,{style:i.tableCell,children:e.first_name},e.id)))})]},e.task_id)}))]},e.task_id)}))]}),(0,l.jsx)(s.xv,{style:i.pageNumber,render:e=>{let{pageNumber:t,totalPages:r}=e;return`${t} / ${r}`}}),(0,l.jsx)(s.xv,{style:i.printAt,render:o})]})})}},16354:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(72791),s=r(52007),l=r.n(s),i=r(81694),o=r.n(i),a=r(9622),d=["className","cssModule","color","innerRef","pill","tag"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var h={children:l().node,className:l().string,color:l().string,cssModule:l().object,innerRef:l().oneOfType([l().object,l().func,l().string]),pill:l().bool,tag:a.iC};function f(e){var t=e.className,r=e.cssModule,s=e.color,l=void 0===s?"secondary":s,i=e.innerRef,h=e.pill,f=void 0!==h&&h,p=e.tag,x=void 0===p?"span":p,b=u(e,d),m=(0,a.mx)(o()(t,"badge","bg-"+l,!!f&&"rounded-pill"),r);return b.href&&"span"===x&&(x="a"),n.createElement(x,c({},b,{className:m,ref:i}))}f.propTypes=h;const p=f},14448:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(72791),s=r(52007),l=r.n(s),i=r(81694),o=r.n(i),a=r(9622),d=["className","cssModule","tag"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var h={className:l().string,cssModule:l().object,tag:a.iC};function f(e){var t=e.className,r=e.cssModule,s=e.tag,l=void 0===s?"div":s,i=u(e,d),h=(0,a.mx)(o()(t,"card-title"),r);return n.createElement(l,c({},i,{className:h}))}f.propTypes=h;const p=f},69399:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(72791),s=r(52007),l=r.n(s),i=r(9622);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var a=["className","cssModule","tag","innerRef"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=x(e);if(t){var s=x(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,r)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var b={children:l().node,tag:i.iC,innerRef:l().oneOfType([l().object,l().func,l().string]),className:l().string,cssModule:l().object},m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(o,e);var t,r,s,l=f(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=l.call(this,e)).getRef=t.getRef.bind(p(t)),t.submit=t.submit.bind(p(t)),t}return t=o,(r=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"submit",value:function(){this.ref&&this.ref.submit()}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.cssModule,s=e.tag,l=void 0===s?"form":s,o=e.innerRef,u=c(e,a),h=(0,i.mx)(t,r);return n.createElement(l,d({},u,{ref:o,className:h}))}}])&&u(t.prototype,r),s&&u(t,s),Object.defineProperty(t,"prototype",{writable:!1}),o}(n.Component);m.propTypes=b;const v=m},20311:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(72791),s=r(81694),l=r.n(s),i=r(82122);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e){var t=l()("tooltip-arrow",e.arrowClassName),r=l()("tooltip","show",e.popperClassName),s=l()("tooltip-inner",e.innerClassName);return n.createElement(i.Z,o({},e,{arrowClassName:t,popperClassName:r,innerClassName:s}))}a.propTypes=i.i,a.defaultProps={placement:"top",autohide:!0,placementPrefix:"bs-tooltip",trigger:"hover focus"};const d=a},35754:()=>{},42459:()=>{},42480:()=>{}}]);
//# sourceMappingURL=585.21a5a095.chunk.js.map