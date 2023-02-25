const DIV = 1.3;
let params = [];
let pastParams = [];
function setup() {
  createCanvas(windowWidth, windowHeight-40);
  n = createSlider(0, 20, 2);
  angle = createSlider(0, PI, 0, 0.001);
}

function draw() {
  params = [n.value(), angle.value()];
  if (params[0] != pastParams[0] || params[1] != pastParams[1]) {
    background(220);
    translate(width / 2, height);
    branch(n.value(), height/6);
    pastParams = [n.value(), angle.value()];
  }
}

function branch(n, l) {
  if (n > 0) {
    strokeWeight(n*2)
    stroke(color(n*30, n*40, n*50))
    line(0, 0, 0, -l);
    push();
    translate(0, -l);
    rotate(angle.value());
    branch(n - 1, l / DIV);
    pop();
    push();
    translate(0, -l);
    rotate(-angle.value());
    branch(n - 1, l / DIV);
    pop();
  }
}
