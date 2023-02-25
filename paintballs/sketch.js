let player;
let balls = [];
const stack = 100

function setup() {
  createCanvas(800, 500);

  class Player {
    constructor() {
      let r = 32;
      this.player = true

      this.show = function () {
        circle(mouseX, mouseY, r);
      };
    }
  }

  class Ball {
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.vel = random(0.5);
      this.touched = false
      this.player = false
      let r = 32;

      this.update = function () {
        if (dist(this.x, this.y, mouseX, mouseY) <= 32 && this.player == false) {
          this.touched = true
        }
        this.x += this.vel;
        this.y += this.vel;
        this.vel = random(-3, 3)
      };
      this.show = function () {
        if(this.touched){
          fill(255,0,0)
        }else{
          fill(255)
        }
        circle(this.x, this.y, r);
      };
    }
  }
  player = new Player();
  for (let i = 0; i < stack; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(220);
  player.show();
  for (let i = 0; i < stack; i++) {
    balls[i].show();
    balls[i].update();
  }
}
