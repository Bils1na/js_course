"use strict";

class Board {
    constructor() {
        this.boardEl = document.querySelector(".game");
    }

    /**
     * @param {Settings} settings - 
     * @param {Snake} snake - 
     */
    init(settings, snake) {
        this.settings = settings;
        this.snake = snake;
    }

    /**
     * Board
     */
    renderBoard() {
        this.boardEl.innerHTML = "";
        for (let row = 0; this.settings.rowsCount; row++) {
            let tr = document.createElement("tr");
            this.boardEl.appendChild(tr);

            for (let col = 0; col < this.settings.colsCount; col++) {
                let td = document.createElement("td");
                tr.appendChild(td);
            }
        }
    }

    /**
     * Snake
     */
    renderSnake() {
        const snakeBodyElems = this.getSnakeBodyElems(this.snake.body);
        if (snakeBodyElems) {
            snakeBodyElems.forEach(function(tdEl) {
                tdEl.classList.add("snakeBody");
            })
        }
    }

    /**
     * This method cleans the game board
     */
    clearBoard() {
        const tdElems = document.querySelectorAll('td');
        tdElems.forEach(function(td) {
            td.className = "";
        });
    }

    /**
     * @param {number} x -
     * @param {number} y - 
     * @returns {HTMLTableCellElementment}
     */
    getCellEl(x, y) {
        return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
    }

    /**
     * @param {array} bodyCoords -
     * @returns {HTMLTablrCellElement[]|null}
     */
    getSnakeBodyElems(bodyCoords) {
        if (bodyCoords.length > 0) {
            let bodyElems = [];
            for (let value of bodyCoords) {
                let elem = this.getCellEl(value.x, value.y);
                bodyElems.push(elem);
            }
            return bodyElems;
        }
        return null;
    }

    /**
     * This method works when snake is eating food
     * @returns {boolean} true or false
     */
    isHeadOnFood() {
        return this.boardEl.querySelector(".food").classList.contains("snakeBody");
    }

    /**
     * 
     * @param {Object} nextCellCoords 
     * @param {number} nextCellCoords.x 
     * @param {number} nextCellCoords.y
     * @returns {boolean} 
     */
    isNextStepToWall(nextCellCoords) {
        let nextCell = this.getCellEl(nextCellCoords.x, nextCellCoords.y);
        return nextCell === null;
    }
}