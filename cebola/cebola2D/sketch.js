const N_AUREAS = 100;
let aureas = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 20, 1, 0.01);

  for (let i = 0; i < N_AUREAS + 1; i++) {
    aureas.push(new Aurea(i, height));
  }
}
let turn = 0;
function draw() {
  createCanvas(windowWidth, windowHeight);

  background(220);
  noFill();
  line(width / 2, 0, width / 2, height);

  for (let i = 0; i < aureas.length; i++) {
    aureas[i].update(slider.value());
    aureas[i].display();
  }
}
