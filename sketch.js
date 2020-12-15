var unicorn;
var backgroungImg;
var tImg;
var trains = [];

function preload(){
  backgroundImg=loadImage('BG.jpg');
  
}
function setup() {
  createCanvas(600, 450);
  unicorn = new Unicorn();
  
}

function keyPressed(){
  if (key == ' '){
    unicorn.jump();
  }
}

function draw() {
  if(random(1)< 0.01){
    trains.push(new Train());
  }
  
  
  
  background(backgroundImg);
  unicorn.show();
  unicorn.move();
  
  for (let t of trains){
    t.move();
    t.show();
    
  }
}