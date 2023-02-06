//background

//stars
let starX = [];
let starY = [];
let starAlpha = [];
let starSize = [];

for (let i = 0; i < 600; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();
  const size = Math.random() * 2.5;

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
  starSize.push(size);
}

let planetX = 0;
//planets
function planet(x, y, s, s2, r, g, b) {
  push();
  fill(r, g, b);
  noStroke();
  ellipse(x, y + 100, 200 * s, 200 * s2);
  pop();
}

//space ship
function spaceShip(x, y) {
  push();
  scale(1.3);
  stroke(255, 255, 255);
  fill(230, 20, 200);
  ellipse(x, y, 60, 30);
  pop();
}

//start button
function button() {
  fill(255, 255, 255);
  rect(width / 2, 100, 100, 40);
  fill(0, 0, 0);
  textSize(25);
  text("Start", width / 2 + 25, 128);
}

let spaceShipY = 10;
let velocity = 0;
let acceleration = 0.2;
let isGameActive = true;
let gameStart = true;

function gravity() {
  spaceShipY = spaceShipY + velocity;
  velocity = velocity + acceleration;
}

function moveUp() {
  if (keyIsDown(38)) {
    spaceShipY -= 2;
    velocity = 0;
  }
}

function draw() {
  noStroke();
  background(0, 0, 0);

  button();

  if (mouseClicked === true) {
    push();
    for (let index in starX) {
      fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
      ellipse(starX[index], starY[index], starSize[index]);
      starAlpha[index] = starAlpha[index] + 0.02;
    }
    pop();

    planet(planetX + 600, 250, 1.7, 1.7, 231, 143, 155);
    planet(planetX, 100, 1.2, 1.2, 255, 193, 80);
    spaceShip(260, spaceShipY);
    planet(350, 550, 4.5, 2.0, 180, 180, 180);
    planet(planetX + 800, -10, 0.4, 0.4, 255, 84, 84);

    if (isGameActive) {
      gravity();
      moveUp();
      planetX -= 2;
    }

    if (spaceShipY > 325) {
      isGameActive = false;
    }
  }
}

//clash with the planets
//start button
//start over button
