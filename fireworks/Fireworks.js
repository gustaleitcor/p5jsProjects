class Firework {
  constructor(x, y) {
    this.pos = new p5.Vector(x, y);
    this.vel = new p5.Vector(0, random([-0.5, -1, -1.5, -2]));
    this.limit = random(100, 200);
  }

  show() {
    point(this.pos.x, this.pos.y);
  }

  update() {
    this.pos.add(this.vel);
  }

  explode() {
    let n_particles = random(10, 15);
    let color = random(colorPalette)
    for (let i = 0; i < n_particles; i++) {
      particles.push(new Particle(this.pos, color));
    }
  }
}
