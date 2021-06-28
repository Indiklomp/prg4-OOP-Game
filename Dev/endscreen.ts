import { Game } from "./game"
import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"

export class EndScreen extends GameObject {

   private game: Game

        constructor(game: Game) {
            super("endscreen")
            this.game = game
            const text = document.createElement("div")
            const btn = document.createElement("button")
    
            this.div.appendChild(text)
            this.div.appendChild(btn)
        
    
            text.innerText = "You sunk ... ships "
            btn.innerText = "Play again"
    
            btn.addEventListener("click", () => this.gotoStartScreen())
            console.log("hallo?");
            
        }

        private gotoStartScreen(){
            this.remove()
            this.game.showStartScreen()
        }
        
    }
