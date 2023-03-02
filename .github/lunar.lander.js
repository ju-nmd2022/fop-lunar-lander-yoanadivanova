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

//planets

let planetRed = [];
let planetGreen = [];
let planetBlue = [];
let planetX = [];
let planetY = [];
let planetSize = [];

for (let i = 0; i < 4; i++) {
  let x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const size = Math.random(40, 200) * 300;
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

/*let planetX1 = 120;
let planetX2 = 600;
let planetX3 = 800;
let planetX4 = 1050;
let planetX5 = 1400;
let planetX6 = 1800;
let planetSize1 = 200;
let planetSize2 = 400;
let planetSize3 = 100;
let planetSize4 = 250;
let planetSize5 = 320;
let planetSize6 = 300;
let planetY1 = 200;
let planetY2 = 400;
let planetY3 = 90;
let planetY4 = 300;
let planetY5 = 50;
let planetY6 = 400;*/

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

//planet dots

/*let dotsX = 0;

function dots(x, y, s, s2, r, g, b, a) {
  push();
  fill(r, g, b, a);
  noStroke();
  ellipse(x, y, s, s2);
  pop();
}*/

//space ship

let spaceShipY = 10;
let spaceShipX = 360;
let velocity = 0;
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

//start button
/*function button() {
  fill(255, 255, 255);
  rect(width / 2, 100, 100, 40);
  fill(0, 0, 0);
  textSize(25);
  text("Start", width / 2 + 25, 128);
}*/

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
  }
}

//the spaceship colliding with the planets

function stopGame() {
  let distanceX = abs(moonX - spaceShipX);
  let distanceY = abs(moonY - spaceShipY);

  if (distanceX > moonWidth / 2 + spaceShipRadius) {
    return;
  }
  if (distanceY > moonHeight / 2 + spaceShipRadius) {
    return;
  }

  if (distanceX <= moonWidth / 2) {
    isGameActive = false;
    return;
  }
  if (distanceY <= moonHeight / 2) {
    isGameActive = false;
    return;
  }

  let cornerDistance =
    pow(distanceX - moonpWidth / 2, 2) + pow(distanceY - moonHeight / 2, 2);

  if (cornerDistance <= pow(spaceShipRadius, 2)) {
    isGameActive = false;
  }
}

/*function stopGameWhenMeetPlanet() {
    let distance = dist(spaceShipX, spaceShipY, planetX, planetY);
    if (distance <= spaceShipRadius + planetSize / 2) {
      isGameActive = false;
  }
}

function stopGameSecondPlanet() {
  const distance2 = dist(spaceShipX, spaceShipY, planetX2, planetY2);
  if (distance2 <= spaceShipRadius + planetSize2 / 2) {
    isGameActive = false;
  }
}

function stopGameThirdPlanet() {
  const distance3 = dist(spaceShipX, spaceShipY, planetX3, planetY3);
  if (distance3 <= spaceShipRadius + planetSize3 / 2) {
    isGameActive = false;
  }
}

function stopGameForthPlanet() {
  const distance1 = dist(spaceShipX, spaceShipY, planetX4, planetY4);
  if (distance1 <= spaceShipRadius + planetSize4 / 2) {
    isGameActive = false;
  }
}

function stopGameFifthPlanet() {
  const distance2 = dist(spaceShipX, spaceShipY, planetX5, planetY5);
  if (distance2 <= spaceShipRadius + planetSize5 / 2) {
    isGameActive = false;
  }
}

function stopGameSixedPlanet() {
  const distance3 = dist(spaceShipX, spaceShipY, planetX6, planetY6);
  if (distance3 <= spaceShipRadius + planetSize6 / 2) {
    isGameActive = false;
  }
}*/

function draw() {
  noStroke();
  background(0, 0, 0);

  push();
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], starSize[index]);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  pop();

  push();
  for (let index in planetX) {
    fill(planetRed[index], planetGreen[index], planetBlue[index]);
    ellipse(planetX[index], starY[index], planetSize[index]);
  }
  pop();

  /*planet(planetX1, planetY1, planetSize1, planetSize1, 231, 143, 155);
  planet(planetX2, planetY2, planetSize2, planetSize2, 255, 193, 80);
  planet(planetX3, planetY3, planetSize3, planetSize3, 255, 84, 84);
  planet(planetX4, planetY4, planetSize4, planetSize4, 231, 143, 155);
  planet(planetX5, planetY5, planetSize5, planetSize5, 255, 193, 80);
  planet(planetX6, planetY6, planetSize6, planetSize6, 255, 84, 84);*/
  spaceShip(spaceShipX, spaceShipY);
  shipEllipse(shipEllipseX, shipEllipseY, shipEllipseWidth, shipEllipseHeight);
  moon(moonX, moonY, moonWidth, moonHeight, 180, 180, 180);

  /*dots(dotsX + 50, 180, 20, 20, 201, 103, 105, 180);
  dots(dotsX + 150, 150, 40, 40, 201, 103, 105, 150);
  dots(dotsX + 80, 220, 25, 25, 201, 103, 105, 100);
  dots(dotsX + 160, 250, 15, 15, 201, 103, 105, 255);
  dots(dotsX + 180, 190, 25, 25, 201, 103, 105, 55);
  dots(dotsX + 120, 270, 35, 35, 201, 103, 105, 155);
  dots(dotsX + 100, 180, 15, 15, 201, 103, 105, 55);
  dots(dotsX + 90, 135, 20, 20, 201, 103, 105, 155);
  dots(dotsX + 200, 230, 10, 10, 201, 103, 105, 140);
  dots(dotsX + 65, 260, 15, 15, 201, 103, 105, 100);*/

  if (isGameActive) {
    gravity();
    moveUp();
    for (let index in planetX) {
      if (planetX[index] < -50) {
        planetX[index] = width;
      }
      planetX[index] -= 3;
    }
    stopGame();
    //stopGameWhenMeetPlanet();
    /*planetX1 -= 2;
    planetX2 -= 2;
    planetX3 -= 2;
    planetX4 -= 2;
    planetX5 -= 2;
    planetX6 -= 2;
    dotsX -= 2;
    stopGameFirstPlanet();
    stopGameSecondPlanet();
    stopGameThirdPlanet();
    stopGameForthPlanet();
    stopGameFifthPlanet();
    stopGameSixedPlanet();*/
  }

  /*if (spaceShipY > 420) {
    isGameActive = false;
  }*/
}

//start button
//start over button
//ship collides with planets
