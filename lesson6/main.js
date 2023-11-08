"use strict";

// const aEl = document.querySelector("a");
// aEl.addEventListener("click", event => {
//     event.preventDefault();
//     console.log("Hello");
// });

// document.addEventListener("contextmenu", event => {
//     event.preventDefault();
//     console.log(event.clientX, event.clientY);
// });

// document.addEventListener("copy", event => {
//     event.preventDefault();
//     const copiedText = document.getSelection().toString();
//     // console.log(copiedText);
//     event.clipboardData.setData("text/plain", `${copiedText} - this is copy`);
// });

// document.addEventListener("cut", event => {
//     event.preventDefault();
// });

// document.addEventListener("dblclick", () => {
//     console.log(123);
// });

// window.addEventListener("resize", event => {
//     console.log(window.innerWidth, window.innerHeight);
//     console.log(document.documentElement.clientWidth,
//                 document.documentElement.clientHeight);
// });

document.querySelector("input").addEventListener("blur", () => {
    console.log("blur");
});

document.querySelector("input").addEventListener("change", () => {
    console.log("change");
});

document.querySelector("input").addEventListener("input", () => {
    console.log("input");
});