
var PLAY = 0

var END = 1

var gameState = PLAY;

var monkey , monkey_running;

var banana ,bananaImage, obstacle, obstacleImage;

var bananaGroup, obstacleGroup;

var score;

var ground;

function preload()
{
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() 
{
  
  createCanvas(500, 400);

  ground = createSprite(250, 375, 500, 15);
  
  monkey = createSprite(50, 340, 20, 20);
  monkey.addAnimation("monkey_run", monkey_running);
  monkey.scale = 0.1;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  //monkey.debug = true

}

function spawnBananananananananananananananananananana()
{
  if (frameCount%60 === 0)
  {
    banana = createSprite(500, Math.round(random(125, 250)), 20, 20);
    banana.velocityX = -7;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 100;
    bananaGroup.add(banana);
}
  
}

function spawnObstacles()
{
  if (frameCount%75 === 0)
    {
      obstacle = createSprite(500, 350);
      obstacle.addImage(obstacleImage);
      obstacle.scale = 0.15;
      obstacle.velocityX = -7;
      obstacleGroup.add(obstacle)
    }
}
 

function draw() 
{
background(1000);
  
  if (gameState === PLAY)
    {
        if (frameCount%100 === 0)
  {
    score = score + 1
  }
      
        
  spawnBananananananananananananananananananana();
  spawnObstacles();
      
}
  
  if (monkey.isTouching(obstacleGroup))
  {
    gameState = END
    obstacle.velocityX = 0;
    banana.velocityX = 0;
    monkey.velocityY = 0;
      
}
  
monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(ground)
  
  if (keyDown("space")&&monkey.y >= 336)
    {
      monkey.velocityY = -20;
    }
  
  if (monkey.isTouching(bananaGroup))
    {
      banana.lifetime = 0;
    }

  
  textStyle("bold")
  fill("black")
  textSize(20)
  text("Survival Time: "+ score, 175, 50)
  

  drawSprites();
}

