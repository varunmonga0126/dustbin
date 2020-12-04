const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engin,world;

var dustbin;
var ground;
var paper;


function setup() {
	 var canves =createCanvas(1500, 600);
	engine = Engine.create();
  world = engine.world;
  dustbin = new Dustbin(1200,400);
  paper= new Paper(100,20,30);
  ground = new Ground(width/2,500,width,20)

  

}



function draw() {
  rectMode(CENTER);
  background("black");
//Engine.update(engine);
ground.display();
 dustbin.display();
 paper.display();


  
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
  }
}


