class Snow {
  constructor(r) {
    this.r = r;
    this.pos = new p5.Vector(random(width), random(-this.r - 500, -this.r));
  }

  update() {
    this.pos.add(G);
    
    let n = noise((this.pos.y+this.pos.z) / height);
    
    this.pos.x += n*P - P/2;
    this.pos.z++;
  }

  show() {
    circle(this.pos.x, this.pos.y, this.r);
  }

  isOut() {
    if (this.pos.y > height+this.r) {
      return true;
    }
    return false;
  }
  
  randomize(){
    this.pos.x = random(-100, width + 100);
    this.pos.y = -random(this.r, this.r+500)
  }
}
