class Dinosaur{
    constructor(){
        this.x = 30;
        this.y = 145;
        this.hg = 70; 
        this.jumping = false;
        this.dinoImage = new Image()
        this.dinoImage.src = "assets/dino.png"
        this.normal = 848;        
        this.dead = 1024;
        this.animate; 
        this.animateDown;
        this.down = false;
    }
    jump(){ 
        let jumpInterval; // Les declaro fora per no tenir problemes de clausura
        let goingDownInterval;
        if(this.jumping === false){ // Ho mirem perquè no pugui saltar quan ja és a l'aire
          this.jumping = true;
          jumpInterval = setInterval(function(){ // Començo a saltar
            this.y = this.y - 5; // Puja cap a dalt
            if (this.y === 25){ // Poso un tope, aquí para de saltar
            clearInterval(jumpInterval); 
            console.log("Dinosaur on Y: 5, can't go any further");
            goingDownInterval = setInterval(function(){
              this.y = this.y + 5 ; // Torna cap a baix
                if (this.y === 145){ // Quan arribis al punt d'inici, para
                clearInterval(goingDownInterval);
                this.jumping = false; // Tornem l'status a false
              }
            }.bind(this), 10); 
           }
          }.bind(this), 10);
        }         
      }

    _drawDinosaur(ctx){
      if (this.down === false) {
        ctx.drawImage(this.dinoImage,dino.run,2,dino.wid,47,this.x,this.y,60,this.hg) // state normal
      } else if (this.down === true && this.y === 145) {
        ctx.drawImage(this.dinoImage,
          dinoDown.run,
          19,
          dinoDown.wid,
          dinoDown.hei,
          this.x,
          175,
          80,40) // state normal
      }
        
        //936, 2, 44,47 running 1
        // 980, 2, 44, 47 running 2
        // 1024, 2, 44,47
    }
    _dinoIsDown(){
      if (this.y === 145) {
        this.down = true;   
        this._aniDown()     
      }     
    }
    _aniDown(){
      this.animateDown = setInterval(function(){
        dinoDown.run += dinoDown.wid;
        dinoDown.actualStep++;
        if (dinoDown.actualStep === dinoDown.totalSteps) {
          dinoDown.actualStep = 1;
          dinoDown.run = 1112;          
        }
    }, 100);
    }
    _dinoIsUp(){
      this.down = false; 
      window.clearInterval(this.animateDown);
    }
    _dinoDead(ctx){
      ctx.drawImage(this.dinoImage,this.dead,2,dino.wid,47, this.x,this.y,60,this.hg)
    }
    
    _animate(){      
     this.animate = setInterval(function() {
        dino.run += dino.wid;
        dino.actualStep++;
        if (dino.actualStep === dino.totalSteps) {
          dino.actualStep = 1;
          dino.run = 936;         
        }  
      }, 100);
      }
}