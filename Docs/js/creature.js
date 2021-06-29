import { GameObject } from "./gameobject.js";
export class Creature extends GameObject {
    constructor(tagname) {
        super(tagname);
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this.x -= 6;
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
            this.div.classList.remove("invisible");
        }
        super.update();
    }
    crash() {
        this.div.classList.add("invisible");
    }
}
//# sourceMappingURL=creature.js.map