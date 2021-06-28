import {GameObject} from "./gameobject.js"
import { StartScreen } from "./startscreen.js"
import {GameScreen} from "./gamescreen.js"
import { EndScreen } from "./endscreen.js"
import { Clock } from "./clock.js"

export class Game{

    private screen : GameObject
    private clock: Clock

    constructor(){
        this.screen = new StartScreen(this)
        this.gameLoop()
    }

    public showGameScreen(){
        this.screen = new GameScreen(this)
    }

    public showEndScreen(){
        this.screen = new EndScreen(this)
    }

    public showStartScreen(){
        this.screen = new StartScreen(this)
    }

    private gameLoop(){
        

       // if(this.showGameScreen){
           // console.log("gamescreen is zichtbaar ");
      //  }
        
        //if (this.clock.timer < 1){
            //alles removen
          //  console.log("clock < 1");
            
          //  if(!this.showEndScreen){
            //    this.showEndScreen()
           // }
      //  }
        this.screen.update()
        requestAnimationFrame(()=>this.gameLoop())
       
    }
}

new Game()