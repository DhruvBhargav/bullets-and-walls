var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
speed = random(223,321);
weight = random(30,52);
 bullet = createSprite(50, 200, 30, 20);
 bullet.shapeColor = 'white';
 wall = createSprite(1200, 200, thickness, height/2);;
 //car.shapeColor = 'white';
bullet.velocityX = speed;
}

function draw() {
  background(0); 
  if(bullet.collide(wall)){
    bullet.velocityX = 0;
    var Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(Damage>10){
      bullet.shapeColor = 'red';
    }
      if(Damage<10){
        bullet.shapeColor = 'green'
      }
  } 
  drawSprites();
}