let floor = {
    background : new Image(), 
    sx: 2,
    sy: 53, 
    sw: 250,
    sh: 15,
    dx: 0, 
    dy: 190,
    dw: 800, 
    dh: 28,
    actualStep : 1,
    totalSteps: 8,

}
floor.background.src = "assets/dino.png"
//tope 1200, sx y sw +1 hasta que sw === tope

let dino = {
    run : 936,
    wid : 44,
    actualStep : 1,
    totalSteps : 3,
}

let dinoDown = {
    run: 1112,
    wid: 59,
    hei: 30,
    actualStep: 1,
    totalSteps: 3
}

   
   

let things = [
    {
        iw: 332,
        ih: 2,
        width: 25,
        y: 150,
        height: 48,
        sizeW: 40, 
        sizeH: 70
    },   
    {
        iw: 332,
        ih: 2,
        y: 150,
        width: 25,
        height: 48,
        sizeW: 40, 
        sizeH: 70
    },
    {
        iw: 314,
        ih: 2,
        y:162,
        width: 15,
        height: 33,
        sizeW: 25, 
        sizeH: 50
    },
    {
        iw: 314,
        ih: 2,
        y: 162,
        width: 15,
        height: 33,
        sizeW: 25, 
        sizeH: 50
    },
    {
        iw: 382,
        ih: 2,
        y: 152,
        width: 25,
        height: 49,
        sizeW: 40, 
        sizeH: 70
    },    
    {
        iw: 382,
        ih: 2,
        y: 152,
        width: 25,
        height: 49,
        sizeW: 40, 
        sizeH: 70
    }, 
]

let playing = false;
const gOver = document.getElementById('gOver')
let time = 0;
let score = document.getElementById('score')
let highScore = 0000; 
let speed = 6;
let maxScore = localStorage.getItem('highScore')
