
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backg;
var score = 0;
var balls = [];

function preload()
{
  backg = loadImage("BG1.JPG")
}

function setup() {
	createCanvas(1500, 650);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 

  ground1 = new G(750,620,1500,20);
  ground2 = new G(850,490,300,20);
  ground3 = new G(1290,390,180,20);

   

  
  ball = new polygon(200,390);
  slingShot = new Chain(ball.body,{x:200,y:390});
   //yellow colour blocks
  box1 = new Box(970,350,60,60);
  box2 = new Box(730,350,60,60);
  box3 = new Box(790,350,60,60);
  box4 = new Box(850,350,60,60);
  box5 = new Box(910,350,60,60);

  //blue colour blocks
  box6 = new Box(790,300,60,60);
  box7 = new Box(850,300,60,60);
  box8 = new Box(910,300,60,60);
	
  //purple colour blocks
  
  box9 = new Box(850,240,60,60);

  box10 = new Box(1230,360,60,60)
  box11 = new Box(1290,360,60,60)
  box12 = new Box(1350,360,60,60)

  box13 = new Box(1290,330,60,60)

  //BALL DISPLAY
   
 
  
  
	
	
	Engine.run(engine);
  
}


function draw() {
 
  rectMode(CENTER);
  background(backg);

 
  textSize(70)
  fill("red")
  textFont(" Bold")
  text("𝐓𝐎𝐖𝐄𝐑 𝐒𝐄𝐈𝐆𝐄 𝟑",800,200)
  fill("green")
  textSize(50);
  text(" 𝒮𝒞𝒪𝑅𝐸 : " + score,50,50);

  fill("orange");
  box11.display();
  box10.display();
  box12.display();
  
  fill("red")
  box13.display();

  ball.display();
  
 
  fill("blue")
  box6.display();
  box7.display();
  box8.display();
  
  fill("purple")
  box9.display();
  
 
 
 fill("yellow")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  //display score

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();


  slingShot.display();
  ground1.display();
  ground2.display();
  ground3.display();
 

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingShot.flow();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ball.body,{x:150, y:350});
    slingShot.attach(ball.body);

  }
}
 