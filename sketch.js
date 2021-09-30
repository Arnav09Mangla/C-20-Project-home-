var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var ball_options={
 isStatic:false,
restitution:0.3,
friction:0,
density:1.2


}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(200,390,400,20);
	ball=Bodies.circle(200,100,10,ball_options)
  
}


function draw() {
    ellipse(ball.position.x,ball.position.y,20)
	rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display()
}

function keyPressed() {
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:45,y:-85})

}

}



