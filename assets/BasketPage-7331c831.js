import{j as s,B as c,n}from"./index-52720e10.js";const i=({myItems:a,removeItem:t})=>s.jsx(s.Fragment,{children:a.length>0&&a.map(e=>s.jsx("li",{children:s.jsxs("div",{className:"card-basket",children:[s.jsx("div",{className:"card-basket__img-wrapper",children:s.jsx("img",{className:"image_basket",src:e.image,alt:"",height:"100%",width:"100%"})}),s.jsxs("div",{className:"card-basket__text-wrapper",children:[s.jsxs("h2",{className:"card-basket__title",children:["Бренд : ",e.name]}),s.jsxs("p",{className:"card-basket__text",children:["Ціна : ",e.price,"грн"]})]}),s.jsx(c,{variant:"outline-dark",onClick:()=>t(e.id),children:"Видалити з кошика"})]})},e.id+Date.now()))}),d=({myItems:a,total:t,removeItem:e,removeAll:r})=>s.jsx("section",{className:"section-basket",children:s.jsxs(n,{children:[s.jsxs("div",{className:"card-basket__top",children:[s.jsx("h2",{className:"card-basket__top-text",children:"Мій кошик :"}),s.jsxs("h3",{className:"card-basket__top-text",children:["Загальна сума: ",t,"грн"]}),a.length>=1&&s.jsx(c,{variant:"outline-danger",onClick:()=>r(),children:"Видалити ВСЕ з кошика"}),a.length===0&&s.jsx("p",{className:"card-basket__top-text",children:"Додайте щось в кошик"})]}),s.jsx("ul",{children:a.length>0&&s.jsx(i,{myItems:a,removeItem:e})})]})});export{d as default};
