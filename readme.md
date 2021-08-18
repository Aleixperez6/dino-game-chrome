# Game Name

Dino Game

## Description 🚀

The player controls the Dinosaur who have to dodge obstacles and takes the coins. The dinosaur can jump and crouch for continue. 
For increase the difficult, the background will move **faster**.

**Deployment** 

## MVP (CANVAS) 📋

The Minimum Viable Product includes: 

- User can see a start screen 
- User press a start button 
- User only can jump with the Arrow Up and go down with Arrow Down
- User can see the map 
- User can see obstacles
- User can loose 
- User can press a _play again button_ when he loses. 
- User wins? I dont know, let's see your speed skills. 


## Backlog 🤓

- User sees the current obstacles or coins 
- User sees the dinosaur running
- User can crouch with the Arrow Down. 
- User hear a sound effects
- User sees how increase the speed of game
- User loses if collide with obstacles


## Data Structure 🛠️

```
class Dinosaur{
    constructor(){
        this.position
    }
    running()
    jump()
    crouch()
}

class Things{
    constructor(){
        this.position
    }
    collidesWith(Dinosaur)
    sound()
}

class Game(){
    constructor(options){
        this.ctx
        this.dinosaur
        this.things
        this.callback
    }
    drawDinosaur()
    drawThings()
    controlKeys()
    update()
    bgMove()
    songRun()
}
```

## States & States Transitions

- Start
- Loose

