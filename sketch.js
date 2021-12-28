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
var CoinSound, coinsound, EnemySound, wintertheme;
var RedThunder, RedThunderImage, ThunderSound;
var GetBack2;
var powerButton, arrow1, arrow2, arrow3, arrow4, arrow5, arrow_get_back;
var health_increaseButton;
var drop=[];
var snowball= [];
var snowballattack=[];
var home, playButton, skinChange, skin1, skin1image, skin1button;
var homesound, skin1sound; 
var storm, stormImage;
var enemystopper;
var homebg;
var hometext, hometextImage;
var redenemy, redenemyImage, redenemybullet;
var cardTrades, card1button , card2button,card2use, card3button,card3use,card4button, card4use,  dailyCard, card5button, card5use;
var runnerScore, seconds;
var card1unlock, card2unlock, card3unlock, card4unlock, card5unlock;
var inventory;
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
wintertheme=loadImage('Snowbg.jpg')
RedThunderImage= loadImage('redthunder.png')
ThunderSound=loadSound('thundersound.wav')
skin1image=loadImage('skin1_red.png')
homesound= loadSound('homesound.wav')
skin1sound= loadSound('skin1.wav')
stormImage= loadImage('storm.png')
homebg= loadImage('homebg.png')
hometextImage= loadImage('title.png')
redenemyImage= loadImage('Redenemy.png')
}
function setup() {
createCanvas(windowWidth, windowHeight);

for (var i=0; i<200; i++){
drop[i]= new Drop()
}
for (var i=0; i<100; i++){
snowball[i]= new Snowball()
}

/*for (var i=0; i<3; i++){
  snowballattack[i]= new Snowballattack()
  }*/

//homestate and its skins
hometext= createSprite(width/1.05-width/2, height/2-300)
hometext.addImage('hometext', hometextImage)
hometext.scale=2
hometext.visible=false

home=createImg('usehome.png')
home.position(width/.75-width/2, height/2-480)
home.size(150,130)
home.hide()

playButton=createImg('useplay.png')
playButton.position(width/1.15-width/2,height/2+150)
playButton.size(300,250)
playButton.hide()

skinChange=createImg('characters.png')
skinChange.position(width/.75-width/2, height/2-480)
skinChange.size(150,400)
skinChange.hide()

skin1button=createImg('skin1_red.png')
skin1button.position(width/1.2-width/2, height/2)
skin1button.size(210,170)
skin1button.hide()

skin1=createSprite(width/1.5-width/2, height/2-150)
skin1.addImage('redforce', skin1image)
skin1.visible=false

allow= createImg('agree.png')
allow.position(width/1.15-width/2,height/2+150)
allow.size(300,150)

powerButton= createImg('usepower.png')
powerButton.position(width/1.7-width/2, height/2-455)
powerButton.size(100,90)
powerButton.hide()

health_increaseButton=  createImg('usehealth.png')
health_increaseButton.position(width/1.3-width/2, height/2-455)
health_increaseButton.size(110,90)
health_increaseButton.hide()

inventory=createImg('useinventory.png')
inventory.position(width/1.61-width/2, height/2-455)
inventory.size(80,80)
inventory.hide()

cardTrades= createImg('usecardbutton.png')
cardTrades.position(width/.745-width/2, height/2-50)
cardTrades.hide()

//cards for getting
card1button= createImg('usecard1.png')
card1button.position(width/1.5-width/2, height/2-250)
card1button.size(105,170)
card1button.hide()

card2button= createImg('usecard2.png')
card2button.position(width/1.2-width/2, height/2-250)
card2button.size(105,170)
card2button.hide()

card3button= createImg('usecard3.png')
card3button.position(width/.97-width/2, height/2-250)
card3button.size(105,170)
card3button.hide()

card4button= createImg('usecard4.png')
card4button.position(width/.83-width/2, height/2-250)
card4button.size(105,170)
card4button.hide()




// cards in the inventory
dailyCard=createImg('weekchellange.png')
dailyCard.position(width/.745-width/2, height/2+200)
dailyCard.hide()

card2use= createImg('usecard2.png')
card2use.position(width/1.5-width/2, height/2-200)
card2use.size(105,170)
card2use.hide()



card3use= createImg('usecard3.png')
card3use.position(width/1.2-width/2, height/2-200)
card3use.size(105,170)
card3use.hide()

card4use= createImg('usecard4.png')
card4use.position(width/.98-width/2, height/2-200)
card4use.size(105,170)
card4use.hide()


storm= createSprite(width/1.25-width/2, height/2- 10000)
storm.addImage('lightingstorm', stormImage)
storm.scale=2
storm.visible=false;

Platform = createSprite(width/1-width/2, height/2+770)
Platform.addImage("platformImg", PlatformImage)
Platform.scale=8
Platform.visible=false

Rightplayer=createSprite(width/1.5-width/2, height/2+250)
Rightplayer.addImage("rplayer", RightplayerImage)
RightplayerImage.scale=1
Rightplayer.visible=false

collider=createSprite(width/1.15-width/2, height/2+327, 10000,10)
collider.visible=false

GetBack=createSprite(width/1.15-width/2, height/2-500, 10000,10)
GetBack.visible=false

GetBack2=createSprite(width/1.15-width/2, height/2+500, 10000,10)
GetBack2.visible=false

RedThunder=createSprite(width/.75-width/2, height/2-340)
RedThunder.addImage('redthunder', RedThunderImage)
RedThunderImage.scale=.25
RedThunder.visible=false

enemystopper= createSprite(width/1.7-width/2, height/2, 2,1000)
enemystopper.visible=false

arrow1= createSprite(width/2.2-width/2, height/2, 100,10)
arrow1.shapeColor='blue'

arrow2= createSprite(width/2.2-width/2, height/2-120, 100,10)
arrow2.shapeColor='blue'

arrow3= createSprite(width/2.2-width/2, height/2-240, 100,10)
arrow3.shapeColor='blue'

arrow4= createSprite(width/2.2-width/2, height/2+150, 100,10)
arrow4.shapeColor='blue'

arrow_get_back= createSprite(width/.1-width/2, height/2, 50,1000)




score=5
health=30
start=300
kills=0
card1unlock=0
runnerScore=0
seconds=300
card2unlock=0
card3unlock=0
}

function draw() {
background('green')



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
if(frameCount %150 === 0){
  Smallblock=createSprite(width/.7-width/2, height/2+280)
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
if(frameCount %300 ===0){
  redenemy= createSprite(width/.7-width/2, height/2)
  redenemy.addImage('redenemy', redenemyImage)
  redenemy.scale=2
  redenemy.visible= false
  redenemy.velocityX=-6
  redenemy.lifetime=1000
  
  redenemy.y= Math.round(random(height/2+300, height/2-300))
}
if(frameCount %298 ===0){
  redenemybullet= createSprite(width/.7-width/2, height/2, 30,15)
  redenemybullet.shapeColor= 'red'
  redenemybullet.visible=false
  redenemybullet.velocityX=-15
  redenemybullet.lifetime= 1000

}



allow.mousePressed(()=>{
gameState="home"

})





if(gameState==="game"){
  background(Background)
  allow.hide()
  powerButton.show()
  health_increaseButton.show()
  home.show()
  homesound.stop()
  storm.y=height/2-10000
  hometext.visible=false
  redenemy.visible=true
  redenemybullet.visible=true
  dailyCard.hide()
  redenemybullet.y= redenemy.y
  
  runnerScore= runnerScore+1

  



  

  
  if(touches.length>0|| keyDown('space')){
    Rightplayer.velocityY=-10
    touches=[]
      }

  Platform.visible=true
  Rightplayer.visible=true
Smallblock.visible=true
GetBack.visible= false
Playerbullet.visible=true
Greenenemy.visible=true
coin.visible=true

if(Playerbullet.isTouching(Greenenemy)){
  Greenenemy.destroy()
  EnemySound.play()
  kills=kills+1
}
if(Greenenemy.isTouching(Rightplayer)||Greenenemy.isTouching(skin1)){
  health=health-7
  Greenenemy.destroy()
}

  if(Rightplayer.isTouching(Smallblock)||skin1.isTouching(Smallblock)){
  background('red')
  // make health go down a bit
  health=health-5
  Smallblock.destroy()
  }

  if(Rightplayer.isTouching(coin)||skin1.isTouching(coin)){
  score=score+2
  CoinSound.play()
  coin.destroy()
  }
  if(RedThunder.isTouching(GetBack2)){
    RedThunder.visible=false
    RedThunder.x= width/.75-width/2
    RedThunder.y=height/2-340
    RedThunder.velocityX=0
    RedThunder.velocityY=0
  }
  if(Rightplayer.isTouching(GetBack)){
    Rightplayer.bounceOff(GetBack)
  }

  health_increaseButton.mousePressed(()=>{
    health=health+15      
    score=score-2
  })

  powerButton.mousePressed(()=>{

    arrow1.velocityX=25;
    arrow2.velocityX=25;
    arrow3.velocityX=25;
    arrow4.velocityX=25;
    

  })
// codes for enemies and its bulelts
  if(redenemy.isTouching(Rightplayer)){
    health= health-10
    redenemy.destroy()
  }

  if(Playerbullet.isTouching(redenemy)){
    redenemy.destroy()
    EnemySound.play()
    kills= kills+1
    score= score+5
  }
  if(arrow1.isTouching(redenemy)||arrow2.isTouching(redenemy)||arrow3.isTouching(redenemy)||arrow4.isTouching(redenemy)){
    redenemy.destroy()
    EnemySound.play()
  }

  if(redenemy.isTouching(enemystopper)){
    redenemy.destroy()
  }

  if(redenemybullet.isTouching(Rightplayer)){
    health= health-5
    redenemybullet.destroy()
    redenemy.destroy()
  }
//gamestate of winter theme

if(runnerScore>100&& runnerScore<400){
background(0,0,35,25); 
background(wintertheme)
for(var i=0; i<100; i++){
  snowball[i].show()
  snowball[i].update()

}
/*for (var i=0; i<3; i++){
  snowballattack[i].show()
  snowballattack[i].update()
  }*/
Platform.visible=true;

}
if(runnerScore>560&& runnerScore<800){
background('black')
for (var i=0; i<200; i++){
  drop[i].show()
  drop[i].update()
}
}
if(runnerScore>900&& runnerScore<1200){
background(0,0,35,25); 
background(wintertheme)
for(var i=0; i<100; i++){
  snowball[i].show()
  snowball[i].update()

}


}
if(runnerScore>1400&& runnerScore<1700){
background('black')
for (var i=0; i<200; i++){
  drop[i].show()
  drop[i].update()
}
}

if(runnerScore>350&& runnerScore<357){
  storm.visible=true
  storm.y= height/2
}



if(runnerScore>1200&& runnerScore<1207){
  storm.visible=true
  storm.y= height/2
}



if(runnerScore>1700&& runnerScore<1707){
  storm.visible=true
  storm.y= height/2
}

if(runnerScore>2100&& runnerScore<2107){
  storm.visible=true
  storm.y= height/2
}

if(storm.isTouching(Rightplayer)|| storm.isTouching(skin1)){
  
  health=health=1
}
if(Greenenemy.isTouching(enemystopper)){
  Greenenemy.destroy()
}
if(runnerScore>2600&& runnerScore<3100){
background(0,0,35,25); 
background(wintertheme)
for(var i=0; i<100; i++){
  snowball[i].show()
  snowball[i].update()

}

}
if(runnerScore>1900&& runnerScore<2300){
background('black')
for (var i=0; i<200; i++){
  drop[i].show()
  drop[i].update()
}
}

if(health<0){
gameState='home'
powerButton.hide()
health_increaseButton.hide()

Greenenemy.visible=false;

Playerbullet.visible=false;

Smallblock.visible=false

score=5
health=30
runnerScore=0
}

if(score<0){
  gameState='home'
  score=5

  Greenenemy.visible=false;

Playerbullet.visible=false;

Smallblock.visible=false;
health=30
runnerScore=0
}

if(arrow1.isTouching(arrow_get_back)){

arrow1.x= width/2.2-width/2
arrow1.velocityX=0


}
if(arrow2.isTouching(arrow_get_back)){
arrow2.x= width/2.2-width/2
arrow2.velocityX=0


}  
if(arrow3.isTouching(arrow_get_back)){
arrow3.x= width/2.2-width/2
arrow3.velocityX=0


}  
if(arrow4.isTouching(arrow_get_back)){
arrow4.x= width/2.2-width/2
arrow4.velocityX=0


}    






if(arrow1.isTouching(RedThunder)||arrow2.isTouching(RedThunder)||arrow3.isTouching(RedThunder)||arrow4.isTouching(RedThunder)){
RedThunder.visible=false
RedThunder.x= width/.75-width/2
RedThunder.y=height/2-340
RedThunder.velocityX=0
RedThunder.velocityY=0
score=score+2
}

if(arrow1.isTouching(Greenenemy)|| arrow2.isTouching(Greenenemy)|| arrow3.isTouching(Greenenemy)|| arrow4.isTouching(Greenenemy)){
Greenenemy.destroy()
EnemySound.play()
kills=kills+1

}
  // changing levels 
  if(runnerScore>70){
    Greenenemy.velocityX=-10.5
    coin.velocityX=-11
    Smallblock.velocityX=-8
    
  if(runnerScore>200){
    powerButton.show()
  }
  }
  if(runnerScore>360){
    Greenenemy.velocityX=-12
    coin.velocityX=-12
    Smallblock.velocityX=-8.5
  
  }
  if(runnerScore>600){
    Greenenemy.velocityX=-14
    coin.velocityX=-14
    Smallblock.velocityX=-9
  
  }

  if(runnerScore>900){
    Greenenemy.velocityX=-14.5
    coin.velocityX=-14
    Smallblock.velocityX=-9
  
  }
  if(runnerScore>1200){
    Greenenemy.velocityX=-15.5
    coin.velocityX=-14
    Smallblock.velocityX=-9
  
  }
  if(runnerScore>1400){
    Greenenemy.velocityX=-16
    coin.velocityX=-14
    Smallblock.velocityX=-9
  
  }

  if(runnerScore>100 && runnerScore<150){
    ThunderSound.play()
    RedThunder.velocityX=-27
    RedThunder.velocityY=10
    RedThunder.visible=true
  }

  if(runnerScore>450 && runnerScore<480){
    ThunderSound.play()
    RedThunder.velocityX=-27
    RedThunder.velocityY=10
    RedThunder.visible=true
  }
  if(runnerScore>600 && runnerScore<620){
    ThunderSound.play()
    RedThunder.velocityX=-27
    RedThunder.velocityY=10
    RedThunder.visible=true
  }
  if(runnerScore>930 && runnerScore<950){
    ThunderSound.play()
    RedThunder.velocityX=-27
    RedThunder.velocityY=10
    RedThunder.visible=true
  }
  if(runnerScore>1200 && runnerScore<1220){
    ThunderSound.play()
    RedThunder.velocityX=-27
    RedThunder.velocityY=10
    RedThunder.visible=true
  }

  if(runnerScore>1500 && runnerScore<1520){
    ThunderSound.play()
    RedThunder.velocityX=-27
    RedThunder.velocityY=10
    RedThunder.visible=true
  }

  if(runnerScore>1900 && runnerScore<1920){
    ThunderSound.play()
    RedThunder.velocityX=-27
    RedThunder.velocityY=10
    RedThunder.visible=true
  }

  //skins attach to rightplayer(default player)
  skin1.y=Rightplayer.y-10
  
  

  if(RedThunder.isTouching(Rightplayer)){
    health=health-1
  }

  

/*  if(Playerbullet.isTouching(Smallblock)){
  Smallblock.destroy()
}*/

textSize(40)
fill('#cc6600')
text('Coins: '+score, width/1.6-width/2, height/2-290)
text('Kills: '+kills, width/1.6-width/2, height/2-330)
fill('red')
text('Health: '+health, width/.8-width/2, height/2-280)
//make player have some gravity to floor and collide with the collider.
Rightplayer.velocityY=Rightplayer.velocityY+.5;

  



Rightplayer.debug=false




Rightplayer.collide(collider)


home.mousePressed(()=>{
  gameState='home'
  Rightplayer.visible=false
  skin1.visible=false;
  skin1button.hide()
  homesound.play()
  Greenenemy.visible=false;
  Smallblock.visible=false;
  Playerbullet.visible=false;
  coin.visible=false
  redenemy.visible=false;
  card1button.hide()
  card2button.hide()

  card2use.hide()
  card3button.hide()
  card3use.hide()
  card4button.hide()
  card4use.hide()
})




}

if(gameState==='home'){
  background(homebg)
  fill('green')
  textSize(30)


 hometext.visible=true
  health_increaseButton.hide()
  powerButton.hide()
  home.hide()
  Platform.visible=false
  Rightplayer.visible=false
  redenemy.visible=false;
  
  

  playButton.show()
  skinChange.show()
  allow.hide()
  inventory.show()

  inventory.mousePressed(()=>{
    gameState='cardsInventory'
    inventory.hide()
  })
  if(card1unlock>0){
    dailyCard.show()
  }
  playButton.mousePressed(()=>{
    gameState='game'

    playButton.hide()
    skinChange.hide()
    cardTrades.hide()
    skin1.visible=false;
    skin1button.hide()
    Rightplayer.x=width/1.5-width/2
    Rightplayer.y=height/2

    //health=100

    dailyCard.hide()
    inventory.hide()

    runnerScore=0

    

  })


  skinChange.mousePressed(()=>{
    gameState='skins'
    Rightplayer.visible=false
    home.show()
    
  skin1button.x= skin1.x
  skin1button.y= skin1.y+30

  skinChange.hide()
  dailyCard.hide()
  inventory.hide()
  })

  dailyCard.mousePressed(()=>{
    gameState='challenge'
    skinChange.hide()
    hometext.visible=false;
    dailyCard.hide()
    playButton.hide()
    cardTrades.hide()
    inventory.hide()

    Platform.visible=true
    Rightplayer.visible=true
  Smallblock.visible=true
  GetBack.visible= false
  Playerbullet.visible=true
  Greenenemy.visible=true


  Rightplayer.x=width/1.5-width/2
  Rightplayer.y=height/2

  health=100

  seconds=600

  
  })

  if(score>10){
    cardTrades.show()
   
  }

  cardTrades.mousePressed(()=>{
    gameState='cards'
    dailyCard.hide()
    inventory.hide()

 

  })
 

}
if(gameState==='skins'){
  background('green')
  fill('blue')
  textSize(50)
  text('Coins: '+score, width/1.6-width/2, height/2-300)
  fill('white')
  textSize(40)
  text('Each Character will be 25 coins', width/1.3-width/2, height/2-490)
  textSize(20)
  text('Weekly characters!', width/1.3-width/2, height/2-450)
  
  skin1.visible=false
  skin1.scale= 2
  playButton.hide()
  Rightplayer.visible=false;
  skin1button.show()
  hometext.visible=false
  redenemy.visible=false;
  dailyCard.hide()

  skin1button.x= skin1.x
  skin1button.y= skin1.y+30

  home.mousePressed(()=>{
    gameState='home'
    skin1.visible=false;
    skin1button.hide()
  })

  skin1button.mousePressed(()=>{
  
    gameState='game'
    skinChange.hide()
    skin1button.hide()
    cardTrades.hide()
    Rightplayer.visible=false
    skin1sound.play()
    skin1.visible=true

    skin1.y=Rightplayer.y-10
    skin1.x=Rightplayer.x
    Rightplayer.x=width/2.4-width/2
    score=score-25
    skin1.scale=1


    
  
  })



}

if(gameState==='cards'){
  background('pink')
  hometext.visible=false;
  skinChange.hide()
  playButton.hide()
  home.show()
  cardTrades.hide()
  card1button.show()
  card2button.show()
  card3button.show()
  card4button.show()

  dailyCard.hide()

  card1button.mousePressed(()=>{
    card1unlock=1
    score= score-20

    
  })
  if(score<0){
    card1unlock=0
  }

  if(card1unlock>0){
    fill('green')
    textSize(13)
    text('Unlocked', width/1.47- width/2, height/2-260)
    
          
  }

  card2button.mousePressed(()=>{
    card2unlock=1;
    score=score-25
  })


  if(score<0){
    card2unlock=0
  }
  if(card2unlock>0){
    fill('green')
    textSize(13)
    text('Unlocked',  width/1.18- width/2, height/2-260)
  }

  card3button.mousePressed(()=>{
    card3unlock=1
    score=score-35
  })
  if(score<0){
    card3unlock=0
  }
  if(card3unlock>0){
    fill('green')
    textSize(13)
    text('Unlocked',  width/.96- width/2, height/2-260)
  }

  card4button.mousePressed(()=>{
    card4unlock=1
    score=score-35
  })

  if(score<0){
    card4unlock=0
  }
  if(card4unlock>0){
    fill('green')
    textSize(13)
    text('Unlocked',  width/.82- width/2, height/2-260)
  }


  fill('Blue')
  textSize(30)
  text('Coins: '+score, width/1.6-width/2, height/2+250)


}

if(gameState==='challenge'){
  background('black')

  textSize(40)
  text('Health: '+health, width/.8-width/2, height/2-280)
  text('Time Left: '+ seconds, width/.8-width/2, height/2-230)
  Rightplayer.bounceOff(GetBack)
  for (var i=0; i<200; i++){
    drop[i].show()
    drop[i].update()
  }

  for(var i=0; i<100; i++){
    snowball[i].show()
    snowball[i].update()
  
  }

  Rightplayer.velocityY= Rightplayer.velocityY+.9

  Rightplayer.collide(collider)

  if(touches.length>0|| keyDown('space')){
    Rightplayer.velocityY=-10
    touches=[]
      }

      Platform.visible=true
      Rightplayer.visible=true
    Smallblock.visible=true
    GetBack.visible= false
    Playerbullet.visible=true
    Greenenemy.visible=true
    RedThunder.visible=true
    homesound.stop()
    
    home.show()
    dailyCard.hide()
    redenemy.visible=true;
    redenemybullet.visible=true

Smallblock.velocityX=-15
Greenenemy.velocityX=-20
redenemy.velocityX=-22
redenemybullet.velocityX=-28
RedThunder.velocityX=-27
RedThunder.velocityY=10

 redenemybullet.y= redenemy.y
 seconds=seconds-1

    if(Playerbullet.isTouching(Greenenemy)){
      Greenenemy.destroy()
      EnemySound.play()
      
    }
    if(Greenenemy.isTouching(Rightplayer)||Greenenemy.isTouching(skin1)){
      
      Greenenemy.destroy()
      health=health-10
    }
    
      if(Rightplayer.isTouching(Smallblock)||skin1.isTouching(Smallblock)){
      background('red')
     
      
      Smallblock.destroy()
      health=health-15
      }
    


      if(redenemy.isTouching(Rightplayer)){
        
        redenemy.destroy()

        health=health-20
      }
    
      if(Playerbullet.isTouching(redenemy)){
        redenemy.destroy()
        EnemySound.play()
       
      }

      if(redenemy.isTouching(enemystopper)){
        redenemy.destroy()
      }
    
      if(redenemybullet.isTouching(Rightplayer)){
        
        redenemybullet.destroy()
        redenemy.destroy()

        health=health-20
      }

      if(RedThunder.isTouching(GetBack2)){
        RedThunder.visible=false
        RedThunder.x= width/.75-width/2
        RedThunder.y=height/2-340
        RedThunder.velocityX=0
        RedThunder.velocityY=0
      }

      if(RedThunder.isTouching(Rightplayer)){
        health=health-2
      }

      if(seconds<0&& health>0){
        gameState='home'

        score= score+25

        dailyCard.hide()
        

      }



if(health<0){
  gameState='home'
  dailyCard.hide()
}


      





}

if(gameState==='cardsInventory'){
  background('yellow')
 

  hometext.visible=false;
  dailyCard.hide()
  cardTrades.hide()
  skinChange.hide()
  home.show()
  playButton.hide()
  storm.visible=false;

    if(card2unlock>0){
      card2use.show()
      fill('green')
      textSize(13)
      text('Card for Use',  width/1.47- width/2, height/2-220)
    }

    card2use.mousePressed(()=>{
      card2use.hide()
      card3use.hide()
      card4use.hide()
      gameState='game'
      score=score+10
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

    })

    if(card3unlock>0){
      card3use.show()
      fill('green')
      textSize(13)
      text('Card for Use',  width/1.19- width/2, height/2-210)
      
    }

    card3use.mousePressed(()=>{
      card2use.hide()
      card3use.hide()
      card4use.hide()
      gameState='game'
      score=score+15
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

    })

    if(card4unlock>0){
      card4use.show()
      fill('green')
      textSize(13)
text('Card for Use',  width/.97- width/2, height/2-210)
    }

    card4use.mousePressed(()=>{
      card2use.hide()
      card3use.hide()
      card4use.hide()
      gameState='game'
      score=score+20
      health=health+15
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

    })



    home.mousePressed(()=>{
      gameState='home'
      card2use.hide()
      card3use.hide()
      card4use.hide()
    })

    

}
drawSprites();
  
}
// NOt going to use the Galaxy function, instead will be using the snowball function
function Galaxy(){

background(0,0,35,25); 
var galaxy = { 
  color:('white'),
  locationX : random(width),
  locationY : random(height),
  size : random(25,30),



}
ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);

  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);

}

function Drop(){
this.x=random(0,width);
this.y=random(0,-height);

this.show= function(){
  noStroke()
  fill(255);
  ellipse(this.x, this.y, 3,15);
}

this.update=function(){
  this.y=this.y+20

  if(this.y>height){
    this.y=random(0,-height);
  }
}

}
function Snowball(){
this.x= random(0,width)
this.y= random(0,-height)
this.w= random(10, 16)
this.h= random(10,16)

this.show= function(){
  noStroke()
  fill(255)
  ellipse(this.x, this.y, this.w, this.h)
}
this.update= function(){
  this.y= this.y+20

  if(this.y>height){
    this.y=random(0,-height)
  }
}
}

/*function Snowballattack(){
  this.x=random(width/.5-width/2, width/.7-width/2)
  this.y= random(height/2+300, height/2-300)
  this.w= random(20,30)
  this.h= random(20,30)
  
  this.show= function(){
    noStroke()
    fill('white')
    ellipse(this.x, this.y, this.w, this.h)
  }
  this.update= function(){
    this.x=this.x-20

   if(this.x<width/1.7-width/2){
     this.x= random(width/.5-width/2, width/.7-width/2)
   }
  }
}*/


