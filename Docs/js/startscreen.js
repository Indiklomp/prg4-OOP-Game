import { GameObject } from "./gameobject.js";
export class StartScreen extends GameObject {
    constructor(game) {
        super("startscreen");
        this.game = game;
        const text = document.createElement("div");
        const btn = document.createElement("button");
        this.div.appendChild(text);
        this.div.appendChild(btn);
        text.innerText = "Dragon Rage";
        btn.innerText = "START GAME";
        btn.addEventListener("click", () => this.gotoGameScreen());
    }
    gotoGameScreen() {
        this.remove();
        this.game.showGameScreen();
    }
}
//# sourceMappingURL=startscreen.js.map