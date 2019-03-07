$(document).ready(function(){
var numAndCompDiff = function(x, y) {
  return Math.round(x-y);
};

function setLimits(){
  var minLimit = $('#minLimit').val();
  var maxLimit = $('#maxLimit').val();
  var min = parseInt(minLimit)
  var max = parseInt(maxLimit)

  if (isNaN(max) || max === ""){
    $(".gameStatusAlert").html("You Must Enter\n a Maximum Limit to Start")
    $(".previousGuessWords").html("");
    $(".previousGuess").html("");
  } else if (isNaN(min) || min === "") {
    $(".gameStatusAlert").html("You Must Enter\n a Minimum Limit to Start")
    $(".previousGuessWords").html("");
    $(".previousGuess").html("");
  } else if (max === "" || min === ""){
    $(".gameStatusAlert").html("You Must Enter\n Limits to Start")
    $(".previousGuessWords").html("");
    $(".previousGuess").html("");
  } else {
    $(".limitAlert").html(`Your range is ${min} to ${max}`)
    var compNum = Math.floor((Math.random() * (max - min + 1)) + min);
  }
  return compNum
  };
// Assign random number from 1 to 100
var highOrLow = function(compNum) {
  // Input field to enter number
  var enterNum = $("#enterNum").val();
  var enter = parseInt(enterNum)
  var diffTotal = numAndCompDiff(enter, compNum);

 if (isNaN(enter) || enter === "") {
    $(".gameStatusAlert").html("You Must Enter\n a Number to Start")
    $(".previousGuessWords").html("");
    $(".previousGuess").html("");
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

  $("#setLimitsBtn").click(function(){
    event.preventDefault();
    const compNum = setLimits()
  $("#enterBtn").click(function() {
    $("#resetBtn").prop("disabled", false);
    $("#clearBtn").prop("disabled", false);
    $(".gameStatusAlert").show();
    $(".previousGuess").show();
    $(".previousGuessWords").show();
    event.preventDefault();
    highOrLow(compNum);
      });
    });
    $("#resetBtn").click(function(){
      location.reload();
    })
  });
