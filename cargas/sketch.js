const AXIS = new p5.Vector(50, 50);
let base;
let dista;
let force;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  end = new p5.Vector(mouseX, mouseY);

  for (let j = 0; j < height; j += height / AXIS.y) {
    for (let i = 0; i < width; i += width / AXIS.x) {
      base = new p5.Vector(i, j);
      dista = p5.Vector.dist(base, end);
      force = (100 * -10 * 1000) / pow(dista, 2);
      force = constrain(force, -20, Infinity);
      drawArrow(base, end, -force, 0.1);
    }
  }
}

function drawArrow(origin, end, length = 10, scl = 0.5) {
  push();
  let dir = p5.Vector.sub(end, origin);
  dir.normalize();
  translate(origin.x, origin.y);
  strokeWeight(length * scl);
  line(0, 0, dir.x * length, dir.y * length);
  translate(
    p5.Vector.sub(
      p5.Vector.mult(dir, length),
      p5.Vector.mult(dir, length * scl)
    )
  );

  beginShape();
  vertex(dir.x * length * scl, dir.y * length * scl);
  vertex(dir.y * length * scl, -dir.x * length * scl);
  vertex(-dir.y * length * scl, dir.x * length * scl);
  vertex(dir.x * length * scl, dir.y * length * scl);
  endShape();
  pop();
}
