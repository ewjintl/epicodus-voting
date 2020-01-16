$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
  
  if (age > 18) {
    $('#old-enough').show();
  } else {
    alert("Your time will come.");
    $('#too-young').show();
  }
});