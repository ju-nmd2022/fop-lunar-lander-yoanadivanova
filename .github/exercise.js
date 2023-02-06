let starX = [];
let starY = [];

function planet(x, y) {
  ellipse(starX, starY, 200);
}

for (let i = 0; i < 600; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);

  starX.push(x);
  starY.push(y);
  starSize.push(s);
  starSize2.push(s2);
}

function draw() {
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255);
    planet(starX[index], starY[index], 200);
  }
}
