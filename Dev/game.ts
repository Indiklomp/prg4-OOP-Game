//importing classes 
import { GameObject } from "./gameobject.js"
import { StartScreen } from "./startscreen.js"
import { GameScreen } from "./gamescreen.js"
import { EndScreen } from "./endscreen.js"

//exporting the class
export class Game {

    private screen: GameObject

    constructor() {
        this.screen = new StartScreen(this)
        this.gameLoop()
    }
    //making new gamescreen
    public showGameScreen() {
        this.screen = new GameScreen(this)
    }
    //making new endscreen
    public showEndScreen() {
        this.screen = new EndScreen(this)
    }
    //making new startscreen
    public showStartScreen() {
        this.screen = new StartScreen(this)
    }
    //requests the animation frames to make the game run. 
    private gameLoop() {
        this.screen.update()
        requestAnimationFrame(() => this.gameLoop())
    }
}

new Game()