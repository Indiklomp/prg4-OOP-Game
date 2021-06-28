import { GameObject } from "./gameobject.js";
export class Creature extends GameObject {
    constructor(tagname) {
        super(tagname);
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this.x -= 4;
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
            this.div.classList.remove("deadCreature");
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    crash() {
        this.div.classList.add("deadCreature");
    }
}
//# sourceMappingURL=creature.js.map