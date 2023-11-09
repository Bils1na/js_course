"use strict";

const slider = new Slider('.slider');
slider.init();

setInterval(() => {
    slider.setNextRightImage()
}, 2000);