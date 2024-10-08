import{r,j as t,m as a}from"./vendor-fb67e3f2.js";const p=()=>{const i={initial:{opacity:0,y:200},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}},n={initial:{opacity:0,y:-50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},transition:{type:"spring",duration:.8,bounce:.6,stiffness:100}},o="https://sebastiangonzalez.design/images/about/avatar.png",e=["I try to code my ideas.","I like to illustrate.","I love biking.","I like to apply system thinking."],[s,l]=r.useState(0);return r.useEffect(()=>{const c=setInterval(()=>{l(m=>(m+1)%e.length)},3e3);return()=>clearInterval(c)},[e.length]),t.jsx("main",{className:"container-about",children:t.jsxs("section",{className:"hero-about",children:[t.jsx("article",{className:"hero-about__hero-container",children:t.jsxs(a.div,{className:"hero-about__text",initial:"initial",animate:"animate",exit:"exit",variants:i,transition:{type:"spring",stiffness:45},children:[t.jsx(a.h1,{className:"display__200--bold section-hero__heading",children:"Hi! I'm Sebastian"}),t.jsx(a.div,{className:"hero-about__text-carousel",children:t.jsx(a.h1,{className:"display__100--bold",initial:"initial",animate:"animate",exit:"exit",variants:n,transition:n.transition,children:e[s]},s)})]})}),t.jsxs("article",{className:"hero-about__description",children:[t.jsx(a.figure,{className:"hero-about__img-container",initial:"initial",animate:"animate",exit:"exit",variants:i,transition:{delay:.1,type:"spring",stiffness:45},children:t.jsx("img",{className:"hero-about__img-container__img",src:o,alt:"Sebastian González's avatar"})}),t.jsx(a.p,{className:"paragraph__100--medium profile__paragraph",initial:"initial",animate:"animate",exit:"exit",variants:i,transition:{delay:.2,type:"spring",stiffness:45},children:"Hi, I'm Sebastian González, a UI/Visual designer driven to refine my design and coding skills. Passionate about creating unforgettable digital experiences that connect users to products. I've collaborated on projects with brands like Samsung, enhancing my expertise. Let's work together to craft something extraordinary."})]})]})})};export{p as default};
