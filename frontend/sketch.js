let slider;
var h = 100;
var angle = 45;

function setup() {
  createCanvas(400, 400);

  slider = createSlider(0, 90, 0, 1);
  slider.position(10, height + 10);
  slider.style('width', '200px');
}

function draw() {
  background(220);

  angle = PI/180 * slider.value();

  translate(width/2, height);
  branch(h);
}

function branch(h){
  line(0, 0, 0, -h);
  translate(0, -h);

  h = h * 0.65;

  if (h > 4){
    push();
    rotate(angle);
    branch(h);
    pop();

    push();
    rotate(-angle);
    branch(h);
    pop();
  }
}