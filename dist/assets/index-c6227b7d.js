import{j as e,R as x,u as w,r as n,A as L,m,B as b,a as O,b as u,c as k}from"./vendor-04b25aa2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}})();const I="modulepreload",N=function(a){return"/"+a},j={},l=function(o,i,c){if(!i||i.length===0)return o();const s=document.getElementsByTagName("link");return Promise.all(i.map(t=>{if(t=N(t),t in j)return;j[t]=!0;const r=t.endsWith(".css"),_=r?'[rel="stylesheet"]':"";if(!!c)for(let h=s.length-1;h>=0;h--){const p=s[h];if(p.href===t&&(!r||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${_}`))return;const d=document.createElement("link");if(d.rel=r?"stylesheet":I,r||(d.as="script",d.crossOrigin=""),d.href=t,document.head.appendChild(d),r)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>o()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})};const g=["btn--primary","btn--secondary"],v=["btn--lg","btn--md"],S=({children:a,type:o,onClick:i,onMouseOver:c,onMouseOut:s,buttonStyle:t,buttonSize:r,iconLeft:_,iconRight:f,fixedPosition:d})=>{const h=g.includes(t)?t:g[0],p=v.includes(r)?r:v[0];return e.jsx("button",{className:`btn  ${h} ${p} ${d?"btn--fixed":""}`,onClick:i,onMouseOver:c,onMouseOut:s,type:o,children:e.jsxs("div",{className:"btn-icon-container",children:[_&&e.jsx("span",{className:"btn__icon btn__icon--left",children:x.cloneElement(_,{className:"h-5 w-5"})}),a,f&&e.jsx("span",{className:"btn__icon btn__icon--right",children:x.cloneElement(f,{className:"h-5 w-5"})})]})})},A="/assets/error-8901e87e.svg";const P=()=>e.jsxs("section",{className:"error-section section-hero bg-white mt-40",children:[e.jsx("figure",{className:"img",children:e.jsx("img",{src:A,alt:"Error 404"})}),e.jsx("h1",{className:"heading-secondary",children:"Ooops! Page not found"}),e.jsx("p",{className:"paragraph",children:"The page you are looking is not available"}),e.jsx("a",{href:"https://sebgraph.co/",children:e.jsx(S,{children:"Back to home"})})]});function R(){const{pathname:a}=w();return n.useEffect(()=>{window.scrollTo(0,0)},[a]),null}const T=n.createContext(),B=({children:a})=>{const[o,i]=n.useState(()=>{const t=localStorage.getItem("selectedTheme");return t||"light"});n.useEffect(()=>{document.querySelector("body").setAttribute("data-theme",o),localStorage.setItem("selectedTheme",o)},[o]);const s={theme:o,toggleTheme:()=>{i(t=>t==="dark"?"light":"dark")}};return e.jsx(T.Provider,{value:s,children:a})},V=()=>{const{theme:a}=n.useContext(T),[o,i]=n.useState(!1);n.useEffect(()=>{const s=()=>{window.scrollY>=800?i(!0):i(!1)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]);const c=()=>{window.scrollTo(0,0)};return e.jsx("button",{onClick:c,className:`${o?"backtop-button":"no-show"} ${a}`,children:e.jsx(L,{className:"backtop-button__icon"})})};const E={pathOne:{pathLength:[0,1,1,0],transition:{duration:3,ease:"easeInOut",times:[0,.25,.75,1],repeat:1/0}},pathTwo:{pathLength:[0,1,1,0],transition:{duration:3,ease:"easeInOut",delay:.2,repeat:1/0}}},y={animate:{stopColor:["hsl(220, 96%, 87%)","hsl(160, 76%, 80%)","hsl(260, 92%, 95%)"],transition:{duration:3,ease:"easeInOut",repeat:1/0,repeatType:"reverse"}}},C=()=>{const[a,o]=n.useState({pathOne:"pathOne",pathTwo:"pathTwo"});return n.useEffect(()=>{const c=setInterval(()=>{o(s=>({pathOne:s.pathOne,pathTwo:"pathTwo"}))},6e3);return()=>clearInterval(c)},[]),e.jsxs(m.div,{className:"logo-loading",children:[e.jsx(m.div,{className:"logo-loading__container"}),e.jsxs(m.svg,{viewBox:"0 0 29 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"logo-loading__paths",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx(m.stop,{offset:"0%",variants:y,animate:"animate"}),e.jsx(m.stop,{offset:"100%",variants:y,animate:"animate"})]})}),e.jsx(m.path,{className:"logo-loading__paths",d:"M23.0917 11.2273H1.7699C1.67993 11.2273 1.5 11.3182 1.5 11.5V27.2273C1.5 27.3182 1.58997 27.5 1.7699 27.5H19.8114",fill:"transparent",stroke:"url(#gradient)",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",variants:E,animate:a.pathTwo}),e.jsx(m.path,{className:"logo-loading__paths",d:"M27.41 1.5H1.7699C1.58997 1.5 1.5 1.59091 1.5 1.77273V5.77273C1.5 5.86364 1.58997 6.04545 1.7699 6.04545H27.2301C27.3201 6.04545 27.5 6.13636 27.5 6.31818V27.2273C27.5 27.4091 27.2301 27.5909 27.0502 27.4091L15.7249 16.8636C15.545 16.6818 15.3651 16.5909 15.0952 16.5909H6.9083",fill:"transparent",stroke:"url(#gradient)",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",variants:E,animate:a.pathOne})]})]})},$=()=>e.jsx("div",{className:"spinner__container",children:e.jsx(C,{})}),D=n.lazy(()=>l(()=>import("./NavBar-daf974a1.js"),["assets/NavBar-daf974a1.js","assets/vendor-04b25aa2.js","assets/NavBar-1c2aa805.css"])),z=n.lazy(()=>l(()=>import("./Footer-7d236ede.js"),["assets/Footer-7d236ede.js","assets/vendor-04b25aa2.js","assets/Footer-450ce7d1.css"])),H=n.lazy(()=>l(()=>import("./AvExpert-027883b2.js"),["assets/AvExpert-027883b2.js","assets/vendor-04b25aa2.js","assets/BackButton-5726279b.js","assets/BackButton-4569d54c.css"])),M=n.lazy(()=>l(()=>import("./SolveForTomorrow-cd72c90e.js"),["assets/SolveForTomorrow-cd72c90e.js","assets/vendor-04b25aa2.js","assets/BackButton-5726279b.js","assets/BackButton-4569d54c.css"])),W=n.lazy(()=>l(()=>import("./Essilor-beab36f4.js"),["assets/Essilor-beab36f4.js","assets/vendor-04b25aa2.js","assets/BackButton-5726279b.js","assets/BackButton-4569d54c.css"])),q=n.lazy(()=>l(()=>import("./Landing-2d6b2360.js"),["assets/Landing-2d6b2360.js","assets/vendor-04b25aa2.js","assets/BackButton-5726279b.js","assets/BackButton-4569d54c.css"])),F=n.lazy(()=>l(()=>import("./Aleph-1e00ac1c.js"),["assets/Aleph-1e00ac1c.js","assets/vendor-04b25aa2.js","assets/BackButton-5726279b.js","assets/BackButton-4569d54c.css"])),U=n.lazy(()=>l(()=>import("./About-711dde9b.js"),["assets/About-711dde9b.js","assets/vendor-04b25aa2.js","assets/About-4178585f.css"])),Y=n.lazy(()=>l(()=>import("./Work-988e262b.js"),["assets/Work-988e262b.js","assets/vendor-04b25aa2.js"])),G=n.lazy(()=>l(()=>import("./CV-cb41f51f.js"),["assets/CV-cb41f51f.js","assets/vendor-04b25aa2.js","assets/_index-e00dc9c7.js","assets/_index-07cc4aa7.css","assets/CV-74f2b611.css"])),K=()=>e.jsx(n.Suspense,{fallback:e.jsx($,{duration:5e3}),children:e.jsxs(b,{children:[e.jsx(R,{}),e.jsx(D,{}),e.jsxs(O,{children:[e.jsx(u,{path:"/",element:e.jsx(Y,{})}),e.jsx(u,{path:"/about",element:e.jsx(U,{})}),e.jsx(u,{path:"/cv",element:e.jsx(G,{})}),e.jsx(u,{path:"/projects/solve",element:e.jsx(M,{})}),e.jsx(u,{path:"/projects/AV",element:e.jsx(H,{})}),e.jsx(u,{path:"/projects/Essilor",element:e.jsx(W,{})}),e.jsx(u,{path:"/projects/Landing",element:e.jsx(q,{})}),e.jsx(u,{path:"/projects/Aleph",element:e.jsx(F,{})}),e.jsx(u,{path:"*",element:e.jsx(P,{})})]}),e.jsx(V,{}),e.jsx(z,{})]})});function Z(){return e.jsx(B,{children:e.jsx("div",{className:"app",children:e.jsx(K,{})})})}const J=k.createRoot(document.getElementById("root"));J.render(e.jsx(x.StrictMode,{children:e.jsx(Z,{})}));export{S as B,T,l as _};
