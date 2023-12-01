"use strict";

class Game {
    constructor() {
        this.tickIdentifier = null;
        this.messageEl = document.querySelector(".message");
    }

    /**
     * @param {Settings} settings
     * @param {Status} status
     * @param {Board} board
     * @param {Snake} snake
     * @param {Menu} menu
     * @param {Food} food
     */
    init(settings, status, board, snake, menu, food) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.snake = snake;
        this.menu = menu;
        this.food = food;
    }

    run() {
        this.menu.addButtonClickListneres(this.start, this.pause);
        // document.addEventListener("keydown", this.pressKeyHandler.bind(this));
    }

    /**
     * start
     */
    start() {
        
    }
}