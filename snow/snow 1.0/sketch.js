const BUBBLE_MAX = 1000;
const GRAVITY = new p5.Vector(0, 0.1);
let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(let i = 0; i < BUBBLE_MAX; i++){
    bubbles.push(new Bubble());
  }
}

function draw() {
  background(220);
  
  for(let i = 0; i < BUBBLE_MAX; i++){
    bubbles[i].display();
    bubbles[i].update();
    if(bubbles[i].isOff()){
      bubbles[i].pos = new p5.Vector(random(-100, width+100), random(-100, -32))
    }
  }
  
}