import { GameObject } from "./gameobject.js"
import { Dragon } from "./dragon.js"
import { Creature } from "./creature.js"
import { Ship } from "./ship.js"
import { Clock } from "./clock.js"
import { Game } from "./game.js"
import { EndScreen } from "./endscreen.js"


export class GameScreen extends GameObject {

    private dragon: Dragon
    private creatures: Creature[] = []
    private ships: Ship[] = []
    private clock: Clock
    private game : Game

    constructor(game:Game){
        super("gamescreen")
        this.game = game
        this.dragon = new Dragon()
        this.creatures.push( new Creature("creature"))
        this.ships.push( new Ship("ship"))
        this.clock = new Clock(game)

    }

    public update(){
        this.gameloader()
        this.clock.update()
        this.dragon.update()
        
        for (const creature of this.creatures) {
            creature.update()

            if (this.checkCollision(creature.getBoundingRect(), this.dragon.getBoundingRect())) {
                creature.crash()
                this.dragon.crash()
               
              } 
        }

      for (const ship of this.ships) {
          ship.update()

       
          if (this.checkCollision(ship.getBoundingRect(), this.dragon.getBoundingRect())) {
              ship.crash()
            }
       }
    }

public gameloader(){
    if(this.clock.timer < 1){
        console.log("checken of t werkt");
        
        for(let ship of this.ships){
            ship.remove() 
            console.log("ship has been removed");
        }

        for(let creature of this.creatures){
            creature.remove()
        }
        this.dragon.remove()
        this.clock.remove()
        this.ships = []
        this.creatures = []
         this.game.showEndScreen()
    }

}

    private checkCollision(a: ClientRect, b: ClientRect): boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
}