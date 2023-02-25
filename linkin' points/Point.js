class Point {
  constructor(isMouse) {
    this.isMouse = isMouse;
    let rand = random([1, -1]);
    this.pos = new p5.Vector(random(width), random(height));

    this.vel = new p5.Vector(random([-2, -1, 1, 2]), random([-2, -1, 1, 2]));
  }

  update() {
    if (!this.isMouse) {
      this.pos.add(this.vel);
    } else {
      this.pos.x = mouseX;
      this.pos.y = mouseY;
    }
  }

  showLine(index) {
    for (let i = index + 1; i < points.length; i++) {
      let dista = this.pos.dist(points[i].pos);
      if (dista <= 125) {
        dista = map(dista, 0, 120, 0, 220);
        push();
        stroke(constrain(dista - 30, 0, 220));
        line(this.pos.x, this.pos.y, points[i].pos.x, points[i].pos.y);
        pop();
      }
    }
  }

  showPoint() {
    point(this.pos.x, this.pos.y);
  }

  isOff() {
    if (
      this.pos.x > width + 2 ||
      this.pos.x < -2 ||
      this.pos.y > height + 2 ||
      this.pos.y < -2
    ) {
      return true;
    }
    return false;
  }

  shuffle() {
    if (!this.isMouse) {
      let rand = [random([0, 1]), random([0, 1])];
      if (rand[0] == 0 && rand[1] == 0) {
        this.pos.x = -2;
        this.pos.y = random(height);
        this.vel.x = random([1, 2]);
        this.vel.y = random([-2, -1, 1, 2]);
      } else if (rand[0] == 0 && rand[1] == 1) {
        this.pos.x = random(width);
        this.pos.y = -2;
        this.vel.x = random([-2, -1, 1, 2]);
        this.vel.y = random([1, 2]);
      } else if (rand[0] == 1 && rand[1] == 0) {
        this.pos.x = width + 2;
        this.pos.y = random(height);
        this.vel.x = random([-2, -1]);
        this.vel.y = random([-2, -1, 1, 2]);
      } else {
        this.pos.x = random(width);
        this.pos.y = height + 2;
        this.vel.x = random([-2, -1, 1, 2]);
        this.vel.y = random([1, 2]);
      }
    }
  }
}
