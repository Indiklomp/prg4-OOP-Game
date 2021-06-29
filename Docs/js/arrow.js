import { GameObject } from "./gameobject.js";
export class Arrow extends GameObject {
    constructor(tagname, s) {
        super(tagname);
        this.speed = -9;
        this.x = s.valueX;
        this.y = s.valueY;
        this.update();
    }
    update() {
        this.x += this.speed;
        super.update();
    }
}
//# sourceMappingURL=arrow.js.map