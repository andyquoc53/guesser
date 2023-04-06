let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
  return Math.floor(Math.random() * 10);
};

function compareGuesses(user_guess, com_guess, secret_guess){
  if (Math.abs(user_guess-secret_guess) <= Math.abs(com_guess - secret_guess)){
    return true;
  } else {
    return false;
  };
};

function updateScore(winner_dis){
  if (winner_dis.toLowerCase() == 'human'){
    humanScore += 1;
  } else if (winner_dis.toLowerCase() == 'computer'){
    computerScore += 1;
  };
};

function advanceRound(){
  currentRoundNumber += 1;
};