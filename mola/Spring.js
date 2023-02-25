class Spring {
  constructor(springPosX, springPosY, ballDist, k, mass) {
    this.springPos = new p5.Vector(springPosX, springPosY);
    this.springForce = new p5.Vector(0, 0);
    this.neutralDist = ballDist;
    this.dist = this.neutralDist;

    this.ballPos = new p5.Vector(
      this.springPos.x,
      this.springPos.y + this.neutralDist
    );
    this.ballVel = new p5.Vector(0, 0);

    this.ballmass = mass;
    this.k = k;
  }

  show() {
    fill(0);
    circle(this.springPos.x, this.springPos.y, 8);
    fill(255);
    line(this.springPos.x, this.springPos.y, this.ballPos.x, this.ballPos.y);
    push();
    fill(color(255, 100, 100))
    circle(this.ballPos.x, this.ballPos.y, 32);
    pop();
  }
  update() {
    this.dist = p5.Vector.dist(this.ballPos, this.springPos);
    this.dist = this.dist - this.neutralDist;
    this.v = p5.Vector.sub(this.ballPos, this.springPos);
    this.v.normalize();
    this.springForce.x = this.dist * this.k * this.v.x;
    this.springForce.y = this.dist * this.k * this.v.y;

    if (this.springForce < 0) {
      console.log("aha");
    }

    this.ballVel.add(gravity);
    this.ballVel.add(this.springForce);
    this.ballPos.add(this.ballVel);
    this.ballVel.mult(0.99);
  }
}
