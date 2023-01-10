
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle = 60
var angle1 = 120
var angle2 = 30

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var ball_options = {
		restituition: 0.4,
		frictionAir: 0.02
	}
    var plane_options = {
		isStatic: true
	}
	var block_options = 
	{
		isStatic: true
	}
	var rotator_options = {

        isStatic: true

	}
plane = Bodies.rectangle(windowWidth/2, windowHeight - 20, windowWidth, 20, plane_options)
World.add(world, plane)
block1 = Bodies.rectangle(windowWidth - 1300, windowHeight - 300, 400, 30, block_options)
World.add(world, block1)
block2 = Bodies.rectangle(windowWidth - 400, windowHeight - 300, 400, 30, block_options)
World.add(world, block2)
rotator = Bodies.rectangle(windowWidth - 850, windowHeight - 500, 200, 20, rotator_options)
World.add(world, rotator)
rotator1 = Bodies.rectangle(windowWidth - 850, windowHeight - 500, 200, 20, rotator_options)
World.add(world, rotator1)
rotator2 = Bodies.rectangle(windowWidth - 850, windowHeight - 500, 200, 20, rotator_options)
World.add(world, rotator2)
ball = Bodies.circle(windowWidth - 750, windowHeight - 700, 20, ball_options)
World.add(world, ball)
ball1 = Bodies.circle(windowWidth - 800, windowHeight - 700, 20, ball_options)
World.add(world, ball1)
ball2 = Bodies.circle(windowWidth - 850, windowHeight - 700, 20, ball_options)
World.add(world, ball2)
ball3 = Bodies.circle(windowWidth - 900, windowHeight - 700, 20, ball_options)
World.add(world, ball3)
ball4 = Bodies.circle(windowWidth - 950, windowHeight - 700, 20, ball_options)
World.add(world, ball4)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(rgb(128,255,128));
  Engine.update(engine)
  drawSprites();
 rect(plane.position.x, plane.position.y, windowWidth, 20)
 rect(block1.position.x, block1.position.y, 400, 30)
 rect(block2.position.x, block2.position.y, 400, 30)
 

 Matter.Body.rotate(rotator, angle)
 push()
 translate(rotator.position.x, rotator.position.y)
 rotate(angle)
 rect(0,0,200,20)
 pop()
 angle += 10
 Matter.Body.rotate(rotator1, angle1)
 push()
 translate(rotator1.position.x, rotator1.position.y)
 rotate(angle1)
 rect(0,0,200,20)
 pop()
 angle1 += 20
 Matter.Body.rotate(rotator2, angle2)
 push()
 translate(rotator2.position.x, rotator2.position.y)
 rotate(angle2)
 rect(0,0,200,20)
 pop()
 angle2 += 30
ellipse(ball.position.x, ball.position.y, 20)
 ellipse(ball1.position.x, ball1.position.y, 20)
 ellipse(ball2.position.x, ball2.position.y, 20)
 ellipse(ball3.position.x, ball3.position.y, 20)
 ellipse(ball4.position.x, ball4.position.y, 20)


}



