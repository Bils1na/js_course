"use strict";

const aEl = document.querySelector("a");
aEl.addEventListener("click", event => {
    event.preventDefault();
    console.log("Hello");
});

document.addEventListener("contextmenu", event => {
    event.preventDefault();
    console.log(event.clientX, event.clientY);
});

document.addEventListener("copy", event => {
    event.preventDefault();
    const copiedText = document.getSelection().toString();
    // console.log(copiedText);
    event.clipboardData.setData("text/plain", `${copiedText} - this is copy`);
});

document.addEventListener("cut", event => {
    event.preventDefault();
});