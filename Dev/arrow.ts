//importing classes 
import { GameObject } from "./gameobject.js"
import { Ship } from "./ship.js"

//exporting the class 
export class Arrow extends GameObject {

    //determine the arrow speed 
    private speed: number = -9

    constructor(tagname: string, s: Ship) {

        super(tagname)
        //using the getter from ship.ts for x and y value 
        this.x = s.valueX
        this.y = s.valueY
        this.update()
    }

    public update() {
        this.x += this.speed;
        super.update()
    }
}