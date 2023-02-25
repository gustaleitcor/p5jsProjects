let seed = 0;

class Bubble {
  constructor() {
    this.pos = new p5.Vector(random(width), random(height));
    this.vel = new p5.Vector(0, 1);
  }

  update() {
    
    this.offSet = noise((this.pos.y) / (width))*200 - (0.5 * 200);
    
    this.pos.add(this.vel)
  }

  display() {
    circle(this.pos.x + this.offSet, this.pos.y, 8);
  }

  isOff() {
    if (
      this.pos.x > width ||
      this.pos.x < 0 ||
      this.pos.y > height+32 ||
      this.pos.y < -32
    ) {
      this.vel = new p5.Vector(0, 1);
      return true;
    }
    return false;
  }
}
