export class GameObject {

    protected div:HTMLElement
    protected y:number = 0
    protected x: number = 0

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    constructor(name:string){
        const gameElement = document.querySelector('game') as HTMLElement
        this.div = document.createElement(name)
        gameElement.appendChild(this.div)
    }
    
    public remove() {
        this.div.remove()
    }

    public update() {
        
    }
}
