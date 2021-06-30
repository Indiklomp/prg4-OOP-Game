//importing classes 
import { Game } from "./Game.js"

//exporting the class
export class Clock {

    private timebar: HTMLElement
    private game: Game
    private _timer: number = 3600
    public get timer(): number {
        return this._timer       
    }

    constructor(g: Game) {
        this.game = g
        const game = document.querySelector('game') as HTMLElement
        this.timebar = document.createElement("clock")
        game.appendChild(this.timebar)
    }

    //function to update the timebar
    public update() {
        this._timer--
        //turns the number in to actual seconds 
        let secondsLeft = Math.floor(this._timer / 60)
        // forms the text of the timer 
        let clockText = "Timer : " + secondsLeft + " sec"
        if (this._timer <= 0) {
            this._timer = 0
        }
        //implements the text in the Div
        this.timebar.innerHTML = clockText

    }
    //function to remove the timebar 
    public remove() {
        this.timebar.remove()
    }

}