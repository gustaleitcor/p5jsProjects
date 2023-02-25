class Particle {
  constructor(pos, color, dir, n, iPos) {
    this.pos = pos.copy();
    if (iPos == undefined) {
      this.iPos = pos.copy();
    } else {
      this.iPos = iPos.copy();
    }

    this.color = color;
    if (dir == undefined) {
      this.vel = new p5.Vector(random(-1, 1), random(-1, 1));
    } else {
      this.vel = dir.copy();
    }
    this.vel.normalize();
    this.vel.div(random(0.5, 1.5));
    if (n == undefined) {
      this.n = 5;
    } else {
      this.n = n;
    }
  }

  show() {
    let d = p5.Vector.dist(this.pos, this.iPos);
    push();
    strokeWeight(d / 12);

    if (d < 50) {
      let alpha = map(d, 0, 50, 0, 255);
      this.color.setAlpha(constrain(alpha, 0, 255));
    } else if (d >= 80) {
      let alpha = map(d, 80, 100, 255, 0);
      this.color.setAlpha(constrain(alpha, 0, 255));
    } else if (d >= 50 && d < 80) {
      this.color.setAlpha(255);
    }
    stroke(this.color);
    point(this.pos.x, this.pos.y);
    pop();

    if (this.n > 0 && this.n <= 5) {
      /*particles.push(
        new Particle(
          p5.Vector.sub(this.pos, p5.Vector.mult(this.vel, 10)),
          this.color,
          this.vel,
          this.n - 1,
          this.iPos
        )
      );*/
      this.n = -1;
    }
  }

  update() {
    this.pos.add(this.vel);
    this.pos.add(p5.Vector.mult(G, 0));
  }

  isDead() {
    let d = p5.Vector.dist(this.pos, this.iPos);
    if (d > 120) {
      return true;
    }
    return false;
  }
}
