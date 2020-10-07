
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var platform1, platform2, box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15, box16, box17, box18, polygon, polygonBody, contsraint, polyimg;

function preload(){
  polyimg = loadImage("hexagon.png");
}
function setup() {
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;
  
  Engine.run(engine);
  
  platform1 = new Ground(650, 500, 230, 15);
  platform2 = new Ground(1000, 250, 250, 15);

  var options={
    'density': 0.2
  }
  box1 = new Box(570, 455, 40, 60);
  box2 = new Box(610, 455, 40, 60);
  box3 = new Box(650, 455, 40, 60);
  box4 = new Box(690, 455, 40, 60);
  box5 = new Box(730, 455, 40, 60);
  box6 = new Box(610, 385, 40, 60);
  box7 = new Box(650, 385, 40, 60);
  box8 = new Box(690, 390, 40, 60);
  box9 = new Box(650, 330, 40, 60);

  box10 = new Box(1000, 195, 40, 60);
  box11 = new Box(960, 195, 40, 60);
  box12 = new Box(920, 195, 40, 60);
  box13 = new Box(1040, 195, 40, 60);
  box14 = new Box(1080, 195, 40, 60);
  box15 = new Box(1000, 135, 40, 60);
  box16 = new Box(960, 140, 40, 60);
  box17 = new Box(1040, 140, 40, 60);
  box18 = new Box(1000, 80, 40, 60);

  polygonBody = Bodies.rectangle(200, 500, 40, 40, options);
  World.add(world, polygonBody);
  polygon = createSprite(200, 500, 40, 40);
  imageMode(CENTER);
  polygon.addImage(polyimg, polygonBody.position.x, polygonBody.position.y, 30, 30);
  polygon.scale = 0.1;

  constraint = new SlingShot(polygonBody, {x:200, y:450});
}
function draw() {
  background("red");  
  drawSprites();
  platform1.display();
  platform2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  constraint.display();

  polygon.x = polygonBody.position.x;
  polygon.y = polygonBody.position.y;
  
  textSize(30);
  textFont("Impact");
  fill("green");
  text("Tower Siege 1", 540, 50);
}
function mouseDragged(){
  Matter.Body.setPosition(polygonBody, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  constraint.fly();
}
function keyPressed(){
    if(keyCode === 32){
        constraint.attach(polygonBody);
    }
}