const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon 
function setup() {
  
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 object = new Ground (67,89,90,89);
 Stand = new Ground (89,87,67,56);
 Block1 = new Box(330,235,30,40);
 Block2 = new Box(360,235,30,40);
 Block3 = new Box (390,235,30,40);
 Block4 = new Box (420,234,30,40)
 Block5 = new Box (450,235,30,40);
 Block6 = new Box(360,195,30,40);
 Block7 = new Box (390,195,30,40);
 Block8 = new Box(420,195,30,40);
 Block9 = new Box(390,155,30,40);
Polgon =Bodies.circle(50,200,20);
World.add(world,polygon)
Slingshot = new Slingshot(this.polygon,{x:100,y:200});
imageMode(CENTER)
image(polygon_img, polygon.posiyion.x,polygon.position.y,40,40);

}

function draw() {
  object.display();
  Stand.display();
  Block1.display();
  Block2.display();
  Block3.display(); 
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();
  polygon.display();
  
  background(255,255,255);  
  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
  BodyA = null 
}