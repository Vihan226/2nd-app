var Rightplayer,Platform, Background, Greenenemy, Bigblock, Smallblock, Redenemy, Playerbullet, Enemybullet, collider, GetBack, jump;
var RightplayerImage,PlatformImage, GreenenemyImage, BigblockImage, SmallblockImage, RedenemyImage, PlayerbulletImage, EnemybulletImage;
var allow;
var ButtonShoot;
var gameState=null;
var score;
var health;
var level;

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
  allow.position(width/1.15-width/2,height/2+100)
  allow.size(200,100)



  
  jump= createButton("Jump")
  jump.position(width/1.6-width/2, height/2+290)
  jump.size(150,80)
  jump.hide()

Platform = createSprite(width/1-width/2, height/2+600)
Platform.addImage("platformImg", PlatformImage)
Platform.scale=5
Platform.visible=false

Rightplayer=createSprite(width/1.15-width/2, height/2+250)
Rightplayer.addImage("rplayer", RightplayerImage)
RightplayerImage.scale=1
Rightplayer.visible=false




collider=createSprite(width/1.15-width/2, height/2+327, 10000,10)
collider.visible=false

GetBack=createSprite(width/1.15-width/2, height/2-300, 10000,10)
GetBack.visible=false

score=0
health=100
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

  //sprite
  if(frameCount %110 === 0){
    Smallblock=createSprite(width/.9-width/2, height/2+270)
    Smallblock.addImage("smallblock", SmallblockImage)
    Smallblock.scale=.5
    Smallblock.visible=false
    Smallblock.velocityX=-10
    Smallblock.lifetime=900
  }

  if(frameCount %50 ===0){
    Playerbullet=createSprite(width/1.13-width/2, Rightplayer.y)
Playerbullet.addImage('bulletofplayer', PlayerbulletImage)
    PlayerbulletImage.scale=.25
    Playerbullet.visible=false
    Playerbullet.debug=false
    Playerbullet.setCollider('rectangle', 0,0,30,Playerbullet.height-100)
    Playerbullet.velocityX=6;
    Playerbullet.lifetime=900

   
  }



  allow.mousePressed(()=>{
gameState="game"
  })

  



  if(gameState==="game"){
    background(Background)
    allow.hide()
    jump.show()
    
    Platform.visible=true
    Rightplayer.visible=true
   Smallblock.visible=true
  GetBack.visible=false
  Playerbullet.visible=true

    if(Rightplayer.isTouching(Smallblock)){
    background('red')
    // make health go down a bit
    health=health-5
    Smallblock.destroy()
    }

  if(Playerbullet.isTouching(Smallblock)){
    Smallblock.destroy()
  }

textSize(40)
fill('green')
text('Score: '+score, width/1.6-width/2, height/2-290)
fill('red')
text('Health: '+health, width/.8-width/2, height/2-290)
//make player have some gravity to floor and collide with the collider.
   Rightplayer.velocityY=Rightplayer.velocityY+.5;

    textSize(25)
    fill('blue')
    text('Jump', width/1.55-width/2, height/2+285)
  
 

Rightplayer.debug=false




 Rightplayer.collide(collider)




jump.mousePressed(()=>{
  Rightplayer.velocityY=-10
    })
   

  }

 drawSprites();
    
}


