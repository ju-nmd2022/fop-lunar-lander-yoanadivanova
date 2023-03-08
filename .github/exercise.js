/*function planet(x, y, s, s2, r, g, b) {
  push();
  fill(r, g, b);
  noStroke();
  ellipse(x, y, s, s2);
  pop();
}

function dots(x, y, s, s2, r, g, b, a) {
  push();
  fill(r, g, b, a);
  noStroke();
  ellipse(x, y, s, s2);
  pop();
}

function planetRing() {
  fill(255, 293, 80);
  noStroke();
  beginShape();
  vertex(445, 530);
  bezierVertex(410, 600, 800, 160, 710, 230);
  vertex(710, 230);
  bezierVertex(700, 240, 805, 160, 450, 530);
  endShape();
}


function draw() {
  planet(120, 200, 200, 200, 231, 143, 155);
  dots(50, 180, 20, 20, 201, 103, 105, 180);
  dots(150, 150, 40, 40, 201, 103, 105, 150);
  dots(80, 220, 25, 25, 201, 103, 105, 100);
  dots(160, 250, 15, 15, 201, 103, 105, 255);
  dots(180, 190, 25, 25, 201, 103, 105, 55);
  dots(120, 270, 35, 35, 201, 103, 105, 155);
  dots(100, 180, 15, 15, 201, 103, 105, 55);
  dots(90, 135, 20, 20, 201, 103, 105, 155);
  dots(200, 230, 10, 10, 201, 103, 105, 140);
  dots(65, 260, 15, 15, 201, 103, 105, 100);

  planet(600, 400, 400, 400, 255, 193, 80);
  planetRing();
}

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
  starY.push(y);
  planetSize.push(size);
  planetRed.push(r);
  planetGreen.push(g);
  planetBlue.push(b);
}

function draw() {
  noStroke();
  background(0, 0, 0);

  push();
  for (let index in planetX) {
    fill(planetRed[index], planetGreen[index], planetBlue[index]);
    console.log(planetRed[index]);
    ellipse(planetX[index], starY[index], planetSize[index]);
  }
  pop();

  for (let index in planetX) {
    if (planetX[index] < -50) {
      planetX[index] = width;
    }
    ellipse(planetX[index], starY[index], planetSize[index]);
    planetX[index] -= 2;
  }

  for (let index in planetX) {
    planetX[index] -= 2;
  }
}*/

/*let spaceShipX = 50;
let spaceShipY = 50;
let spaceShipWidth = 60;
let spaceShipHeight = 30;

function spaceShip(x, y, s, s2, r, g, b) {
  push();
  fill(r, g, b);
  noStroke();
  ellipse(x, y, s, s2);
  pop();
}

let planetX = width / 2;
let planetHeight = 300;
let planetY = height - (planetHeight / 10);
let planetWidth = 1800;


function planet(x, y, s, s2, r, g, b) {
  push();
  fill(r, g, b);
  noStroke();
  ellipse(x, y, s, s2);
  pop();
}

let isGameActive = true;

function stopGame() {
  let distance = dist(spaceShipX, spaceShipY, planetX, planetY);
 
  if (distance <= (spaceShipWidth + planetWidth) / 2 && distance <= (spaceShipHeight + planetHeight) / 2) {
    isGameActive = false;
  }

function draw() {
background(0, 0, 0);
    spaceShip(spaceShipX, spaceShipY, spaceShipWidth, spaceShipHeight);
    //planet(width / 2, 600, 800, 300, 180, 180, 180);
    planet(planetX, planetY, planetWidth, planetHeight);
  }

if(isGameActive){
  spaceShipY += 2;
  stopGame();
}
}*/

/*let spaceShipX = 50;
let spaceShipY = 50;
let spaceShipWidth = 60;
let spaceShipHeight = 30;

let planetX = 100;
let planetY = height / 2;
let planetRadius = 100;

let isGameActive = true;

function stopGame() {
  let distanceX = abs(spaceShipX - planetX);
  let distanceY = abs(spaceShipY - planetY);

  if (distanceX > spaceShipWidth / 2 + planetRadius) {
    return;
  }
  if (distanceY > spaceShipHeight / 2 + planetRadius) {
    return;
  }

  if (distanceX <= spaceShipWidth / 2) {
    isGameActive = false;
    return;
  }
  if (distanceY <= spaceShipHeight / 2) {
    isGameActive = false;
    return;
  }

  let cornerDistance_sq =
    pow(distanceX - spaceShipWidth / 2, 2) +
    pow(distanceY - spaceShipHeight / 2, 2);

  if (cornerDistance_sq <= pow(planetRadius, 2)) {
    isGameActive = false;
  }
}

function draw() {
  background(0, 0, 0);

  if (isGameActive) {
    spaceShipY += 2;
    stopGame();
  }

  ellipse(spaceShipX, spaceShipY, spaceShipWidth, spaceShipHeight);
  circle(planetX, planetY, planetRadius * 2);
}*/

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
let alien = createImg(
  "https://www.freepnglogos.com/uploads/alien-png/alien-gesture-peace-victory-vector-graphic-pixabay-12.png"
);

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

function draw() {
  background(0, 0, 0);

  spaceShip(spaceShipX, spaceShipY);
  alien.position(spaceShipX, spaceShipY);
  alien.size(30, 40);
  shipEllipse(shipEllipseX, shipEllipseY, shipEllipseWidth, shipEllipseHeight);
}
