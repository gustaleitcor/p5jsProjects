class Leave {
  constructor(R) {
    this.pos = new p5.Vector(
      random(-R, R),
      random(-height/2-R, -height/2+R)-height/8
    );
  }
  
  show(){
    circle(this.pos.x, this.pos.y, 2)
  }
}
