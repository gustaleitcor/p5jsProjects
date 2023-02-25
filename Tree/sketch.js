const MAX_DIST = 100;
const MIN_DIST = 0.2;
const ATRACTION = 1.5;
const ARCH = 0.15;
const R = 200
const SCL = 10

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  tree = new Tree(0, 0, true, undefined);
  tree.createLeaves(1000, undefined, width/4);
}

function draw() {
  translate(width / 2, height);
  tree.show();
  tree.grow();
}
