function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if(mouseIsPressed === true){
    finalX = mouseX - initX
    finalY = mouseY - initY
    
    rect(initX,initY,finalX,finalY)
  }else{
    initX = mouseX
    initY = mouseY
  }
}