"use strict";

// const btnEl = document.querySelector("button");
// btnEl.id;
// btnEl.id = "asd";

// el.src = "...";

// const productEl = document.querySelector(".product");
// console.log(productEl.getAttribute("data-lang"));
// console.log(productEl.getAttribute("class"));
// productEl.setAttribute("data-lang", "english");

// console.log(productEl.attributes);

// console.log(productEl.dataset);
// productEl.dataset.hello = "Hi";
// productEl.dataset.asdad = "asdasd";
// delete productEl.dataset.hello;

// const pTag = document.querySelector("p");
// console.log(pTag.style);
// pTag.style.marginTop = "50px";

// console.log(getComputedStyle(pTag));

// function sayHello() {
//     alert(123);
// }

const btnEl = document.querySelector("button");
// btnEl.onclick = function () {
//     alert("Hello");
// }

// btnEl.onclick = function () {
//     alert("Bye");
// }

// btnEl.onclick = null;

btnEl.addEventListener("click", () => {
    console.log(123);
});

btnEl.addEventListener("click", () => {
    console.log("!!!");
});

