import { GameObject } from "./gameobject.js";
export class Ship extends GameObject {
    constructor(tagname) {
        super(tagname);
        this.x = 0;
        this.y = 550;
        const game = document.querySelector('game');
    }
    create() {
        this.div = document.createElement("ship");
        document.body.appendChild(this.div);
    }
    update() {
        this.x -= 3;
        if (this.x + this.div.clientWidth < -500) {
            this.x = window.innerWidth;
            this.y = 600;
            this.div.classList.remove("crackedAsteroid");
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    crash() {
        this.div.classList.add("crackedAsteroid");
        this.y -= -1;
    }
}
//# sourceMappingURL=ship.js.map