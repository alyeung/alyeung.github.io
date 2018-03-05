// Create a variable humanScore. Give it a value of the number 0.
var humanScore = 0;

// Create a variable computerScore. Give it a value of the number 0.
var computerScore = 0;

// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Write all the code below INSIDE the function curly braces!!
function play(humanPlay, computerPlay) {

  // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."
  console.log("You played " + humanPlay + ".  The bot played " + computerPlay + ".");

  //best 2 out of 3!!
  if (computerScore < 3 && humanScore < 3) {

    // If the human play is equal to the computer play
    if (humanPlay === computerPlay) {
      // Log "You tied. :|" to the console.
      console.log("You tied. :|");
    }
    // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
    // humanPlay is 'rock' and the computerPlay is 'scissors' OR
    // humanPlay is 'scissors' and the computerPlay is 'paper'
    else if ((humanPlay === "paper" && computerPlay === "rock") ||
      (humanPlay === "rock" && computerPlay === "scissors") ||
      (humanPlay === "scissors" && computerPlay === "paper")
    ) {
      // Log "You win! :)" to the console
      console.log("You win! :)");
      // Add one to the humanScore variable (be sure to use += )
      humanScore += 1;
    }
    else {

      // Otherwise log "You lose! :(" to the console
      // Add one to the computerScore variable (be sure to use += )
      console.log("You lose! :(");
      computerScore += 1;
    }
    // Log "You have {humanScore} points" to the console
    // For example: "You have 0 points"
    // Log "The bot has {computerScore} points" to the console.
    // For example: "The bot has 3 points"
    console.log("You have " + humanScore + " points");
    console.log("The bot has " + computerScore + " points")
  }
  // END OF FUNCTION (Place the closing curly brace here!)
  if (humanScore > 2 || computerScore > 2) {
    console.log("Best 2 out of 3!  Game is done.");

    // need to reset the score so it does not bomb
    humanScore = 0;
    computerScore = 0;
  }
}

// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.

var r = "rock";
var p = "paper";
var s = "scissors";

//play(r, s);
//play(s, s);
//play(s, r);
//play(s)


// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.

var roboMove;

// function to use Math.random to set the move for the robot, and return that value.
function computerMove() {
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    roboMove = r;
  }
  else if (computerChoice <= 0.67) {
    roboMove = p;
  }
  else {
    roboMove = s;
  }
  console.log(computerChoice);
  return (roboMove);
}

// original function without random number
// play(r, s);
// play(s, r);
// play(r, s);
// play(s, r);
// play(s, r);

// play the game with the robot randomly going.  called 5+ times
play(r, computerMove());
play(s, computerMove());
play(s, computerMove());
play(r, computerMove());
play(s, computerMove());
play(s, computerMove());
play(r, computerMove());
play(s, computerMove());
play(s, computerMove());
play(r, computerMove());
play(s, computerMove());
play(s, computerMove());