import {GameObject } from "./gameobject.js"
export class Dragon extends GameObject{

    verticalSpeed: number = -.5

    constructor(){
        super("dragon")
        window.addEventListener("keyup", (e : KeyboardEvent) => this.onKeyUpHandler(e) )
        window.addEventListener("keydown" , (e : KeyboardEvent) => this.onKeyDownHandler(e)  )
        this.x=150
        this.y=150
    }

    public onKeyUpHandler(e: KeyboardEvent): any {
        if (e.key == "ArrowUp" || e.key == "ArrowDown"){
            this.verticalSpeed = 0
        }  
    }

    public onKeyDownHandler(e: KeyboardEvent): any {

       switch (e.key) {
           case "ArrowUp":
               this.verticalSpeed = -5
               break;
            case "ArrowDown":
                this.verticalSpeed = 5
                break;
           default:
               break;
       }
    }

    public update() {
        this.y += this.verticalSpeed
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    crash() {
        this.div.classList.add("reddragon");
    }
    

}