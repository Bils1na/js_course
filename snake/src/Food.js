"use strict";

class Food {
    constructor() {
        this.x = null;
        this.y = null;
    }

    /**
     * @param {Settings} settings -
     * @param {Snake} snake -
     * @param {Board} board - 
     */
    init(settings, snake, board) {
        this.settings = settings;
        this.snake = snake;
        this.board = board;
    }

    /**
     * This method set new food 
     */
    setFood() {
        this.board.renderFood(this);
    }

    /**
     * setter
     */
    setNewFood() {
        const food = this.generateCoordinates();
        this.board.renderFood(food);
    }

    /**
     * @returns {Food}
     */
    generateCoordinates() {
        while(true) {
            this.x = Math.floor(Math.random() * this.settings.colsCount) + 1;
            this.y = Math.floor(Math.random() * this.settings.rowsCount) + 1;
            let cell = this.board.getCellEl(this.x, this.y);

            if (cell.classList.contains("snakeBody")) {
                continue;
            }
            return this;
        }
    }

    /**
     * @param {Food} coords -
     * @param {number} coords.x -
     * @param {number} coords.y -
     */
    renderFood(coords) {
        const foodCell = this.getCellEl(coords.x, coords.y);
        foodCell.classList.add("food");
    }
}