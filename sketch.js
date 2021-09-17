var Rightplayer, Background, Greenenemy, Bigblock, Smallblock, Redenemy, Playerbullet, Enemybullet;
var allow;
var gameState=null;

function preload(){

  Background= loadImage("Background.png")
  Rightplayer= loadImage("Rightplayer.png")
  Greenenemy= loadImage("Greenenemy.png")
  Bigblock= loadImage("Bigblock.png")
  Smallblock= loadImage("Smallblock.png")
  Redenemy= loadImage("Redenemy.png")
  Playerbullet= loadImage("Playerbullet.png")
  Enemybullet= loadImage("Enemybullet.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);

 

  allow= createButton("Agree And Continue!")
  allow.position(width/1.1-width/2,height/2+50)
  allow.size(200,100)
 
  
}

function draw() {
  background("white");
  // this is question 1 from the game
  textSize(30)
fill("red")
  text(" Shooting Dungeon- Made By Vihan Seth",width/1.2-width/2,height/2-200)
  
  textSize(20)
  fill("black")
  text("For policies this is an official game built by Vihan Seth", width/1.2-width/2, height/2-170)
  text("with a web viwerer. This includes shooting, and it is built for 3+ ages.", width/1.2-width/2, height/2-140)
 drawSprites();
    
}

  