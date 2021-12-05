var Rightplayer,Platform, Background, Greenenemy, Bigblock, Smallblock, Redenemy, Playerbullet, Enemybullet, collider, GetBack, jump;
var RightplayerImage,PlatformImage, GreenenemyImage, BigblockImage, SmallblockImage, RedenemyImage, PlayerbulletImage, EnemybulletImage;
var allow;
var ButtonShoot;
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
  allow.position(width/1.15-width/2,height/2+100)
  allow.size(200,100)

  ButtonShoot= createButton("Shoot")
  ButtonShoot.position(width/.8-width/2, height/2+220)
  ButtonShoot.size(150,80)
  ButtonShoot.hide()

  
  jump= createButton("Jump")
  jump.position(width/1.5-width/2, height/2+220)
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
    jump.show()
    ButtonShoot.show()
    Platform.visible=true
    Rightplayer.visible=true
    
  

  
    textSize(25)
    fill('blue')
    text('Shoot', width/.79-width/2, height/2+215)

    text('Jump', width/1.45-width/2, height/2+215)
  
  

Rightplayer.debug=false


if(Rightplayer.isTouching(GetBack)){
 Rightplayer.x=collider.x
 Rightplayer.y=collider.y
 Rightplayer.collide(collider)
}

ButtonShoot.mousePressed(()=>{
  var newbullet =bullet();
     
  newbullet.addImage(PlayerbulletImage); 
  newbullet.y=Rightplayer.y
})

jump.mousePressed(()=>{
  Rightplayer.velocityY=-10
    })
   

  }

 drawSprites();
    
}
function bullet(){
  Playerbullet=createSprite(width/1.13-width/2, height/2+240)

PlayerbulletImage.scale=.25

Playerbullet.debug=false
Playerbullet.setCollider('rectangle', 0,0,30,Playerbullet.height-100)
Playerbullet.velocityX=6;
return Playerbullet; 
}


