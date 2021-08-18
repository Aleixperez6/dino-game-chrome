// Elements del DOM
// const game = new Game(ctx)
// game.start()

document.addEventListener('DOMContentLoaded', () =>{
   
    const buttonPlay = document.getElementById('playGame')
    buttonPlay.addEventListener('click', startGame)

    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d')
    
    const restartButton = document.getElementById('gOver')
    restartButton.addEventListener('click', restart)

    const game = new Game({
        ctx: ctx
    });

    function startGame(){
        splash.style.display="none";
        canvas.style.display="block";  
        score.style.display="block"      
        game.start();    
    }

    function restart(){
        let newGame = new Game({
            ctx:ctx
        })
        newGame.start()
    }
    
  
    
})



