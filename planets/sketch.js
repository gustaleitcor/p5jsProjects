let scale = 10

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseWheel(changeScale)

  objs.push(
    new Obj(0,0, 100000, 128, 0),
    new Obj(1000,0, 10, 50, -10),
    new Obj(1600,0, 10, 50, 10)
  );
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  for (let i = 0; i < objs.length; i++) {
    objs[i].show();
    objs[i].update();
  }
}
