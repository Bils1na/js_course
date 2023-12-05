"use strict";

class Menu {
    constructor() {
        this.startBtnEl = document.querySelector(".startBtn");
        this.pauseBtnEl = document.querySelector(".pauseBtn");
    }

    /**
     * 
     * @param {Function} startBtnClackHandler 
     * @param {Function} pauseBtnClickHandler 
     */
    addButtonsClickListners(startBtnClackHandler, pauseBtnClickHandler) {
        this.startBtnEl.addEventListener("click", startBtnClackHandler);
        this.pauseBtnEl.addEventListener("click", pauseBtnClackHandler);
    }
}