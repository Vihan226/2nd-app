var Rightplayer,Platform, Background, Greenenemy, Bigblock, Smallblock, Redenemy, Playerbullet, Enemybullet;
var RightplayerImage,PlatformImage, GreenenemyImage, BigblockImage, SmallblockImage, RedenemyImage, PlayerbulletImage, EnemybulletImage;
var allow;
var gameState=null;

function preload(){

  Background= loadImage("Background.png")
  RightplayerImage= loadImage("Rightplayer.png")
  GreenenemyImage= loadImage("Greenenemy.png")
  BigblockImage= loadImage("Bigblock.png")
  SmallblockImage= loadImage("Smallblock.png")
  RedenemyImage= loadImage("Redenemy.png")
  PlayerbulletImage= loadImage("Playerbullet.png")
  EnemybulletImage= loadImage("Enemybullet.png")
  PlatformImage= loadImage("Platform.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);

 

  allow= createButton("Agree And Continue to Play")
  allow.position(width/1.15-width/2,height/2+50)
  allow.size(200,100)

Platform = createSprite(width/1-width/2, height/2+600)
Platform.addImage("platformImg", PlatformImage)
Platform.scale=5
Platform.visible=false

Rightplayer=createSprite(width/1.1-width/2, height/2+250)
Rightplayer.addImage("rplayer", RightplayerImage)
RightplayerImage.scale=1
Rightplayer.visible=false
 
  
}

function draw() {
  background("white");
  // this is question 1 from the game
  textSize(30)
fill("red")
  text(" Shooting Dungeon- Made By Vihan Seth",width/1.25-width/2,height/2-200)
  
  textSize(20)
  fill("black")
  text("For policies this is an official game built by Vihan Seth", width/1.25-width/2, height/2-170)
  text("with a web viewer. This includes shooting, and it is built for 3+ ages.", width/1.25-width/2, height/2-140)

  allow.mousePressed(()=>{
gameState="game"
  })





  if(gameState==="game"){
    background(Background)
    allow.hide()

    Platform.visible=true
    Rightplayer.visible=true
  }
  
 drawSprites();
    
}



  