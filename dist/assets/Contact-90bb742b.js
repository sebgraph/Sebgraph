import{r as e,j as t,g as d}from"./vendor-223ebf26.js";import{B as n}from"./index-5c106126.js";const h="/assets/avatar-profile-7fb2fbb1.svg",p=()=>{const[a,c]=e.useState(""),[i,s]=e.useState(""),o="sebgraph7@gmail.com";e.useEffect(()=>{const u=setTimeout(()=>{c("")},5e3);return()=>clearTimeout(u)},[a]);function r(){navigator.clipboard.writeText(o),c(`${o} copied to clipboard`),s("")}function l(){a||s(`click to copy ${o}`)}function m(){s("")}return t.jsxs("div",{className:"contact-container__btns",children:[t.jsx("div",{className:"messageContainer2",children:t.jsxs("span",{className:"message ",children:[a," ",i]})}),t.jsx(n,{className:"contact-container__btn",onClick:r,onMouseOver:l,onMouseOut:m,children:"Copy mail"})]})},x=()=>(e.useEffect(()=>{d.init({duration:1e3})},[]),t.jsx("section",{className:"section-contact",children:t.jsxs("div",{className:"contact-container",children:[t.jsxs("div",{className:"contact-container__heading",children:[t.jsx("h2",{className:"heading__100--bold ",children:"Contact"}),t.jsx("p",{className:"paragraph__100--regular contact-container__paragraph",children:"If you have a project you'd like to collaborate on or would like to learn more about my services, I'd love to hear from you. You can reach me by email clicking below. I'll get back to you as soon as possible. Let's create something great together!"})]}),t.jsx("article",{className:"contact-container__text-box",children:t.jsx("img",{"data-aos":"flip-right",className:"profile__img",src:h,alt:"avatar sebgraph"})}),t.jsxs("div",{className:"contact-container__btns",children:[t.jsx("a",{href:"mailto:sebgraph7@gmail.com",className:"email",children:t.jsx(n,{className:"contact-container__btn",type:"button",buttonStyle:"btn--secondary",buttonSize:"btn--large",children:"Email me"})}),t.jsx(p,{})]})]})}));export{x as default};
