function setup() {
  createCanvas(400, 400);
}
let X = 0;

function draw() {
  background(220);
  let n;
  for (let i = 0; i < width + 1; i++) {
    n = noise((i + X + (mouseX)) / width);
    line(i, height, i, n * width);
  }
  X += 5;
}
