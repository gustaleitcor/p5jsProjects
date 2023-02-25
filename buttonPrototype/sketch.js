let buttons = [[50, 60, 150, 200, 0],[30, 20, 300, 100, 0]];

function createButtom() {
  for (let i = buttons.length; i--; ) {
    rect(
      buttons[i][0],
      buttons[i][1],
      buttons[i][2],
      buttons[i][3],
      buttons[i][4]
    );
  }
}

function buttomClick() {
  for (let i = buttons.length; i--; ) {
    if (
      mouseX >= buttons[i][0] &&
      mouseX <= buttons[i][2] + buttons[i][0] &&
      mouseY >= buttons[i][1] &&
      mouseY <= buttons[i][3] + buttons[i][1]
    ) {
      itWorks();
      if (buttons[i][4] == 0){
        buttons[i][4] = 50
      }else{
        buttons[i][4] = 0
      }
    }
  }
}

function mouseClicked() {
  buttomClick();
}

function itWorks() {
  console.log("It works!!!");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  createButtom();
}
