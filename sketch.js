let button0, button1, button2, button3;
let brushSelect, typeIndex, myFont, textBank, typeMax;
let vid, img;

function preload() {
  myFont = loadFont('assets/Inconsolata-Regular.ttf');
  textBank = loadStrings('assets/text_bank.txt');
  vid = createVideo('assets/video.mp4');
  vid.hide();
  img = loadImage('assets/cursor-tnt-anim.gif');

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
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
  if (brushSelect === 2){
    paintVideo();
  }
  if (brushSelect === 3){
    blowItUp();
  }

}

function brush0(){
  brushSelect = 0;
  vid.pause();
}

function brush1(){
  brushSelect = 1;
  vid.pause();
}

function brush2(){
  brushSelect = 2;
  vid.loop();
}

function brush3(){
  brushSelect = 3;
  vid.pause();
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

function paintVideo() {
  if (true) {
    texture(vid);
    translate(mouseX - width / 2, mouseY - height / 2, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(width / 10);
    pop();
  }
}

function blowItUp (){
  translate(mouseX - width / 2, mouseY - height / 2, 0);
  image(img, 0, 0);
  if (!mouseIsPressed){
    background(0);
    brush1();
  }


}


