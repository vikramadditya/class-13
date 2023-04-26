var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var Obstacle
var Obstacle1,Obstacle2,Obstacle3,Obstacle4,Obstacle5,Obstacle6
var score=0
var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  Obstacle1=loadImage("obstacle1.png")
  Obstacle2=loadImage("obstacle2.png")
  Obstacle3=loadImage("obstacle3.png")
  Obstacle4=loadImage("obstacle4.png")
  Obstacle5=loadImage("obstacle5.png")
  Obstacle6=loadImage("obstacle6.png")
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text("score "+score,500,50)
  score=score+Math.round(frameCount/60)
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if (frameCount % 60 === 0) {
    Obstacle=createSprite(400,165,10,40)
    Obstacle.velocityX = -5 
    var ran = Math.round(random(1,6))

    switch (ran)
    {
      case 1:
      Obstacle.addImage(Obstacle1);
      break;
      case 2:
      Obstacle.addImage(Obstacle2);
      break;
      case 3:
      Obstacle.addImage(Obstacle3);
      break;
      case 4:
      Obstacle.addImage(Obstacle4);
      break;
      case 5:
      Obstacle.addImage(Obstacle5);
      break;
      case 6:
      Obstacle.addImage(Obstacle6);
      break;
      default:
    }
    Obstacle.scale =0.5
    Obstacle.lifetime =80
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    cloud.lifetime = 200
    
    //assigning lifetime to the variable
    
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

