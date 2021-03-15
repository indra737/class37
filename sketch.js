var canvas;
var gameState=0;
var contestantCount;
var database,quiz,question,contestant;
var playerCount
var allContestants=0;
function setup(){
  canvas = createCanvas(850,500);
  database= firebase.database()
  quiz= new Quiz();
 quiz.getState();
 quiz.start();

}


function draw(){
  background("pink");
  stroke(0)
  fill(0)
  textSize(20)
  if(contestantCount===4){
    quiz.update(1)
  }
  if(gameState===1){
    quiz.play()
  }
  
}
