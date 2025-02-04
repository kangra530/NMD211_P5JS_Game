var mazeWall;
var wallGroup;

// sprite
var mySprite;

var score = 0;

var cnv; //https://github.com/processing/p5.js/wiki/Positioning-your-canvas

let bg;
let img;
let mushrooms = [];

let x = 320;
let y = 530;

let theme;



//defining this so that we can count points
//let numMushrooms = mushrooms;

// Simple Group class
class MyGroup {
  constructor() {
    this.sprites = [];
  }

  add(sprite) {
    if (sprite instanceof Sprite) {
      this.sprites.push(sprite);
    } else {
      console.error("Only sprites can be added to the group");
    }
  }

  draw() {
    for (let sprite of this.sprites) {
      sprite.draw();
    }
  }
}

let myGroup;

function preload() {
  mush0 = loadImage('images/smoothChanterelle.png');
  mush1 = loadImage('images/jackOLantern.png');
  mush2 = loadImage('images/falseMorel.png');
  mush3 = loadImage('images/giantPuffball.png');
  mush4 = loadImage('images/pigskinPuffball.png');
  mush5 = loadImage('images/yellowMorel.png'); 
  spriteImage = loadImage('images/pexelSprite.png');
  theme = loadSound ('sounds/theme.mp3'); //https://pixabay.com/music/video-games-sinnesloschen-beam-117362/

}


function setup() {
  cnv = createCanvas(800, 600);
  centerCanvas();

  theme.play();
  theme.loop();
 
 
  bg = loadImage('images/mushroomBackground.png', imgLoaded);
  img = loadImage('images/pexelSprite.png');
  

  // Creating the custom group for walls
  myGroup = new MyGroup();

  // Add walls to the group
  addWall(30, 20, 995, 25,);
  addWall(50, 560, 205, 25);
  addWall(500, 560, 550, 25);
  addWall(785, 10, 25, 1085);
  addWall(15, 10, 25, 1065);
  addWall(710, 440, 105, 25);
  addWall(430, 390, 25, 105);
  addWall(560, 300, 25, 105);
  addWall(145, 340, 410, 25);
  addWall(190, 380, 25, 105);
  addWall(337, 285, 25, 95);
  addWall(430, 440, 225, 25);
  addWall(30, 250, 185, 25);
  addWall(210, 160, 25, 85);
  addWall(150, 160, 305, 25);
  addWall(430, 80, 25, 95);
  addWall(650, 350, 25, 205);
  addWall(605, 240, 115, 25);
  addWall(477, 120, 120, 25);

  // Creating sprite
  mySprite = createSprite(x, y, 50, 50);
  mySprite.addImage(img); //makes the sprite an image
  mySprite.width = 50;
  mySprite.height = 50;
  mySprite.setCollider("circle", 0, 0, 25);
  mySprite.friction = 0.1;

}

function draw() {
  if (bg) {
    background(bg);
  } else {
    background(255, 0, 0);
    console.log("Image not loaded yet.");
  }
//score
fill(50);
	textAlign(CENTER);
  textSize(30);
	text("Score: " + score, width/2, 200);
	
/* 	if (score === numMushrooms){
			fill(0);
			textSize(32);
			text("You Win!!", width/2, height/2);
			//text("message", x, y) */
	//}

  if (keyIsDown(LEFT_ARROW)) {
    mySprite.position.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    mySprite.position.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    mySprite.position.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    mySprite.position.y += 5;
  }

  // Check for collisions with individual walls in the group
  for (let i = 0; i < myGroup.sprites.length; i++) {
    mySprite.collide(myGroup.sprites[i]);
  }

  // Draw the sprites
  myGroup.draw();
  drawSprites();

  // Keep the circle on screen
  constrain(mySprite.position.x, 25, width - 25);
  constrain(mySprite.position.y, 25, height - 25);

  checkDist0();
  checkDist1();
  checkDist2();
  checkDist3();
  checkDist4();
  checkDist5();
  
}




/* //function tos collect the mushrooms
 function keyPressed(){
  for (let i = mushrooms.length-1; i>=0; i-- ){
			let mushroom = mushrooms[i];
      let d0= dist(70, 60, mySprite.position.x, mySprite.position.y)
			if (d0<100){
				mushrooms.splice(i, 0);
				//js array.splice()
				//.splice(start, deletecount)
				score++;
				//score++;
				//play sound
				
			}

	}

}  */

//centering canvas
function centerCanvas() { //https://github.com/processing/p5.js/wiki/Positioning-your-canvas
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y + 500);
}
function windowResized() {
  centerCanvas();
}


// Function to add walls to the custom group
function addWall(x, y, w, h) {
  let wall = createSprite(x, y, w, h);
  wall.shapeColor = color(0, 66, 37); // Blue color for walls
  myGroup.add(wall);
}

function imgLoaded() {
  console.log("Image loaded successfully!");
}


function checkDist0(){
  let d0= dist(90, 100, mySprite.position.x, mySprite.position.y)
  if (d0>50){
    image(mush0,70, 60, 90, 90);
  }else {
    score++; 
}
}
function checkDist1(){
  let d0= dist(235, 185, mySprite.position.x, mySprite.position.y)
  if (d0>50){
    image(mush1,230, 180, 90, 90);
  }else {
    score++;  
}
}
function checkDist2(){
  let d0= dist(660, 105, mySprite.position.x, mySprite.position.y)
  if (d0>50){
    image(mush2,655, 100, 70, 70);
  }else {
    score++;  
}
}
function checkDist3(){
  let d0= dist(670, 485, mySprite.position.x, mySprite.position.y)
  if (d0>50){
    image(mush3,655, 480, 70, 70);
  }else {
    score++;  
}
}
function checkDist4(){
  let d0= dist(45, 485, mySprite.position.x, mySprite.position.y)
  if (d0>50){
    image(mush4,40, 480, 70, 70);
  }else {
    score++;  
}
}
function checkDist5(){
  let d0= dist(585, 265, mySprite.position.x, mySprite.position.y)
  if (d0>50){
    image(mush5,580, 260, 70, 70);
  }else {
    score++;  
}
}