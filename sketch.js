var player,marksmanImg;
var bg,bgImg;
var bird,birdImg;
var bird2,bird2Img,bird3,bird3Img;
var arrowImg,arrow;
var score;


function preload(){
    
     bgImg = loadImage("./assets/bg.png");
     marksmanImg = loadImage("./assets/marksman_1.png");
     birdImg = loadImage("./assets/obsTop2.png");
     arrowImg = loadImage("./assets/arrow.png");
     bird2Img = loadImage("./assets/obs1.png");
     bird3Img = loadImage("./assets/obs3.png");

}
function setup(){
    canvas = createCanvas(800,600);
   
  //  bg = createSprite(800,600,50,50);
  //  bg.addImage(bgImg);
  //  bg.scale = 1.1;

    player = createSprite(50,300,50,50);
    player.addImage(marksmanImg);
    player.scale =0.3;

    birdsG  = new Group();
    bird2G = new Group();
    bird3G = new Group();
    arrowGroup  = new Group();
}
function draw(){
    background(bgImg)

   if (keyDown("up")){
    player.y = player.y-10;
   }
   if (keyDown("down")){
    player.y = player.y+10;
   }
   if (keyDown("space")){
    createArrows();
   }
   if(arrowGroup.isTouching(birdsG)){
     birdsG.destroyEach();
     arrowGroup.destroyEach();
     score = score+2;
   }
   if(arrowGroup.isTouching(bird2G)){
    bird2G.destroyEach();
    arrowGroup.destroyEach();
    score = score+2;
   }
   if (arrowGroup.isTouching(bird3G)){
    bird3G.destroyEach();
    arrowGroup.destroyEach();
    score = score+2;
   }
   
  
  
   
  
    player.depth = player.depth+1;
   // arrow.depth = arrow.depth+1;

   spawnBirds1();
   spawnBirds2();
   spawnBirds3();
    drawSprites();
    text("score:",+score,100,100);
  //  fill("brown");
  //  stroke("black");
}
function spawnBirds1(){
    if (frameCount % 150 === 0){
        bird = createSprite(800,random(20,500),20,30);
        bird.velocityX = -5;
        bird.addImage(birdImg);
        bird.scale = 0.2;
        birdsG.add(bird);
    }
}
function spawnBirds2(){
    if (frameCount % 300 === 0){
      bird2 = createSprite(800,random(120,500),20,30);
      bird2.velocityX = -5;
      bird2.addImage(bird2Img);
      bird2.scale = 0.05;
      bird2G.add(bird2);
    }
}
function spawnBirds3(){
    if (frameCount % 500 === 0){
        bird3 = createSprite(800,random(120,500),20,30);
        bird3.addImage(bird3Img);
        bird3.velocityX = -5;
        bird3.scale = 0.01;
        bird3G.add(bird3);
    }
}

function createArrows(){
 arrow = createSprite(player.x+20,player.y-30,20,20);
    arrow.addImage(arrowImg);
    arrow.scale =0.2;
    arrow.velocityX = 9;
    arrowGroup.add(arrow);
    
}
