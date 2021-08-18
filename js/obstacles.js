class Obstacles{ 
    constructor(){
        this.x = Math.floor(Math.random() * (1900 - 900 + 1) + 900);
        this.random = Math.floor(Math.random() * (things.length - 2 + 1) + 1);
        this.y = things[this.random].y; //sempre la mateixa        
        this.cactus = new Image();
        this.cactus.src = "assets/dino.png"
        this.sizeH = things[this.random].sizeH;
        
    }      
  
    _moveForward(speed){    
          this.x = this.x - speed ;    
    }    

    _drawThings(ctx){
        // ctx.fillStyle = this.color;
        //ctx.fillRect(this.x , this.y, this.size, 40); 
        ctx.drawImage(this.cactus,
            things[this.random].iw,
            2,
            things[this.random].width,
            things[this.random].height,
            this.x,
            this.y,
            things[this.random].sizeW,
            things[this.random].sizeH
            )

        this._moveForward(speed);          
    }
   
}