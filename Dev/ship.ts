//importing classes 
import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"
import { Arrow } from "./arrow.js"

//exporting the class
export class Ship extends GameObject {

    private gamescreen: GameScreen

    constructor(tagname: string, g: GameScreen) {
        super(tagname)
        // Generate x and y value
        this.gamescreen = g
        this.x = 0
        this.y = 550
        const game = document.querySelector('game') as HTMLElement
    }

    //getter for the X value 
    public get valueX(): number {
        return this.x
    }

    //getter for the Y value 
    public get valueY(): number {
        return this.y
    }

    public update(): void {
        // the speed of the ship moving to the left 
        this.x -= 3
        this.shoot()

        // Check if the ship is completely outside the screen (left side)
        if (this.x + this.div.clientWidth < 0) {
            // Place the ship on the right side outside the screen
            this.x = window.innerWidth
            // Generate a y-value
            this.y = 600
            //removes the class of invisible
            this.div.classList.remove("damagedship")
        }

        super.update()
    }

    // adding a damaged ship class to the ship  and moving the ship 180px down the next frame 
    public crash(): void {
        this.div.classList.add("damagedship")
        this.y -= -180
    }

    // shoots arrows 
    private shoot() {
        if (Math.random() < .01) {
            this.gamescreen.addArrow(new Arrow("arrow", this))
        }
    }
}