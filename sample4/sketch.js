function setup() {
  createCanvas(600, 400);
  saveGif('myAnimation', 3);
}

function draw() {
  background(0); 
  let time = millis() * 0.001;
  let sizeMod = sin(time) * 20;
  noStroke();
  fill(0);
  ellipse(300, 200, 400 + sizeMod);
  fill(16);
  ellipse(300, 200, 350 + sizeMod);
  fill(32);
  ellipse(300, 200, 300 + sizeMod);
  fill(48);
  ellipse(300, 200, 250 + sizeMod);
  fill(64);
  ellipse(300, 200, 200 + sizeMod);
  fill(80);
  ellipse(300, 200, 150 + sizeMod);
  let changeColor = (sin(frameCount * 0.05) + 1) / 2;
  
  let col1 = color(255, 255, 255);
  let col2 = color(150, 220, 255);
  let sparkleWhite = lerpColor(col1, col2, changeColor);
  
  fill(sparkleWhite);
  quad(100, 210, 500, 210, 400, 200, 200, 200);
  let peakY = 150 + sin(time * 2) * 10; 
  fill(255, 0, 0);
  triangle(290, 205, 300, peakY, 350, 200);
  fill(230, 0, 0);
  triangle(290, 205, 300, peakY, 250, 200);
  fill(sparkleWhite);
  arc(300, 210, 400, 390, radians(0), radians(180));
  let jitter = cos(time * 5) * 15;
  
  stroke(0, 255, 255);
  line(300, peakY, 290 + jitter, 0);
  stroke(0, 0, 255);
  line(300, peakY, 360 + (random() * 10 - 5), 0);
  
  stroke(0, 255, 0);
  line(300, peakY, 310 + jitter * 0.5, 0);
  
  stroke(255, 0, 255);
  line(300, peakY, 240 + (random() * 10 - 5), 0);
  
  stroke(255, 255, 0);
  line(300, peakY, 370 + jitter, 0);
}