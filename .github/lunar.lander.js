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

//moon
let moonX = width / 2;
let moonHeight = 300;
let moonY = height - moonHeight / 10;
let moonWidth = 1800;

function moon(x, y, s, s2, r, g, b) {
  push();
  fill(r, g, b);
  noStroke();
  ellipse(x, y, s, s2);
  pop();
}

//planets
let planetRed = [];
let planetGreen = [];
let planetBlue = [];
let planetX = [];
let planetY = [];
let planetSize = [];

for (let i = 0; i < 4; i++) {
  let x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * (moonY - moonHeight / 2 - 100) + 100);
  const size = Math.random() * (200 - 40) + 40;
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);

  planetX.push(x);
  planetY.push(y);
  planetSize.push(size);
  planetRed.push(r);
  planetGreen.push(g);
  planetBlue.push(b);
}

//space ship
let spaceShipY = 10;
let spaceShipX = 360;
let velocity = -1;
let acceleration = 0.2;
let isGameActive = true;
let spaceShipRadius = 30;

function spaceShip(x, y) {
  push();
  scale(1);
  noStroke();
  fill(255, 241, 100, 180);
  ellipse(x, y, 60, 60);
  pop();
}

let shipEllipseX = 360;
let shipEllipseHeight = 30;
let shipEllipseY = 25;
let shipEllipseWidth = 90;

function shipEllipse(x, y, width, height) {
  push();
  noStroke();
  fill(230, 20, 200);
  ellipse(x, y, width, height);
  pop();
}

function flames(x, y) {
  let c1 = color(255, 255, 0); // yellow
  let c2 = color(255, 0, 0); // red
  let flameColor = lerpColor(c1, c2, random()); // random flame color between yellow and red
  fill(flameColor);
  ellipse(x, y, 10, 15);
}

//spaceShip movement
function gravity() {
  spaceShipY = spaceShipY + velocity;
  shipEllipseY = shipEllipseY + velocity;
  velocity = velocity + acceleration;
}

function moveUp() {
  if (keyIsDown(38)) {
    spaceShipY -= 2;
    shipEllipseY -= 2;
    velocity = 0;
    flames(spaceShipX - 20, spaceShipY + 32);
    flames(spaceShipX + 20, spaceShipY + 32);
  }
}

//the spaceship colliding with the moon
function shipMeetsTheMoon() {
  if (spaceShipY + spaceShipRadius >= moonY - moonHeight / 2) {
    isGameActive = false;
  }
}

function stopCollision() {
  for (let i = 0; i < 4; i++) {
    /*if(planetX[index] === spaceShipX && planetY[index] === spaceShipY) {
  isGameActive = false;
  return;
} }*/
    let distance = dist(spaceShipX, spaceShipY, planetX[i], planetY[i]);
    size = planetSize[i] / 2;
    if (distance <= spaceShipRadius + planetSize[i] / 2) {
      isGameActive = false;
      hitPlanet = true;
    }
  }
}

//start button
let isGameStarted = false;
let hitPlanet = false;
function drawStartButton() {
  // draw the button
  fill(255);
  rect(width / 2 - 50, height / 2 - 20, 100, 40);
  // draw the text
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Start", width / 2, height / 2);
}

function mousePressed() {
  if (
    !isGameStarted &&
    mouseX > width / 2 - 50 &&
    mouseX < width / 2 + 50 &&
    mouseY > height / 2 - 20 &&
    mouseY < height / 2 + 20
  ) {
    isGameStarted = true;
    spaceShipY = 10;
    shipEllipseY = 25;
    velocity = 0;
    acceleration = 0.2;
    isGameActive = true;
    hitPlanet = false;
  }
}

function startGame() {
  if (velocity === -1) {
    push();
    for (let index in starX) {
      fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
      ellipse(starX[index], starY[index], starSize[index]);
      starAlpha[index] = starAlpha[index] + 0.02;
    }
    pop();
    fill(255, 255, 255);
    textSize(70);
    text("Lunar Lander", width / 2, height / 2 - 110);
  }
}

function winGame() {
  if (hitPlanet === false && velocity < 7 && velocity >= 0) {
    background(0, 255, 100);
    drawStartButton();
    fill(255, 255, 255);
    textSize(30);
    text("You win", width / 2, height / 2 - 70);
    textStyle(BOLD);
    isGameStarted = false;
  }
}

function loseGame() {
  if (hitPlanet === true || velocity > 7) {
    background(255, 0, 70);
    drawStartButton();
    fill(255, 255, 255);
    textSize(30);
    text("You lose", width / 2, height / 2 - 70);
    textStyle(BOLD);
    isGameStarted = false;
  }
}

function draw() {
  noStroke();
  background(0, 0, 0);

  if (!isGameStarted) {
    drawStartButton();
    startGame();
    winGame();
    loseGame();
  } else {
    drawGame();
  }

  function drawGame() {
    //drawing the stars
    push();
    for (let index in starX) {
      fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
      ellipse(starX[index], starY[index], starSize[index]);
      starAlpha[index] = starAlpha[index] + 0.02;
    }
    pop();

    //drawing the planets
    push();
    for (let index in planetX) {
      fill(planetRed[index], planetGreen[index], planetBlue[index]);
      ellipse(planetX[index], planetY[index], planetSize[index]);
    }
    pop();

    spaceShip(spaceShipX, spaceShipY);
    shipEllipse(
      shipEllipseX,
      shipEllipseY,
      shipEllipseWidth,
      shipEllipseHeight
    );
    moon(moonX, moonY, moonWidth, moonHeight, 180, 180, 180);

    if (isGameActive) {
      gravity();
      moveUp();
      for (let index in planetX) {
        if (planetX[index] < -50) {
          planetX[index] = width;
        }
        planetX[index] -= 3;
      }
      stopCollision();
      shipMeetsTheMoon();
    } else {
      winGame();
      loseGame();
    }
  }
}
