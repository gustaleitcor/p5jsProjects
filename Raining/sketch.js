let pingos = [];
let stack = 200;

class Pingo {
  constructor() {
    this.x = random(width);
    this.z = random(0.1, 1);
    this.y = -100 * this.z;
    this.vel = random(5);
    let a = 0.009;

    this.show = function () {
      fill(255, 255, 255, this.z * 255);
      noStroke()
      rect(this.x, this.y, 8 * this.z, 100 * this.z);
    };
    this.update = function () {
      this.y += this.vel * this.z;
      this.vel += a;
    };
    this.isOut = () => {
      return this.y < height;
    };
  }
}

function newPingo() {
  if (pingos.length < stack) {
    pingos.push(new Pingo());
  }
}

function setup() { 
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  newPingo();
  for (let i = pingos.length; i--; ) {
    if (pingos[i].isOut()) {
      pingos[i].show();
      pingos[i].update();
    } else {
      pingos.splice(i, 1);
    }
  }
}
