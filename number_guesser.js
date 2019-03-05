
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
  } else if (diffTotal > 0) {
    $(".gameStatusAlert").html("That is too high");
    $(".previousGuess").html(enterNum);
    // $(".attempts").html(numAttempts + " of 5 ");
  } else if (diffTotal < 0) {
    $(".gameStatusAlert").html("That is too low");
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
    event.preventDefault();
    highOrLow();
    $("#resetBtn").show();
    $(".gameStatusAlert").show();
    $(".previousGuess").show();
  });
  $("#resetBtn").click(function(){
    location.reload();
  })
});
