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
var cardTrades, card1button, card2button, card3button;
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
home.position(width/.8-width/2, height/2-480)
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

cardTrades= createImg('usecardbutton.png')
cardTrades.position(width/.745-width/2, height/2)
cardTrades.hide()


card1button= createImg('usecard1.png')
card1button.position(width/1.4-width/2, height/2-200)
card1button.hide()


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

GetBack=createSprite(width/1.15-width/2, height/2-600, 10000,10)
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
health=100
start=300
kills=0
card1unlock=0
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

  redenemybullet.y= redenemy.y



  

  
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
    health= health-5
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
    health= health-1
    redenemybullet.destroy()
  }
//gamestate of winter theme

if(kills>0&& kills<5){
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
if(kills>8&&kills<14){
background('black')
for (var i=0; i<200; i++){
  drop[i].show()
  drop[i].update()
}
}
if(kills>15&& kills<19){
background(0,0,35,25); 
background(wintertheme)
for(var i=0; i<100; i++){
  snowball[i].show()
  snowball[i].update()

}


}
if(kills>20&&kills<28){
background('black')
for (var i=0; i<200; i++){
  drop[i].show()
  drop[i].update()
}
}

if(score>30&& score<33){
  storm.visible=true
  storm.y= height/2
}

if(score>50&& score<53){
  storm.visible=true
  storm.y= height/2
}

if(score>75&& score<78){
  storm.visible=true
  storm.y= height/2
}

if(storm.isTouching(Rightplayer)|| storm.isTouching(skin1)){
  health= health-.1
}
if(Greenenemy.isTouching(enemystopper)){
  Greenenemy.destroy()
}
if(kills>32&& kills<36){
background(0,0,35,25); 
background(wintertheme)
for(var i=0; i<100; i++){
  snowball[i].show()
  snowball[i].update()

}

}
if(kills>39&&kills<48){
background('black')
for (var i=0; i<200; i++){
  drop[i].show()
  drop[i].update()
}
}

if(health<0|| score<0){
gameState=null
Platform.destroy()
powerButton.hide()
health_increaseButton.hide()

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
  if(score>7){
    Greenenemy.velocityX=-10.5
    coin.velocityX=-11
    Smallblock.velocityX=-8
    
  if(score>1){
    powerButton.show()
  }
  }
  if(score>10){
    Greenenemy.velocityX=-12
    coin.velocityX=-12
    Smallblock.velocityX=-8.5
  
  }
  if(score>19){
    Greenenemy.velocityX=-14
    coin.velocityX=-14
    Smallblock.velocityX=-9
  
  }

  if(score>28){
    Greenenemy.velocityX=-14.5
    coin.velocityX=-14
    Smallblock.velocityX=-9
  
  }
  if(score>38){
    Greenenemy.velocityX=-15.5
    coin.velocityX=-14
    Smallblock.velocityX=-9
  
  }
  if(score>47){
    Greenenemy.velocityX=-16
    coin.velocityX=-14
    Smallblock.velocityX=-9
  
  }

  if(score>11 && score<13){
    ThunderSound.play()
    RedThunder.velocityX=-27
    RedThunder.velocityY=10
    RedThunder.visible=true
  }

  if(score>23 && score<25){
    ThunderSound.play()
    RedThunder.velocityX=-27
    RedThunder.velocityY=10
    RedThunder.visible=true
  }
  if(score>49 && score<51){
    ThunderSound.play()
    RedThunder.velocityX=-27
    RedThunder.velocityY=10
    RedThunder.visible=true
  }
  if(score>69 && score<71){
    ThunderSound.play()
    RedThunder.velocityX=-27
    RedThunder.velocityY=10
    RedThunder.visible=true
  }
  if(score>89 && score<91){
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

  playButton.mousePressed(()=>{
    gameState='game'

    playButton.hide()
    skinChange.hide()
    cardTrades.hide()
    skin1.visible=false;
    skin1button.hide()
    Rightplayer.x=width/1.5-width/2
    Rightplayer.y=height/2

  })
  skinChange.mousePressed(()=>{
    gameState='skins'
    Rightplayer.visible=false
    home.show()
    
  skin1button.x= skin1.x
  skin1button.y= skin1.y+30
  })

  if(score>10){
    cardTrades.show()
   
  }

  cardTrades.mousePressed(()=>{
    gameState='cards'
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

  card1button.mousePressed(()=>{
    card1unlock=1
    score= score-20

    
  })
  fill('Blue')
  textSize(30)
  text('Coins: '+score, width/1.6-width/2, height/2+250)

    if(card1unlock>0){
      fill('green')
      textSize(20)
      text('Unlocked', width/1.365- width/2, height/2-220)
    }
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


