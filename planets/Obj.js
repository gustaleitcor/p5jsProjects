let objs = [];
let dista;
let sen;
let coss;
let force;
let G = 10;
let counter = 0

class Obj {
  constructor(y, x, mass, r, velX) {
    this.x = x;
    this.y = y;
    this.mass = mass;
    this.r = r;
    this.velX = velX;
    this.velY = 0;
    this.aX = 0;
    this.aY = 0;

    this.show = function () {
      circle(this.x / scale, this.y / scale, this.r / scale);
    };

    this.update = function () {
      counter++
      for (let i = 0; i < objs.length; i++) {
        dista = dist(this.x, this.y, objs[i].x, objs[i].y);
        sen = (this.x - objs[i].x) / dista;
        coss = (this.y - objs[i].y) / dista;
        force =
          (-G * (this.mass * objs[i].mass)) / (dista + this.r + objs[i].r) ** 2;
        if (dista != 0 && dista > this.r / 2 + objs[i].r / 2) {
          this.aX = (sen * force) / this.mass;
          this.aY = (coss * force) / this.mass;
          if(counter % objs.length == 1){
          line(
            this.x / scale,
            this.y / scale,
            objs[i].x / scale,
            objs[i].y / scale
          );}
          this.velX += this.aX;
          this.velY += this.aY;
        }
      }
      this.x += this.velX;
      this.y += this.velY;
    };
  }
}

function mouseWheel() {}

function changeScale(event) {
  if (event.deltaY > 0) {
    scale = scale + 0.5;
  } else {
    scale = scale - 0.5;
  }
}
