import { GameObject } from "./gameobject.js";
import { Dragon } from "./dragon.js";
import { Creature } from "./creature.js";
import { Ship } from "./ship.js";
import { Clock } from "./clock.js";
import { Score } from "./score.js";
export class GameScreen extends GameObject {
    constructor(game) {
        super("gamescreen");
        this.creatures = [];
        this.ships = [];
        this.arrows = [];
        this.game = game;
        this.dragon = new Dragon();
        this.creatures.push(new Creature("creature"));
        this.ships.push(new Ship("ship", this));
        this.clock = new Clock(game);
        this.score = new Score(game);
    }
    update() {
        this.resetall();
        this.clock.update();
        this.score.update();
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
                this.score.addScore();
            }
        }
        for (let a of this.arrows) {
            a.update();
            if (this.checkCollision(a.getBoundingRect(), this.dragon.getBoundingRect())) {
                this.dragon.arrowHit();
            }
            if (a.getBoundingRect().left < -100) {
                a.remove();
                this.arrows = this.arrows.filter(arrow => arrow != a);
            }
        }
    }
    resetall() {
        if (this.clock.timer < 1) {
            for (let ship of this.ships) {
                ship.remove();
            }
            for (let creature of this.creatures) {
                creature.remove();
            }
            for (let arrow of this.arrows) {
                arrow.remove();
            }
            this.dragon.remove();
            this.clock.remove();
            this.score.remove();
            this.remove();
            this.ships = [];
            this.creatures = [];
            this.arrows = [];
            this.game.showEndScreen();
        }
    }
    addArrow(a) {
        this.arrows.push(a);
    }
    removeArrow(arrow) {
        arrow.remove();
        this.arrows = this.arrows.filter(a => a !== arrow);
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
//# sourceMappingURL=gamescreen.js.map