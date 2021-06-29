export class Score {
    constructor(g) {
        this._score = 0;
        this.game = g;
        const game = document.querySelector('game');
        this.scoreBar = document.createElement("score");
        game.appendChild(this.scoreBar);
        this.update();
    }
    get score() {
        return this._score;
    }
    update() {
        let sunkenShips = "Sunken ships : " + this._score;
        this.scoreBar.innerHTML = sunkenShips;
    }
    addScore() {
        this._score++;
        this.update();
    }
    remove() {
        this.scoreBar.remove();
    }
}
//# sourceMappingURL=score.js.map