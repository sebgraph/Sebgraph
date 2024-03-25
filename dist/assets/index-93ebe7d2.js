import{j as e,R as f,u as g,r as s,A as v,P as y,B as b,S as T,a as d,b as w}from"./vendor-784aecd1.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=c(o);fetch(o.href,t)}})();const S="modulepreload",L=function(a){return"/"+a},x={},l=function(n,c,i){if(!c||c.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(c.map(t=>{if(t=L(t),t in x)return;x[t]=!0;const r=t.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!i)for(let h=o.length-1;h>=0;h--){const p=o[h];if(p.href===t&&(!r||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${m}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":S,r||(u.as="script",u.crossOrigin=""),u.href=t,document.head.appendChild(u),r)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})};const j=["btn--primary","btn--secondary"],E=["btn--lg","btn--md"],P=({children:a,type:n,onClick:c,onMouseOver:i,onMouseOut:o,buttonStyle:t,buttonSize:r,iconLeft:m,iconRight:_,fixedPosition:u})=>{const h=j.includes(t)?t:j[0],p=E.includes(r)?r:E[0];return e.jsx("button",{className:`btn btn--animated ${h} ${p} ${u?"btn--fixed":""}`,onClick:c,onMouseOver:i,onMouseOut:o,type:n,children:e.jsxs("div",{className:"btn-icon-container",children:[m&&e.jsx("span",{className:"btn__icon btn__icon--left",children:f.cloneElement(m,{className:"h-5 w-5"})}),a,_&&e.jsx("span",{className:"btn__icon btn__icon--right",children:f.cloneElement(_,{className:"h-5 w-5"})})]})})},A="/assets/error-8901e87e.svg";const N=()=>e.jsxs("section",{className:"error-section section-hero bg-white mt-40",children:[e.jsx("figure",{className:"img",children:e.jsx("img",{src:A,alt:"Error 404"})}),e.jsx("h1",{className:"heading-secondary",children:"Ooops! Page not found"}),e.jsx("p",{className:"paragraph",children:"The page you are looking is not available"}),e.jsx("a",{href:"https://sebgraph.co/",children:e.jsx(P,{children:"Back to home"})})]});function R(){const{pathname:a}=g();return s.useEffect(()=>{window.scrollTo(0,0)},[a]),null}const O=()=>{const[a,n]=s.useState(!1),c=()=>{window.scrollY>=800?n(!0):n(!1)};window.addEventListener("scroll",c);const i=()=>{window.scrollTo(0,0)};return e.jsx("button",{onClick:i,className:a?"back-button":"no-show",children:e.jsx(v,{className:"back-button__icon"})})};const k=()=>e.jsx("div",{className:"spinner__container",children:e.jsx(y,{className:"spinner__icon",height:"80",width:"80",radius:1,color:"#ffff",ariaLabel:"loading",visible:!0})}),B=s.lazy(()=>l(()=>import("./NavBar-606e7414.js"),["assets/NavBar-606e7414.js","assets/vendor-784aecd1.js","assets/vendor-73168167.css","assets/NavBar-9104e60a.css"])),I=s.lazy(()=>l(()=>import("./Footer-9b00234c.js"),["assets/Footer-9b00234c.js","assets/vendor-784aecd1.js","assets/vendor-73168167.css","assets/Footer-1bb3b7a7.css"])),D=s.lazy(()=>l(()=>import("./AvExpert-8a6f94fd.js"),["assets/AvExpert-8a6f94fd.js","assets/vendor-784aecd1.js","assets/vendor-73168167.css","assets/BackButton-b92933d3.js","assets/BackButton-ca6c757d.css"])),V=s.lazy(()=>l(()=>import("./SolveForTomorrow-1ee3e230.js"),["assets/SolveForTomorrow-1ee3e230.js","assets/vendor-784aecd1.js","assets/vendor-73168167.css","assets/BackButton-b92933d3.js","assets/BackButton-ca6c757d.css"])),$=s.lazy(()=>l(()=>import("./Essilor-5257e54c.js"),["assets/Essilor-5257e54c.js","assets/vendor-784aecd1.js","assets/vendor-73168167.css","assets/BackButton-b92933d3.js","assets/BackButton-ca6c757d.css"])),z=s.lazy(()=>l(()=>import("./Landing-2bd7ca72.js"),["assets/Landing-2bd7ca72.js","assets/vendor-784aecd1.js","assets/vendor-73168167.css","assets/BackButton-b92933d3.js","assets/BackButton-ca6c757d.css"])),C=s.lazy(()=>l(()=>import("./Aleph-abed4368.js"),["assets/Aleph-abed4368.js","assets/vendor-784aecd1.js","assets/vendor-73168167.css","assets/BackButton-b92933d3.js","assets/BackButton-ca6c757d.css","assets/Aleph-f5970ae6.css"])),q=s.lazy(()=>l(()=>import("./About-59c58325.js"),["assets/About-59c58325.js","assets/vendor-784aecd1.js","assets/vendor-73168167.css","assets/About-31bf74fe.css"])),F=s.lazy(()=>l(()=>import("./Work-ddf55de9.js"),["assets/Work-ddf55de9.js","assets/vendor-784aecd1.js","assets/vendor-73168167.css"])),U=s.lazy(()=>l(()=>import("./CV-7fcc070f.js"),["assets/CV-7fcc070f.js","assets/vendor-784aecd1.js","assets/vendor-73168167.css","assets/cv-sebastian-gonzalez-5845a55f.js","assets/CV-faaa825a.css"])),M=()=>e.jsx(s.Suspense,{fallback:e.jsx(k,{}),children:e.jsxs(b,{children:[e.jsx(R,{}),e.jsx(B,{}),e.jsxs(T,{children:[e.jsx(d,{exact:!0,path:"/",component:F}),e.jsx(d,{exact:!0,path:"/about",component:q}),e.jsx(d,{exact:!0,path:"/cv",component:U}),e.jsx(d,{exact:!0,path:"/projects/solve",component:V}),e.jsx(d,{exact:!0,path:"/projects/AV",component:D}),e.jsx(d,{exact:!0,path:"/projects/Essilor",component:$}),e.jsx(d,{exact:!0,path:"/projects/Landing",component:z}),e.jsx(d,{exact:!0,path:"/projects/Aleph",component:C}),e.jsx(d,{path:"*",component:N})]}),e.jsx(O,{}),e.jsx(I,{})]})}),W=s.createContext(),Y=document.querySelector("body").setAttribute("data-theme","light"),K=({children:a})=>{const[n,c]=s.useState(Y),i=()=>{localStorage.setItem("theme","dark"),document.querySelector("body").setAttribute("data-theme","dark")},o=()=>{localStorage.setItem("theme","light"),document.querySelector("body").setAttribute("data-theme","light")},r={theme:n,handleTheme:m=>{m.target.value==="light"?(o(),c("light")):(i(),c("dark"))}};return e.jsxs(W.Provider,{value:r,children:[" ",a]})};function Z(){return e.jsx(K,{children:e.jsx("div",{className:"app",children:e.jsx(M,{})})})}w.render(e.jsx(f.StrictMode,{children:e.jsx(Z,{})}),document.getElementById("root"));export{P as B,W as T,l as _};
