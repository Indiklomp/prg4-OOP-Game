export class Clock {
    constructor(g) {
        this._timer = 3600;
        this.game = g;
        const game = document.querySelector('game');
        this.timebar = document.createElement("clock");
        game.appendChild(this.timebar);
    }
    get timer() {
        return this._timer;
    }
    update() {
        this._timer--;
        let secondsLeft = Math.floor(this._timer / 60);
        let clockText = "Timer : " + secondsLeft + " sec";
        if (this._timer <= 0) {
            this._timer = 0;
        }
        this.timebar.innerHTML = clockText;
    }
    remove() {
        this.timebar.remove();
    }
}
//# sourceMappingURL=clock.js.map