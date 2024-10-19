const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NavBar-B5CvaDC-.js","assets/vendor-CLybqbvA.js","assets/NavBar-D6x8rDTW.css","assets/Footer-CPyK5hYU.js","assets/Footer-CkzQZoSo.css","assets/AvExpert-_e1PBr1q.js","assets/BackButton-krbc1B1s.js","assets/BackButton-B8m1ApuZ.css","assets/SolveForTomorrow-CQ9lx_uD.js","assets/Essilor-CgIQ4gsR.js","assets/Landing-ajdLXBt_.js","assets/Aleph-BR_EJvny.js","assets/About-C1a958Ig.js","assets/About-CmNtQ1BO.css","assets/Work-zrvAhxyM.js","assets/CV-DUnH3l3z.js","assets/_index-CqlwnDOV.js","assets/_index-CNxVOFPR.css","assets/CV-weKnnAgz.css"])))=>i.map(i=>d[i]);
import{j as e,R as x,u as L,r as o,F as O,m as p,B as A,a as S,b as h,c as I}from"./vendor-CLybqbvA.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const P="modulepreload",k=function(a){return"/"+a},j={},m=function(r,i,d){let t=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),c=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(i.map(l=>{if(l=k(l),l in j)return;j[l]=!0;const f=l.endsWith(".css"),_=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${_}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":P,f||(u.as="script"),u.crossOrigin="",u.href=l,c&&u.setAttribute("nonce",c),document.head.appendChild(u),f)return new Promise((w,b)=>{u.addEventListener("load",w),u.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(n){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=n,window.dispatchEvent(c),!c.defaultPrevented)throw n}return t.then(n=>{for(const c of n||[])c.status==="rejected"&&s(c.reason);return r().catch(s)})},g=["btn--primary","btn--secondary"],E=["btn--lg","btn--md"],N=({children:a,type:r,onClick:i,onMouseOver:d,onMouseOut:t,buttonStyle:s,buttonSize:n,iconLeft:c,iconRight:l,fixedPosition:f})=>{const _=g.includes(s)?s:g[0],u=E.includes(n)?n:E[0];return e.jsx("button",{className:`btn  ${_} ${u} ${f?"btn--fixed":""}`,onClick:i,onMouseOver:d,onMouseOut:t,type:r,children:e.jsxs("div",{className:"btn-icon-container",children:[c&&e.jsx("span",{className:"btn__icon btn__icon--left",children:x.cloneElement(c,{className:"h-5 w-5"})}),a,l&&e.jsx("span",{className:"btn__icon btn__icon--right",children:x.cloneElement(l,{className:"h-5 w-5"})})]})})},R="/assets/error-uAcOEA4c.svg",V=()=>e.jsxs("section",{className:"error-section section-hero bg-white mt-40",children:[e.jsx("figure",{className:"img",children:e.jsx("img",{src:R,alt:"Error 404"})}),e.jsx("h1",{className:"heading-secondary",children:"Ooops! Page not found"}),e.jsx("p",{className:"paragraph",children:"The page you are looking is not available"}),e.jsx("a",{href:"https://sebgraph.co/",children:e.jsx(N,{children:"Back to home"})})]});function C(){const{pathname:a}=L();return o.useEffect(()=>{window.scrollTo(0,0)},[a]),null}const T=o.createContext(),B=({children:a})=>{const[r,i]=o.useState(()=>{const s=localStorage.getItem("selectedTheme");return s||"light"});o.useEffect(()=>{document.querySelector("body").setAttribute("data-theme",r),localStorage.setItem("selectedTheme",r)},[r]);const t={theme:r,toggleTheme:()=>{i(s=>s==="dark"?"light":"dark")}};return e.jsx(T.Provider,{value:t,children:a})},D=()=>{const{theme:a}=o.useContext(T),[r,i]=o.useState(!1);o.useEffect(()=>{const t=()=>{window.scrollY>=800?i(!0):i(!1)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]);const d=()=>{window.scrollTo(0,0)};return e.jsx("button",{onClick:d,className:`${r?"backtop-button":"no-show"} ${a}`,children:e.jsx(O,{className:"backtop-button__icon"})})},v={pathOne:{pathLength:[0,1,1,0],transition:{duration:3,ease:"easeInOut",times:[0,.25,.75,1],repeat:1/0}},pathTwo:{pathLength:[0,1,1,0],transition:{duration:3,ease:"easeInOut",delay:.2,repeat:1/0}}},y={animate:{stopColor:["hsl(220, 96%, 87%)","hsl(160, 76%, 80%)","hsl(260, 92%, 95%)"],transition:{duration:3,ease:"easeInOut",repeat:1/0,repeatType:"reverse"}}},z=()=>{const[a,r]=o.useState({pathOne:"pathOne",pathTwo:"pathTwo"});return o.useEffect(()=>{const d=setInterval(()=>{r(t=>({pathOne:t.pathOne,pathTwo:"pathTwo"}))},6e3);return()=>clearInterval(d)},[]),e.jsxs(p.div,{className:"logo-loading",children:[e.jsx(p.div,{className:"logo-loading__container"}),e.jsxs(p.svg,{viewBox:"0 0 29 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"logo-loading__paths",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx(p.stop,{offset:"0%",variants:y,animate:"animate"}),e.jsx(p.stop,{offset:"100%",variants:y,animate:"animate"})]})}),e.jsx(p.path,{className:"logo-loading__paths",d:"M23.0917 11.2273H1.7699C1.67993 11.2273 1.5 11.3182 1.5 11.5V27.2273C1.5 27.3182 1.58997 27.5 1.7699 27.5H19.8114",fill:"transparent",stroke:"url(#gradient)",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",variants:v,animate:a.pathTwo}),e.jsx(p.path,{className:"logo-loading__paths",d:"M27.41 1.5H1.7699C1.58997 1.5 1.5 1.59091 1.5 1.77273V5.77273C1.5 5.86364 1.58997 6.04545 1.7699 6.04545H27.2301C27.3201 6.04545 27.5 6.13636 27.5 6.31818V27.2273C27.5 27.4091 27.2301 27.5909 27.0502 27.4091L15.7249 16.8636C15.545 16.6818 15.3651 16.5909 15.0952 16.5909H6.9083",fill:"transparent",stroke:"url(#gradient)",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",variants:v,animate:a.pathOne})]})]})},$=()=>e.jsx("div",{className:"spinner__container",children:e.jsx(z,{})}),F=o.lazy(()=>m(()=>import("./NavBar-B5CvaDC-.js"),__vite__mapDeps([0,1,2]))),H=o.lazy(()=>m(()=>import("./Footer-CPyK5hYU.js"),__vite__mapDeps([3,1,4]))),q=o.lazy(()=>m(()=>import("./AvExpert-_e1PBr1q.js"),__vite__mapDeps([5,1,6,7]))),W=o.lazy(()=>m(()=>import("./SolveForTomorrow-CQ9lx_uD.js"),__vite__mapDeps([8,1,6,7]))),M=o.lazy(()=>m(()=>import("./Essilor-CgIQ4gsR.js"),__vite__mapDeps([9,1,6,7]))),U=o.lazy(()=>m(()=>import("./Landing-ajdLXBt_.js"),__vite__mapDeps([10,1,6,7]))),Y=o.lazy(()=>m(()=>import("./Aleph-BR_EJvny.js"),__vite__mapDeps([11,1,6,7]))),G=o.lazy(()=>m(()=>import("./About-C1a958Ig.js"),__vite__mapDeps([12,1,13]))),K=o.lazy(()=>m(()=>import("./Work-zrvAhxyM.js"),__vite__mapDeps([14,1]))),Z=o.lazy(()=>m(()=>import("./CV-DUnH3l3z.js"),__vite__mapDeps([15,1,16,17,18]))),J=()=>e.jsx(o.Suspense,{fallback:e.jsx($,{duration:5e3}),children:e.jsxs(A,{children:[e.jsx(C,{}),e.jsx(F,{}),e.jsxs(S,{children:[e.jsx(h,{path:"/",element:e.jsx(K,{})}),e.jsx(h,{path:"/about",element:e.jsx(G,{})}),e.jsx(h,{path:"/cv",element:e.jsx(Z,{})}),e.jsx(h,{path:"/projects/solve",element:e.jsx(W,{})}),e.jsx(h,{path:"/projects/AV",element:e.jsx(q,{})}),e.jsx(h,{path:"/projects/Essilor",element:e.jsx(M,{})}),e.jsx(h,{path:"/projects/Landing",element:e.jsx(U,{})}),e.jsx(h,{path:"/projects/Aleph",element:e.jsx(Y,{})}),e.jsx(h,{path:"*",element:e.jsx(V,{})})]}),e.jsx(D,{}),e.jsx(H,{})]})});function Q(){return e.jsx(B,{children:e.jsx("div",{className:"app",children:e.jsx(J,{})})})}const X=I.createRoot(document.getElementById("root"));X.render(e.jsx(x.StrictMode,{children:e.jsx(Q,{})}));export{N as B,T,m as _};
