background(255, 255, 255);

//background
function planet(x, y, s, s2, r, g, b) {
  push();
  fill(r, g, b);
  ellipse(x, y + 100, 200 * s, 200 * s2);
  pop();
}

//space ship
function spaceShip(x, y) {
  fill(230, 20, 2);
  beginShape();
  vertex(x - 20, y);
  bezierVertex(x - 20, y - 100, x - 20, y - 100, x, y - 140);
  vertex(x, y - 140);
  bezierVertex(x + 20, y - 100, x + 20, y - 100, x + 20, y);
  vertex(x + 20, y);
  vertex(x + 30, y + 10);
  bezierVertex(x, y + 15, x, y + 15, x - 30, y + 10);
  endShape(CLOSE);
}

function draw(r, g, b) {
  planet(600, 250, 1.7, 1.7, 20, 20, 20);
  planet(0, 100, 1.2, 1.2);
  spaceShip(300, 200);
  planet(330, 550, 4.0, 2.0);
  planet(450, -10, 0.4, 0.4);
}
