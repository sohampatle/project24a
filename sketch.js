
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball,line1,line2,line3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	ball= Bodies.circle(50 , 750 , 10 , {restitution:1, isStatic:true,friction:0.5,density:1.2});
World.add(world, ball);
	//Create the Bodies Here.
    ground = new Ground(400,height-10,800,20);
	line1 = new Box(600,height-15,80,10);
	line2 = new Box(560,height-15,10,75);
	line3 = new Box(640,height-15,10,75);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  line1.display();
  line2.display();
  line3.display();
 ground.display();
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,10,10); 
 baall();
drawSprites();
 }
 function baall(){
if (keyDown==="UP_ARROW"){
	Matter.Body.applyForce(ball.Body,ball.Body.position,{x:85,y:-85});
}
 }