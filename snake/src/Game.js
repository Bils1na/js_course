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
        this.menu.addButtonsClickListneres(this.start.bind(this), this.pause.bind(this));
        // document.addEventListener("keydown", this.pressKeyHandler.bind(this));
    }

    /**
     * start
     */
    start() {
        console.log("start");
    }

    /**
     * pause
     */
    pause() {
        console.log("pause");
    }
}