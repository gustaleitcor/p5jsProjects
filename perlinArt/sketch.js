function setup() {
  createCanvas(1920,1080);
  let x, y;
  background(0);
  stroke(220)
  for(let i = 0; i < height; i++){
    x = noise(i);
    for(let j = 0; j < width; j++){
      y = noise(j)
      point(x * width, y * height);
    }
  }
  saveCanvas('myCanvas', 'jpg');
}

function draw() {
  
}