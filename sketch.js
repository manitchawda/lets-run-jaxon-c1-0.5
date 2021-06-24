var path, pathImg, edeges;
var runner, runner_walking,runnerImg;
var leftBoundary, rightBoundary;

function preload(){
  //pre-load images
runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
    path=createSprite(200,200,100,100)
    path.addImage(pathImg)
   path.velocityY = 4
    path.scale=1.2

    runner=createSprite(200,200,100,100)
    runner.addAnimation("runner_walking",runnerImg)
    runner.scale=0.08
    
    leftBoundary=createSprite(10,10,20,800)
    rightBoundary=createSprite(390,10,20,800)
    leftBoundary.visible=false
    rightBoundary.visible=false
}
function draw() {
  background(0);
   if (path.y>400){
     path.y = height/2;
}
runner.x=World.mouseX
runner.collide(leftBoundary)
runner.collide(rightBoundary)


drawSprites()
}
