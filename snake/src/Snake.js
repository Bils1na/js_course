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
     * This method changed snake direction.
     * @param {string} newDirection
     * @throws {Error} 
     */
    changeDirection(newDirection) {
        if (!this.possibleDirections.includes(newDirection)) {
            throw new Error("This direction is wrong!");
        }
        if (this.isPassedOppositeDirection(newDirection)) {
            return;
        }
        this.direction = newDirection;
    }

    /**
     * This method checks opposite directions
     * @param {string} newDirection 
     * @returns {boolean}
     */
    isPassedOppositeDirection(newDirection) {
        if (this.direction == "down" && newDirection == "up") {
            return true;
        }
        if (this.direction == "up" && newDirection == "down") {
            return true;
        }
        if (this.direction == "left" && newDirection == "right") {
            return true;
        }
        if (this.direction == "right" && newDirection == "left") {
            return true;
        }
        return false;
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

    /**
     * This method increases snake body
     */
    increaseBody() {
        let bodyLastCell = this.body[this.body.length - 1];
        let newBodyCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };
        this.body.push(newBodyCell);
    }
}