import { StartScreen } from "./startscreen.js";
import { GameScreen } from "./gamescreen.js";
import { EndScreen } from "./endscreen.js";
export class Game {
    constructor() {
        this.screen = new StartScreen(this);
        this.gameLoop();
    }
    showGameScreen() {
        this.screen = new GameScreen(this);
    }
    showEndScreen() {
        this.screen = new EndScreen(this);
    }
    showStartScreen() {
        this.screen = new StartScreen(this);
    }
    gameLoop() {
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=Game.js.map