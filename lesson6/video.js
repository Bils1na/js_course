"use strict";

const playBtnEl = document.querySelector(".fa-play");
const pauseBtnEl = document.querySelector(".fa-pause");
const videoEl = document.querySelector("video");

playBtnEl.addEventListener("click", () => {
    videoEl.play();
});

pauseBtnEl.addEventListener("click", () => {
    videoEl.pause();
});