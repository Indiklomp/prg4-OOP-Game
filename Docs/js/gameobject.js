export class GameObject {
    constructor(name) {
        this.y = 0;
        this.x = 0;
        const gameElement = document.querySelector('game');
        this.div = document.createElement(name);
        gameElement.appendChild(this.div);
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    remove() {
        this.div.remove();
    }
    update() {
    }
}
//# sourceMappingURL=gameobject.js.map