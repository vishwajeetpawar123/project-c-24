
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1
var box,box1,box2
var ball

function setup() {
	createCanvas(1280, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(640,480,1280,20)

	box= new Walls(1100,460,150,15)
	box1= new Walls(1180,420,15,100)
	box2= new Walls(1020,420,15,100)

	ball= new Paper(200,460,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
  box.display()
  box1.display()
  box2.display()
  ball.display()
  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

	}

	}






