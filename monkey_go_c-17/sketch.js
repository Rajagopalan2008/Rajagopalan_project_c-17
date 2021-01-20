
var monkey , monkey_running
var banana ,bananaImage, obstacle,obstacles, obstacleImage
var bananaGroup, obstacleGroup
var score=0,ground

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(40,360,20,20)
  
  //to create the groups
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  //to create the invisible ground
  ground=createSprite(200,390,500,20);
  ground.shapeColor="brown"
  ground.visible=true;

  
}


function draw() {
  background("orange")
  monkey.addAnimation("monkey_run",monkey_running);
  monkey.scale=0.12;
  monkey.velocityY=10;
  
  //to call the functions
  bananafunc();
  obstacles();
  
  fill("yellow")
  ellipse(370,30);
  
  //to stop the monkey from falling down
monkey.collide(ground);
  
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  fill("purple")
  score=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+score,260,20)

  drawSprites()
  if(keyWentDown("space")){
    monkey.y=monkey.y-100;  
  }
}

function bananafunc(){
  if(frameCount%80===0){
    banana=createSprite(400,Math.round(random(120,200)));
    banana.addImage("banana",bananaImage);
    banana.scale=0.1;
    banana.lifetime=100;   
    banana.velocityX=-4;
    
    bananaGroup.add(banana);
  }   
}

function obstacles(){
 if(frameCount%300===0){
   obstacle=createSprite(450,360,20,20);
  obstacle.addImage("obstacle_escape",obstaceImage);
   obstacle.scale=0.2;
   obstacle.velocityX=-4;
   obstacle.lifetime=100;
   
   obstacleGroup.add(obstacle);
 }
}
