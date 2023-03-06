let Background,Banna,Kiwi,lemon,Mango;
let dia = 50;
let noWay,backgroundSound, horror,tired;
let x,y;
let speedX=5;
let speedY= -3;
let mangoSpeed=1;
let anyway;
let MangoX = 0;
let littleMouse = false;
let rotationAngle=1;
let rotationTime=0.1;
let lemonMove=0.4;
let rotateX=60;
let rotateY=400;


function preload() {
  //IMAGE
  Background =   loadImage('assets/Background.jpg');
  Banna = loadImage('assets/Banna.png');
  Kiwi = loadImage('assets/Kiwi.png');
  Mango=loadImage('assets/Mango.png');
  lemon=loadImage('assets/Lemon.png');
  //SOUND
  soundFormats('mp3');
  backgroundSound=
    loadSound('assets/funny.mp3');
   soundFormats('wav');
  noWay =loadSound('assets/questions.wav');
  tired =loadSound('assets/tired.wav');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  backgroundSound.play();
  x = width/2;
  y = height/1.4;
}

function mousePressed(){
  littleMouse=true;  
}
function mouseReleased(){
  littleMouse=false;
}
function draw(){
  Background.resize(width,height);
  Banna.resize(80,80);
  Kiwi.resize(90,90);
  Mango.resize(150,150);
  lemon.resize(120,80);
  image(Background,0,0);
   // All the image resize
  
  if (littleMouse==false){  
  //lemon
    t= (millis()/1000);
    angleMode(DEGREES);
    push();
    let path=sin();
    translate(80+path,400);
    rotate(10+rotationTime);
    rotationTime+=0.2;
    image(lemon,0,0);
    pop();
    
  //Mango
  image(Mango,MangoX,windowHeight/1.5-20);
  MangoX+=mangoSpeed;
  if (MangoX>=width-100 ||MangoX<-1){
    tired.play();
  mangoSpeed *= -1;
  }
    
  //Kiwi
  let anyway = random(2);
   for (let i =0; i< anyway;i++){
    let x =random(0,width-100);
    let y= random(0,height);
    image(Kiwi,x,y);
  
  }  
  //Banna
   image(Banna,x,y);
    x+= speedX;
    y+=speedY;
  if (x <= dia/2 || x >= width-dia/2) {
    if (!noWay.isPlaying()) {
      noWay.play();
    }
    speedX *= -1;
  }
  if (y <= dia/2 || y >= (height-100)-dia/2) {
    if (!noWay.isPlaying()) {
      noWay.play();
    }
    speedY *= -1;
  }
  }
  
  if(littleMouse==true){
    image(Mango,windowWidth/2,windowHeight/1.5-20);
    image(Kiwi,windowWidth/3,windowHeight/1.4);
    image(Banna,windowWidth/1.2,windowHeight/1.4);          image(lemon,windowWidth/5,windowHeight/1.4-20);
  }
  
  //LOGO FONT
  fill(255);
  textSize(30);
   text('Escaping Fruit',30,windowHeight/1.1);
  textSize(20);
  text('Press Mouse to surveil your fruit',30,windowHeight/1.1+30);
}









  

