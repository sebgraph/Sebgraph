import{j as e,b as n,M as d,r as i,N as r,c as m,X as h}from"./vendor-223ebf26.js";const _="/assets/logo-654fb5c1.svg";const x=()=>{const t=()=>{document.querySelector("body").setAttribute("data-theme","dark"),localStorage.setItem("selectedTheme","dark")},c=()=>{document.querySelector("body").setAttribute("data-theme","light"),localStorage.setItem("selectedTheme","light")},l=localStorage.getItem("selectedTheme");l==="dark"&&t();const a=o=>{o.target.checked?t():c()};return e.jsxs("div",{className:"dark_mode",children:[e.jsx("input",{className:"dark_mode_input",type:"checkbox",id:"darkmode-toggle",onChange:a,defaultChecked:l==="dark"}),e.jsxs("label",{className:"dark_mode_label",htmlFor:"darkmode-toggle",children:[e.jsx(n,{className:"sun svg"}),e.jsx(d,{className:"moon svg"})]})]})},k=()=>{const[t,c]=i.useState(!1),l=()=>{window.scrollY>=20?c(!0):c(!1)};window.addEventListener("scroll",l);const[a,o]=i.useState(!1),s=()=>o(!a);return e.jsx("header",{className:t?"header header-bg":"header",children:e.jsxs("nav",{className:"navbar",children:[e.jsxs("a",{href:"/",className:"header__logo-box",children:[e.jsx("img",{className:"header__icon",src:_,alt:"logo"}),e.jsx("span",{className:"header__text",children:"SEBGRAPH"})]}),e.jsx("div",{className:"header__menu",children:e.jsx("nav",{className:"header__navigation",children:e.jsxs("ul",{className:a?"header__list  active":"header__list",children:[e.jsx("li",{className:a?"header__item text-animation ":"header__item",onClick:s,children:e.jsx(r,{className:"header__link",exact:!0,to:"/",activeClassName:"link-active",children:"Work"})}),e.jsx("li",{className:a?"header__item text-animation":"header__item",onClick:s,children:e.jsx(r,{className:"header__link",exact:!0,to:"/about",activeClassName:"link-active",children:"About"})}),e.jsx("li",{className:a?"header__item text-animation":"header__item",onClick:s,children:e.jsx(r,{className:"header__link",exact:!0,to:"/cv",activeClassName:"link-active",children:"CV"})}),e.jsx("li",{className:a?"header__item text-animation":"header__item",onClick:s})]})})}),e.jsxs("div",{className:"header__actions-container",children:[e.jsx(x,{}),e.jsx("div",{className:"hamburger",onClick:s,children:a?e.jsx(h,{className:"icon"}):e.jsx(m,{className:"icon"})})]})]})})};export{k as default};
