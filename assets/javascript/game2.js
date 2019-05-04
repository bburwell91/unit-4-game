// Psuedocode
// Get your random numbers:
// Create an array variable for a random number between 19 and 120 and use a for loop to pick the random number
// Create an array variable for a random number to assign to each crystal also using a for loop
// Define your variables:
// The number to match, an array with the value of each of the 4 crystals, a variable for each button, the total score and wins and losses
// Create your functions:


$(document).ready(function() {

// Random for loop variables
    var random = [];

    for (var a = 19; a < 121; a++); {
        random.push(a);
    };

    var rupees = [];

    for (var b = 1; b < 13; b++) {
        rupees.push(b);
    };

    // Global variables
    var randomNum;
    var gemValues = [];
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var redRupee;
    var blueRupee;
    var yellowRupee;
    var greenRupee;


    // Functions
    function randomNumber(arr) {
        var c = arr[Math.floor(Math.random() * arr.length)];
        randomNum = c;
        $("#goalScore").html(randomNum);
    };

    function randomGemValues(arr) {
        for (var z = 0; z < 4; z++)
        var d = arr[Math.floor(Math.random() * arr.length)];
        gemValues.push(d);
    };

    function assignGemValues(arr) {
        for (var e = 0; e < arr.length; e++) {
            $(".btn" + (e+1)).attr("value", arr[e]);
        }
        redRupee = arr[0];
        blueRupee = arr[1];
        yellowRupee = arr[2];
        greenRupee = arr[3];
    };

    function resetGame() {
        gemValues = [];
        randomNumber(random);
        randomGemValues(rupees);
        assignGemValues(gemValues);
        totalScore = 0;
        $("#totalScore").html(totalScore);
    };

    // button on click functions
    $(".red-button").on("click", function() {
        totalScore += redRupee;
        $("#totalScore").html(totalScore);
    });

    $(".blue-button").on("click", function() {
        totalScore += blueRupee;
        $("#totalScore").html(totalScore);
    });

    $(".yellow-button").on("click", function() {
        totalScore += yellowRupee;
        $("#totalScore").html(totalScore);
    });

    $(".green-button").on("click", function() {
        totalScore += greenRupee;
        $("#totalScore").html(totalScore);
    });


    $("button").on("click", function() {
        if (totalScore === randomNumber) {
            wins++;
            $("#totalScore").html("Wins: " + totalScore);
            $("#wins").html(wins);
            setTimeout(function() {resetGame("YOU WIN!!!!")}, 200);
        }
        else if (totalScore > randomNumber) {
            losses++;
            $("#totalScore").html("Losses: " + totalScore);
            $("#losses").html(losses);
            setTimeout(function() {resetGame("YOU LOSE!!!!")}, 200);
        };

    });
});