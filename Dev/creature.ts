//importing classes 
import { GameObject } from "./gameobject.js"

//exporting the class
export class Creature extends GameObject {

    //constructor will be 
    constructor(tagname: string) {
        super(tagname)
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    public update(): void {

        //the speed of the creature moving to the left 
        this.x -= 6

        //cheks if the creature has completely left the window and places it on the right again, removing the class of deadcreature. 
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
            this.div.classList.remove("invisible")
        }
        super.update()
    }

    //adds the class of a deadcreature to the creature after a collision 
    public crash(): void {
        this.div.classList.add("invisible")
    }


}