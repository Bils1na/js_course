"use strict";

class Settings {
    /**
     * @param {Object} params - 
     * @param {number} params.rowsCount - 
     * @param {number} params.colsCount - 
     * @param {number} params.speed - 
     * @param {number} params.winLength - 
     * @throws {Error}
     */

    init(params) {
        let defaultParams = {rowsCount: 21, colsCount: 21, speed: 2, winLength: 50};
        Object.assign(defaultParams, params);

        if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 30) {
            throw new Error("Error!!!");
        }
        this.rowsCount = defaultParams.rowsCount;

        if (defaultParams.colsCount < 10 || defaultParams.colsCount > 30) {
            throw new Error("Error!!!");
        }
        this.colsCount = defaultParams.colsCount;

        if (defaultParams.speed < 1 || defaultParams.speed > 10) {
            throw new Error("Error!!!");
        }
        this.speed = defaultParams.speed;

        if (defaultParams.winLength < 5 || defaultParams.winLength > 50) {
            throw new Error("Error!!!");
        }
        this.winLength = defaultParams.winLength;

    }
}