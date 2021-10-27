//init global variables
let button0, button1, button2, button3;
let brushSelect, typeIndex, myFont, textBank, typeMax;
let vid, img, sound;
let clickBuffer = 0;

//preload required assets before program starts
function preload() {
  myFont = loadFont('assets/Inconsolata-Regular.ttf');
  textBank = loadStrings('assets/text_bank.txt');
  vid = createVideo('assets/video.mp4');
  vid.hide();
  img = loadImage('assets/cursor-tnt-anim.gif');
  sound = loadSound('assets/Explosion.wav');

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //fulscreen canvas with 3d support
  background(0); //black background
  rectMode(CENTER); //center draw due to the way webgl handles coordinate system

  //create tool switch buttons along the top of canvas
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

  brushSelect = 0; //tells draw function which brush to use, default to cube
  typeIndex = 0; //index for the type brush to select which word to paint
  typeMax = textBank.length - 1; //tells type brush when to reset at the end of word bank



}
//draw function which paints with selected brush
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

//keyboard input to save with 's' key and clear with 'c' key
function keyPressed() {
  if (key === 's'){
    save('rick.png');
  }
  else if (key === 'c'){
    background(0);
  }
}

//function to select cube brush called by button 0
function brush0(){
  brushSelect = 0;
  vid.pause();
}

//function to select type brush called by button 1
function brush1(){
  brushSelect = 1;
  vid.pause();
}

//function to select video brush and start video playback called by button 2
function brush2(){
  brushSelect = 2;
  vid.loop();
}

//function to select dynamite brush and reset click buffer of 2 seconds before click can cause explosion
function brush3(){
  brushSelect = 3;
  vid.pause();
  clickBuffer = 0;
}

//paints a multicolor rotating cube at mouse position
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

//paints words from word bank in order with size varied based on mouse speed
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

//paints video at mouse position without click required
function paintVideo() {
  texture(vid);
  translate(mouseX - width / 2, mouseY - height / 2, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(width / 10);
  pop();
}

//paints dynamite, clears canvas on click after 120 frame before has elapsed
function blowItUp (){
  translate(mouseX - width / 2, mouseY - height / 2, 0);
  image(img, 0, 0);
  clickBuffer++;
  if (clickBuffer >= 120){
    if (mouseIsPressed) {
      sound.play();
      background(0);
      brush0();
    }
  }

}


