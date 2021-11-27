const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObject;
var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3, rope4,rope5;
var world;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);

	bob1 = new bob(320,575,40)
	rope1=new rope(bob1.body,roofObject.body,-80)
	rope1.color = ("black");

	bob2 = new bob(360,575,40)
	rope2=new rope(bob2.body,roofObject.body,-40)
	rope2.color = ("black");

	bob3 = new bob(400,575,40)
	rope3=new rope(bob3.body,roofObject.body,0)
	rope3.color = ("black");

	bob4 = new bob(440,575,40)
	rope4=new rope(bob4.body,roofObject.body,40)
	rope4.color = ("black");

	bob5 = new bob(480,575,40)
	rope5=new rope(bob5.body,roofObject.body,80)
	rope5.color = ("black");

	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

 function keyPressed() {
 	if (keyCode === UP_ARROW) {
 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
 	}
 }