import { GameObject } from "./gameobject.js";
import { Dragon } from "./dragon.js";
import { Creature } from "./creature.js";
import { Ship } from "./ship.js";
import { Clock } from "./clock.js";
export class GameScreen extends GameObject {
    constructor(game) {
        super("gamescreen");
        this.creatures = [];
        this.ships = [];
        this.game = game;
        this.dragon = new Dragon();
        this.creatures.push(new Creature("creature"));
        this.ships.push(new Ship("ship"));
        this.clock = new Clock(game);
    }
    update() {
        this.gameloader();
        this.clock.update();
        this.dragon.update();
        for (const creature of this.creatures) {
            creature.update();
            if (this.checkCollision(creature.getBoundingRect(), this.dragon.getBoundingRect())) {
                creature.crash();
                this.dragon.crash();
            }
        }
        for (const ship of this.ships) {
            ship.update();
            if (this.checkCollision(ship.getBoundingRect(), this.dragon.getBoundingRect())) {
                ship.crash();
            }
        }
    }
    gameloader() {
        if (this.clock.timer < 1) {
            console.log("checken of t werkt");
            for (let ship of this.ships) {
                ship.remove();
                console.log("ship has been removed");
            }
            for (let creature of this.creatures) {
                creature.remove();
            }
            this.dragon.remove();
            this.clock.remove();
            this.ships = [];
            this.creatures = [];
            this.game.showEndScreen();
        }
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
//# sourceMappingURL=gamescreen.js.map