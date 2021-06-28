import {GameObject } from "./gameobject.js"
export class Ship extends GameObject{

constructor(tagname: string){
    super(tagname)

    // Generate x and y value
    this.x = 0 
    this.y = 550
    const game = document.querySelector('game') as HTMLElement

}

public create() : void {
    this.div = document.createElement("ship")
    document.body.appendChild(this.div)
}


public update(): void{
     // Move the asteroid (x-value) to the left. 
     this.x -= 3

     // Check if the asteroid is completely outside the screen (left side)
     if(this.x + this.div.clientWidth < -500) {
         // Place the asteroid on the right side outside the screen
         this.x = window.innerWidth
         // Generate a random y-value
         this.y = 600
         this.div.classList.remove("crackedAsteroid")
     }

     // Draw the shark on the right coordinate (x, y)
     this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
}

public crash() : void {
    this.div.classList.add("crackedAsteroid")
    this.y -= -1
}


}