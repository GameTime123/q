
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
n1 = new ball(200,400,20);
n2 = new ball(300,417,20);
n3 = new ball(400,422,20);
n4 = new ball(500,417,20);
n5 = new ball(600,400,20);
Hanger = new Roof(400,100,200,50);
rope1=new rope(n1.body,Hanger.body,-80, 0);
rope2=new rope(n2.body,Hanger.body,-40, 0);
rope3=new rope(n3.body,Hanger.body,0, 0);
rope4=new rope(n4.body,Hanger.body,40, 0);
rope5=new rope(n5.body,Hanger.body,80, 0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  n1.display();
  n2.display();
  n3.display();
  n4.display();
  n5.display();
  Hanger.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
	}
	function keyPressed() {
		if (keyCode === UP_ARROW) {
			Matter.Body.applyForce(n1.body,n1.body.position,{x:100,y:-100});
}


}
