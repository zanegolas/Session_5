let button0, button1, button2, button3;
let brushSelect, typeIndex, myFont, textBank, typeMax;

function preload() {
  myFont = loadFont('assets/Inconsolata-Regular.ttf');
  textBank = loadStrings('assets/text_bank.txt');
}

function setup() {
  createCanvas(1000, 800, WEBGL);
  background(0);
  rectMode(CENTER);

  button0 = createButton('Cube');
  button0.position(0,0);
  button0.mousePressed(brush0);

  button1 = createButton('Type');
  button1.position(width * .25,0);
  button1.mousePressed(brush1);

  button2 = createButton('Video');
  button2.position(width * .5,0);
  button2.mousePressed(brush2);

  button3 = createButton('Dynamite');
  button3.position(width * .75,0);
  button3.mousePressed(brush3);

  brushSelect = 0;
  typeIndex = 0;
  typeMax = textBank.length - 1;



}

function draw() {
  if (brushSelect === 0){
    paintCube();
  }
  if (brushSelect === 1){
    typeText();
  }

}

function brush0(){
  brushSelect = 0;
}

function brush1(){
  brushSelect = 1;
}

function brush2(){
  brushSelect = 2;
}

function brush3(){
  brushSelect = 3;
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

function typeText(){
  translate(mouseX - width / 2, mouseY - height / 2, 0);
  let speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY);
  textSize(width/1000 * speed);
  textFont(myFont);
  textAlign(CENTER,CENTER);
  if (mouseIsPressed){
    text(textBank[typeIndex], 0, 0);
    if (typeIndex < typeMax){
      typeIndex++;
    }
    else{
      typeIndex = 0;
    }
  }

}


