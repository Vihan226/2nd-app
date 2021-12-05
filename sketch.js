var Rightplayer,Platform, Background, Greenenemy, Bigblock, Smallblock, Redenemy, Playerbullet, Enemybullet, collider, GetBack, jumpm,  coin;
var RightplayerImage,PlatformImage, GreenenemyImage, BigblockImage, SmallblockImage, RedenemyImage, PlayerbulletImage, EnemybulletImage, coinImage;
var allow;
var ButtonShoot;
var gameState=null;
var score;
var health;
var level;
var start;
var kills;
var CoinSound, coinsound, EnemySound;
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
  coinImage=loadImage("Coin.png")
  CoinSound=loadSound('coinsound.wav')
  EnemySound=loadSound('enemyhit.wav')
}
function setup() {
  createCanvas(windowWidth, windowHeight);



  allow= createButton("Agree And Continue to Play")
  allow.position(width/1.15-width/2,height/2+150)
  allow.size(200,100)



  


Platform = createSprite(width/1-width/2, height/2+600)
Platform.addImage("platformImg", PlatformImage)
Platform.scale=5
Platform.visible=false

Rightplayer=createSprite(width/1.5-width/2, height/2+250)
Rightplayer.addImage("rplayer", RightplayerImage)
RightplayerImage.scale=1
Rightplayer.visible=false




collider=createSprite(width/1.15-width/2, height/2+327, 10000,10)
collider.visible=false

GetBack=createSprite(width/1.15-width/2, height/2-300, 10000,10)
GetBack.visible=false

score=0
health=100
start=300
kills=0
}

function draw() {
  background("white");
  // this is question 1 from the game
  textSize(30)
fill("red")
  text(" Shooting Dungeon- Made By Vihan Seth",width/1.25-width/2,height/2-200)
  text("Start in: "+start, width/4-width/2, height/2-300)
  
  textSize(20)
  fill("black")
  text("For policies this is an official game built by Vihan Seth", width/1.25-width/2, height/2-170)
  text("with a web viewer. This includes shooting, and it is built for 3+ ages.", width/1.25-width/2, height/2-140)
  text("Press- Agree and Continue to Play when it says Start!", width/1.25-width/2, height/2-110)

  //sprite
  start= start-1

  if(start<0){
    textSize(100)
    fill('blue')
    text('Start', width/1.14-width/2, height/2+50)
  }
  if(frameCount %300 === 0){
    Smallblock=createSprite(width/.8-width/2, height/2+270)
    Smallblock.addImage("smallblock", SmallblockImage)
    Smallblock.scale=.5
    Smallblock.visible=false
    Smallblock.velocityX=-7
    Smallblock.lifetime=900
  }

  if(frameCount %50 ===0){
    Playerbullet=createSprite(width/1.3-width/2, Rightplayer.y)
Playerbullet.addImage('bulletofplayer', PlayerbulletImage)
    PlayerbulletImage.scale=.25
    Playerbullet.visible=false
    Playerbullet.debug=false
    Playerbullet.setCollider('rectangle', 0,0,30,Playerbullet.height-100)
    Playerbullet.velocityX=10;
    Playerbullet.lifetime=900
  }

  if(frameCount % 200 ===0){
    Greenenemy=createSprite(width/.6-width/2, height/2)
    Greenenemy.addImage("greenenemy", GreenenemyImage)
    GreenenemyImage.scale=.25
    Greenenemy.visible=false
    Greenenemy.velocityX=-10;
    Greenenemy.lifetime=900
    Greenenemy.debug=false
    Greenenemy.setCollider('rectangle', 0,0,0, Greenenemy.height-50)
    Greenenemy.y= Math.round(random(height/2+250, height/2-100))
  }

  if(frameCount %100 ===0){
    coin=createSprite(width/.85-width/2, height/2)
    coin.addImage('coin', coinImage)
    coinImage.scale=.25
    coin.visible=false
    coin.velocityX=-9
    coin.lifetime=900
    coin.debug=false
    coin.y=Math.round(random(height/2+250, height/2-150))
   
  }



  allow.mousePressed(()=>{
gameState="game"
  })

  



  if(gameState==="game"){
    background(Background)
    allow.hide()
    
    
    
    if(touches.length>0){
      Rightplayer.velocityY=-10
      touches=[]
        }

    Platform.visible=true
    Rightplayer.visible=true
   Smallblock.visible=true
  GetBack.visible=false
  Playerbullet.visible=true
  Greenenemy.visible=true
  coin.visible=true
  if(Playerbullet.isTouching(Greenenemy)){
    Greenenemy.destroy()
    EnemySound.play()
    kills=kills+1
  }
  if(Greenenemy.isTouching(Rightplayer)){
    health=health-7
    Greenenemy.destroy()
  }
  
    if(Rightplayer.isTouching(Smallblock)){
    background('red')
    // make health go down a bit
    health=health-5
    Smallblock.destroy()
    }

    if(Rightplayer.isTouching(coin)){
     score=score+2
     CoinSound.play()
     coin.destroy()
    }

/*  if(Playerbullet.isTouching(Smallblock)){
    Smallblock.destroy()
  }*/

textSize(40)
fill('green')
text('Score: '+score, width/1.6-width/2, height/2-290)
text('Kills: '+kills, width/1.6-width/2, height/2-340)
fill('red')
text('Health: '+health, width/.8-width/2, height/2-290)
//make player have some gravity to floor and collide with the collider.
   Rightplayer.velocityY=Rightplayer.velocityY+.5;

    
  


Rightplayer.debug=false




 Rightplayer.collide(collider)





   

  }

 drawSprites();
    
}


