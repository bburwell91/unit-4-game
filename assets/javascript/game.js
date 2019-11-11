// Psuedocode //
// randomize a number value for each button on page load and hide value
// randomize a number value for goalScore on page load and show value
// create an onclick loop for when a button is clicked to add that buttons value to the totalScore
// if totalScore is equal to ++win and randomize again
// if totalScore is > ++losses and randomize again

$(document).ready(function() {

// assign the main variables a value of zero to start
  var winCount = 0;
  var lossCount = 0;
  var redButtonValue = 0;
  var blueButtonValue = 0;
  var yellowButtonValue = 0;
  var greenButtonValue = 0;
  var totalScore = 0;
  var goalScoreValue = 0;
  var rupeeSnd = new Audio("assets/sounds/LOZ_Get_Rupee.wav");
  var winSnd = new Audio("assets/sounds/OOT_Fanfare_Item.wav");
  var lossSnd = new Audio("assets/sounds/OOT_YoungLink_Scream1.wav");

// set your wins and losses at zero
  $("#wins").text("Wins: " + winCount);
  $("#losses").text("Losses: " + lossCount);


// randomize your values
  function randomizeFunction() {
    redButtonValue = Math.floor(Math.random() * 12) + 1;
    blueButtonValue = Math.floor(Math.random() * 12) + 1;
    yellowButtonValue = Math.floor(Math.random() * 12) + 1;
    greenButtonValue = Math.floor(Math.random() * 12) + 1;
    goalScoreValue =  Math.floor(Math.random() * 120) + 19; 


// give each button the information randomly generated
    $('.red-button').html(redButtonValue);
    $('.blue-button').html(blueButtonValue);
    $('.yellow-button').html(yellowButtonValue);
    $('.green-button').html(greenButtonValue);
    $('#goalScore').html("Goal Score: " + goalScoreValue);

    $('.red-button').append("<img src=assets/images/red-rupees.png>");
    $('.blue-button').append("<img src=assets/images/blue-rupees.png>");
    $('.yellow-button').append("<img src=assets/images/orange-rupees.png>");
    $('.green-button').append("<img src=assets/images/green-rupees.png>");

    console.log(redButtonValue);
    console.log(blueButtonValue);
    console.log(yellowButtonValue);
    console.log(greenButtonValue);
    console.log(goalScoreValue);
    console.log(winCount);
    console.log(lossCount);
};


// run the randomize function
randomizeFunction();


// button functions
  $(".red-button").on("click", function() {
    rupeeSnd.play();
    totalScore += redButtonValue;
    $("#totalScore").html("Your total score is: " + totalScore);
      if (totalScore === goalScoreValue) {
        wonGame();
        randomizeFunction();
      }
      else if (totalScore > goalScoreValue) {
        lostGame();
        randomizeFunction();
      }
  });

  $(".blue-button").on("click", function() {
    rupeeSnd.play();
    totalScore += blueButtonValue;
    $("#totalScore").html("Your total score is: " + totalScore);
    if (totalScore === goalScoreValue) {
      wonGame();
      randomizeFunction();
    }
    else if (totalScore > goalScoreValue) {
      lostGame();
      randomizeFunction();
    }
  });

  $(".yellow-button").on("click", function() {
    rupeeSnd.play();
    totalScore += yellowButtonValue;
    $("#totalScore").html("Your total score is: " + totalScore);
    if (totalScore === goalScoreValue) {
      wonGame();
      randomizeFunction();
    }
    else if (totalScore > goalScoreValue) {
      lostGame();
      randomizeFunction();
    }
  });

  $(".green-button").on("click", function() {
    rupeeSnd.play();
    totalScore += greenButtonValue;
    $("#totalScore").html("Your total score is: " + totalScore);
    if (totalScore === goalScoreValue) {
      wonGame();
      randomizeFunction();
    }
    else if (totalScore > goalScoreValue) {
      lostGame();
      randomizeFunction();
    }
  });


// game result functions
function wonGame() {
  winCount++;
  $("#wins").html("Wins: " + winCount);
  $("#message").html("YOU WIN!!!");
  winSnd.play();
  redButtonValue = 0;
  blueButtonValue = 0;
  yellowButtonValue = 0;
  greenButtonValue = 0;
  goalScoreValue = 0;
  totalScore = 0;
  $('#totalScore').text("Your total score is: " + totalScore);
};

function lostGame() {
  lossCount++;
  $("#losses").html("Losses: " + lossCount);
  $("#message").html("YOU LOST!!!");
  lossSnd.play();
  redButtonValue = 0;
  blueButtonValue = 0;
  yellowButtonValue = 0;
  greenButtonValue = 0;
  goalScoreValue = 0;
  totalScore = 0;
  $('#totalScore').text("Your total score is: " + totalScore);
}


// text on page
  $('#header').text("The Legend of Zelda");
  $('#logo').append("<img src=assets/images/original.gif>");
  $('#instructions').text("Turn your volume up for a better experience. You will be given a random number at the start of the game. There are four rupees below. By clicking on a rupee you will add a specific amount of points to your total score. You win the game by matching your total score to the random number, you lose the game if your total score goes above the random number. The value of each rupee is hidden from you. Each time when the game starts, the game will change the values of each rupee.");
  $('#totalScore').text("Your total score is: " + totalScore);
});
