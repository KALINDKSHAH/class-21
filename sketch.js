// var fixedRect, movingRect;

// function setup() {
//   createCanvas(1200,800);
//   fixedRect = createSprite(600, 400, 50, 80);
//   fixedRect.shapeColor = "green";
//   fixedRect.debug = true;
//   movingRect = createSprite(400,200,80,30);
//   movingRect.shapeColor = "green";
//   movingRect.debug = true;

//   myRect = createSprite(200,200,80,30);
//   myRect.shapeColor = "green";
// }

// function draw() {
//   background(0,0,0);  
//   movingRect.x = World.mouseX;
//   movingRect.y = World.mouseY;

// if(isTouching(movingRect,myRect)){

//   movingRect.shapeColor = "red";
//     myRect.shapeColor = "red";
//   }
//   else {
//     movingRect.shapeColor = "green";
//     myRect.shapeColor = "green";
//   }

//   drawSprites();
// }


var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  drawSprites();
}





