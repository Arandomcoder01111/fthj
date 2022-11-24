  var bg
  var bgimg
  var shtr
  var shtrimg
  var ss,ssimg
  var zomb,zombimg
  var bullet
  var bimg
  var bgroup
  var zgroup
  function preload(){

  bgimg=loadImage("assets/bg.jpeg")
  shtrimg=loadImage("assets/shooter_2.png")
  ssimg=loadImage("assets/shooter_3.png")
  zombing=loadImage("assets/zombie.png")
  bimg=loadImage("assets/sbull.png")
}


  function setup(){

 createCanvas(windowWidth,windowHeight)
bg=createSprite(width/2-20,height/2-40,20,20)
bg.addImage(bgimg)
bg.scale=1.1

shtr=createSprite(width-1150,height-300,50,50)
shtr.addImage(shtrimg)
shtr.scale=.46
shtr.debug=true
shtr.setCollider("rectangle",0,0,300,300)
bgroup= new Group()
zgroup = new Group()






}

function draw(){

  background(0)

  if(keyDown("UP_ARROW") && shtr.y>100){
  shtr.y=shtr.y-30
  shtr.addImage(shtrimg)

}
  if(keyDown("DOWN_ARROW" )&& shtr.y<height-100){
  shtr.y=shtr.y+30
  shtr.addImage(shtrimg)

}
if(keyWentDown("SPACE")){
  shtr.addImage(ssimg)
  shoot();
}

  drawSprites();
  spawnzombies()
  for(var i=0;i<zgroup.length;i++){
    if(bgroup.isTouching(zgroup[i]))
    zgroup[i].destroy()
  }
  

}
function spawnzombies(){
if(frameCount%50==0){
  zomb=createSprite(width-60,random(100,height-100),50,50)
  zomb.addImage(zombing)
  zomb.scale=.2
  zomb.velocityX=random(-2,-15)
  zomb.setCollider("rectangle",0,0,500,1000)
  zomb.debug=true
  zgroup.add(zomb)
}


}
function shoot(){
  bullet=createSprite(shtr.x+50,shtr.y-37,5,5)
  bullet.velocityX=15
  bgroup.add(bullet)
  bullet.addImage(bimg)
  bullet.scale=0.25
}

