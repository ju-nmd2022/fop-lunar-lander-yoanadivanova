let starX = [];
let starY = [];
let starSize = [];

for (let i = 0; i < 600; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const s = Math.random();

  starX.push(x);
  starY.push(y);
  starSize.push(s);
}

function draw() {
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starSize[index])));
    ellipse(starX[index], starY[index], starSize);
  }
}
