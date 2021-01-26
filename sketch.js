var canvas;
var music;
var ball;
var box1 , box2 , box3 , box4 ;
var topeg , lefteg , righteg ;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    music.play();
    ball = createSprite(random(20,570));
    ball.y = 50;
    ball.width = 20;
    ball.height = 20;
    ball.shapeColor = "white";
    ball.velocityY = 5
    ball.velocityX = 5
    box1 = createSprite(100,600,200,80);
    box1.shapeColor = "violet";
    box2 = createSprite(310,600,200,80);
    box2.shapeColor = "indigo";
    box3 = createSprite(520,600,200,80);
    box3.shapeColor = "blue";
    box4 = createSprite(730,600,200,80);
    box4.shapeColor = "green";

    topeg = createSprite(400,7,800,10);
    lefteg = createSprite(7,205,10,700);
    righteg = createSprite(800,205,10,700)
    

    //create box sprite and give velocity

}

function draw() {
    background("black");
    //create edgeSprite

    topeg.visible = false;
    lefteg.visible = false;
    righteg.visible = false;
    music.play();
    if(ball.y > 550 && ball.x >0){
        ball.shapeColor = "violet";
    }
    if(ball.y > 550 && ball.x > 200){
        ball.shapeColor = "indigo"
    }
    if(ball.y >550 && ball.x >420){
        ball.shapeColor = "blue"
    }
    if(ball.y>550 && ball.x >625){
        ball.shapeColor = "green"
    }

    //add condition to check if box touching surface and make it box
   if(isTouching(ball,box1)&&bounceOff(ball,box1)){

    ball.shapeColor = "violet";
   }
else{
    
}
if(isTouching(ball,box2)&&bounceOff(ball,box2)){

    ball.shapeColor = "indigo";
   }
else{
    
}
if(isTouching(ball,box3)&&bounceOff(ball,box3)){

    ball.shapeColor = "blue";
   }
else{
    
}
if(isTouching(ball,box4)&&bounceOff(ball,box4)){

    ball.shapeColor = "green";
   }
else{
    
}
  ball.bounceOff(topeg);
  ball.bounceOff(lefteg);
  ball.bounceOff(righteg);
    drawSprites();
}
function isTouching(object1,object2){

    if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2) {
        
        return true;
      }
      else {
        return false;
      } 



}
function bounceOff(fixedRect,movingRect){

    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
}