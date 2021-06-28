import { EndScreen } from "./endscreen.js"
import {Game} from "./Game.js"



export class Clock  {
    private question: HTMLElement
    private game : Game
    private endscreen : EndScreen

    private _timer: number = 1500

    public get timer(): number {
        return this._timer
    }


    constructor(g : Game) {
        
        this.game = g
        const game = document.querySelector('game') as HTMLElement
        this.question = document.createElement("clock")
        game.appendChild(this.question)
    }

    public update() {

        this._timer--
        let secondsLeft = Math.floor(this._timer / 60)
        let clockText = "Timer : " + this._timer + " sec"
        if(this._timer <= 0) {
            this._timer = 0
        
        }
        
        this.question.innerHTML = clockText

    }

    public remove(){
        this.question.remove()
    }
    
}