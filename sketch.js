var player1_Img,player2_Img;
var player1,player2;
var database;
var player1_run1,player1_run2,player1_run3,player1_run1_img,player1_run2_img,player1_run3_img;
var player2_run1,player2_run2,player2_run3,player2_run1_img,player2_run2_img,player2_run3_img;
var form,game,player;
var gameState,playerCount;
var players
var allPlayers
var resetButton
var players = []
var background_img
var bullet1,bullet2

function preload(){
  background_img = loadImage('background.jpeg')
  player1_Img = loadImage('player1.png')
  player1_run1_img = loadImage('p1Run1.png')
  player1_run2_img = loadImage('p1Run2.png')
  player1_run3_img = loadImage('p1Run3.png')
  player2_Img = loadImage('player2.png')
  player2_run1_img = loadImage('P2run1.png')
  player2_run2_img = loadImage('P2run2.png')
  player2_run3_img = loadImage('P2Run.3png.png')
  
  
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
 
  
  
  
  
}





function draw() {
  background(255,255,255);  


  if(playerCount == 2){
    game.update(1)
  }

  if(gameState == 1){
    game.play()
  }
  


  
}