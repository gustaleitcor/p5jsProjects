class Aurea {
  constructor(r, h) {
    this.r = r/N_AUREAS * h ;
    this.turn = 0;
    this.state = false;
  }

  display() {
    ellipse(width / 2, height / 2, this.r - this.turn, this.r);
    
  }

  update(s){
    if (this.r - this.turn < -this.r) {
      this.turn = 0
    }
    this.turn += s;
  }
}


