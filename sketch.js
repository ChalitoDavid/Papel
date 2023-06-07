
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var bolita;

function setup() {
	createCanvas(1420, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	bolita=new Paper(100,0,100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  bolita.display();

}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(bolita.body,bolita.body.position, {x:730,y:-750} )
	}
}