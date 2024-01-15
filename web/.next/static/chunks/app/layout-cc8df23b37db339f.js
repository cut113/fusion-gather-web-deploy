(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2601:function(e,t,r){"use strict";var n,s;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(8960)},7448:function(e,t,r){Promise.resolve().then(r.bind(r,2635)),Promise.resolve().then(r.t.bind(r,6813,23)),Promise.resolve().then(r.bind(r,5925)),Promise.resolve().then(r.t.bind(r,3385,23))},3385:function(){},6813:function(e){e.exports={style:{fontFamily:"'__Roboto_ba9cb9', '__Roboto_Fallback_ba9cb9'"},className:"__className_ba9cb9"}},8960:function(e){!function(){var t={229:function(e){var t,r,n,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c=[],l=!1,u=-1;function d(){l&&n&&(l=!1,n.length?c=n.concat(c):u=-1,c.length&&p())}function p(){if(!l){var e=i(d);l=!0;for(var t=c.length;t;){for(n=c,c=[];++u<t;)n&&n[u].run();u=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new f(e,t)),1!==c.length||l||i(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=h,s.addListener=h,s.once=h,s.off=h,s.removeListener=h,s.removeAllListeners=h,s.emit=h,s.prependListener=h,s.prependOnceListener=h,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var o=r[e]={exports:{}},a=!0;try{t[e](o,o.exports,n),a=!1}finally{a&&delete r[e]}return o.exports}n.ab="//";var s=n(229);e.exports=s}()},622:function(e,t,r){"use strict";var n=r(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},7437:function(e,t,r){"use strict";e.exports=r(622)},2635:function(e,t,r){"use strict";r.r(t),r.d(t,{SessionContext:function(){return B},SessionProvider:function(){return G},getCsrfToken:function(){return q},getProviders:function(){return J},getSession:function(){return W},signIn:function(){return Y},signOut:function(){return Z},useSession:function(){return V}});var n=r(7437),s=r(2265);class o extends Error{constructor(e,t){e instanceof Error?super(void 0,{cause:{err:e,...e.cause,...t}}):"string"==typeof e?(t instanceof Error&&(t={err:t,...t.cause}),super(e,t)):super(void 0,e),this.name=this.constructor.name,this.type=this.constructor.type??"AuthError",this.kind=this.constructor.kind??"error",Error.captureStackTrace?.(this,this.constructor);let r=`https://errors.authjs.dev#${this.type.toLowerCase()}`;this.message+=`${this.message?" .":""}Read more at ${r}`}}class a extends o{}a.kind="signIn";class i extends o{}i.type="AdapterError";class c extends o{}c.type="AuthorizedCallbackError";class l extends o{}l.type="CallbackRouteError";class u extends o{}u.type="ErrorPageLoop";class d extends o{}d.type="EventError";class p extends o{}p.type="InvalidCallbackUrl";class f extends a{}f.type="CredentialsSignin";class h extends o{}h.type="InvalidEndpoints";class m extends o{}m.type="InvalidCheck";class y extends o{}y.type="JWTSessionError";class g extends o{}g.type="MissingAdapter";class v extends o{}v.type="MissingAdapterMethods";class b extends o{}b.type="MissingAuthorize";class w extends o{}w.type="MissingSecret";class x extends a{}x.type="OAuthAccountNotLinked";class E extends a{}E.type="OAuthCallbackError";class _ extends o{}_.type="OAuthProfileParseError";class S extends o{}S.type="SessionTokenError";class T extends a{}T.type="OAuthSignInError";class k extends a{}k.type="EmailSignInError";class L extends o{}L.type="SignOutError";class $ extends o{}$.type="UnknownAction";class C extends o{}C.type="UnsupportedStrategy";class R extends o{}R.type="InvalidProvider";class P extends o{}P.type="UntrustedHost";class A extends o{}A.type="Verification";class U extends a{}U.type="MissingCSRF";class O extends o{}class N extends o{}async function I(e,t,r,n={}){let s=`${j(t)}/${e}`;try{let e={headers:{"Content-Type":"application/json",...n?.headers?.cookie?{cookie:n.headers.cookie}:{}}};n?.body&&(e.body=JSON.stringify(n.body),e.method="POST");let t=await fetch(s,e),r=await t.json();if(!t.ok)throw r;return r}catch(e){return r.error(new O(e.message,e)),null}}function j(e){return"undefined"==typeof window?`${e.baseUrlServer}${e.basePathServer}`:e.basePath}function M(){return Math.floor(Date.now()/1e3)}function z(e){let t=new URL("http://localhost:3000/api/auth");e&&!e.startsWith("http")&&(e=`https://${e}`);let r=new URL(e??t),n=("/"===r.pathname?t.pathname:r.pathname).replace(/\/$/,""),s=`${r.origin}${n}`;return{origin:r.origin,host:r.host,path:n,base:s,toString:()=>s}}var D=r(2601);let H={baseUrl:z(D.env.NEXTAUTH_URL??D.env.VERCEL_URL).origin,basePath:z(D.env.NEXTAUTH_URL).path,baseUrlServer:z(D.env.NEXTAUTH_URL_INTERNAL??D.env.NEXTAUTH_URL??D.env.VERCEL_URL).origin,basePathServer:z(D.env.NEXTAUTH_URL_INTERNAL??D.env.NEXTAUTH_URL).path,_lastSync:0,_session:void 0,_getSession:()=>{}};function F(){return"undefined"!=typeof BroadcastChannel?new BroadcastChannel("next-auth"):{postMessage:()=>{},addEventListener:()=>{},removeEventListener:()=>{}}}let X={debug:console.debug,error:console.error,warn:console.warn},B=s.createContext?.(void 0);function V(e){if(!B)throw Error("React Context is unavailable in Server Components");let t=s.useContext(B),{required:r,onUnauthenticated:n}=e??{},o=r&&"unauthenticated"===t.status;return(s.useEffect(()=>{if(o){let e=`/api/auth/signin?${new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href})}`;n?n():window.location.href=e}},[o,n]),o)?{data:t.data,update:t.update,status:"loading"}:t}async function W(e){let t=await I("session",H,X,e);return(e?.broadcast??!0)&&F().postMessage({event:"session",data:{trigger:"getSession"}}),t}async function q(){let e=await I("csrf",H,X);return e?.csrfToken??""}async function J(){return I("providers",H,X)}async function Y(e,t,r){let{callbackUrl:n=window.location.href,redirect:s=!0}=t??{},o=j(H),a=await J();if(!a){window.location.href=`${o}/error`;return}if(!e||!(e in a)){window.location.href=`${o}/signin?${new URLSearchParams({callbackUrl:n})}`;return}let i="credentials"===a[e].type,c="email"===a[e].type,l=`${o}/${i?"callback":"signin"}/${e}`,u=await q(),d=await fetch(`${l}?${new URLSearchParams(r)}`,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Return-Redirect":"1"},body:new URLSearchParams({...t,csrfToken:u,callbackUrl:n})}),p=await d.json();if(s||!(i||c)){let e=p.url??n;window.location.href=e,e.includes("#")&&window.location.reload();return}let f=new URL(p.url,o).searchParams.get("error");return d.ok&&await H._getSession({event:"storage"}),{error:f,status:d.status,ok:d.ok,url:f?null:p.url}}async function Z(e){let{callbackUrl:t=window.location.href}=e??{},r=j(H),n=await q(),s=await fetch(`${r}/signout`,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Return-Redirect":"1"},body:new URLSearchParams({csrfToken:n,callbackUrl:t})}),o=await s.json();if(F().postMessage({event:"session",data:{trigger:"signout"}}),e?.redirect??!0){let e=o.url??t;window.location.href=e,e.includes("#")&&window.location.reload();return}return await H._getSession({event:"storage"}),o}function G(e){if(!B)throw Error("React Context is unavailable in Server Components");let{children:t,basePath:r,refetchInterval:o,refetchWhenOffline:a}=e;r&&(H.basePath=r);let i=void 0!==e.session;H._lastSync=i?M():0;let[c,l]=s.useState(()=>(i&&(H._session=e.session),e.session)),[u,d]=s.useState(!i);s.useEffect(()=>(H._getSession=async({event:e}={})=>{try{let t="storage"===e;if(t||void 0===H._session){H._lastSync=M(),H._session=await W({broadcast:!t}),l(H._session);return}if(!e||null===H._session||M()<H._lastSync)return;H._lastSync=M(),H._session=await W(),l(H._session)}catch(e){X.error(new N(e.message,e))}finally{d(!1)}},H._getSession(),()=>{H._lastSync=0,H._session=void 0,H._getSession=()=>{}}),[]),s.useEffect(()=>{let e=()=>H._getSession({event:"storage"});return F().addEventListener("message",e),()=>F().removeEventListener("message",e)},[]),s.useEffect(()=>{let{refetchOnWindowFocus:t=!0}=e,r=()=>{t&&"visible"===document.visibilityState&&H._getSession({event:"visibilitychange"})};return document.addEventListener("visibilitychange",r,!1),()=>document.removeEventListener("visibilitychange",r,!1)},[e.refetchOnWindowFocus]);let p=function(){let[e,t]=s.useState("undefined"!=typeof navigator&&navigator.onLine),r=()=>t(!0),n=()=>t(!1);return s.useEffect(()=>(window.addEventListener("online",r),window.addEventListener("offline",n),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",n)}),[]),e}(),f=!1!==a||p;s.useEffect(()=>{if(o&&f){let e=setInterval(()=>{H._session&&H._getSession({event:"poll"})},1e3*o);return()=>clearInterval(e)}},[o,f]);let h=s.useMemo(()=>({data:c,status:u?"loading":c?"authenticated":"unauthenticated",async update(e){if(u||!c)return;d(!0);let t=await I("session",H,X,void 0===e?void 0:{body:{csrfToken:await q(),data:e}});return d(!1),t&&(l(t),F().postMessage({event:"session",data:{trigger:"getSession"}})),t}}),[c,u]);return(0,n.jsx)(B.Provider,{value:h,children:t})}},5925:function(e,t,r){"use strict";let n,s;r.r(t),r.d(t,{CheckmarkIcon:function(){return Z},ErrorIcon:function(){return V},LoaderIcon:function(){return q},ToastBar:function(){return ei},ToastIcon:function(){return et},Toaster:function(){return ed},default:function(){return ep},resolveValue:function(){return S},toast:function(){return M},useToaster:function(){return H},useToasterStore:function(){return N}});var o,a=r(2265);let i={data:""},c=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,p=(e,t)=>{let r="",n="",s="";for(let o in e){let a=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+a+";":n+="f"==o[1]?p(a,o):o+"{"+p(a,"k"==o[1]?"":t)+"}":"object"==typeof a?n+=p(a,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=a&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(o,a):o+":"+a+";")}return r+(t&&s?t+"{"+s+"}":s)+n},f={},h=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+h(e[r]);return t}return e},m=(e,t,r,n,s)=>{var o;let a=h(e),i=f[a]||(f[a]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(a));if(!f[i]){let t=a!==e?e:(e=>{let t,r,n=[{}];for(;t=l.exec(e.replace(u,""));)t[4]?n.shift():t[3]?(r=t[3].replace(d," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(d," ").trim();return n[0]})(e);f[i]=p(s?{["@keyframes "+i]:t}:t,r?"":"."+i)}let c=r&&f.g?f.g:null;return r&&(f.g=f[i]),o=f[i],c?t.data=t.data.replace(c,o):-1===t.data.indexOf(o)&&(t.data=n?o+t.data:t.data+o),i},y=(e,t,r)=>e.reduce((e,n,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+n+(null==o?"":o)},"");function g(e){let t=this||{},r=e.call?e(t.p):e;return m(r.unshift?r.raw?y(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,c(t.target),t.g,t.o,t.k)}g.bind({g:1});let v,b,w,x=g.bind({k:1});function E(e,t){let r=this||{};return function(){let n=arguments;function s(o,a){let i=Object.assign({},o),c=i.className||s.className;r.p=Object.assign({theme:b&&b()},i),r.o=/ *go\d+/.test(c),i.className=g.apply(r,n)+(c?" "+c:""),t&&(i.ref=a);let l=e;return e[0]&&(l=i.as||e,delete i.as),w&&l[0]&&w(i),v(l,i)}return t?t(s):s}}var _=e=>"function"==typeof e,S=(e,t)=>_(e)?e(t):e,T=(n=0,()=>(++n).toString()),k=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},L=new Map,$=e=>{if(L.has(e))return;let t=setTimeout(()=>{L.delete(e),U({type:4,toastId:e})},1e3);L.set(e,t)},C=e=>{let t=L.get(e);t&&clearTimeout(t)},R=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&C(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?R(e,{type:1,toast:r}):R(e,{type:0,toast:r});case 3:let{toastId:n}=t;return n?$(n):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},P=[],A={toasts:[],pausedAt:void 0},U=e=>{A=R(A,e),P.forEach(e=>{e(A)})},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},N=(e={})=>{let[t,r]=(0,a.useState)(A);(0,a.useEffect)(()=>(P.push(r),()=>{let e=P.indexOf(r);e>-1&&P.splice(e,1)}),[t]);let n=t.toasts.map(t=>{var r,n;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||O[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}});return{...t,toasts:n}},I=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||T()}),j=e=>(t,r)=>{let n=I(t,e,r);return U({type:2,toast:n}),n.id},M=(e,t)=>j("blank")(e,t);M.error=j("error"),M.success=j("success"),M.loading=j("loading"),M.custom=j("custom"),M.dismiss=e=>{U({type:3,toastId:e})},M.remove=e=>U({type:4,toastId:e}),M.promise=(e,t,r)=>{let n=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(M.success(S(t.success,e),{id:n,...r,...null==r?void 0:r.success}),e)).catch(e=>{M.error(S(t.error,e),{id:n,...r,...null==r?void 0:r.error})}),e};var z=(e,t)=>{U({type:1,toast:{id:e,height:t}})},D=()=>{U({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:r}=N(e);(0,a.useEffect)(()=>{if(r)return;let e=Date.now(),n=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&M.dismiss(t.id);return}return setTimeout(()=>M.dismiss(t.id),r)});return()=>{n.forEach(e=>e&&clearTimeout(e))}},[t,r]);let n=(0,a.useCallback)(()=>{r&&U({type:6,time:Date.now()})},[r]),s=(0,a.useCallback)((e,r)=>{let{reverseOrder:n=!1,gutter:s=8,defaultPosition:o}=r||{},a=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),i=a.findIndex(t=>t.id===e.id),c=a.filter((e,t)=>t<i&&e.visible).length;return a.filter(e=>e.visible).slice(...n?[c+1]:[0,c]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:z,startPause:D,endPause:n,calculateOffset:s}}},F=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,X=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,V=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${X} 0.15s ease-out forwards;
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
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,q=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,J=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=x`
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
}`,Z=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
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
`,G=E("div")`
  position: absolute;
`,K=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ee=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?a.createElement(ee,null,t):t:"blank"===r?null:a.createElement(K,null,a.createElement(q,{...n}),"loading"!==r&&a.createElement(G,null,"error"===r?a.createElement(V,{...n}):a.createElement(Z,{...n})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,en=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,es=E("div")`
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
`,eo=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ea=(e,t)=>{let r=e.includes("top")?1:-1,[n,s]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(r),en(r)];return{animation:t?`${x(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ei=a.memo(({toast:e,position:t,style:r,children:n})=>{let s=e.height?ea(e.position||t||"top-center",e.visible):{opacity:0},o=a.createElement(et,{toast:e}),i=a.createElement(eo,{...e.ariaProps},S(e.message,e));return a.createElement(es,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof n?n({icon:o,message:i}):a.createElement(a.Fragment,null,o,i))});o=a.createElement,p.p=void 0,v=o,b=void 0,w=void 0;var ec=({id:e,className:t,style:r,onHeightUpdate:n,children:s})=>{let o=a.useCallback(t=>{if(t){let r=()=>{n(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return a.createElement("div",{ref:o,className:t,style:r},s)},el=(e,t)=>{let r=e.includes("top"),n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...n}},eu=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ed=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:s,containerStyle:o,containerClassName:i})=>{let{toasts:c,handlers:l}=H(r);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:i,onMouseEnter:l.startPause,onMouseLeave:l.endPause},c.map(r=>{let o=r.position||t,i=el(o,l.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t}));return a.createElement(ec,{id:r.id,key:r.id,onHeightUpdate:l.updateHeight,className:r.visible?eu:"",style:i},"custom"===r.type?S(r.message,r):s?s(r):a.createElement(ei,{toast:r,position:o}))}))},ep=M}},function(e){e.O(0,[971,938,744],function(){return e(e.s=7448)}),_N_E=e.O()}]);