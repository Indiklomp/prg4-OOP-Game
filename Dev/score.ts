//importing classes 
import { Game } from "./game.js"

//exporting the class
export class Score {
    private scoreBar: HTMLElement
    private game: Game
    private _score: number = 0

    constructor(g: Game) {
        this.game = g
        const game = document.querySelector('game') as HTMLElement
        this.scoreBar = document.createElement("score")
        game.appendChild(this.scoreBar)
        this.update()
    }
    //getter for the score 
    public get score(): number {
        return this._score
    }

    //making the scorebar
    public update() {
        let sunkenShips = "Sunken ships : " + this._score
        this.scoreBar.innerHTML = sunkenShips
    }

    //function to add +1 to the sunkenshipcounter 
    public addScore() {
        this._score++
        this.update()
    }

    public remove() {
        this.scoreBar.remove()
    }


}