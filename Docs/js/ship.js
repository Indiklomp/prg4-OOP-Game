import { GameObject } from "./gameobject.js";
import { Arrow } from "./arrow.js";
export class Ship extends GameObject {
    constructor(tagname, g) {
        super(tagname);
        this.gamescreen = g;
        this.x = 0;
        this.y = 550;
        const game = document.querySelector('game');
    }
    get valueX() {
        return this.x;
    }
    get valueY() {
        return this.y;
    }
    update() {
        this.x -= 3;
        this.shoot();
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = 600;
            this.div.classList.remove("damagedship");
        }
        super.update();
    }
    crash() {
        this.div.classList.add("damagedship");
        this.y -= -180;
    }
    shoot() {
        if (Math.random() < .01) {
            this.gamescreen.addArrow(new Arrow("arrow", this));
        }
    }
}
//# sourceMappingURL=ship.js.map