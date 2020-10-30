var x = 188;
var y = 60;

var headX = 170;
var headY = 65;
var headDirection = 1;

var bodyX = 130;
var bodyY = 110;

var legX = 190;
var legY = 325;

mouthY = 96;
mouthX = 170;   

var size = 20;
var count = 0;
var sizeDirection = 4;

var movement = 2
var movement2 = 3;
var leftlegMovement = 3


function setup() {
  createCanvas(400, 400);
   movement = Math.floor(Math.random() * 10);
}

function draw()
{
  background(220);
  fill(15);
  //hair
  circle(171,50,110);
  ellipse(171,70,90,140);
  fill(90,60,38);
  //head
  circle(headX,headY,90);
  //right arm
  line(20,40,200,200);
  //left arm
  line(300,15,200,160)
  fill(230)
  //right eye
  circle(153,60,10);
  //left eye
  circle(x,y,10);
    if(x >= 400 && y >=400)
    {
       movement*=-1;
    }
    if(x <= 0 && y >= 0)
    {
        movement *= -1;
    }
     x += movement;
    y += movement;
  fill(120,89,250);
  //body
  rect(bodyX,bodyY,80,160);
  fill(120,89,250);
  //right foot
  rect(108,378,50,10);
  //left foot
  rect(184,378,50,10);  
  fill(10)
  //right ear
  ellipse(120,70,10,19);
  //left ear
  ellipse(220,70,10,19);
  //nose
  triangle(169,80,160,80,169,70);
  //right leg
  ellipse(150,legY,30,110);
    if(legY >= 400 || legY <= 0)
    {
       leftlegMovement *= -1;
    }

     legY += leftlegMovement;

  //left leg
  ellipse(190,legY,30,110)  
  fill(250)
  //mouth
  ellipse(mouthX,mouthY,30,10)
  //right pupil
  point(153,60);
  //left pupil
  point(187,60);
  //freckle
  point(176,85);
  fill(10);
  //hair
  ellipse(171,20,90,20);
  //right glasses
  line(140,52,165,52);
  line(140,67,162,67);
  line(140,52,140,67);
  line(165,52,162,67);
  //left glasses
  line(175,52,200,52);
  line(180,67,200,67);
  line(200,52,200,67);
  line(175,52,180,67);
  //frames
  line(164,60,178,60);
  line(140,52,120,52);
  line(200,52,220,52);
  //hair curls
  ellipse(140,30,10,40);
  ellipse(152,30,10,30);
  ellipse(165,30,10,30);
  ellipse(179,30,10,30);
  ellipse(194,30,10,30);
  ellipse(205,30,10,30);
  textSize(size);
      size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
  text('Jasmyn Barham', 35, 390);
  textSize(20)
  text('A Self Portrait', 240,140)

    if(bodyX >= 300 || bodyX <= 0)
    {
       movement *= -1;
    }

     bodyX += movement;
  
  if(mouthX >= 300 || mouthX <= 0)
  {
    movement2 *= -1;
  }
    mouthX += movement2

}