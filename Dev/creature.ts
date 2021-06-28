import {GameObject } from "./gameobject.js"
export class Creature extends GameObject{


    constructor(tagname: string){
        super(tagname)
        

        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    public update(): void{

       this.x -= 4

         if(this.x + this.div.clientWidth < 0) {
             this.x = window.innerWidth
             this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
             this.div.classList.remove("deadCreature")
         }
         this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public crash() : void {
        this.div.classList.add("deadCreature")
    }

    
}