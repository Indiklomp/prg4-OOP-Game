//importing classes 
import { GameObject } from "./gameobject.js"
import { Game } from "./game.js"

//exporting the class
export class StartScreen extends GameObject {

    private game: Game

    constructor(game: Game) {
        super("startscreen")

        this.game = game
        //creating a div
        const text = document.createElement("div")
        //creating a button
        const btn = document.createElement("button")

        this.div.appendChild(text)
        this.div.appendChild(btn)

        text.innerText = "Dragon Rage"
        btn.innerText = "START GAME"
        // calls the gotoGameScreen function on a click of the button
        btn.addEventListener("click", () => this.gotoGameScreen())
    }

    //when called, removes its own class and goes to the next screen. 
    private gotoGameScreen() {
        this.remove()
        this.game.showGameScreen()
    }

}