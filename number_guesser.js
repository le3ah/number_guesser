
var numAndCompDiff = function(x, y) {
  return Math.round(x-y);
};

// Assign random number from 1 to 100
var compNum = Math.floor((Math.random() * 100) + 1);
// Assign variable for number of attempts
// var numAttempts = 1;

var highOrLow = function() {
  // Input field to enter number
  var enterNum = $("#enterNum").val();
  //$(enterNum).val("enterNum");
  var diffTotal = numAndCompDiff(enterNum, compNum);
// debugger;
  if (isNaN(enterNum) || enterNum === "") {
    $(".gameStatusAlert").html("You Must Enter\n a Number to Start")
    $(".previousGuessWords").html("");
    $(".previousGuess").html("");
  } else if (enterNum > 100 || enterNum < 0) {
    $(".gameStatusAlert").html("Your guess must be between\n 0 and 100")
    $(".previousGuessWords").html("Your last guess was");
    $(".previousGuess").html(enterNum);
  } else if (diffTotal > 0) {
    $(".gameStatusAlert").html("That is too high");
    $(".previousGuessWords").html("Your last guess was");
    $(".previousGuess").html(enterNum);
    // $(".attempts").html(numAttempts + " of 5 ");
  } else if (diffTotal < 0) {
    $(".gameStatusAlert").html("That is too low");
    $(".previousGuessWords").html("Your last guess was");
    $(".previousGuess").html(enterNum);
    // $(".attempts").html(numAttempts + " of 5 ");
  } else {
    $(".gameStatusAlert").html("Boom!")
    $(".previousGuess").html(enterNum);
    $("#resetBtn").css("display", "block");
  }
}

$("#resetBtn").click(function(){
  numAttempts = 0;
  $(".gameStatusAlert,.attempts,#resetBtn").hide();
  $("#enterNum").val("");
});

$(document).ready(function(){
  $("#enterBtn").click(function(enterNum) {
    $("#resetBtn").prop("disabled", false);
    $("#clearBtn").prop("disabled", false);
    $(".gameStatusAlert").show();
    $(".previousGuess").show();
    $(".previousGuessWords").show();
    event.preventDefault();
    highOrLow();
  });
  $("#resetBtn").click(function(){
    location.reload();
  })
});
