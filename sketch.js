
var trex ,trex_running, trex_collided;
var ground1, ground2;
function preload(){
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
ground_image = loadAnimation("ground2.png");
}

function setup(){
  createCanvas(600,200)
  trex = createSprite(30, 160);
  trex.addAnimation("trex", trex_running);
  trex.scale = 0.5;
  ground = createSprite(300, 180);
  ground.addAnimation("ground", ground_image);

}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY+0.5;
  trex.collide(ground);

  ground.velocityX = -5;
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  drawSprites();

}
