const N_RING = 2;
let rings = [];
let step = 0;

function setup() {
  createCanvas(windowWidth, windowHeight - 40, WEBGL);
  
  
  slider = createSlider(0, 20, 5, 0.1);
  
  
  for (let i = 0; i <= height; i += height / N_RING) {
    rings.push(new Ring(i));
  }
  
  
}

function draw() {
  background(220);
  noFill();
  orbitControl()

  for (let i = 0; i < rings.length; i++) {
    rings[i].show();
  }

  step += slider.value();
}
