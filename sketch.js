let button1, button2, button3, button4;
let brushSelect = 0;


function setup() {
  createCanvas(1000, 800, WEBGL);
  background(0);
  rectMode(CENTER);

  buttonSetup(button2, 'Type', 1, width * .25, 0);
  buttonSetup(button3, "Video", 2, width * .5, 0);
  buttonSetup(button4, 'Bomb', 3, width * .75, 0);
  buttonSetup(button1,"Cube", 0, 0, 0);
  print(brushSelect);



}

function draw() {
  if (brushSelect === 0){
    paintCube();
  }

}



function changeBrush(brushNumber){
  brushSelect = brushNumber;
}

function buttonSetup(buttonName, buttonLabel, assignedValue, x, y){
  buttonName = createButton(buttonLabel);
  buttonName.position(x,y);
  buttonName.mousePressed(changeBrush(assignedValue));
}

function paintCube(){
  if (mouseIsPressed) {
    normalMaterial();
    translate(mouseX - width / 2, mouseY - height / 2, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(width / 50);
    pop();
  }
}

/*
function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(0);

  translate(-240, -100, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  plane(70);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(70, 70, 70);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cylinder(70, 70);
  pop();

  translate(-240 * 2, 200, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cone(70, 70);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(70);
  pop();
}
*/
