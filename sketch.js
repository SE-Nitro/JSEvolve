var canvasSize = window.innerWidth / 3;

// function setup() {
//   let canvas = createCanvas(canvasSize, canvasSize);
//   canvas.parent("canvas-div");
//   background(255, 255, 255);
// }

function setup() {
  let canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent("canvas-div");
}

function draw() {
  background(255);
  ellipse(width / 2, height / 2, 50, 50);
}

function windowResized() {
  canvasSize = window.innerWidth / 3;
  resizeCanvas(canvasSize, canvasSize);
}
