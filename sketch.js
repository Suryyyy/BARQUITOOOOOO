var ship, shipimg
var sea, seaimg
function preload(){
shipimg = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaimg = loadImage ("sea.png")
}

function setup(){

  createCanvas(1000,700);
  sea = createSprite (400,400);
  sea.addImage ("sea",seaimg)
  sea.scale = 0.4

  ship = createSprite (500,450,10,10);
  ship.addAnimation ("ship",shipimg)
  ship.scale = 0.3
}

function draw() {
  background("sea");
 drawSprites();
 
}