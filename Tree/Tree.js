class Tree {
  constructor(x, y, appear, leaves) {
    this.pos = new p5.Vector(x, y);
    this.branchs = [];
    if(leaves == undefined){
      this.leaves = [];
    }else{
      this.leaves = leaves
    }
    
    this.trees = [];

    this.appear = appear;
  }

  createLeaves(n, leaves, R) {
    if (leaves == undefined) {
      for (let i = 0; i < n; i++) {
        this.leaves.push(new Leave(R));
      }
    }
  }

  grow() {
    //grows trunk
    if (this.pos.y > -height/2 && this.appear) {
      this.pos.add(0, -1);
    }
    for (let i = 0; i < this.trees.length; i++) {
      this.trees[i].show();
      this.trees[i].grow();
    }

    //grows branchs
    for (let i = this.branchs.length - 1; i > 0; i--) {
      this.branchs[i].grow();
      if (this.branchs[i].isGrown) {
        this.trees.push(
          new Tree(this.branchs[i].pos.x, this.branchs[i].pos.y, false, this.leaves)
        );
        this.branchs.splice(i, 1);
      }
    }

    for (let i = this.leaves.length - 1; i > 0; i--) {
      let d = p5.Vector.dist(this.pos, this.leaves[i].pos);
      //this.leaves[i].show();
      if (d < MAX_DIST) {
        this.branchs.push(new Branch(this.pos, this.leaves[i].pos));
        this.leaves.splice(i, 1);
      }
    }
  }

  show() {
    //shows trunk
    if (this.appear) {
      push();
      let w = map(this.pos.y, 0, -height + 75, 50, 10)
      strokeWeight(w)
      point(this.pos.x, this.pos.y);
      pop();
    }

    //shows branchs
    for (let i = 0; i < this.branchs.length; i++) {
      this.branchs[i].show();
    }
  }
}
