var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(700,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(55,90);
 weight = random(400,1500);
}

function draw() {
  background(255,255,255);

  IsTouching();

  car.velocityX = speed;  
  drawSprites();
}