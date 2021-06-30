//the gameobject contains a few functions and variables I would otherwise have to add in a lot of objects, making me repeat the code
//exporting the class
export class GameObject {

    //fields 
    protected div: HTMLElement
    protected y: number = 0
    protected x: number = 0

    public getBoundingRect(): DOMRect {
        return this.div.getBoundingClientRect()
    }

    constructor(name: string) {
        const gameElement = document.querySelector('game') as HTMLElement
        this.div = document.createElement(name)
        gameElement.appendChild(this.div)
    }
//remove function
    public remove() : void {
        this.div.remove()
    }
//update function
    public update() : void {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}

