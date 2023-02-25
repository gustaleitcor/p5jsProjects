const P = 3;
const G = new p5.Vector(0, 2, 0);
let snows = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  for(let i = 0; i < width/8; i++){
    snows.push(new Snow(16));
  }
}



function draw() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  
  for(let i = 0; i < width/8; i++){
    snows[i].update();
    snows[i].show();
    if(snows[i].isOut()){
      snows[i].randomize();
    }
  }
}