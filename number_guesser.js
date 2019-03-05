
var numAndCompDiff = function(x, y) {
  return Math.round(x-y);
};

var setLimits = $(".setLimits-params").val();

// Assign random number from 1 to 100
var highOrLow = function() {
  // Input field to enter number
  var enterNum = $("#enterNum").val();
  var enter = parseInt(enterNum)
  var setLimits = $(".setLimits-params").val();

  var minLimit = $('#minLimit').val();
  var maxLimit = $('#maxLimit').val();
  var min = parseInt(minLimit)
  var max = parseInt(maxLimit)

  var compNum = Math.floor((Math.random() * (max - min + 1)) + min);
  // debugger;
  var diffTotal = numAndCompDiff(enter, compNum);
// debugger;
  if (isNaN(max) || max === ""){
    $(".gameStatusAlert").html("You Must Enter\n a Maximum Limit to Start")
    $(".previousGuessWords").html("");
    $(".previousGuess").html("");
  } else if (isNaN(min) || min === "") {
    $(".gameStatusAlert").html("You Must Enter\n a Minimum Limit to Start")
    $(".previousGuessWords").html("");
    $(".previousGuess").html("");
  } else if (isNaN(enter) || enter === "") {
    $(".gameStatusAlert").html("You Must Enter\n a Number to Start")
    $(".previousGuessWords").html("");
    $(".previousGuess").html("");
  } else if (enter > max || enter < min) {
    $(".gameStatusAlert").html("Your guess must be between\n the max and min limits")
    $(".previousGuessWords").html("Your last guess was");
    $(".previousGuess").html(enter);
  } else if (diffTotal > 0) {
    $(".gameStatusAlert").html("That is too high");
    $(".previousGuessWords").html("Your last guess was");
    $(".previousGuess").html(enter);
  } else if (diffTotal < 0) {
    $(".gameStatusAlert").html("That is too low");
    $(".previousGuessWords").html("Your last guess was");
    $(".previousGuess").html(enter);
  } else {
    $(".gameStatusAlert").html("Boom!")
    $(".previousGuess").html(enter);
    $("#resetBtn").css("display", "block");
  }
}

$("#resetBtn").click(function(){
  $(".gameStatusAlert,#resetBtn").hide();
  $("#enterNum").val("");
});

$(document).ready(function(){
  $("#enterBtn").click(function(enter) {
    $("#resetBtn").prop("disabled", false);
    $("#clearBtn").prop("disabled", false);
    $("#maxLimit").show();
    $("#minLimit").show();
    $(".gameStatusAlert").show();
    $(".previousGuess").show();
    $(".previousGuessWords").show();
    event.preventDefault();
    highOrLow();
    });
  })
  $("#resetBtn").click(function(){
    location.reload();
  });
