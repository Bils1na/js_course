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

// document.querySelector("input").addEventListener("blur", () => {
//     console.log("blur");
// });

// document.querySelector("input").addEventListener("change", () => {
//     console.log("change");
// });

// document.querySelector("input").addEventListener("input", event => {
//     console.log(event.target.value);
// });

// document.querySelector("select").addEventListener("change", event => {
//     console.log(event.target.value);
//     console.log(event.target.options[event.target.options.selectedIndex].textContent);
// });

// const inputEl = document.querySelector("input");
// inputEl.addEventListener("focus", event => {
//     event.target.style.outline = "3px solid green";
//     // inputEl === event.target;
// });

// inputEl.addEventListener("blur", event => {
//     event.target.style.removeProperty("outline");
// });

// const formEl = document.querySelector("form");

// formEl.addEventListener("reset", event => {
//     if (!confirm("Are you sure what you want to clear the form?")) {
//         event.preventDefault();
//     }
// });

// formEl.addEventListener("submit", event => {
    
//     if (document.querySelector("input") === "") {
//         event.preventDefault();
//         document.querySelector(".error").textContent = "Input doesn't must be empty";
//         console.log("empty");

//     } else {
//         console.log("there is something");
//     }
// });

// window.addEventListener("scroll", event => {
//     console.log(window.pageYOffset);
// });

jQuery(document).ready(function() {
    jQuery(".aboutProduct").addClass("hidden").viewportChecker({
        classToAdd: "animated zoomInUp",
        offset: 400,
        classToRemove: "hidden"
    });

    jQuery(".dignityAndPluses").addClass("hidden").viewportChecker({
        classToAdd: "animated sideInUp",
        offset: 400,
        classToRemove: "hidden"
    });

    jQuery(".screenshots").addClass("hidden").viewportChecker({
        classToAdd: "animated rollIn",
        offset: 400,
        classToRemove: "hidden"
    });

    jQuery(".reviewUnit").addClass("hidden").viewportChecker({
        classToAdd: "animated bounceInLeft",
        offset: 400,
        classToRemove: "hidden"
    });







})
