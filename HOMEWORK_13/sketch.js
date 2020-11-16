//x and y for my player 
var playerX = 50;
var playerY = 50;
//key codes for each letter
var w = 87;
var a = 83;
var s = 65;
var d = 68;

//variables x and y for my enemy
var shapeX = 70;
var shapeY = 90;
var shapeXspeed;
var shapeYspeed;

// array variables
var myXs = [];
var myYs = [];
var myDiameters = [];

// arrays for speed
var myXSpeeds = [];
var myYSpeeds = [];

//function for randomNumber 
function randomNumber(number) {
  return Math.floor(Math.random() * number) + 105;
}



//variables for oneObstacle
var oneObstacleX = 250;
var oneObstacleY = 400;
var diameter2 = 90;
var oneObstacleXspeed;
var oneObstacleYspeed;

//variables for twoObstacle
var twoObstacleX = 450;
var twoObstacleY = 200;
var diameter = 90;
var twoObstacleXspeed;
var twoObstacleYspeed;


// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
  createCanvas(600, 600);

  var x = 180;
  var y = 80;
  var diameter = 70;
  for (var i = 0; i < 5; i++) {
    myXs[i] = randomNumber(300);
    myYs[i] = randomNumber(600);
    myDiameters[i] = randomNumber(10);
    x += 100;
    y += 75;
    diameter += 10;

    // speeds for arrays
    myXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    myYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
  }
  //random shape speed
    shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1); 
}


//function for borders 
function drawBorders() {
  //top border
  rect(0, 0, width, 15);
  //left border
  rect(0, 0, 15, height);
  //right lower border
  rect(width - 15, 0, 20, height - 65);
  //bottom border
  rect(0, 590, width, 15)
}

//function for exit sign
function drawExit() {
  textSize(20);
  text("EXIT", 530, 525);
}

//function for exit message
function drawexitSign() {
  textSize(20);
  text("EXIT", 530, 525);
}

//function for oneObstacle
function drawoneObstacle() {
  fill(20, 100, diameter2);
  circle(oneObstacleX, oneObstacleY, 80);

  if (oneObstacleX <= 400) {
    oneObstacleX += 6;
  } else if (oneObstacleX > 100) {
    oneObstacleX += 2;
    console.log("second else if for x");
  } else if (oneObstacleX > 400) {
    oneObstacleX = 10;
  }


  if (oneObstacleY <= 200) {
    oneObstacleY += 3;
  } else if (oneObstacleY > 200) {
    oneObstacleY += 1;
    console.log("second else if for y");
  } else if (oneObstacleY > 200) {
    oneObstacleY = 90;
  }


  if (diameter2 <= 300) {
    diameter2 += 4;
  } else if (diameter2 > 200) {
    diameter2 += 6;
    console.log("second else if for diameter");
  } else if (diameter2 > 300) {
    diameter2 = 15;
  }

  // random speed
  oneObstacleXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
  oneObstacleYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);

  // move first obstacle
  oneObstacleX += oneObstacleXspeed;
  oneObstacleY += oneObstacleYspeed;

  // check to see if the shape has gone out of bounds
  if (oneObstacleX > width) {
    oneObstacleX = 0;
  }
  if (oneObstacleX < 0) {
    oneObstacleX = width;
  }
  if (oneObstacleY > height) {
    oneObstacleY = 0;
  }
  if (oneObstacleY < 0) {
    oneObstacleY = height;
  }
}

//function for twoObstacle 
function drawtwoObstacle() {
  fill(0, 200, 300);
  circle(twoObstacleX, twoObstacleY, diameter);

  if (twoObstacleX <= 450) {
    twoObstacleX += 5;
  } else {
    twoObstacleX = 10;
  }
  if (twoObstacleY <= 450) {
    twoObstacleY += 3;
  } else {
    twoObstacleY = 22;
  }
  if (diameter <= 170) {
    diameter += 2;
  } else {
    diameter = 15;
  }

  // random speed
  twoObstacleXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);
  twoObstacleYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);

  // move second obstacle
  twoObstacleX += twoObstacleXspeed;
  twoObstacleY += twoObstacleYspeed;

  // check to see if the shape has gone out of bounds
  if (twoObstacleX > width) {
    twoObstacleX = 0;
  }
  if (twoObstacleX < 0) {
    twoObstacleX = width;
  }
  if (twoObstacleY > height) {
    twoObstacleY = 0;
  }
  if (twoObstacleY < 0) {
    twoObstacleY = height;
  }
}

//function for createPlayer (small white circle with keys)
function createPlayer() {
  fill(230);
  circle(playerX, playerY, 40);
}

//function for player movement 
function playerMovement() {
  if (keyIsDown(w)) {
    playerY -= 10;
  }
  if (keyIsDown(a)) {
    playerY += 10;
  }
  if (keyIsDown(s)) {
    playerX -= 10;
  }
  if (keyIsDown(d)) {
    playerX += 10;
  }
}

//function for enemy 
function createEnemy() {
  fill(13, 230, 200);
}

//function for drawn circle 
function drawCircle() {
  circle(shapeX, shapeY, 15, 15);
}





function draw() {
  background(180, 20, 120);
  stroke(0);
  fill(0);

  for (var i = 0; i < myXs.length; i++) {
    circle(myXs[i], myYs[i], myDiameters[i]);
    // go through the speeds array and update the myXs and myYs
    // move second obstacle
    myXs[i] += myXSpeeds[i];
    myYs[i] += myYSpeeds[i];

    // check to see if the shape has gone out of bounds
    if (myXs[i] > width) {
      myXs[i] = 0;
    }
    if (myXs[i] < 0) {
      myXs[i] = width;
    }
    if (myYs[i] > height) {
      myYs[i] = 0;
    }
    if (myYs[i] < 0) {
      myYs[i] = height;
    }
  }


  //draw the borders
  drawBorders();

  //draw the exit sign
  drawExit();


  //exit message
  drawexitSign();


  // my first obstacle
  drawoneObstacle();



  //my second obstacle 
  drawtwoObstacle();


  //player (smallish white circle)
  createPlayer();


  //keys and player movement
  playerMovement();


  // enemy (small shape)
  createEnemy();

  // drawn shape (blue shape)
  drawCircle();


  // random speed for all shapes 
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);

  // move small enemy
  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;
  // check to see if the shape has gone out of bounds
  if (shapeX > width) {
    shapeX = 0;
  }
  if (shapeX < 0) {
    shapeX = width;
  }
  if (shapeY > height) {
    shapeY = 0;
  }
  if (shapeY < 0) {
    shapeY = height;
  }

  // check to see if the character has left the exit
  function drawexitSign() {
    if (playerX > height && playerY > height - 65) {
      fill(0);
      stroke(5);
      textSize(40);
      text("You Win!", 230, 300);
    }

  }


  // create the shape based on the mouse click
  fill(12, 13, 140);
  circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked() {
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}