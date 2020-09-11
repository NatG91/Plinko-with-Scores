const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var particle;

var score = 0
var count=0
var gameState="play"

function setup() {
  createCanvas(800,800);

  engine = Engine.create() 
  world = engine.world;

  ground = new Ground(400,780,800,20);

  for(var k =0; k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j =40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  
  }
  for(var j =15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  
  }

  for(var j =15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  
  }
  
}

function draw() {
  background(0);  

  text("Score:" +score,40,40);
  fill("white");
  text("500",30,550);
  text("500",110,550);
  text("500",190,550);
  text("500",270,550);
  text("100",350,550);
  text("100",430,550);
  text("100",510,550);
  text("200",590,550);
  text("200",670,550);
  text("200",750,550);
  

  Engine.update(engine)

  if(gameState==="end"){
text("Game Over",200,200)
  }

  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for (var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }

  if(particle!=null)
  {
    particle.display();
  
    if (particle.body.position.y>760)
    {
      if (particle.body.position.x < 300)
      {
        score=score+500;
        particle=null;
        if ( count>=5) {gameState = "end";}
      } else if (particle.body.position.x > 301 && particle.body.position.x < 600 )
      {
        score=score+100;
        particle=null;
        if ( count>=5) {gameState = "end";}
      }
      else if (particle.body.position.x > 601 && particle.body.position.x < 900 )
      {
        score=score+200;
        particle=null;
        if ( count>=5) {gameState = "end";}
      }
    }
  }
  ground.display();
}

function mousePressed()
{
  if(gameState!="end")
  {
    count++;
    particle=new Particle(mouseX, 10, 10, 10);
  }
}
