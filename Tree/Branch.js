class Branch {
  constructor(pos, target, leaves) {
    this.pos = pos.copy();
    if (target != undefined) {
      this.target = target.copy();
    } else {
      this.target = findTarget(pos, leaves);
    }

    this.vel = this.target.x < 0 ? new p5.Vector(-ARCH, 0) : new p5.Vector(ARCH, 0);
  }

  grow() {
    let d = p5.Vector.dist(this.pos, this.target);
    if (d > MIN_DIST) {
      this.pos.add(this.vel);
    } else {
      this.isGrown = true;
    }

    if (!this.isGrown) {
      let dir = p5.Vector.sub(this.target, this.pos);
      dir.normalize();
      dir.mult(ATRACTION);
      beginShape();
      vertex(this.pos.x, this.pos.y)
      this.pos.add(dir);
      this.pos.add(this.vel);
      vertex(this.pos.x, this.pos.y);
      endShape();
    }
  }

  show() {
    
  }
}

function findTarget(pos, leaves) {
  for (let i = leaves.length - 1; i > 0; i--) {
    let d = p5.Vector.dist(pos, leaves[i]);

    if (d < MAX_DIST) {
      leaves.splice(i, 1);

      return leaves[i].copy();
    }
  }
}
