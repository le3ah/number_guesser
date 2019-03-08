$(document).ready(function(){
  //ensuring the page is ready befor it's manipulated
var numAndCompDiff = function(x, y) {
  //setting a variable equal to the result of a function
  return Math.round(x-y);
  //ES5 notation for returning a number function with a param
};

function setLimits(){
  //ES5 notation for a new function
  var minLimit = $('#minLimit').val();
  //jquery syntax for setting a variable
  var maxLimit = $('#maxLimit').val();
  //jquery syntax for setting a variable
  var min = parseInt(minLimit)
  //returns integer as value starts as string
  var max = parseInt(maxLimit)
  //returns integer as value starts as string


  if (isNaN(max) || max === ""){
    //if statement determining if the max entry is a number or empty string
    $(".gameStatusAlert").html("You Must Enter\n a Maximum Limit to Start")
    //alert message; from what I've read, .html is faster than .text
    $(".previousGuessWords").html("");
    //alert message
    $(".previousGuess").html("");
    //alert message
  } else if (isNaN(min) || min === "") {
    //if statement determining if the min entry is a number or empty string
    $(".gameStatusAlert").html("You Must Enter\n a Minimum Limit to Start")
    //alert message
    $(".previousGuessWords").html("");
    //alert message
    $(".previousGuess").html("");
    //alert message
  } else if (max === "" || min === ""){
    // if statement determing if either min or max are empty strings
    $(".gameStatusAlert").html("You Must Enter\n Limits to Start")
    //alert message
    $(".previousGuessWords").html("");
    //alert message
    $(".previousGuess").html("");
    //alert message
  } else {
    $(".limitAlert").html(`Your range is ${min} to ${max}`)
    //alert message indicating the range
    var compNum = Math.floor((Math.random() * (max - min + 1)) + min);
    // setting the computer's guess
  }
  return compNum
  // ES5 returning the computer's guess
  };
var highOrLow = function(compNum) {
  // Assign random number from 1 to 100
  var enterNum = $("#enterNum").val();
  // Input field to enter number
  var enter = parseInt(enterNum)
  // change string to integer
  var diffTotal = numAndCompDiff(enter, compNum);
  // set variable to equal the difference between the computer's guess and the player's guess

 if (isNaN(enter) || enter === "") {
   // confirm the player's guess is a number or not an empty string
    $(".gameStatusAlert").html("You Must Enter\n a Number to Start")
    //alert message
    $(".previousGuessWords").html("");
    //alert message
    $(".previousGuess").html("");
    // displays the previous guess
  } else if (diffTotal > 0) {
    // checks if difference between the guess and computer number is too high
    $(".gameStatusAlert").html("That is too high");
    //alert message
    $(".previousGuessWords").html("Your last guess was");
    //alert message
    $(".previousGuess").html(enter);
    // displays the previous guess
  } else if (diffTotal < 0) {
    // checks if difference between guess and computer number is too low
    $(".gameStatusAlert").html("That is too low");
    //alert message
    $(".previousGuessWords").html("Your last guess was");
    //alert message
    $(".previousGuess").html(enter);
    // displays the previous guess
  } else {
    $(".gameStatusAlert").html("Boom! Your new range will be automatically reset")
    // alert message declaring winner and letting player know of the new range
    $(".previousGuess").html(enter);
    // displays the previous guess
    autoLimitReset();
    // calls the method which will reset the range of limits
  }
};

function autoLimitReset() {
  // ES5 notation for creating a function
  var resetMin = parseInt($("#minLimit").val()) - 10;
  // calling the minimum limit's value, parsing into an integer and subtracting 10
  var resetMax = parseInt($("#maxLimit").val()) + 10;
  // calling the maximum limit's value, parsing into an integer and adding 10
  $("#minLimit").val(resetMin.toString())
  //passing in the new integer value as a string
  $("#maxLimit").val(resetMax.toString())
  //passing in the new integer value as a string
  $(".limitAlert").html(`Your new range is ${resetMin} to ${resetMax}`)
  //alert message declaring the new min and max values for the range
  var compNum = Math.floor((Math.random() * (resetMax - resetMin + 1)) + resetMin);
  // recalculating the computer's guess
  $("#enterNum").val("");
  // clearing the player's guess value
};

$("#resetBtn").click(function(){
  // calling the click function on the reset button
  $(".gameStatusAlert,#resetBtn").hide();
  // hiding the game status alert message and reset button after click
  $("#enterNum").val("");
  // clearing the player's guess value
});

$("#setLimitsBtn").click(function(){
  // triggers the click event for setting the limits
  event.preventDefault();
  // clears default settings so values can update
  compNum = setLimits();
  // calls computer number
  $("#enterBtn").click(function() {
    // triggers the click event for entering a guess
    $("#resetBtn").prop("disabled", false);
    // allows the reset button to be enabled
    $("#clearBtn").prop("disabled", false);
    // allows the clear button to be enabled
    $(".gameStatusAlert").show();
    // declares the game status alert
    $(".previousGuess").show();
    // declares the previous guess alert
    $(".previousGuessWords").show();
    // additional alert message declaration
    event.preventDefault();
    // prevents default values
    highOrLow(compNum);
    // calls highOrLow function with the compNum passed in
      });
    });
    $("#resetBtn").click(function(){
      // triggers click event for the reset button
      location.reload();
      // refreshes the page when the reset button is clicked
    })
  });
