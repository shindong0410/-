function setup() {

  createCanvas(600, 400);

  background(0);

  

}



function draw() {

  noStroke();

  fill(0);

  ellipse(300, 200, 400);

  fill(16);

  ellipse(300, 200, 350);

  fill(32);

  ellipse(300, 200, 300);

  fill(48);

  ellipse(300, 200, 250);

  fill(64);

  ellipse(300, 200, 200);

  fill(80);

  ellipse(300, 200, 150);

  fill(256);

  quad(100, 210, 500, 210, 400, 200, 200, 200);

  fill(256, 0, 0);

  triangle(290, 205, 300, 150, 350, 200);

  fill(230, 0, 0);

  triangle(290, 205, 300, 150, 250, 200);

  fill(256);

  arc(300, 210, 400, 390, radians(0), radians(180));

  stroke(0, 256, 256);

  line(300, 150, 290, 0);

  stroke(0, 0, 256);

  line(300, 150, 360, 0);

  stroke(0, 256, 0);

  line(300, 150, 310, 0);

  stroke(256, 0, 256);

  line(300, 150, 240, 0);

  stroke(256, 256, 0);

  line(300, 150, 370, 0);

}

