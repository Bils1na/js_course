"use strict";

class Snake {
    constructor() {
        this.possibleDirections = ["down", "up", "left", "right"];

        this.body = [
            {
                x: 1,
                y: 1,
            },
            {
                x: 1, 
                y: 2,
            },
            {
                x: 1,
                y: 3,
            },
        ];

        this.direction = "down";
    }

    /**
     * Метод осуществляет шаг змейки.
     */
    performStep() {
        let currentHeadCoords = this.body[0];
        let newHeadCoords = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y,
        };
        switch (this.direction) {
            case "down":
                newHeadCoords.y++;
                break;
            case "up":
                newHeadCoords.y--;
                break;
            case "left":
                newHeadCoords.x--;
                break;
            case "right":
                newHeadCoords.x++;
                break;
        }
        this.body.unshift(newHeadCoords);
        this.body.pop();
    }
}