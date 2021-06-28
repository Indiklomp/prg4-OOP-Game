import { GameObject } from "./gameobject.js";
export class EndScreen extends GameObject {
    constructor(game) {
        super("endscreen");
        this.game = game;
        const text = document.createElement("div");
        const btn = document.createElement("button");
        this.div.appendChild(text);
        this.div.appendChild(btn);
        text.innerText = "You sunk ... ships ";
        btn.innerText = "Play again";
        btn.addEventListener("click", () => this.gotoStartScreen());
        console.log("hallo?");
    }
    gotoStartScreen() {
        this.remove();
        this.game.showStartScreen();
    }
}
//# sourceMappingURL=endscreen.js.map