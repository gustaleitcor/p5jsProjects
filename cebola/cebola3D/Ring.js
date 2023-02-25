class Ring {
  constructor(d) {
    this.d = d;
  }

  show() {
    push();
    rotateY(step / this.d);
    rotateX(step / this.d);
    circle(0, 0, this.d);
    pop();
  }
}
