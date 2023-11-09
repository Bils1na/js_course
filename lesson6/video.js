"use strict";

const playBtnEl = document.querySelector(".fa-play");
const pauseBtnEl = document.querySelector(".fa-pause");
const videoEl = document.querySelector("video");
const currentTimeEl = document.querySelector(".currentTime");
const timigEl = document.querySelector(".timig");
const volumeEl = document.querySelector(".volume");

playBtnEl.addEventListener("click", () => {
    videoEl.play();
});

pauseBtnEl.addEventListener("click", () => {
    videoEl.pause();
});

videoEl.addEventListener("timeupdate", () => {
    currentTimeEl.textContent = videoEl.currentTime.toFixed(1);
    timigEl.value = videoEl.currentTime / videoEl.duration * 100;
});

volumeEl.addEventListener("input", () => {
    videoEl.volume = volumeEl.value;
});

timigEl.addEventListener("input", () => {
    videoEl.currentTime = timigEl.value / 100 * videoEl.duration;
});

document.addEventListener("keydown", event => {
    console.log(event.code);
    if (event.code === "ArrowRight") {
        // console.log("on right");
        videoEl.currentTime += 2;
    } else if (event.code === "ArrowLeft") {
        // console.log("on left");
        videoEl.currentTime -= 2;
    }
});