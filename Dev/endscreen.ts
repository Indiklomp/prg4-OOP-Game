//importing classes 
import { Game } from "./game"
import { GameObject } from "./gameobject.js"

//exporting the class
export class EndScreen extends GameObject {

    private game: Game

    constructor(game: Game,) {
        super("endscreen")
        this.game = game
        //creating a div
        const text = document.createElement("div")
        //creating a button
        const btn = document.createElement("button")


        this.div.appendChild(text)
        this.div.appendChild(btn)

        //text inside the button is play again, text inside the div is gameover
        text.innerText = 'Time is up'
        btn.innerText = "Play again"
        //click on the button to go to the startscreen
        btn.addEventListener("click", () => this.gotoStartScreen())

    }
    //removes its own class and goes to the next screen. 
    private gotoStartScreen() {
        this.remove()
        this.game.showStartScreen()
    }

}
