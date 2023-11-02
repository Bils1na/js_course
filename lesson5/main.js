"use strict";

const btnEl = document.querySelector("button");
btnEl.id;
btnEl.id = "asd";

el.src = "...";

const productEl = document.querySelector(".product");
console.log(productEl.getAttribute("data-lang"));
console.log(productEl.getAttribute("class"));
productEl.setAttribute("data-lang", "english");

console.log(productEl.attributes);

console.log(productEl.dataset);
productEl.dataset.hello = "Hi";
productEl.dataset.asdad = "asdasd";
delete productEl.dataset.hello;

