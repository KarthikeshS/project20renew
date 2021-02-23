
function preload() {
    //load the images here
gardenImg = loadImage("images/garden.png");
cat1Img = loadImage("images/cat1.png");
cat2Img = loadAnimation("images/cat2.png","images/cat3");
cat3Img = loadImage("images/cat2.png");
mouse1Img = loadImage("images/mouse1.png");
mouse2Img = loadImage("images/mouse2.png","images/mouse3.png");
mouse3Img = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here

    garden = createSprite(300,300)
    garden.addImage(gardenImg);

    cat = createSprite(700,500);
    cat.addImage(cat1Img);
    cat.scale=0.09;

    mouse = createSprite(200,500);
    mouse.addImage(mouse1Img);
    mouse.scale=0.09;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.velocityX=0;
        cat.addImage(cat3Img);
        mouse.addImage(mouse3Img);
    }
    
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",cat2Img);
    cat.changeAnimation("catRunning",cat2Img);

}

}
