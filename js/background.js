var time, theta = 0;
var frames = 240,
  num = 200,
  num2 = 6;
var rs;

function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  smooth(8);
  noStroke();
  rs = random(10000);
}

function draw() {
  randomSeed(rs);
  background("#490A3D");
  time = (frameCount % frames) / float(frames);
  for (var j = 0; j < num2; j++) {
    drawWaves(j);
  }

  for (var i = 0; i < num; i++) {
    drawBubble(i);
  }
  theta += TWO_PI / frames;
  
    if (mouseIsPressed) createCanvas(windowWidth, windowHeight-4);
  
}

function drawBubble(i) {
  var x = random(width);
  var y = random(height);
  var sc = random(1, 3);
  var rotation = random(-.01, 0.1);
  var m = map(sin(theta + (TWO_PI / num) * i), -1, 1, .5, 2);
  var sz = random(20, 50) * m;
  push();
  scale(sc);
  translate(x, y);
  rotate(rotation);
  fill('rgba(248,202,0,.8)');
  if (random(1) > .8) fill('rgba(189,21,80, .8)');
  if (random(1) > .9) fill('rgba(138,155,15, .8)');
  ellipse(0, -time * height + height, sz, sz);
  ellipse(0, -time * height, sz, sz);
  pop();
}

function drawWaves(j) {
  var sz = height/(num2*1.5);
  var y3 = map(j, 0, num2 - 1, 0, height);
  for (var i = 0; i < num; i++) {
    var x2 = map(i, 0, num - 1, 0, width);
    var y2 = y3 + map(sin(theta + TWO_PI / num * i), -1, 1, -50, 50);
    fill(255);
    ellipse(x2, y2, sz, sz);
  }
}

function mouseReleased() {
  rs = random(10000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight-4);
}