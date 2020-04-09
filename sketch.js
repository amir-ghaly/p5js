let margin = 100;
let xOff = 100;
let yOff = 100;
let numY;
let numX;
let xGrid;
let yGrid;
let r = 20;
let noiseXOff = 0;
let noiseYOff = 0;
let noiseXStart = 0;
let increment;
let slider;

function setup() {
  createCanvas(displayWidth, displayHeight);
  xGrid = (width-2*margin)/numX;
  yGrid = (height-2*margin)/numY;
  numX = 500;
  numY = 500;
  colorMode(HSB,360,100,100);
  slider = createSlider(0, 0.1,0.0001,0.001);
  slider.style('width', '100px');
}

function draw() {
  background(0);
  noStroke();
  increment= slider.value();
  noiseYOff = 0;
  for (let x = 0; x < numX; x++) {
    noiseXOff = noiseXStart;
    for (let y = 0; y < numY; y++) {
      noiseXOff += increment;
      let phase = noise(noiseXOff,noiseYOff);
      let omt = radians(10*frameCount+360 * phase);
      let size = 1+10*phase;
      let c = color(0, 20+80*phase, 100*phase);
      fill(c);
      push();
      translate(margin + x*xGrid, margin + y*yGrid);
      ellipse(r*sin(omt),r*cos(omt),size,size);
      pop();
    }
    noiseYOff += increment;
  }
  noiseXStart += increment;
}
