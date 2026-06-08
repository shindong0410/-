let x,y;

function setup() {
  createCanvas(600, 400);
  x = 292;
  y = 61;
}

function draw() {
  background(245,238,220);
  noStroke();
  fill(40);
  ellipse(300,440,350,200);
  fill(241, 186, 157);
  quad(250, 350, 350, 350, 340, 300, 260, 300);
  arc(300, 350, 100, 60, radians(0), radians(180) );
  arc(200, 200, 30, 60, radians(0), radians(260) );
  arc(400, 200, 30, 60, radians(-80), radians(180) );
  fill(251, 206, 177);
  ellipse(300,200,200,250);
  fill(40);
  arc(330, 150, 190, 120, radians(210), radians(390) );
  arc(300, 150, 230, 170, radians(180), radians(360) );
  arc(270, 150, 190, 120, radians(150), radians(300) );
  arc(270, 130, 180, 140, radians(150), radians(300) );
  arc(330, 130, 180, 140, radians(210), radians(390) );
  arc(290, 160, 30, 70, radians(90), radians(-90) );
  arc(280, 160, 30, 70, radians(90), radians(-90) );
  arc(260, 160, 30, 70, radians(90), radians(-90) );
  arc(250, 160, 30, 70, radians(90), radians(-90) );
  arc(240, 160, 25, 70, radians(90), radians(-90) );
  arc(230, 160, 30, 70, radians(90), radians(-90) );
  arc(220, 160, 30, 70, radians(90), radians(-90) );
  arc(310, 160, 30, 70, radians(90), radians(-90) );
  arc(330, 160, 30, 70, radians(90), radians(-90) );
  arc(340, 160, 30, 70, radians(90), radians(-90) );
  arc(350, 160, 25, 70, radians(90), radians(-90) );
  arc(370, 160, 30, 70, radians(90), radians(-90) );
  arc(380, 160, 25, 70, radians(90), radians(-90) );
  arc(390, 160, 30, 70, radians(90), radians(-90) );
  fill(45);
  arc(300, 160, 30, 70, radians(90), radians(-90) );
  arc(320, 160, 25, 70, radians(90), radians(-90) );
  arc(360, 160, 30, 70, radians(90), radians(-90) );
  arc(270, 160, 30, 70, radians(90), radians(-90) );
  arc(x+18, y-16, 30, 50, radians(100), radians(-80) );
  arc(x-1, y-16, 30, 50, radians(-110), radians(80) );
  fill(230);
  arc(255, 210, 65, 30, radians(180), radians(360) );
  arc(345, 210, 65, 30, radians(180), radians(360) );
  fill(250);
  arc(255, 210, 65, 30, radians(0), radians(180) );
  arc(255, 210, 65, 10, radians(180), radians(360) );
  arc(345, 210, 65, 30, radians(0), radians(180) );
  arc(345, 210, 65, 10, radians(180), radians(360) );
  let x1 = 225;
  let x2 = 225;
  if (mouseX > 240 && mouseX < 270) {
      fill(10);
      ellipse(mouseX, 210, 25);
  }
  else if (mouseX < 240){
      fill(10);
      ellipse(240, 210, 25);
  }
    else if (mouseX > 270){
      fill(10);
      ellipse(270, 210, 25);
  }
    if (mouseX > 330 && mouseX < 360) {
      fill(10);
      ellipse(mouseX, 210, 25);
  }
  else if (mouseX < 330){
      fill(10);
      ellipse(330, 210, 25);
  }
    else if (mouseX > 360){
      fill(10);
      ellipse(360, 210, 25);
  }
  fill(255, 196, 177);
  arc(255, 200, 65, 10, radians(180), radians(360) );
  arc(345, 200, 65, 10, radians(180), radians(360) );
  triangle(300, 250, 300, 200, 310, 200);
  triangle(300, 200, 300, 270, 310, 270);
  arc(310, 265, 20, 20, radians(0), radians(360) );
  fill(255, 210, 187);
  triangle(300, 250, 300, 200, 290, 200); 
  triangle(300, 200, 300, 270, 290, 270);
  arc(290, 265, 20, 20, radians(0), radians(360) );
  fill(255, 208, 179);
  arc(300, 265, 20, 20, radians(-90), radians(90) );
  fill(255, 166, 147)
  arc(300, 290, 50, 10, radians(0), radians(180) );
  fill(45);
  arc(x+18, y-16, 30, 50, radians(100), radians(-80) );
  arc(x-1, y-16, 30, 50, radians(-110), radians(80) );
  fill('#ed0086');
  rect(x, y, 16, 5); 
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    x += 10;
  } else if (keyCode === UP_ARROW) {
    y -= 10;
  } else if (keyCode === DOWN_ARROW) {
    y += 10;
  }
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}
