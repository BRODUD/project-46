var bg,earth;
var database;
var airplane;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var form;
var airplaneimg;
var airplane1,airplane2;
var right,left;
var game;
var loadingimg;
var loading;
var player;
var laser;
var laserimg;
var asteroid1;
var asteroid2;
var asteroid3;
var asteroid4;
var asteroid5;
var asteroids;
var asteroidGroup;
var earthLife=10;
var yourLife = 4
var teammateLife = 4
function preload() {
  bg = loadImage("bg.png");
  earth = loadImage("earth.png");
  airplaneimg = loadImage("airplane.png");
  right = loadImage("airplane3.png");
  left = loadImage("airplane2.png");
  loadingimg = loadImage("LOADING.gif");
  laserimg = loadImage("image.png");
   asteroid1 = loadImage("asteroid1.png");
   asteroid2= loadImage("asteroid2.png");
   asteroid3= loadImage("asteroid3.png");
   asteroid4 = loadImage("asteroid4.png");
   asteroid5= loadImage("asteroid5.png");
  }
function setup() {
  database = firebase.database();
  createCanvas(windowWidth,windowHeight);
  earthimg = createSprite(windowWidth-700,windowHeight+200);
 earthimg.addImage(earth);
 earthimg.scale = 1.2
 loading = createSprite(650,200);
 loading.addImage(loadingimg);  
 loading.visible = false;
 asteroidGroup = new Group();
 game = new Game();
 game.start();

}
function draw() {
   background(bg);  
  console.log("game state"+gameState)
  console.log("player count"+playerCount)
text(mouseX+','+mouseY,mouseX,mouseY);
  if(playerCount===1){        
    game.update(1);
   
  }

  if (gameState===1){
    
   loading.visible = true;
   
   }
   
  drawSprites();
  if (playerCount===2){
    loading.destroy();
    game.play();  
    form.hideInfo();
  }
}
