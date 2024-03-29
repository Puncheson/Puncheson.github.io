"use strict";(self.webpackChunkdecathlon_study_case=self.webpackChunkdecathlon_study_case||[]).push([[582],{582:(e,t,r)=>{r.r(t),r.d(t,{default:()=>se});var n=r(5893),a=r(2145),o=r(7294),i=r(4611);var s=r(4796),l=r(3366),c=r(7462),u=r(6010),d=r(917),f=r(4780);var h=r(1796),p=r(7204),v=r(1468),m=r(8562),b=r(1588);function g(e){return(0,m.Z)("MuiSkeleton",e)}(0,b.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const w=["animation","className","component","height","style","variant","width"];let y,x,C,S,k=e=>e;const Z=(0,d.F4)(y||(y=k`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),j=(0,d.F4)(x||(x=k`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),N=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!1!==r.animation&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})((({theme:e,ownerState:t})=>{const r=(o=e.shape.borderRadius,String(o).match(/[\d.\-+]*\s*(.*)/)[1]||""||"px"),n=(a=e.shape.borderRadius,parseFloat(a));var a,o;return(0,c.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,h.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${r}/${Math.round(n/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(({ownerState:e})=>"pulse"===e.animation&&(0,d.iv)(C||(C=k`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),Z)),(({ownerState:e,theme:t})=>"wave"===e.animation&&(0,d.iv)(S||(S=k`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),j,(t.vars||t).palette.action.hover))),P=o.forwardRef((function(e,t){const r=(0,v.Z)({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:o,component:i="span",height:s,style:d,variant:h="text",width:p}=r,m=(0,l.Z)(r,w),b=(0,c.Z)({},r,{animation:a,component:i,variant:h,hasChildren:Boolean(m.children)}),y=(e=>{const{classes:t,variant:r,animation:n,hasChildren:a,width:o,height:i}=e,s={root:["root",r,n,a&&"withChildren",a&&!o&&"fitContent",a&&!i&&"heightAuto"]};return(0,f.Z)(s,g,t)})(b);return(0,n.jsx)(N,(0,c.Z)({as:i,ref:t,className:(0,u.Z)(y.root,o),ownerState:b},m,{style:(0,c.Z)({width:p,height:s},d)}))}));var $;function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},L.apply(this,arguments)}const R=function(e){return o.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490.1 490.1",style:{enableBackground:"new 0 0 490.1 490.1"},xmlSpace:"preserve",role:"img"},e),$||($=o.createElement("path",{d:"M201.9 21.018c-18.6 13.6-28 36.9-28 69v76.2H68.3c-37.6 0-68.3 30.6-68.3 68.3v2.1c0 .6.1 1.3.2 1.9l28.1 176.5c5.2 42.4 34.8 66.8 81.1 66.8h209.2c37.6 0 68.3-30.6 68.3-68.3v-196.1c0-5.9 4.8-10.7 10.7-10.7h57.3c5.9 0 10.7 4.8 10.7 10.7v207.9c0 5.9-4.8 10.7-10.7 10.7h-33.1c-6.8 0-12.3 5.5-12.3 12.3s5.5 12.3 12.3 12.3h33.1c19.4 0 35.2-15.8 35.2-35.2v-208c0-19.4-15.8-35.2-35.2-35.2h-57.3c-13.8 0-25.8 8-31.6 19.6-.8-.5-1.7-.8-2.7-1.1-3.3-.9-81.4-23.8-81.4-91.2v-85.6c0-5.4-3.5-10.1-8.6-11.7-1.6-.5-42-12.8-71.4 8.8zm154.9 203.2c1.9.5 3.8.6 5.6.2v189.1c0 24.1-19.6 43.8-43.8 43.8H109.4c-34 0-53.1-15.2-56.9-45.7l-28-176v-1.1c0-24.1 19.6-43.8 43.8-43.8h117.9c6.8 0 12.3-5.5 12.3-12.3v-88.4c0-23.9 6-40.4 17.9-49.2 12.9-9.6 30.7-8.7 41.1-7v75.6c0 86 95.2 113.7 99.3 114.8z"})))};var O=r(791),B=r(9250),M=function(){return M=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},M.apply(this,arguments)},I=function(e){var t=e.className,r=e.post,a=(0,B.s0)(),l=(0,o.useState)(!1),c=l[0],u=l[1];return(0,n.jsx)("div",M({className:(0,i.A)("AQI8JDYL",{},[t])},{children:r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",M({className:"VJGHN7kp",onClick:function(){return a("user/".concat(r.owner.id))}},{children:[(0,n.jsx)("img",{className:"EOO6xxOp",src:r.owner.picture,alt:"userImage"}),(0,n.jsxs)("div",M({className:"bdLdCrYj"},{children:[(0,n.jsx)("span",{children:r.owner.title}),(0,n.jsx)("span",{children:r.owner.firstName}),(0,n.jsx)("span",{children:r.owner.lastName})]}))]})),!c&&(0,n.jsx)(P,{variant:"rectangular",width:270,height:180}),(0,n.jsx)("img",{onLoad:function(){return u(!0)},title:r.id,className:"y3ccxHBI",src:r.image,alt:r.id}),(0,n.jsxs)("div",M({className:"fVxSZYWI"},{children:[(0,n.jsx)(s.Z,{component:R,sx:{fontSize:20,height:15},inheritViewBox:!0}),r.likes," ",r.tags.map((function(e){return(0,n.jsxs)("span",{children:["#",e," "]},e)}))]})),(0,n.jsxs)("span",M({className:"iGoEIPgR"},{children:[" ",r.text]})),(0,n.jsx)("div",M({className:"iE3qMskB"},{children:(0,O.$)(r.publishDate)}))]}):(0,n.jsx)("div",{children:"loading..."})}))},q=r(6622),F=r(2097);function A(e){return(0,m.Z)("MuiLinearProgress",e)}(0,b.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const E=["className","color","value","valueBuffer","variant"];let z,X,D,T,Y,_,H=e=>e;const G=(0,d.F4)(z||(z=H`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),J=(0,d.F4)(X||(X=H`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),V=(0,d.F4)(D||(D=H`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),U=(e,t)=>"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:"light"===e.palette.mode?(0,h.$n)(e.palette[t].main,.62):(0,h._j)(e.palette[t].main,.5),W=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`color${(0,q.Z)(r.color)}`],t[r.variant]]}})((({ownerState:e,theme:t})=>(0,c.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:U(t,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"}))),Q=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.dashed,t[`dashedColor${(0,q.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>{const r=U(t,e.color);return(0,c.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,d.iv)(T||(T=H`
    animation: ${0} 3s infinite linear;
  `),V)),K=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,q.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((({ownerState:e,theme:t})=>(0,c.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,d.iv)(Y||(Y=H`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),G))),ee=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,q.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((({ownerState:e,theme:t})=>(0,c.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:U(t,e.color),transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,d.iv)(_||(_=H`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),J))),te=o.forwardRef((function(e,t){const r=(0,v.Z)({props:e,name:"MuiLinearProgress"}),{className:a,color:o="primary",value:i,valueBuffer:s,variant:d="indeterminate"}=r,h=(0,l.Z)(r,E),p=(0,c.Z)({},r,{color:o,variant:d}),m=(e=>{const{classes:t,variant:r,color:n}=e,a={root:["root",`color${(0,q.Z)(n)}`,r],dashed:["dashed",`dashedColor${(0,q.Z)(n)}`],bar1:["bar",`barColor${(0,q.Z)(n)}`,("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&`barColor${(0,q.Z)(n)}`,"buffer"===r&&`color${(0,q.Z)(n)}`,("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,f.Z)(a,A,t)})(p),b=(0,F.Z)(),g={},w={bar1:{},bar2:{}};if(("determinate"===d||"buffer"===d)&&void 0!==i){g["aria-valuenow"]=Math.round(i),g["aria-valuemin"]=0,g["aria-valuemax"]=100;let e=i-100;"rtl"===b.direction&&(e=-e),w.bar1.transform=`translateX(${e}%)`}if("buffer"===d&&void 0!==s){let e=(s||0)-100;"rtl"===b.direction&&(e=-e),w.bar2.transform=`translateX(${e}%)`}return(0,n.jsxs)(W,(0,c.Z)({className:(0,u.Z)(m.root,a),ownerState:p,role:"progressbar"},g,{ref:t},h,{children:["buffer"===d?(0,n.jsx)(Q,{className:m.dashed,ownerState:p}):null,(0,n.jsx)(K,{className:m.bar1,ownerState:p,style:w.bar1}),"determinate"===d?null:(0,n.jsx)(ee,{className:m.bar2,ownerState:p,style:w.bar2})]}))}));var re=r(8742);var ne=r(9962),ae=r(9232),oe=function(){return oe=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},oe.apply(this,arguments)},ie=function(e){var t=e.className,r=(0,o.useRef)(),a=(0,o.useState)(1),s=a[0],l=a[1],c=(0,o.useState)(1),u=c[0],d=c[1],f=(0,ne.Z)(""),h=(0,ae.Yi)(s,(function(e,t){d(Math.round(e/t))}),f.value),p=h.posts,v=h.loading,m=h.error;return(0,ae.SZ)(r,s<u&&f.value.length<1,v,(function(){l(s+1)})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(re.Z,oe({},f,{color:"warning",sx:{width:"100%",margin:"15px 0"},id:"outlined-basic",label:"Search loaded posts",variant:"outlined"})),(0,n.jsx)("div",oe({className:(0,i.A)("NxXH0PFM",{},[t])},{children:(null==p?void 0:p.length)?p.map((function(e){return(0,n.jsx)(I,{post:e},e.id)})):(0,n.jsx)("div",{children:f.value.length?"There is no posts found with this query. You can load more posts and try to search again!":v?"Looking for posts...":m?"Oops! Error! Please try again later":"No Posts found"})})),v?(0,n.jsx)(te,{}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)("div",{ref:r,style:{height:20}})]})};const se=function(){return(0,n.jsx)(a.Z,{children:(0,n.jsx)(ie,{})})}},3387:(e,t,r)=>{r.d(t,{Jq:()=>u,PR:()=>c,Rf:()=>l});var n=r(9669);const a=r.n(n)().create({baseURL:"https://dummyapi.io/data/v1/",headers:{"app-id":"633ad902c4435b1d45c59c39"}});var o=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}l((n=n.apply(e,t||[])).next())}))},i=function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},s="/user",l=function(e){return o(void 0,void 0,void 0,(function(){var t;return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,a.get("".concat(s,"?page=").concat(e.page,"&limit=").concat(e.limit)).then((function(e){return e.data}))];case 1:return[2,r.sent()];case 2:return t=r.sent(),console.log(t),[2,t];case 3:return[2]}}))}))},c=function(e){return o(void 0,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,a.get("".concat(s,"/").concat(e)).then((function(e){return e.data}))];case 1:case 2:return[2,t.sent()];case 3:return[2]}}))}))},u=function(e){return t=void 0,r=void 0,o=function(){var t;return function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,a.get("".concat("/post","?page=").concat(e.page,"&limit=").concat(e.limit)).then((function(e){return e.data}))];case 1:return[2,r.sent()];case 2:return t=r.sent(),console.log(t),[2,t];case 3:return[2]}}))},new((n=void 0)||(n=Promise))((function(e,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,s)}l((o=o.apply(t,r||[])).next())}));var t,r,n,o}},791:(e,t,r)=>{r.d(t,{$:()=>n});var n=function(e){var t=e.split("T"),r=t[0].split("-").join("/"),n=t[1].slice(0,5);return"".concat(r," ").concat(n)}},9232:(e,t,r)=>{r.d(t,{Yi:()=>s,w4:()=>c,SZ:()=>u});var n=function(e,t){return null==e?void 0:e.filter((function(e){return e.owner.firstName.toLowerCase().includes(t.toLowerCase())||e.owner.lastName.toLowerCase().includes(t.toLowerCase())||e.text.toLowerCase().includes(t.toLowerCase())||e.tags.some((function(e){return e.toLowerCase().includes(t.toLowerCase())}))}))},a=r(7294),o=r(3387),i=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},s=function(e,t,r){var s=(0,a.useState)(!1),l=s[0],c=s[1],u=(0,a.useState)(!1),d=u[0],f=u[1],h=(0,a.useState)([]),p=h[0],v=h[1];return(0,a.useEffect)((function(){f(!0),(0,o.Jq)({page:e,limit:10}).then((function(e){(null==e?void 0:e.data)?(v(i(i([],p,!0),e.data,!0)),t(e.total,e.limit),f(!1)):(c(!0),f(!1))}))}),[e]),{error:l,loading:d,posts:n(p,r)}},l=function(e,t){return null==e?void 0:e.filter((function(e){return e.firstName.toLowerCase().includes(t.toLowerCase())||e.lastName.toLowerCase().includes(t.toLowerCase())}))},c=function(e,t,r,n){var i=(0,a.useState)(!1),s=i[0],c=i[1],u=(0,a.useState)(!1),d=u[0],f=u[1],h=(0,a.useState)(),p=h[0],v=h[1],m=e.pageNumber,b=e.limit;return(0,a.useEffect)((function(){f(!0),(0,o.Rf)({page:m,limit:b}).then((function(e){(null==e?void 0:e.data)?(v(e.data),t(e.limit,e.total),f(!1)):(c(!0),f(!1))}))}),[r]),{error:s,loading:d,users:l(p,n)}},u=function(e,t,r,n){var o=(0,a.useRef)();(0,a.useEffect)((function(){r||(o.current&&o.current.disconnect(),o.current=new IntersectionObserver((function(e){e[0].isIntersecting&&t&&n()})),o.current.observe(e.current))}),[r,t])}},9962:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=function(e){var t=(0,n.useState)(e),r=t[0],a=t[1];return{value:r,onChange:function(e){a(e.target.value)}}}},2145:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(5893),a=r(4611);var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},i=function(e){var t=e.children,r=e.className;return(0,n.jsx)("div",o({className:(0,a.A)("e18p9ukU",{},[r])},{children:t}))}}}]);