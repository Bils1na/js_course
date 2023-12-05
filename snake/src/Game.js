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
        document.addEventListener("keydown", this.pressKeyHandler.bind(this));
    }

    /**
     * start
     */
    start() {
        if (this.status.isPaused()) {
            this.status.setPlaying();
            this.tickIdentifier = setInterval(this.doTick.bind(this), 1000 / this.settings.speed);
        }
    }

    /**
     * pause
     */
    pause() {
        if (this.status.isPlaying()) {
            this.status.setPaused();
            clearInterval(this.tickIdentifier);
        }
    }

    /**
     * 1. Перемещение змейки
     * 2. проверка на окончание игры
     * 3. увелечение размера змейки после поедания еды
     * 4. заново отрисовывает положение змейки и еды
     */
    doTick() {
        this.snake.performStep();
        this.board.clearBoard();
        this.food.setFood();
        this.board.renderSnake();
    }

    pressKeyHandler(event) {
        switch(event.key) {
            case "ArrowUp":
                this.snake.changeDirection("up");
                break;
            case "ArrowDown":
                this.snake.changeDirection("down");
                break;
            case "ArrowLeft":
                this.snake.changeDirection("left");
                break;
            case "ArrowRight":
                this.snake.changeDirection("right");
                break;
        }
    }
}