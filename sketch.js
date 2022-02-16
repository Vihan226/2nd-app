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
var home, playButton, skinChange, skin1, skin1image, skin1button, skin2button, skin2, skin2image, skin3, skin3image;
var homesound, skin1sound; 
var storm, stormImage;
var enemystopper;
var homebg;
var hometext, hometextImage;
var redenemy, redenemyImage, redenemybullet;
var cardTrades, card1button , card2button,card2use, card3button,card3use,card4button, card4use,  dailyCard, card5button, card5use, card6button, card7button, card7use, card8button, card8use, card9use, card9button, card10use, card10button,card11use, card11button, card12use, card12button, card13use, card13button, card14use, card14button, card15use, card15button, card16use, card16button, card17use, card17button, card18use, card18button,card19use, card19button,card20button, card21button,card22use, card22button;
var runnerScore, seconds;
var card1unlock, card2unlock, card3unlock, card4unlock, card5unlock, redthunderpower1open, card6unlock, card7unlockm, redthunderhastouched, card8unlock, stormhastouched, card9unlock,card10unlock,card11unlock, card12unlock, card13unlock, card14unlock, card15unlock, card16unlock, card17unlock, card18unlock, card19unlock, card20unlock, card21unlock, card22unlock;
var inventory;
var snowman, snowmanImage, snowmanvisible;
var smb, smbImage;
var anotheredthunder;
var selectSound;
var card2stop,card3stop, card4stop, card5stop, card7stop,card8stop, card9stop, card10stop, card11stop, card12stop, card13stop, card14stop, card15stop, card16stop, card17stop, card18stop, card19stop,card21stop, card22stop ;
var database, coins, coinStock;
var settings, worldstats, roadmap, volumeon, volumeoff;
var roadmapbg;
var jumpingcard, firstachiev;
var bgset2, cardset2unlocked;
var coinsclaim;
var coinsnotlost;
var cardset3unlocked;
var enemyspeed;
var chhealth;
var code, submitButton;
var datar
var attack1, attack2, attacktext;
var startImage, showallow;
var cardeck1Image, cardeck1, cardeck2Image, cardeck2;
var deck4trading;
var slimeImage, slime, slimebounce1, slimebounce2, slimebounce3, slimesound;
var greenenemyanimation, greenenemyanimate;
var startcountingcard22, countingcard22, diecard22;
var rightplayeranimation, rightplayeranimationImage;
var playerbulletouch
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
skin1image=loadAnimation('skin1_red.png', 'skin1part2.png', 'skin1part3.png', 'skin1part4.png', 'skin1part3.png', 'skin1part2.png', 'skin1_red.png')
homesound= loadSound('homesound.wav')
skin1sound= loadSound('skin1.wav')
stormImage= loadImage('storm.png')
homebg= loadImage('homebg.png')
hometextImage= loadImage('title.png')
redenemyImage= loadImage('Redenemy.png')
skin2image= loadAnimation('skin2image.png', 'skin2part2.png' ,'skin2part3.png','skin2part4.png', 'skin2part3.png', 'skin2part2.png', 'skin2image.png' )
skin3image= loadAnimation('skin3image.png','skin3image.png', 'skin3part2.png','skin3part2.png' ,'skin3part3.png','skin3part3.png','skin3part4.png','skin3part4.png', 'skin3part3.png', 'skin3part2.png', 'skin3image.png' )
snowmanImage=loadImage('snowman.png')
smbImage= loadImage('snowball.png')
selectSound= loadSound('select.wav')
roadmapbg= loadImage('roadmapbg.png')
startImage= loadImage('starting.png')
cardeck1Image=loadImage('cardeck1img.png')
cardeck2Image=loadImage('cardeck2img.png')
slimeImage= loadImage('slime.png')
slimesound=loadSound('slimesound.wav')
greenenemyanimate=loadAnimation('greenenemyanimat1.png', 'greenenemyanimat2.png')
rightplayeranimationImage=loadImage('rightplayeranimation.png')
}
function setup() {
createCanvas(windowWidth, windowHeight);

database= firebase.database()
coinStock=database.ref('Coins');
coinStock.on("value",readStock);
textSize(15);

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
cardeck1=createImg('cardeck1img.png')
cardeck1.position(width/2-width/2, height/2-300)
cardeck1.size(windowWidth,590)
cardeck1.hide()

cardeck2=createImg('cardeck2img.png')
cardeck2.position(width/2-width/2, height/2+280)
cardeck2.size(windowWidth,590)
cardeck2.hide()

code= createInput('Type your code')
code.position(width/1.2-width/2, height/2)
code.hide()
submitButton= createButton('Submit')
submitButton.position(width/1.2-width/2, height/2+100)
submitButton.hide()


hometext= createSprite(width/1.05-width/2, height/2-300)
hometext.addImage('hometext', hometextImage)
hometext.scale=1.5
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
skin1button.position(width/1.3-width/2, height/2)
skin1button.size(150,140)
skin1button.hide()

skin2button=createImg('skin2image.png')
skin2button.position(width/1.07-width/2, height/2)
skin2button.size(100,150)
skin2button.hide()

skin3button=createImg('skin3part4.png')
skin3button.position(width/.9-width/2, height/2)
skin3button.size(140,170)
skin3button.hide()

skin1=createSprite(width/1.5-width/2, height/2-150)
skin1.addAnimation('redforce', skin1image)
skin1.visible=false

skin2=createSprite(width/1.5-width/2, height/2-150)
skin2.addAnimation('ghostimage', skin2image)
skin2.visible=false

skin3=createSprite(width/1.5-width/2, height/2-150)
skin3.addAnimation('flameimage', skin3image)
skin3.visible=false

allow= createImg('agree.png')
allow.position(width/1.15-width/2,height/2+150)
allow.size(300,150)
allow.hide()

powerButton= createImg('usepower.png')
powerButton.position(width/1.7-width/2, height/2-455)
powerButton.size(100,90)
powerButton.hide()

health_increaseButton=  createImg('usehealth.png')
health_increaseButton.position(width/1.4-width/2, height/2-455)
health_increaseButton.size(110,90)
health_increaseButton.hide()

inventory=createImg('useinventory.png')
inventory.position(width/1.64-width/2, height/2-455)
inventory.size(80,80)
inventory.hide()

settings=createImg('settings.png')
settings.position(width/1.67-width/2, height/2-340)
settings.size(110,80)
settings.hide()

deck4trading=createImg('deck4trading.png')
deck4trading.position(width/1.64-width/2, height/2-100)
deck4trading.size(100,140)
deck4trading.hide()

cardTrades= createImg('usecardbutton.png')
cardTrades.position(width/.745-width/2, height/2-50)
cardTrades.hide()

//cards for getting
card1button= createImg('usecard1.png')
card1button.position(width/1.52-width/2, height/2-250)
card1button.size(140,210)
card1button.hide()

card2button= createImg('usecard2.png')
card2button.position(width/1.2-width/2, height/2-250)
card2button.size(140,210)
card2button.hide()

card3button= createImg('usecard3.png')
card3button.position(width/.97-width/2, height/2-250)
card3button.size(140,210)
card3button.hide()

card4button= createImg('usecard4.png')
card4button.position(width/.83-width/2, height/2-249)
card4button.size(140,210)
card4button.hide()

card5button= createImg('usecard5.png')
card5button.position(width/1.53-width/2, height/2+40)
card5button.size(152,210)
card5button.hide()

card6button= createImg('usecard6.png')
card6button.position(width/.97-width/2, height/2+40)
card6button.size(152,210)
card6button.hide()

card7button= createImg('usecard7.png')
card7button.position(width/1.2-width/2, height/2+39)
card7button.size(158,220)
card7button.hide()

card8button= createImg('usecard8.png')
card8button.position(width/.83-width/2, height/2+40)
card8button.size(152,215)
card8button.hide()

card9button= createImg('usecard9.png')
card9button.position(width/1.535-width/2, height/2+340)
card9button.size(175,220)
card9button.hide()

card10button= createImg('usecard10.png')
card10button.position(width/1.22-width/2, height/2+317)
card10button.size(200,280)
card10button.hide()

card11button= createImg('usecard11.png')
card11button.position(width/.977-width/2, height/2+317)
card11button.size(190,245)
card11button.hide()

card12button= createImg('usecard12.png')
card12button.position(width/.836-width/2, height/2+317)
card12button.size(190,245)
card12button.hide()

card13button= createImg('usecard13.png')
card13button.position(width/1.548-width/2, height/2+630)
card13button.size(210,230)
card13button.hide()

card14button= createImg('usecard14.png')
card14button.position(width/1.207-width/2, height/2+630)
card14button.size(190,245)
card14button.hide()

card15button= createImg('usecard15.png')
card15button.position(width/.974-width/2, height/2+630)
card15button.size(190,245)
card15button.hide()

card16button= createImg('usecard16.png')
card16button.position(width/.833-width/2, height/2+630)
card16button.size(190,245)
card16button.hide()

card17button= createImg('usecard17.png')
card17button.position(width/1.53-width/2, height/2+940)
card17button.size(180,235)
card17button.hide()

card18button= createImg('usecard18.png')
card18button.position(width/1.207-width/2, height/2+915)
card18button.size(180,260)
card18button.hide()

card19button= createImg('usecard19.png')
card19button.position(width/.963-width/2, height/2+915)
card19button.size(150,240)
card19button.hide()

card20button= createImg('usecard20.png')
card20button.position(width/.824-width/2, height/2+915)
card20button.size(150,240)
card20button.hide()

card21button= createImg('usecard21.png')
card21button.position(width/1.515-width/2, height/2+1250)
card21button.size(160,230)
card21button.hide()

card22button= createImg('usecard22.png')
card22button.position(width/1.195-width/2, height/2+1250)
card22button.size(160,230)
card22button.hide()
// cards in the inventory
dailyCard=createImg('weekchellange.png')
dailyCard.position(width/.745-width/2, height/2+200)
dailyCard.hide()

card2use= createImg('usecard2.png')
card2use.position(width/1.52-width/2, height/2-200)
card2use.size(140,210)
card2use.hide()

card3use= createImg('usecard3.png')
card3use.position(width/1.2-width/2, height/2-200)
card3use.size(140,210)
card3use.hide()

card4use= createImg('usecard4.png')
card4use.position(width/.98-width/2, height/2-200)
card4use.size(140,210)
card4use.hide()

card5use= createImg('usecard5.png')
card5use.position(width/.85-width/2, height/2-200)
card5use.size(140,210)
card5use.hide()

card7use= createImg('usecard7.png')
card7use.position(width/1.523-width/2, height/2+50)
card7use.size(160,210)
card7use.hide()

card8use= createImg('usecard8.png')
card8use.position(width/1.2-width/2, height/2+50)
card8use.size(140,210)
card8use.hide()

card9use= createImg('usecard9.png')
card9use.position(width/.982-width/2, height/2+50)
card9use.size(155,210)
card9use.hide()

card10use= createImg('usecard10.png')
card10use.position(width/.86-width/2, height/2+37)
card10use.size(190,265)
card10use.hide()

card11use= createImg('usecard11.png')
card11use.position(width/1.534-width/2, height/2+340)
card11use.size(190,230)
card11use.hide()

card12use= createImg('usecard12.png')
card12use.position(width/1.21-width/2, height/2+342)
card12use.size(170,230)
card12use.hide()

card13use= createImg('usecard14.png')
card13use.position(width/.854-width/2, height/2+340)
card13use.size(170,230)
card13use.hide()

card14use= createImg('usecard13.png')
card14use.position(width/.985-width/2, height/2+340)
card14use.size(180,230)
card14use.hide()

card15use= createImg('usecard15.png')
card15use.position(width/1.52-width/2, height/2+640)
card15use.size(180,220)
card15use.hide()

card16use= createImg('usecard16.png')
card16use.position(width/1.2-width/2, height/2+640)
card16use.size(160,220)
card16use.hide()

card17use= createImg('usecard17.png')
card17use.position(width/.975-width/2, height/2+640)
card17use.size(150,200)
card17use.hide()

card18use= createImg('usecard18.png')
card18use.position(width/.854-width/2, height/2+620)
card18use.size(160,220)
card18use.hide()

card19use= createImg('usecard19.png')
card19use.position(width/1.5-width/2, height/2+920)
card19use.size(140,230)
card19use.hide()

card22use= createImg('usecard22.png')
card22use.position(width/1.195-width/2, height/2+920)
card22use.size(150,230)
card22use.hide()


// all the stuff of settings


worldstats=createImg('worldstats.png')
worldstats.position(width/1.13-width/2, height/2-170)
worldstats.size(200,200)
worldstats.hide()

roadmap=createImg('roadmap.png')
roadmap.position(width/1.13-width/2, height/2+150)
roadmap.size(200,200)
roadmap.hide()

volumeoff=createImg('volumeoff.png')
volumeoff.position(width/1-width/2, height/2-390)
volumeoff.size(200,130)
volumeoff.hide()

volumeon=createImg('volumeon.png')
volumeon.position(width/1.3-width/2, height/2-390)
volumeon.size(200,130)
volumeon.hide()



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

rightplayeranimation=createSprite(width/1.515-width/2, height/2+250)
rightplayeranimation.addImage("rplayergunanimation", rightplayeranimationImage)
rightplayeranimation.scale=.9
rightplayeranimation.visible=false

collider=createSprite(width/1.15-width/2, height/2+327, 10000,10)
collider.visible=false

GetBack=createSprite(width/1.15-width/2, height/2-300, 10000,10)
GetBack.visible=false

GetBack2=createSprite(width/1.15-width/2, height/2+500, 10000,10)
GetBack2.visible=false

RedThunder=createSprite(width/.75-width/2, height/2-340)
RedThunder.addImage('redthunder', RedThunderImage)
RedThunderImage.scale=.25
RedThunder.visible=false

anotheredthunder=createSprite(width/.75-width/2, height/2-340)
anotheredthunder.addImage('anotherRedThunder', RedThunderImage)
anotheredthunder.scale=1
anotheredthunder.visible=false

enemystopper= createSprite(width/1.7-width/2, height/2, 2,1000)
enemystopper.visible=false

arrow1= createSprite(width/2.2-width/2, height/2, 100,10)
arrow1.shapeColor='blue'

arrow2= createSprite(width/2.2-width/2, height/2-120, 100,10)
arrow2.shapeColor='blue'

arrow3= createSprite(width/2.2-width/2, height/2-240, 100,10)
arrow3.shapeColor='blue'

arrow4= createSprite(width/2.2-width/2, height/2+200, 100,10)
arrow4.shapeColor='blue'

arrow_get_back= createSprite(width/.1-width/2, height/2, 50,1000)
arrow_get_back.visible=false

snowman= createSprite(width/.75-width/2, height/2+200)
snowman.addImage('snowmanenemy', snowmanImage)
snowman.scale=.4
snowman.visible=false

slimebounce1= createSprite(width/.78-width/2, height/2+350, 100,100)
slimebounce1.visible=false
slimebounce2=createSprite(width/.8-width/2, height/2+100, 200,10)
slimebounce2.visible=false
slimebounce3=createSprite(width/1-width/2, height/2, 200,10)
slimebounce3.visible=false
slime= createSprite(width/.5-width/2, height/2+300)
slime.addImage('thisisslime', slimeImage)
slime.scale=.3

greenenemyanimation=createSprite(width/1-width/2, height/2)
greenenemyanimation.addAnimation('aniamtionofgreenenemy', greenenemyanimate)
greenenemyanimation.scale=4
greenenemyanimation.visible=false

diecard22=createSprite(width/2.5-width/2, height/2, 10,30000)
diecard22.visible=false


playerbulletouch=createSprite(width/1.3-width/2, height/2, 20,30000)
playerbulletouch.visible=false
score=5
health=30
start=300
kills=0
card1unlock=0
runnerScore=0
seconds=300
card2unlock=0
card3unlock=0
redthunderpower1open=0
card6unlock=0
card7unlock=0
card8unlock=0
card9unlock=0
card10unlock=0
card11unlock=0
card12unlock=0
card13unlock=0
card14unlock=0
card15unlock=0
card16unlock=0
card17unlock=0
card18unlock=0
card19unlock=0
card20unlock=0
card21unlock=0
card22unlock=0
redthunderhastouched=0
stormhastouched=0
card2stop=0
card3stop=0
card4stop=0
card5stop=0
card7stop=0
card8stop=0
card9stop=0
card10stop=0
card11stop=0
card12stop=0
card13stop=0
card14stop=0
card15stop=0
card16stop=0
card18stop=0
card19stop=0
card21stop=0
card22stop=0
jumpingcard=0
cardset2unlocked=0
cardset3unlocked=0
coinsnotlost=0
enemyspeed=0
chhealth=0
datar=0
attacktext=0
showallow=0
startcountingcard22=0
countingcard22=0
}

function draw() {
background(startImage)
showallow=showallow+1


  //add styles here


// this is question 1 from the game
if(showallow>80){
  background('green')
textSize(30)
fill("red")
text(" Shorun",width/1.25-width/2,height/2-200)
text("Start in: "+start, width/4-width/2, height/2-300)

textSize(20)
fill("black")
text("For policies this is an official game built by Vihan Seth", width/1.25-width/2, height/2-170)
text("with a web viewer. This includes shooting, and it is built for 3+ ages.", width/1.25-width/2, height/2-140)
text("Press- Agree and Continue to Play when it says Start!", width/1.25-width/2, height/2-110)
allow.show()
}
//sprite

start= start-1

if(start<0){
  textSize(100)
  fill('blue')
  text('Start', width/1.14-width/2, height/2+50)
}
if(frameCount %200 === 0){
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
  coin.y=Math.round(random(height/2+250, height/2-550))

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

if(frameCount %150===0){
  smb= createSprite(width/.75-width/2, height/2+10000)
  smb.addImage('snowball', smbImage)
  smb.shapeColor= 'white'
  smb.visible=true
  smb.scale=.2
  smb.velocityX=-15
  smb.lifetime= 1000
}
// height/2-150
if(frameCount %150===0){
  attack1= createSprite(width/.75-width/2, height/2+10000, 70,15)
  attack1.shapeColor= 'white'
  attack1.visible=true

  attack1.velocityX=-25
  attack1.lifetime= 1000
} 
// height/2+200
if(frameCount %220===0){
  attack2= createSprite(width/.75-width/2, height/2+10000, 80,20)
  attack2.shapeColor= 'white'
  attack2.visible=true

  attack2.velocityX=-25
  attack2.lifetime= 1000
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
  rightplayeranimation.y= Rightplayer.y
 
  rightplayeranimation.visible=false
  // card22 poison codes
  if(Playerbullet.isTouching(playerbulletouch)){
    rightplayeranimation.visible=true
    Rightplayer.x=width/2.5-width/2
  }
  else{
    Rightplayer.x= width/1.5-width/2
  }

  if(startcountingcard22>0){
    countingcard22=countingcard22+1
  }
  if(countingcard22>1&&countingcard22<501){
    diecard22.x= width/1-width/2
  }
  if(Greenenemy.isTouching(diecard22)&&startcountingcard22>0){
    Greenenemy.destroy()
    score=score+5
  }
  if(redenemy.isTouching(diecard22)&&startcountingcard22>0){
    redenemy.destroy()
    score=score+10
  }
  
  if(attack1.isTouching(diecard22)&&startcountingcard22>0){
    attack1.destroy()
    score=score+10
  }
  if(attack2.isTouching(diecard22)&&startcountingcard22>0){
    attack2.destroy()
    score=score+10
  }
  if(smb.isTouching(diecard22)&&startcountingcard22>0){
    smb.destroy()
    score=score+10
  }
  if(slime.isTouching(diecard22)&&startcountingcard22>0){
   score=score+5

    
    slime.x=width/.3-width/2
    slime.y= height/2+300

    slime.velocityY=0
  }


  if(countingcard22>502){
    startcountingcard22=0
    diecard22.x=width/2.5-width/2
    countingcard22=0
  }
  slime.velocityX=-10

  greenenemyanimation.x= Greenenemy.x
  greenenemyanimation.y= Greenenemy.y
  // slimes if statements

  if(slime.isTouching(slimebounce1)){
    slime.velocityX=-17
    slime.velocityY=-10
  }

  if(slime.isTouching(slimebounce2)){
    slime.bounceOff(slimebounce2)
  }
  if(slime.isTouching(collider)){
    slime.bounceOff(collider)
    slimesound.play()
  }
  if(slime.bounceOff(slimebounce3)){
    slime.bounceOff(slimebounce3)
  }
  if(slime.isTouching(Rightplayer)){
    health= health-3

    
    slime.x=width/.3-width/2
    slime.y= height/2+300

    slime.velocityY=0
  }

  if(slime.isTouching(enemystopper)){
    slime.x=width/.3-width/2
    slime.y= height/2+300

    slime.velocityY=0
  }

  runnerScore= runnerScore+1
  deck4trading.hide()
datar=datar+1
  if(enemyspeed>0){
    Greenenemy.velocityX=-15
    redenemy.velocityX=-9
  }
if(score>24){
  firstachiev=1
}

if(redthunderhastouched>0&& RedThunder.isTouching(Rightplayer)||redthunderhastouched>0&& RedThunder.isTouching(skin1)||redthunderhastouched>0&& RedThunder.isTouching(skin2)||redthunderhastouched>0&& RedThunder.isTouching(skin3)){
  RedThunder.x= width/.75-width/2
  RedThunder.y=height/2-340

  health=health-1
}
if(stormhastouched>0&& storm.isTouching(Rightplayer)){
storm.destroy()
health=health-20
}

if(jumpingcard>0&&touches.length>0|| jumpingcard>0&&keyDown('space')){
  Rightplayer.velocityY=-15
  touches=[]
}

if(jumpingcard>1&&touches.length>0|| jumpingcard>1&&keyDown('space')){
  Rightplayer.velocityY=-20
  touches=[]
}
if(jumpingcard>2&&touches.length>0|| jumpingcard>2&&keyDown('space')){
  Rightplayer.velocityY=-22
  touches=[]
}
  

  
  if(touches.length>0&& jumpingcard<1|| keyDown('space')&&jumpingcard<1){
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

  greenenemyanimation.visible=true
}
else{
  greenenemyanimation.visible=false
}

if(Greenenemy.isTouching(Rightplayer)||Greenenemy.isTouching(skin1)||Greenenemy.isTouching(skin2)||Greenenemy.isTouching(skin3)){
  health=health-7
  Greenenemy.destroy()
}

  if(Rightplayer.isTouching(Smallblock)||skin1.isTouching(Smallblock)||skin2.isTouching(Smallblock)){
  background('red')
  // make health go down a bit
  health=health-5
  Smallblock.destroy()
  }

  if(Rightplayer.isTouching(coin)||skin1.isTouching(coin)||skin2.isTouching(coin)||skin3.isTouching(coin)){
 score=score+5
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
    health=health+10    
    score=score-5
  })

  powerButton.mousePressed(()=>{

    arrow1.velocityX=25;
    arrow2.velocityX=25;
    arrow3.velocityX=25;
    arrow4.velocityX=25;
    

  })

  if(Smallblock.isTouching(Rightplayer)){
    Smallblock.destroy()
    health=health-5
  }
// codes for enemies and its bulelts


  if(redenemy.isTouching(Rightplayer)){
    health= health-10
    redenemy.destroy()
  }
  
  if(Playerbullet.isTouching(redenemy)){
    redenemy.destroy()
    EnemySound.play()
    kills= kills+1
    score= score+4
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
snowman.visible=false
if(arrow4.isTouching(smb)){
  smb.destroy()
  score=score+5
}

if(smb.isTouching(enemystopper)){
  smb.destroy()
}
if(runnerScore>100&& runnerScore<400){
background(0,0,35,25); 
background(wintertheme)
for(var i=0; i<100; i++){
  snowball[i].show()
  snowball[i].update()

}
snowman.visible=true

Platform.visible=true;
smb.visible=true

if(Rightplayer.isTouching(smb)||skin1.isTouching(smb)||skin2.isTouching(smb)){
  health=health-5
  smb.destroy()
}
smb.y= height/2+200

}
if(runnerScore>560&& runnerScore<800){
background('black')
for (var i=0; i<200; i++){
  drop[i].show()
  drop[i].update()
}

attack1.y=height/2-150
attack2.y=height/2+200
if(Rightplayer.isTouching(attack1)||skin1.isTouching(attack1)||skin2.isTouching(attack1)||skin3.isTouching(attack1)){
  health=health-10
  attack1.destroy()
}
if(Rightplayer.isTouching(attack2)||skin1.isTouching(attack2)||skin2.isTouching(attack2)||skin3.isTouching(attack2)){
  health=health-10
  attack2.destroy()
}

//slime.y=height/2+300
}


if(runnerScore>900&& runnerScore<1200){
background(0,0,35,25); 
background(wintertheme)
for(var i=0; i<100; i++){
  snowball[i].show()
  snowball[i].update()

}
snowman.visible=true
smb.visible=true

if(Rightplayer.isTouching(smb)||skin1.isTouching(smb)||skin2.isTouching(smb)){
  health=health-5
  smb.destroy()
}
smb.y= height/2+200
}
if(runnerScore>1400&& runnerScore<1700){
background('black')
for (var i=0; i<200; i++){
  drop[i].show()
  drop[i].update()
}
attack1.y=height/2-150
attack2.y=height/2+200
if(Rightplayer.isTouching(attack1)||skin1.isTouching(attack1)||skin2.isTouching(attack1)||skin3.isTouching(attack1)){
  health=health-10
  attack1.destroy()
}
if(Rightplayer.isTouching(attack2)||skin1.isTouching(attack2)||skin2.isTouching(attack2)||skin3.isTouching(attack2)){
  health=health-10
  attack2.destroy()
}
}

if(runnerScore>1600&& runnerScore<2000){
  background(0,0,35,25); 
  background(wintertheme)
  for(var i=0; i<100; i++){
    snowball[i].show()
    snowball[i].update()
  
  }
  snowman.visible=true
  smb.visible=true

  if(Rightplayer.isTouching(smb)||skin1.isTouching(smb)||skin2.isTouching(smb)){
  health=health-5
  smb.destroy()
}
smb.y= height/2+200
  }

  if(runnerScore>2200&& runnerScore<2600){
    background('black')
    for (var i=0; i<200; i++){
      drop[i].show()
      drop[i].update()
    }
    attack1.y=height/2-150
attack2.y=height/2+200
if(Rightplayer.isTouching(attack1)||skin1.isTouching(attack1)||skin2.isTouching(attack1)||skin3.isTouching(attack1)){
  health=health-10
  attack1.destroy()
}
if(Rightplayer.isTouching(attack2)||skin1.isTouching(attack2)||skin2.isTouching(attack2)||skin3.isTouching(attack2)){
  health=health-10
  attack2.destroy()
}
}

    if(runnerScore>2800&& runnerScore<3200){
      background(0,0,35,25); 
      background(wintertheme)
      for(var i=0; i<100; i++){
        snowball[i].show()
        snowball[i].update()
      
      }
      snowman.visible=true
      smb.visible=true

      if(Rightplayer.isTouching(smb)||skin1.isTouching(smb)||skin2.isTouching(smb)){
  health=health-5
  smb.destroy()
}
smb.y= height/2+200
      }

      if(runnerScore>3400&& runnerScore<3600){
        background('black')
        for (var i=0; i<200; i++){
          drop[i].show()
          drop[i].update()
        }
        attack1.y=height/2-150
attack2.y=height/2+200
if(Rightplayer.isTouching(attack1)||skin1.isTouching(attack1)||skin2.isTouching(attack1)||skin3.isTouching(attack1)){
  health=health-10
  attack1.destroy()
}
if(Rightplayer.isTouching(attack2)||skin1.isTouching(attack2)||skin2.isTouching(attack2)||skin3.isTouching(attack2)){
  health=health-10
  attack2.destroy()
}
}

        if(runnerScore>3800&& runnerScore<4500){
          background(0,0,35,25); 
          background(wintertheme)
          for(var i=0; i<100; i++){
            snowball[i].show()
            snowball[i].update()
          
          }
          snowman.visible=true
          smb.visible=true
    
          if(Rightplayer.isTouching(smb)||skin1.isTouching(smb)||skin2.isTouching(smb)){
      health=health-5
      smb.destroy()
    }
    smb.y= height/2+200
          }

          if(runnerScore>4600&& runnerScore<5400){
            background('black')
            for (var i=0; i<200; i++){
              drop[i].show()
              drop[i].update()
            }
            attack1.y=height/2-150
    attack2.y=height/2+200
    if(Rightplayer.isTouching(attack1)||skin1.isTouching(attack1)||skin2.isTouching(attack1)){
      health=health-10
      attack1.destroy()
    }
    if(Rightplayer.isTouching(attack2)||skin1.isTouching(attack2)||skin2.isTouching(attack2)){
      health=health-10
      attack2.destroy()
    }
            }


if(runnerScore>350&& runnerScore<357){
  storm.visible=true
  storm.y= height/2

if(score>10){
  score=score+1
  
}

}



if(runnerScore>1500&& runnerScore<1507){
  storm.visible=true
  storm.y= height/2

  if(score>25){
    score=score+1
   
  }
}



if(runnerScore>2100&& runnerScore<2107){
  storm.visible=true
  storm.y= height/2

  if(score>45){
    score=score+1
 
  }
}

if(runnerScore>2800&& runnerScore<2807){
  storm.visible=true
  storm.y= height/2
  if(score>80){
    score=score+1

  }
}

if(runnerScore>3200&& runnerScore<3207){
  storm.visible=true
  storm.y= height/2
  if(score>120){
    score=score+1

  }
}
if(runnerScore>3600&& runnerScore<3607){
  storm.visible=true
  storm.y= height/2
  if(score>200){
    score=score+1
 
  }
}

if(runnerScore>520&&runnerScore<560||runnerScore>1360&&runnerScore<1400||runnerScore>2160&&runnerScore<2200||runnerScore>3360&&runnerScore<3400||runnerScore>4540&&runnerScore<4600){
  fill('white')
  textSize(30)
  text('Attack is about to happen!', width/1.5-width/2,height/2-230)
}
if(storm.isTouching(Rightplayer)|| storm.isTouching(skin1)|| storm.isTouching(skin2)){
  
  health=health-1
}
if(Greenenemy.isTouching(enemystopper)){
  Greenenemy.destroy()
}
/*(if(runnerScore>2600&& runnerScore<3100){
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
*/
if(runnerScore>200 && runnerScore<220){
  ThunderSound.play()
  RedThunder.velocityX=-27
  RedThunder.velocityY=10
  RedThunder.visible=true
}

if(runnerScore>420 && runnerScore<440){
  ThunderSound.play()
  RedThunder.velocityX=-27
  RedThunder.velocityY=10
  RedThunder.visible=true
}
if(runnerScore>820 && runnerScore<840){
  ThunderSound.play()
  RedThunder.velocityX=-27
  RedThunder.velocityY=10
  RedThunder.visible=true
}
if(runnerScore>1220 && runnerScore<1240){
  ThunderSound.play()
  RedThunder.velocityX=-27
  RedThunder.velocityY=10
  RedThunder.visible=true
}

if(runnerScore>1600 && runnerScore<1620){
  ThunderSound.play()
  RedThunder.velocityX=-27
  RedThunder.velocityY=10
  RedThunder.visible=true
}

if(runnerScore>2000 && runnerScore<2020){
  ThunderSound.play()
  RedThunder.velocityX=-27
  RedThunder.velocityY=10
  RedThunder.visible=true
}



if(health<0){
gameState='home'
powerButton.hide()
health_increaseButton.hide()

Greenenemy.visible=false;

Playerbullet.visible=false;

Smallblock.visible=false

skin2.visible=false
skin3.visible=false
skin1.visible=false
score=score-30

health=20
runnerScore=0
storm.visible=false
}

if(score<0){
  gameState='home'
  score=5

  Greenenemy.visible=false;

Playerbullet.visible=false;

Smallblock.visible=false;
skin2.visible=false
skin3.visible=false
skin1.visible=false
health=20
runnerScore=0
storm.visible=false
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
  if(runnerScore>70&&enemyspeed<1){
    Greenenemy.velocityX=-10.5
    coin.velocityX=-11
    Smallblock.velocityX=-8
    
  if(runnerScore>200&&enemyspeed<1){
    powerButton.show()
  }
  }
  if(runnerScore>360&&enemyspeed<1){
    Greenenemy.velocityX=-13
    redenemy.velocityX=-12
    coin.velocityX=-12
    Smallblock.velocityX=-8.5
  
  }
  if(runnerScore>600&&enemyspeed<1){
    Greenenemy.velocityX=-15
    redenemy.velocityX=-13
    coin.velocityX=-14
    Smallblock.velocityX=-9
  
  }

  if(runnerScore>900&&enemyspeed<1){
    Greenenemy.velocityX=-17
    coin.velocityX=-14
    Smallblock.velocityX=-9
  
  }
  if(runnerScore>1200&&enemyspeed<1){
    Greenenemy.velocityX=-17
    coin.velocityX=-14
    Smallblock.velocityX=-9
  
  }
  if(runnerScore>1400&&enemyspeed<1){
    Greenenemy.velocityX=-18
    coin.velocityX=-14
    Smallblock.velocityX=-11
  
  }

  if(runnerScore>1900&&enemyspeed<1){
    Greenenemy.velocityX=-22
    coin.velocityX=-14
    Smallblock.velocityX=-12
  
  }

  if(runnerScore>2500&&enemyspeed<1){
    Greenenemy.velocityX=-24
    coin.velocityX=-14
    Smallblock.velocityX=-15
  
  }
  if(runnerScore>2900&&enemyspeed<1){
    Greenenemy.velocityX=-24
    coin.velocityX=-15
    Smallblock.velocityX=-16
  
  }
  if(runnerScore>3500&&enemyspeed<1){
    Greenenemy.velocityX=-28
    coin.velocityX=-14
    Smallblock.velocityX=-15
  
  }
  if(runnerScore>4000&&enemyspeed<1){
    Greenenemy.velocityX=-28.5
    coin.velocityX=-14
    Smallblock.velocityX=-17
  
  }


  //skins attach to rightplayer(default player)
  skin1.y=Rightplayer.y-10
  skin2.y=Rightplayer.y-10
  skin3.y=Rightplayer.y-10
  
  

  if(RedThunder.isTouching(Rightplayer)||RedThunder.isTouching(skin1)){
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
  skin2.visible=false
  skin1button.hide()
  selectSound.play()
  
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
  card5button.hide()
  card5use.hide()
  card6button.hide()
  card7button.hide()
  card8button.hide()
  card9button.hide()
  card10button.hide()
  card11button.hide()
  card12button.hide()
  card13button.hide()
  card14button.hide()
  card15button.hide()
  card16button.hide()
  card17button.hide()
  card18button.hide()
  card19button.hide()
  card20button.hide()
  card21button.hide()
  card22button.hide()
  skin2button.hide()
  skin3button.hide()

  arrow_get_back.x= width/.1-width/2
  storm.visible=false


  GetBack.y= height/2-300

  jumpingcard=0
  enemyspeed=0

  runnerScore=runnerScore+0
})




}

if(gameState==='home'){
  background(homebg)
  fill('green')
  textSize(30)
cardeck1.hide()
cardeck2.hide()

  code.hide()
  submitButton.hide()
  card1button.hide()
  card2button.hide()
  card3button.hide()
  card4button.hide()
  card5button.hide()
  card6button.hide()
  card7button.hide()
  card8button.hide()
  card9button.hide()
  card10button.hide()
  card11button.hide()
  card12button.hide()
  card13button.hide()
  card14button.hide()
  card15button.hide()
  card16button.hide()
  card17button.hide()
  card18button.hide()
  card22button.hide()
  card19button.hide()
  card20button.hide()
  card21button.hide()

  if(card21unlock>0){
    deck4trading.show()
  }

 hometext.visible=true
  health_increaseButton.hide()
  powerButton.hide()
  home.hide()
  Platform.visible=false
  Rightplayer.visible=false
  redenemy.visible=false;
  smb.visible=false;
  snowman.visible=false
  

  playButton.show()
  skinChange.show()
  allow.hide()
  inventory.show()
  settings.show()

  inventory.mousePressed(()=>{
    gameState='cardsInventory'
    inventory.hide()
    selectSound.play()
    homesound.stop()
    settings.hide()
  })

  settings.mousePressed(()=>{
    gameState='settings'

    selectSound.play()
    homesound.stop()
 


    inventory.hide()
    hometext.hide()
    dailyCard.hide()
    cardTrades.hide()
    playButton.hide()
    skinChange.hide()
    home.show()

  })
  if(card1unlock>0){
    dailyCard.show()
  }
  playButton.mousePressed(()=>{
    gameState='game'
    homesound.stop()
    playButton.hide()
    skinChange.hide()
    cardTrades.hide()
    skin1.visible=false;
    skin1button.hide()
    Rightplayer.x=width/1.5-width/2
    Rightplayer.y=height/2
    selectSound.play()

    skin2.visible=false;
    skin2button.hide()
    skin3button.hide()
    skin3.visible=false;

    //health=100

    dailyCard.hide()
    inventory.hide()
    settings.hide()

    //runnerScore=0
    redthunderhastouched=0
    stormhastouched=0
    RedThunder.x= width/.75-width/2
    RedThunder.y=height/2-340

    arrow1.x= width/2.2-width/2
    arrow2.x= width/2.2-width/2
    arrow3.x=width/2.2-width/2
    arrow4.x= width/2.2-width/2
    arrow1.y=height/2
    arrow2.y= height/2-120
    arrow3.y= height/2-240
    arrow4.y = height/2+200
arrow1.velocityX=0
arrow2.velocityX=0
arrow3.velocityX=0
arrow4.velocityX=0
    
slime.x=width/.5-width/2
slime.y=height/2+300

slime.velocityY=0
enemyspeed=0

diecard22.x= width/2.5-width/2

  })


  skinChange.mousePressed(()=>{
    gameState='skins'
    Rightplayer.visible=false
    home.show()
    homesound.stop()
    selectSound.play()
  skin1button.x= skin1.x
  skin1button.y= skin1.y+30

  skinChange.hide()
  dailyCard.hide()
  inventory.hide()
  settings.hide()
  cardTrades.hide()
  })

  dailyCard.mousePressed(()=>{
    gameState='challenge'
    skinChange.hide()
    hometext.visible=false;
    dailyCard.hide()
    playButton.hide()
    cardTrades.hide()
    inventory.hide()
    settings.hide()
    selectSound.play()

    Platform.visible=true
    Rightplayer.visible=true
  Smallblock.visible=true
  GetBack.visible= false
  Playerbullet.visible=true
  Greenenemy.visible=true


  Rightplayer.x=width/1.5-width/2
  Rightplayer.y=height/2

  RedThunder.x= width/.75-width/2
  RedThunder.y=height/2-340

  chhealth=100

  seconds=600

  anotheredthunder.x= width/.8-width/2
  anotheredthunder.y=height/2-340

  })

  if(score>9){
    cardTrades.show()
   
  }

  cardTrades.mousePressed(()=>{
    gameState='cards'
    dailyCard.hide()
    inventory.hide()
    settings.hide()
    selectSound.play()
    homesound.stop()
    allow.hide()

  })
 

}
if(gameState==='skins'){
  background('green')
  fill('blue')
  textSize(30)
  text('Coins: '+score, width/1.6-width/2, height/2-300)
  fill('white')
  textSize(20)
  text('Each Character will be 25 coins', width/1.3-width/2, height/2-300)
allow.hide()
cardeck1.hide()
cardeck2.hide()

deck4trading.hide()
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

    skin2.visible=false;
    skin2button.hide()
    skin3button.hide()

    arrow_get_back.x= width/.1-width/2
    selectSound.play()
    homesound.play()
  })

  skin1button.mousePressed(()=>{
    if(score>24){
    gameState='game'
    skinChange.hide()
    skin1button.hide()
    cardTrades.hide()
    Rightplayer.visible=false
    skin1sound.play()
    skin1.visible=true

    skin1.y=Rightplayer.y-10
    //skin1.x=Rightplayer.x
    Rightplayer.x=width/2.4-width/2
    Rightplayer.y=height/2
    score=score-25
    skin1.scale=1

    skin2.visible=false
    skin2button.hide()
    skin3button.hide()

 //   runnerScore=0;
 RedThunder.x= width/.75-width/2
 RedThunder.y=height/2-340

    }
  
  })

  if(card6unlock>0){
    skin2button.show()
  }

  skin2button.mousePressed(()=>{
  if(score>24){
    gameState='game'
    skinChange.hide()
    skin2button.hide()
    skin3button.hide()
    cardTrades.hide()
    Rightplayer.visible=true
    skin1sound.play()
    skin2.visible=true

    skin2.y=Rightplayer.y-10
   // skin2.x=Rightplayer.x
    Rightplayer.x=width/2.4-width/2
    Rightplayer.y=height/2
    score=score-25
    skin2.scale=1
    skin1.visible=false
    skin1button.hide()


   // runnerScore=0
    skin1sound.play()
    RedThunder.x= width/.75-width/2
    RedThunder.y=height/2-340
  }
  })

  if(card20unlock>0){
    skin3button.show()
  }

  skin3button.mousePressed(()=>{
  if(score>24){
    gameState='game'
    skinChange.hide()
    skin2button.hide()
    skin3button.hide()
    cardTrades.hide()
    Rightplayer.visible=true
    skin1sound.play()
    skin3.visible=true

    skin3.y=Rightplayer.y-10
   // skin2.x=Rightplayer.x
    Rightplayer.x=width/2.4-width/2
    Rightplayer.y=height/2
    score=score-25
    skin3.scale=1
    skin1.visible=false
    skin2.visible=false
    skin1button.hide()


   // runnerScore=0
    skin1sound.play()
    RedThunder.x= width/.75-width/2
    RedThunder.y=height/2-340
  }
  })



}

if(gameState==='cards'){
  background('white')
  hometext.visible=false;
  skinChange.hide()
  playButton.hide()
  home.show()
  cardTrades.hide()
  card1button.show()
  card2button.show()
  card3button.show()
  card4button.show()
  card5button.show()
  card6button.show()
  card7button.show()
  card8button.show()
  dailyCard.hide()



  cardeck1.show()
  cardeck2.show()

  deck4trading.hide()
allow.hide()

  


 if(score<0){
   score=10
 }
  if(score>49){
  cardset2unlocked=1
  }
  if(score>89){
    cardset3unlocked=3
  }
  if(cardset2unlocked>0){
    card9button.show()
    card10button.show()

    card11button.show()

    card12button.show()

    card13button.show()

    card14button.show()

    card15button.show()

    card16button.show()

    

  }
  if(cardset3unlocked>1){
    card17button.show()

    card18button.show()

    card19button.show()
    card20button.show()

    card21button.show()
    card22button.show()
  }

  if(card2stop>2){
    card2unlock=0
    card2stop=0
  
    card2button.size(140,210)
  }
  if(card3stop>1){
    card3unlock=0
    card3stop=0
  
    card3button.size(140,210)
  }
  if(card4stop>1){
    card4unlock=0
    card4stop=0
    card4button.size(140,210)
  }
  if(card5stop>1){
    card5unlock=0
    card5stop=0
    card5button.size(152,210)
  }
  if(card7stop>1){
    card7unlock=0
    card7stop=0
    card7button.size(158,220)
  
  }
  if(card8stop>0){
    card8unlock=0
    card8stop=0
    card8button.size(152,215)
  
  }
  if(card9stop>1){
    card9unlock=0
    card9stop=0
    card9button.size(175,220)
  
  }
  if(card10stop>1){
    card10unlock=0
    card10stop=0
  
    card10button.size(200,280)
  
  }
  if(card11stop>1){
    card11unlock=0
    card11stop=0
    card11button.size(190,245)
  
  }
  if(card12stop>1){
    card12unlock=0
    card12stop=0
    card12button.size(190,245)
  
  }
  if(card13stop>0){
    card13unlock=0
    card13stop=0
    card13button.size(210,230)
  
  }
  if(card14stop>0){
    card14unlock=0
    card14stop=0
    card14button.size(190,245)
  
  }
  if(card15stop>0){
    card15unlock=0
    card15stop=0
    card15button.size(190,245)
  
  }
  if(card16stop>0){
    card16unlock=0
    card16stop=0
    card16button.size(190,245)
  
  }
  if(card18stop>0){
    card18unlock=0
    card18stop=0
    card18button.size(180,260)
  
  }

  if(card19stop>0){
    card19unlock=0
    card19stop=0
    card19button.size(150,240)
  
  }

  if(card21stop>0){
    card21unlock=0
    card21stop=0
    card21button.size(160,230)
  
  }
  if(card22stop>0){
    card22unlock=0
    card22stop=0
    card22button.size(160,230)
  
  }
  
  card1button.mousePressed(()=>{
    if(score>19){
      score=score-20
      card1unlock=1
      coinsnotlost=1
      selectSound.play()
      }
      if(score<19&&coinsnotlost==0){
        card1unlock=0
      }





   
  })
  if(card1unlock>0){
    fill('green')
    textSize(13)
    text('Unlocked', width/1.47- width/2, height/2-260)
    
          
  }





  card2button.mousePressed(()=>{
    if(score>24){
      score=score-25
      card2unlock=1
      coinsnotlost=2
      selectSound.play()
      }
      if(score<24&&coinsnotlost==0){
        card2unlock=0
      }


      if(card2unlock>0){
        card2button.size(110,180)
      }
   
  })



  card3button.mousePressed(()=>{
   
 

    if(score>34){
    score=score-35
    card3unlock=1
    coinsnotlost=3
    selectSound.play()

    }
    if(score<34&&coinsnotlost==0){
      card3unlock=0
    }

    
if(card3unlock>0){
  card3button.size(110,180)
}

  })



  card4button.mousePressed(()=>{
    if(score>34){
      score=score-35
      card4unlock=1
      coinsnotlost=4
      selectSound.play()

      }
      if(score<34&&coinsnotlost==0){
        card4unlock=0
      }

      if(card4unlock>0){
        card4button.size(110,180)
      }
  })




  //card5
  card5button.mousePressed(()=>{
    if(score>54){
      score=score-55
      card5unlock=1
      coinsnotlost=5
      selectSound.play()

      }
      if(score<54&&coinsnotlost==0){
        card5unlock=0
      }
     
      if(card5unlock>0){
        card5button.size(122,180)
      }
  })



  card6button.mousePressed(()=>{
    if(score>74){
      score=score-75
      card6unlock=1
      coinsnotlost=6
      selectSound.play()
      }
      if(score<74&&coinsnotlost==0){
        card6unlock=0
      }
      if(card6unlock>0){
        card6button.size(122,180)
      }
  })

  card20button.mousePressed(()=>{
    if(score>204){
      score=score-205
      card20unlock=1
      coinsnotlost=20
      selectSound.play()
      }
      if(score<204&&coinsnotlost==0){
        card20unlock=0
      }
      if(card20unlock>0){
        card20button.size(120,210)
      }
  })




  card7button.mousePressed(()=>{
    if(score>54){
      score=score-55
      card7unlock=1
      coinsnotlost=7
      selectSound.play()
      }
      if(score<54&&coinsnotlost==0){
        card7unlock=0
      }
      if(card7unlock>0){
        card7button.size(128,180)
      }
   
  })
  



  card8button.mousePressed(()=>{
    if(score>79){
      score=score-80
      card8unlock=1
      coinsnotlost=8
      selectSound.play()

      }
      if(score<79&&coinsnotlost==0){
        card8unlock=0
      }

      if(card8unlock>0){
        card8button.size(122,185)
      }
  })
  



  card9button.mousePressed(()=>{
    if(score>49){
      score=score-50
      card9unlock=1
      coinsnotlost=9
      selectSound.play()

      }
      if(score<49&&coinsnotlost==0){
        card9unlock=0
      }
      if(card9unlock>0){
        card9button.size(145, 190)
      }
      
  })




  card10button.mousePressed(()=>{
    if(score>59){
      score=score-60
      card10unlock=1
      coinsnotlost=10
      selectSound.play()

      }
      if(score<59&&coinsnotlost==0){
        card10unlock=0
      }
      if(card10unlock>0){
        card10button.size(170, 250)
      }
  })


  card11button.mousePressed(()=>{
    if(score>69){
      score=score-70
      card11unlock=1
      coinsnotlost=11
      selectSound.play()

      }
      if(score<69&&coinsnotlost==0){
        card11unlock=0
      }

      if(card11unlock>0){
        card11button.size(160, 215)
      }
  })



  
  card12button.mousePressed(()=>{
    if(score>99){
      score=score-100
      card12unlock=1
      coinsnotlost=12
      selectSound.play()

      }
      if(score<99&&coinsnotlost==0){
        card12unlock=0
      }

      if(card12unlock>0){
        card12button.size(160, 215)
      }

  })


  card13button.mousePressed(()=>{
    if(score>109){
      score=score-110
      card13unlock=1
      coinsnotlost=13
      selectSound.play()

      }
      if(score<109&&coinsnotlost==0){
        card13unlock=0
      }
      if(card13unlock>0){
        card13button.size(180, 200)
      }
  })


  card14button.mousePressed(()=>{
    if(score>119){
      score=score-120
      card14unlock=1
      coinsnotlost=14
      selectSound.play()

      }
      if(score<119&&coinsnotlost==0){
        card14unlock=0
      }
      if(card14unlock>0){
        card14button.size(160, 215)
      }
  })


  card15button.mousePressed(()=>{
    if(score>149){
      score=score-150
      card15unlock=1
      coinsnotlost=15
      selectSound.play()

      }
      if(score<149&&coinsnotlost==0){
        card15unlock=0
      }
      if(card15unlock>0){
        card15button.size(160, 215)
      }
  })


  card16button.mousePressed(()=>{
    if(score>199){
      score=score-200
      card16unlock=1
      coinsnotlost=16
      selectSound.play()

      }
      if(score<199&&coinsnotlost==0){
        card16unlock=0
      }
      if(card16unlock>0){
        card16button.size(160, 215)
      }
  })


  card17button.mousePressed(()=>{
    if(score>169){
      score=score-170
      card17unlock=1
      coinsnotlost=17
      selectSound.play()
      }

      if(score<169&&coinsnotlost==0){
        card17unlock=0
      }
    
      if(card17unlock>0){
        card17button.size(150, 205)
      }
  })

  card18button.mousePressed(()=>{
    if(score>199){
      score=score-200
      card18unlock=1
      coinsnotlost=18
      selectSound.play()

      }
      if(score<199&&coinsnotlost==0){
        card18unlock=0
      }
    
      if(card18unlock>0){
        card18button.size(150, 230)
      }
  })

  card19button.mousePressed(()=>{
    if(score>219){
      score=score-220
      card19unlock=1
      coinsnotlost=19
      selectSound.play()

      }
      if(score<219&&coinsnotlost==0){
        card19unlock=0
      }
    
      if(card19unlock>0){
        card19button.size(120,210)
      }
  })

  card21button.mousePressed(()=>{
    if(score>24){
      score=score-25
      card21unlock=1
      coinsnotlost=21
      selectSound.play()

      }
      if(score<24&&coinsnotlost==0){
        card21unlock=0
      }
    
      if(card21unlock>0){
        card21button.size(130,200)
      }
  })

  card22button.mousePressed(()=>{
    if(score>229){
      score=score-230
      card22unlock=1
      coinsnotlost=22
      selectSound.play()

      }
      if(score<230&&coinsnotlost==0){
        card22unlock=0
      }
    
      if(card22unlock>0){
        card22button.size(130,200)
      }
  })







  fill('Blue')
  textSize(30)
  text('Coins: '+score, width/1.55-width/2, height/2-370)


}

if(gameState==='challenge'){
  background('black')
allow.hide()
  textSize(40)
  text('Health: '+chhealth, width/.82-width/2, height/2-280)
  text('Time Left: '+ seconds, width/.82-width/2, height/2-230)
  text('Prize: 50 Coins ', width/.83-width/2, height/2-170)
  Rightplayer.bounceOff(GetBack)
  for (var i=0; i<200; i++){
    drop[i].show()
    drop[i].update()
  }

  for(var i=0; i<100; i++){
    snowball[i].show()
    snowball[i].update()
  
  }
//making the daily card chellange hide when we are done wirth it


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
    anotheredthunder.visible=true
    homesound.stop()
    
    home.show()
    dailyCard.hide()
    redenemy.visible=true;
    redenemybullet.visible=true

Smallblock.velocityX=-15
Greenenemy.velocityX=-20
redenemy.velocityX=-22
redenemybullet.velocityX=-28
anotheredthunder.velocityX=-27
anotheredthunder.velocityY=10

 redenemybullet.y= redenemy.y
 seconds=seconds-1

    if(Playerbullet.isTouching(Greenenemy)){
      Greenenemy.destroy()
      EnemySound.play()
      
    }
    if(Greenenemy.isTouching(Rightplayer)||Greenenemy.isTouching(skin1)||Greenenemy.isTouching(skin2)){
      
      Greenenemy.destroy()
      chhealth=chhealth-10
    }
    
      if(Rightplayer.isTouching(Smallblock)||skin1.isTouching(Smallblock)||skin2.isTouching(Smallblock)){
      background('red')
     
      
      Smallblock.destroy()
      chhealth=chhealth-15
      }
    


      if(redenemy.isTouching(Rightplayer)||redenemy.isTouching(skin1)||redenemy.isTouching(skin2)){
        
        redenemy.destroy()

        chhealth=chhealth-20
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

        chhealth=chhealth-20
      }

      if(anotheredthunder.isTouching(GetBack2)){
        anotheredthunder.visible=false
        anotheredthunder.x= width/.8-width/2
        anotheredthunder.y=height/2-340
        //anotheredthunder.velocityX=0
       // anotheredthunder.velocityY=0
      }

      if(anotheredthunder.isTouching(Rightplayer)){
        chhealth=chhealth-2
      }

    if(chhealth<0){
gameState='home'
card1unlock=0
    }

      if(seconds<0&& chhealth>0){
        gameState='home'

        score= score+50

        card1unlock=0
        fill('green')
        textSize(50)
        text('WON', width/1.2-width/2, height/2-100)

      }

home.mousePressed(()=>{
  gameState='home'
card1unlock=0
selectSound.play()
homesound.play()

})



      





}

if(gameState==='cardsInventory'){
  background('white')
allow.hide()
cardeck1.hide()
cardeck2.hide()

deck4trading.hide()
  fill('Blue')
  textSize(20)
  text('Coins: '+score, width/1.6-width/2, height/2-360)

  hometext.visible=false;
  dailyCard.hide()
  cardTrades.hide()
  skinChange.hide()
  home.show()
  playButton.hide()
  storm.visible=false;
// make cards buy again

if(card2stop>2){
  card2unlock=0
  card2stop=0

  card2button.size(140,210)
}
if(card3stop>1){
  card3unlock=0
  card3stop=0

  card3button.size(140,210)
}
if(card4stop>1){
  card4unlock=0
  card4stop=0
  card4button.size(140,210)
}
if(card5stop>1){
  card5unlock=0
  card5stop=0
  card5button.size(152,210)
}
if(card7stop>1){
  card7unlock=0
  card7stop=0
  card7button.size(158,220)

}
if(card8stop>0){
  card8unlock=0
  card8stop=0
  card8button.size(152,215)

}
if(card9stop>1){
  card9unlock=0
  card9stop=0
  card9button.size(175,220)

}
if(card10stop>1){
  card10unlock=0
  card10stop=0

  card10button.size(200,280)

}
if(card11stop>1){
  card11unlock=0
  card11stop=0
  card11button.size(190,245)

}
if(card12stop>1){
  card12unlock=0
  card12stop=0
  card12button.size(190,245)

}
if(card13stop>0){
  card13unlock=0
  card13stop=0
  card13button.size(210,230)

}
if(card14stop>0){
  card14unlock=0
  card14stop=0
  card14button.size(190,245)

}
if(card15stop>0){
  card15unlock=0
  card15stop=0
  card15button.size(190,245)

}
if(card16stop>0){
  card16unlock=0
  card16stop=0
  card16button.size(190,245)

}
if(card18stop>0){
  card18unlock=0
  card18stop=0
  card18button.size(180,260)

}
if(card19stop>0){
  card19unlock=0
  card19stop=0
  card19button.size(150,240)

}

if(card21stop>0){
  card21unlock=0
  card21stop=0
  card21button.size(160,230)

}

if(card22stop>0){
  card22unlock=0
  card22stop=0
  card22button.size(160,230)

}

    if(card2unlock>0){
      card2use.show()
    

    }

    card2use.mousePressed(()=>{
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'
      score=score+10
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

      RedThunder.x= width/.75-width/2
      RedThunder.y=height/2-340
 

      arrow1.x= width/2.2-width/2
      arrow2.x= width/2.2-width/2
      arrow3.x=width/2.2-width/2
      arrow4.x= width/2.2-width/2
      arrow1.y=height/2
      arrow2.y= height/2-120
      arrow3.y= height/2-240
      arrow4.y = height/2+200
  arrow1.velocityX=0
  arrow2.velocityX=0
  arrow3.velocityX=0
  arrow4.velocityX=0

  selectSound.play()

  card2stop=card2stop+1

 

    })

  

    

    if(card3unlock>0){
      card3use.show()
 
      
    }

    card3use.mousePressed(()=>{
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'
      score=score+15
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2
      selectSound.play()
      arrow1.x= width/2.2-width/2
      arrow2.x= width/2.2-width/2
      arrow3.x=width/2.2-width/2
      arrow4.x= width/2.2-width/2
      arrow1.y=height/2
      arrow2.y= height/2-120
      arrow3.y= height/2-240
      arrow4.y = height/2+200
  arrow1.velocityX=0
  arrow2.velocityX=0
  arrow3.velocityX=0
  arrow4.velocityX=0
  
  card3stop=card3stop+1

  RedThunder.x= width/.75-width/2
  RedThunder.y=height/2-340
    })

    if(card4unlock>0){
      card4use.show()

    }

    card4use.mousePressed(()=>{
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'
      score=score+20
      health=health+15
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2
      selectSound.play()
      arrow1.x= width/2.2-width/2
      arrow2.x= width/2.2-width/2
      arrow3.x=width/2.2-width/2
      arrow4.x= width/2.2-width/2
      arrow1.y=height/2
      arrow2.y= height/2-120
      arrow3.y= height/2-240
      arrow4.y = height/2+200
  arrow1.velocityX=0
  arrow2.velocityX=0
  arrow3.velocityX=0
  arrow4.velocityX=0
  card4stop=card4stop+1

  RedThunder.x= width/.75-width/2
  RedThunder.y=height/2-340
    })

    //

    if(card5unlock>0){
      card5use.show()

    }

    card5use.mousePressed(()=>{
      //runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'
      score=score+30
      health=health+30
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

      arrow_get_back.x= width/.3-width/2
      selectSound.play()
      arrow1.x= width/2.2-width/2
      arrow2.x= width/2.2-width/2
      arrow3.x=width/2.2-width/2
      arrow4.x= width/2.2-width/2
      arrow1.y=height/2
      arrow2.y= height/2-120
      arrow3.y= height/2-240
      arrow4.y = height/2+200
  arrow1.velocityX=0
  arrow2.velocityX=0
  arrow3.velocityX=0
  arrow4.velocityX=0
  card5stop=card5stop+1

  RedThunder.x= width/.75-width/2
  RedThunder.y=height/2-340
    })

    if(card7unlock>0){
      card7use.show()

    }

    card7use.mousePressed(()=>{
      //runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'
      score=score+30
      health=health+30
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2
// arrow get back is not used here because this is not the power card. Its the thunder card
     // arrow_get_back.x= width/.4-width/2
     selectSound.play()
      arrow1.x= width/2.2-width/2
      arrow2.x= width/2.2-width/2
      arrow3.x=width/2.2-width/2
      arrow4.x= width/2.2-width/2
      arrow1.y=height/2
      arrow2.y= height/2-120
      arrow3.y= height/2-240
      arrow4.y = height/2+200
  arrow1.velocityX=0
  arrow2.velocityX=0
  arrow3.velocityX=0
  arrow4.velocityX=0

  redthunderhastouched=1
  card7stop=card7stop+1
  

  RedThunder.x= width/.75-width/2
  RedThunder.y=height/2-340
    })


    if(card8unlock>0){
      card8use.show()

    }

    card8use.mousePressed(()=>{
     // runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'
      score=score+50
      health=health+50
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

      arrow_get_back.x= width/.3-width/2
      selectSound.play()
      arrow1.x= width/2.2-width/2
      arrow2.x= width/2.2-width/2
      arrow3.x=width/2.2-width/2
      arrow4.x= width/2.2-width/2
      arrow1.y=height/2
      arrow2.y= height/2-120
      arrow3.y= height/2-240
      arrow4.y = height/2+200
  arrow1.velocityX=0
  arrow2.velocityX=0
  arrow3.velocityX=0
  arrow4.velocityX=0

  redthunderhastouched=1
  stormhastouched=1
  card8stop=card8stop+1

  RedThunder.x= width/.75-width/2
  RedThunder.y=height/2-340
  
    })

    if(card9unlock>0){
      card9use.show()

    }

    card9use.mousePressed(()=>{
      //runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'

    
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

  selectSound.play()
  card9stop=card9stop+1
  
  //arrow_get_back.x= width/.4-width/2

  arrow1.x= width/2.2-width/2
  arrow2.x= width/2.2-width/2
  arrow3.x=width/2.2-width/2
  arrow4.x= width/2.2-width/2
  arrow1.y=height/2
  arrow2.y= height/2-120
  arrow3.y= height/2-240
  arrow4.y = height/2+200
arrow1.velocityX=0
arrow2.velocityX=0
arrow3.velocityX=0
arrow4.velocityX=0

jumpingcard=1

RedThunder.x= width/.75-width/2
RedThunder.y=height/2-340
    })

    if(card10unlock>0){
      card10use.show()

    }

    card10use.mousePressed(()=>{
     // runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'

    
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

  selectSound.play()
  card10stop=card10stop+1
  
 // arrow_get_back.x= width/.4-width/2

  arrow1.x= width/2.2-width/2
  arrow2.x= width/2.2-width/2
  arrow3.x=width/2.2-width/2
  arrow4.x= width/2.2-width/2
  arrow1.y=height/2
  arrow2.y= height/2-120
  arrow3.y= height/2-240
  arrow4.y = height/2+200
arrow1.velocityX=0
arrow2.velocityX=0
arrow3.velocityX=0
arrow4.velocityX=0

jumpingcard=2

RedThunder.x= width/.75-width/2
RedThunder.y=height/2-340
    })

    if(card11unlock>0){
      card11use.show()

    }

    card11use.mousePressed(()=>{
     // runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      gameState='game'

    
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

  selectSound.play()
  card11stop=card11stop+1
  
  //arrow_get_back.x= width/.4-width/2

  arrow1.x= width/2.2-width/2
  arrow2.x= width/2.2-width/2
  arrow3.x=width/2.2-width/2
  arrow4.x= width/2.2-width/2
  arrow1.y=height/2
  arrow2.y= height/2-120
  arrow3.y= height/2-240
  arrow4.y = height/2+200
arrow1.velocityX=0
arrow2.velocityX=0
arrow3.velocityX=0
arrow4.velocityX=0

GetBack.y= height/2-450

RedThunder.x= width/.75-width/2
RedThunder.y=height/2-340
    })

    if(card12unlock>0){
      card12use.show()

    }

    card12use.mousePressed(()=>{
      //runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'

    
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

  selectSound.play()
  card12stop=card12stop+1
  
  //arrow_get_back.x= width/.4-width/2

  arrow1.x= width/2.2-width/2
  arrow2.x= width/2.2-width/2
  arrow3.x=width/2.2-width/2
  arrow4.x= width/2.2-width/2
  arrow1.y=height/2
  arrow2.y= height/2-120
  arrow3.y= height/2-240
  arrow4.y = height/2+200
arrow1.velocityX=0
arrow2.velocityX=0
arrow3.velocityX=0
arrow4.velocityX=0

GetBack.y= height/2-600
jumpingcard=3

RedThunder.x= width/.75-width/2
RedThunder.y=height/2-340
    })

    if(card13unlock>0){
      card13use.show()

    }

    card13use.mousePressed(()=>{
      //runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'

    
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

  selectSound.play()
  card13stop=card13stop+1
  
  //arrow_get_back.x= width/.4-width/2

  arrow1.x= width/2.2-width/2
  arrow2.x= width/2.2-width/2
  arrow3.x=width/2.2-width/2
  arrow4.x= width/2.2-width/2
  arrow1.y=height/2
  arrow2.y= height/2-120
  arrow3.y= height/2-240
  arrow4.y = height/2+200
arrow1.velocityX=0
arrow2.velocityX=0
arrow3.velocityX=0
arrow4.velocityX=0

GetBack.y= height/2-700
score=score+45

RedThunder.x= width/.75-width/2
RedThunder.y=height/2-340
    })


    if(card14unlock>0){
      card14use.show()

    }

    card14use.mousePressed(()=>{
      //runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'

    
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

  selectSound.play()
  card14stop=card14stop+1
  
  //arrow_get_back.x= width/.4-width/2

  arrow1.x= width/2.2-width/2
  arrow2.x= width/2.2-width/2
  arrow3.x=width/2.2-width/2
  arrow4.x= width/2.2-width/2
  arrow1.y=height/2
  arrow2.y= height/2-120
  arrow3.y= height/2-240
  arrow4.y = height/2+200
arrow1.velocityX=0
arrow2.velocityX=0
arrow3.velocityX=0
arrow4.velocityX=0

jumpingcard=2
health=health+50

RedThunder.x= width/.75-width/2
RedThunder.y=height/2-340
    })

    if(card15unlock>0){
      card15use.show()

    }

    card15use.mousePressed(()=>{
      //runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'

    
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

  selectSound.play()
  card15stop=card15stop+1
  
  arrow_get_back.x= width/.4-width/2

  arrow1.x= width/2.2-width/2
  arrow2.x= width/2.2-width/2
  arrow3.x=width/2.2-width/2
  arrow4.x= width/2.2-width/2
  arrow1.y=height/2
  arrow2.y= height/2-120
  arrow3.y= height/2-240
  arrow4.y = height/2+200
arrow1.velocityX=0
arrow2.velocityX=0
arrow3.velocityX=0
arrow4.velocityX=0

GetBack.y= height/2-700


RedThunder.x= width/.75-width/2
RedThunder.y=height/2-340
    })


    if(card16unlock>0){
      card16use.show()

    }

    card16use.mousePressed(()=>{
      //runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      gameState='game'

    
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

  selectSound.play()
  card16stop=card16stop+1
  


  arrow1.x= width/2.2-width/2
  arrow2.x= width/2.2-width/2
  arrow3.x=width/2.2-width/2
  arrow4.x= width/2.2-width/2
  arrow1.y=height/2
  arrow2.y= height/2-120
  arrow3.y= height/2-240
  arrow4.y = height/2+200
arrow1.velocityX=0
arrow2.velocityX=0
arrow3.velocityX=0
arrow4.velocityX=0

GetBack.y= height/2-750
jumpingcard=1
score=score+75
health=health+60
arrow_get_back.x= width/.4-width/2

RedThunder.x= width/.75-width/2
RedThunder.y=height/2-340
    })

    if(card18unlock>0){
      card18use.show()

    }

    card18use.mousePressed(()=>{
      //runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'

    
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

  selectSound.play()
  card18stop=card18stop+1
  


  arrow1.x= width/2.2-width/2
  arrow2.x= width/2.2-width/2
  arrow3.x=width/2.2-width/2
  arrow4.x= width/2.2-width/2
  arrow1.y=height/2
  arrow2.y= height/2-120
  arrow3.y= height/2-240
  arrow4.y = height/2+200
arrow1.velocityX=0
arrow2.velocityX=0
arrow3.velocityX=0
arrow4.velocityX=0

enemyspeed=1

RedThunder.x= width/.75-width/2
RedThunder.y=height/2-340
    })

    if(card19unlock>0){
      card19use.show()

    }

    card19use.mousePressed(()=>{
      //runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='multiplayer'

    


  selectSound.play()

  


  alert('To play multiplayer slide from left of your screen to the right and tap on the multiplayer bar. You will get a code after you have finished your game. It is your choice to play more or type the code in and receive the prize!Tip- Use the card(reload card unlimited use) so that you can use this card more times instead of rebuying it! ')


    })

    if(card22unlock>0){
      card22use.show()

    }

    card22use.mousePressed(()=>{
      //runnerScore=0
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()
      card22use.hide()
      gameState='game'

    
      Rightplayer.x=width/1.5-width/2
      Rightplayer.y=height/2

  selectSound.play()
  card22stop=card22stop+1
  


  arrow1.x= width/2.2-width/2
  arrow2.x= width/2.2-width/2
  arrow3.x=width/2.2-width/2
  arrow4.x= width/2.2-width/2
  arrow1.y=height/2
  arrow2.y= height/2-120
  arrow3.y= height/2-240
  arrow4.y = height/2+200
arrow1.velocityX=0
arrow2.velocityX=0
arrow3.velocityX=0
arrow4.velocityX=0

// coding for the poison affect for 300 seconds

startcountingcard22=1

RedThunder.x= width/.75-width/2
RedThunder.y=height/2-340
    })

    if(card17unlock>0){
      card17use.show()

    }

    card17use.mousePressed(()=>{

    
      if(score>69){
        score=score-70

        card2stop=card2stop-1
        card3stop=card3stop-1
        card4stop=card4stop-1
        card5stop=card5stop-1
        card7stop=card7stop-1
        card8stop=card8stop-1
        card9stop=card9stop-1
        card10stop=card10stop-1
        card11stop=card11stop-1
        card12stop=card12stop-1
        card13stop=card13stop-1
        card14stop=card14stop-1
        card15stop=card15stop-1
        card16stop=card16stop-1
        card18stop=card18stop-1
        card19stop=card19stop-1
        
      

        selectSound.play()
      }
    })


    home.mousePressed(()=>{
      gameState='home'
      card2use.hide()
      card3use.hide()
      card4use.hide()
      card5use.hide()
      card7use.hide()
      card8use.hide()
      card9use.hide()
      card10use.hide()
      card11use.hide()
      card12use.hide()
      card13use.hide()
      card14use.hide()
      card15use.hide()
      card16use.hide()
      card17use.hide()
      card18use.hide()
      card19use.hide()

      arrow_get_back.x= width/.1-width/2
      selectSound.play()
      homesound.play()
    })


    

}
if(gameState==='settings'){
  background('yellow')
  cardeck1.hide()
  cardeck2.hide()
  roadmap.show()
  worldstats.show()

  volumeon.show()
  volumeoff.show()
  
  homesound.stop()
settings.hide()
allow.hide()
deck4trading.hide()

  inventory.hide()
  hometext.visible=false
  dailyCard.hide()
  cardTrades.hide()
  playButton.hide()
  skinChange.hide()
  home.show()

  roadmap.mousePressed(()=>{
    gameState='roadmap'
    selectSound.play()
  })
  home.mousePressed(()=>{
    gameState='home'
homesound.play()

roadmap.hide()
worldstats.hide()
volumeoff.hide()
volumeon.hide()
  })

  volumeon.mousePressed(()=>{
    homesound.setVolume(1)
    CoinSound.setVolume(1)
    EnemySound.setVolume(1)
    ThunderSound.setVolume(1)
    skin1sound.setVolume(1)
    selectSound.setVolume(1)
    slimesound.setVolume(1)
  })
  volumeoff.mousePressed(()=>{
    homesound.setVolume(0)
    CoinSound.setVolume(0)
    EnemySound.setVolume(0)
    ThunderSound.setVolume(0)
    skin1sound.setVolume(0)
    selectSound.setVolume(0)
    slimesound.setVolume(0)
  })
}

if(gameState==="multiplayer"){
  background('blue')

allow.hide()
cardeck1.hide()
cardeck2.hide()
  code.show()
  submitButton.show()

  submitButton.mousePressed(()=>{
    codemulti= code.value()
    if(codemulti=='jycd1'){
      score=score+40
      alert('You have received 40 coins')
      gameState='home'
      card19stop=card19stop+1
    }

    if(codemulti=='fydr254'){
      score=score+80
      alert('You have received 80 coins')
      gameState='home' 
      card19stop=card19stop+1
    }

    if(codemulti=='jdr8n4'){
      score=score+100
      alert('You have received 100 coins')
      gameState='home' 
      card19stop=card19stop+1
    }

    if(codemulti=='uitm2ty5'){
      score=score+200
      alert('You have received 200 coins')
      gameState='home' 
      card19stop=card19stop+1
    }
  })






  
}

if(gameState==='roadmap'){
  background(roadmapbg)
allow.hide()
cardeck1.hide()
cardeck2.hide()
  volumeoff.hide()
  volumeon.hide()
  roadmap.hide()
  worldstats.hide()

  home.mousePressed(()=>{
    gameState='home'
    home.hide()
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
function readStock(data){
  coins= data.val()
  
}
function writeStock(x){
 x=x+1
  database.ref('/').update({Coins:x})
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


