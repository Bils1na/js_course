"use strict";

class Status {
    constructor() {
        this.setPaused();
    }

    setPlaying() {
        this.condition = "playing";
    }

    setPaused() {
        this.condition = "paused";
    }

    /**
     * @returns {boolean} 
     */
    isPlaying() {
        return this.condition === "playing";
    }

    /**
     * @returns {boolean} 
     */
    isPaused() {
        return this.condition === "paused";
    }

}