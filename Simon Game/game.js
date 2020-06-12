var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red","blue","green","yellow"];
var firstTime = false;
var level = 0;
var currentLevel = 0;
$(document).keypress(function(){
  if(!firstTime)
  {
    level = 0;
    gamePattern = [];
    nextSequence();
    firstTime = true;
  }

});
$(".btn").click(function(event){
  var  userChoosenColour = $(this).attr("id");
  playSound(userChoosenColour);
  console.log(userChoosenColour);
  userClickedPattern.push(userChoosenColour);
  animatePress(userChoosenColour);
  checkAnswer(currentLevel);
  currentLevel++;
});

function nextSequence() {
  level++;
  currentLevel = 0;
  userClickedPattern = [];
  $("h1").text("Level "+level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChoosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChoosenColour);
  $("#"+randomChoosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}

function checkAnswer(currentL) {
  if(userClickedPattern[currentL]!=gamePattern[currentL])
  {
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    firstTime=false;
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

  }
  if(currentL == (gamePattern.length-1))
  {
    setTimeout(function(){
      nextSequence();
    },1000);

  }
}
