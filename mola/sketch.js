let memory = -1;
function mouseReleased() {
  memory = -1;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  springs = [];
  gravity = new p5.Vector(0, 1);
  springs.push(new Spring(width / 4, height / 3, height / 4, -0.01));
  springs.push(new Spring(width / 2, height / 3, height / 4, -0.005));
  springs.push(new Spring((width * 1.5) / 2, height / 3, height / 4, -0.1));
  springs.push(new Spring(width/2 , height / 6, height / 4, -0.5));
}

function draw() {
  background(220);
  mousePos = new p5.Vector(mouseX, mouseY);
  for (i = 0; i < springs.length; i++) {
    springs[i].show();
    springs[i].update();
    if (
      (mouseIsPressed && springs[i].ballPos.dist(mousePos) < 32 && (memory == -1 || memory == springs.indexOf(springs[i]))) ||
      memory == springs.indexOf(springs[i])
    ) {
      memory = springs.indexOf(springs[i]);
      springs[i].ballPos = mousePos;
      springs[i].ballVel.mult(0);
    }
  }
}
