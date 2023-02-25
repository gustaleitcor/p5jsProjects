let fireworks = [];
let particles = [];
const G = new p5.Vector(0, 1);

function setup() {
  colorPalette = [
    color(255, 0, 0), // Red
    color(255, 165, 0), // Orange
    color(255, 255, 0), // Yellow
    color(0, 128, 0), // Green
    color(0, 0, 255), // Blue
    color(75, 0, 130), // Indigo
    color(238, 130, 238), // Violet
    color(255, 192, 203), // Pink
    color(255, 255, 255), // White
    color(128, 128, 128), // Gray
  ];

  canva = createCanvas(windowWidth, windowHeight);
  canva.mouseClicked(() => {
    fireworks.push(new Firework(mouseX, mouseY));
  });
}

function draw() {
  background(220);

  for (let i = 0; i < fireworks.length; i++) {
    fireworks[i].show();
    fireworks[i].update();
    if (fireworks[i].pos.y < fireworks[i].limit) {
      fireworks[i].explode();
      fireworks.splice(i, 1);
    }
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].update();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}
