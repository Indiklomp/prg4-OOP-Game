export class Clock {
    constructor(g) {
        this._timer = 1500;
        this.game = g;
        const game = document.querySelector('game');
        this.question = document.createElement("clock");
        game.appendChild(this.question);
    }
    get timer() {
        return this._timer;
    }
    update() {
        this._timer--;
        let secondsLeft = Math.floor(this._timer / 60);
        let clockText = "Timer : " + this._timer + " sec";
        if (this._timer <= 0) {
            this._timer = 0;
        }
        this.question.innerHTML = clockText;
    }
    remove() {
        this.question.remove();
    }
}
//# sourceMappingURL=clock.js.map