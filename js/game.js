
class Game {
    constructor(options){
        this.ctx = options.ctx;
        this.dinosaur = new Dinosaur();
        this.obstacles = new Obstacles();
        this.numberOfEnemies = 2;
        this.enemies = []
        this.status = 'running';
        this.enemiesInterval; 
        this.countInterval;
        this.mapInterval;
        this.levelUpInterval;
        this.jumpSound = new sound("./sounds/pop-jump.mp3")
        this.loseSound = new sound("./sounds/loser.mp3")
        this.levelSound = new sound("./sounds/level-up.mp3")
        this.downSound = new sound("./sounds/deslizar_1.mp3")
    }
    
    _generateThings(){
        if (this.status === 'running')         
        for (let i = this.enemies.length; i < this.numberOfEnemies; i++) {
            let newEnemy = new Obstacles()
            this.enemies.push(newEnemy);     
        }
        this.enemies.forEach(enem =>{
            if (enem.x < -10) {
                let index = this.enemies.indexOf(enem)
                this.enemies.splice(index, 1)
            }
        })   
    }

    _addBirds(){
        if (time > 399 && things.length === 6) {
            things.push({iw: 180,ih: 2,y: 125,width: 46,height: 27,sizeW: 50, sizeH: 35})
            things.push({iw: 180,ih: 2,y: 158,width: 46,height: 27,sizeW: 50, sizeH: 35})
        }
    }

    _levelUp(){
        this.levelUpInterval = setInterval( ()=>{
            speed++;
            this.levelSound.play();
        }, 10000)
       
    }
    _paintDino(){
        if (this.status === 'running')
            this.dinosaur._animate();  
        if (this.dinosaur.down === true) {
            this.dinosaur._aniDown(); 
        }
    }
     
    _drawMap(){
        this.ctx.drawImage(
            floor.background,
            floor.sx,floor.sy, 
            floor.sw, floor.sh,
            floor.dx, floor.dy, 
            floor.dw,floor.dh)
    }
    _animateMap(){      
        if (this.status === 'running') {
           this.mapInterval = setInterval(function() {
                floor.sx += speed ; 
                floor.sw += speed ;
                floor.actualStep++;
        
                if (floor.actualStep === floor.totalSteps ) {
                    floor.actualStep=1;
                  floor.sx = 2;
                  floor.sw = 250;          
                }
               
              }, 100);
        }        
        //FIX
        }

    _paintThings(){
        this.enemies.forEach(obst => obst._drawThings(this.ctx))  
    }
   
    _checkCollision(){       
        this.enemies.forEach(enem => {
            if (this.dinosaur.x < (enem.x + enem.sizeH / 2) &&
            (this.dinosaur.x + this.dinosaur.hg / 2) > enem.x &&
            this.dinosaur.y < (enem.y + enem.sizeH / 2) &&
            (this.dinosaur.y + this.dinosaur.hg / 2) > enem.y ){
            this.status = 'stop';            
            }
        });    
    }

    _assignControlsToKeys(){
        document.addEventListener('keydown', (evt)=>{
            switch (evt.code) {
                case "ArrowUp":
                    this.dinosaur.jump();   
                    this.jumpSound.play();               
                    break;  
                case "ArrowDown":
                   this.dinosaur._dinoIsDown(); 
                   this.downSound.play();
                                 
                    break;              
                default:
                    break;
            }
        });
        document.addEventListener('keyup', (evt)=>{
            switch (evt.code) {
                case "ArrowDown":
                    this.dinosaur._dinoIsUp();                  
                    break;                             
                default:
                    break;
            }
        });
    }

    _highScore(){
        if (time > highScore){
            highScore = time; 
        }
    }
    _saveScore(){
        if (highScore > 0) {
            localStorage.setItem('highScore', highScore)
        }       
    }
 
    _checkStatus(){
        if (this.status === 'stop') {
            gOver.style.display='block';  
            this.dinosaur._dinoDead(this.ctx);   
            this.loseSound.play()
            playing=false;   
            window.clearInterval(this.countInterval);
            window.clearInterval(this.mapInterval);
            window.clearInterval(this.dinosaur.animate);
            window.clearInterval(this.levelUpInterval);
            this._highScore();
            this._saveScore();
            time = 0;
            speed = 6;
         } else{
             gOver.style.display='none';
         }
    }

    _clean(){
        this.ctx.clearRect(0,0,800,350) // mesures del canvas       
    }

    _scoreCount(){
       this.countInterval = setInterval(() => {
           if (maxScore && maxScore > highScore) {
               highScore = maxScore;
           }
            score.innerHTML ='HI '+highScore + " " + time;
            time++;
        }, 100)
       
    }

    _update(){
        if(this.status === 'running'){
        this._clean();
        this._drawMap();       
        this.dinosaur._drawDinosaur(this.ctx)
        this._generateThings()
        this._addBirds()
        this._paintThings()
        this._checkCollision() 
        this._checkStatus()
        window.requestAnimationFrame(this._update.bind(this));
        } 
    }

    start(){
        this._assignControlsToKeys();
        this._animateMap();
        this._paintDino();
        this._scoreCount()
        this._levelUp() 
        playing = true; 
        
        window.requestAnimationFrame(this._update.bind(this));
    }
}
