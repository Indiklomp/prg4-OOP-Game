//importing classes 
import { GameObject } from "./gameobject.js"

//exporting the class
export class Dragon extends GameObject {

    //makes the dragon slowly float up when the game starts 
    private verticalSpeed: number = -.5

    constructor() {
        
        super("dragon")
        //adds the eventlisteners for the keyboardevents 
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUpHandler(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDownHandler(e))
        this.x = 150
        this.y = 250
    }

    private onKeyUpHandler(e: KeyboardEvent): any {
        // Check if ArrowUp or ArrowDown key has been released
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            // verticalspeed is 0
            this.verticalSpeed = 0
        }
    }
    //adding the arrow 
    private onKeyDownHandler(e: KeyboardEvent): any {

        switch (e.key) {
            //when the arrowupkey is pressed 
            case "ArrowUp":
                // make the verticalspeed -5 (negative value )
                this.verticalSpeed = -7
                break;
            //when the arrowdownkey is pressed 
            case "ArrowDown":
                //make the verticalspeed 5 (positive value )
                this.verticalSpeed = 7
                break;
            default:
                break;
        }
    }

    public update() {
        //adds verticalspeed 
        this.y += this.verticalSpeed
        super.update()
    }

    //adds the red color to the dragon on impact with a creature
    public crash() {
        this.div.classList.add("reddragon");
    }

    //removes the class reddragon 
    public arrowHit() {
        this.div.classList.remove("reddragon");
    }


}