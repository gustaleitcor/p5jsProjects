let points = [];
let N_POINTS;
let mouse;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 300, 20);
  checkBox = createCheckbox();
}

function draw() {
  N_POINTS = slider.value();
  createCanvas(windowWidth, windowHeight - 40);
  background(220);

  while (points.length < N_POINTS) {
    points.push(new Point());
  }

  while (points.length > N_POINTS) {
    points.pop();
  }

  if (N_POINTS > 0) {
    if (points[0].isMouse && !checkBox.checked()) {
      points[0] = new Point(false);
    } else if (!points[0].isMouse && checkBox.checked()) {
      points[0] = new Point(true);
    }
  }
  for (let i = 0; i < points.length; i++) {
    if (points[i].isOff()) {
      points[i].shuffle();
    }
    points[i].showPoint();
    points[i].showLine(i);
  }
  for (let i = 0; i < points.length; i++) {
    points[i].update();
  }

  text(str(int(frameRate())) + "      " + points.length, 20, 20);
}
