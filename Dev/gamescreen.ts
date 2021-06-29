//importing classes 
import { GameObject } from "./gameobject.js"
import { Dragon } from "./dragon.js"
import { Creature } from "./creature.js"
import { Ship } from "./ship.js"
import { Clock } from "./clock.js"
import { Game } from "./game.js"
import { Score } from "./score.js"
import { Arrow } from "./arrow.js"

//exporting the class
export class GameScreen extends GameObject {

    //list with all properties in the gamescreen
    private dragon: Dragon
    private creatures: Creature[] = []
    private ships: Ship[] = []
    private arrows: Arrow[] = []
    private clock: Clock
    private game: Game
    private score: Score

    constructor(game: Game) {
        super("gamescreen")
        this.game = game
        this.dragon = new Dragon()
        this.creatures.push(new Creature("creature"))
        this.ships.push(new Ship("ship", this))
        this.clock = new Clock(game)
        this.score = new Score(game)

    }

    //updates all of the objects, checking for collissions and adding functions to perfom if there is a collision 
    public update() {
        this.resetall()
        this.clock.update()
        this.score.update()
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
                this.score.addScore()
            }
        }

        for (let a of this.arrows) {
            a.update()
            if (this.checkCollision(a.getBoundingRect(), this.dragon.getBoundingRect())) {
                this.dragon.arrowHit()

            }
            if (a.getBoundingRect().left < -100) {
                a.remove()
                this.arrows = this.arrows.filter(arrow => arrow != a)
            }
        }


    }

    //  is used to remove all the items when starting a new game 
    private resetall() {
        if (this.clock.timer < 1) {

            for (let ship of this.ships) {
                ship.remove()
            }
            for (let creature of this.creatures) {
                creature.remove()
            }
            for (let arrow of this.arrows) {
                arrow.remove()
            }
            this.dragon.remove()
            this.clock.remove()
            this.score.remove()
            this.remove()
            this.ships = []
            this.creatures = []
            this.arrows = []
            this.game.showEndScreen()
        }

    }

    public addArrow(a: Arrow) {
        this.arrows.push(a)
    }

    public removeArrow(arrow: Arrow) {
        arrow.remove()
        this.arrows = this.arrows.filter(a => a !== arrow)
    }

    // checks for a collision
    private checkCollision(a: ClientRect, b: ClientRect): boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
}