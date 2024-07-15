const rockbtn = document.querySelector(".rockbtn");
const paperbtn = document.querySelector(".paperbtn");
const scissorsbtn = document.querySelector(".scissorsbtn");
const humScore = document.querySelector(".humScore");
const comScore = document.querySelector(".comScore");
const response = document.querySelector(".winner");
const resetScore = document.querySelector(".reset");

humanScore = 0;
computerScore = 0;

rockbtn.addEventListener("click", () => {
  humanChoice = "Rock";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  chooseWinner();
});
paperbtn.addEventListener("click", () => {
  humanChoice = "Paper";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  chooseWinner();
});
scissorsbtn.addEventListener("click", () => {
  humanChoice = "Scissors";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  chooseWinner();
});
resetScore.addEventListener("click", resetGame);

// Get Computer Choice by getting random number between 0-2
function getComputerChoice() {
  if (Math.floor(Math.random() * 3) == 0) {
    return "Rock";
  } else if (Math.floor(Math.random() * 3) == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//Compare and declare winner
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    response.textContent = "You lose! Paper beats rock!";
    computerScore++;
    comScore.textContent = `CPU: ${computerScore}`;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    response.textContent = "You Win! Rock beats scissors!";
    humanScore++;
    humScore.textContent = `Human: ${humanScore}`;
  } else if (humanChoice === "Rock" && computerChoice === "Rock") {
    response.textContent = "Tie! No winner declared";
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    response.textContent = "You Win! Paper beats rock!";
    humanScore++;
    humScore.textContent = `Human: ${humanScore}`;
  } else if (humanChoice === "Paper" && computerChoice === "Paper") {
    response.textContent = "Tie! No winner declared";
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    response.textContent = "You lose! Scissors beats paper!";
    computerScore++;
    comScore.textContent = `CPU: ${computerScore}`;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    response.textContent = "You Lose! Rock beats Scissors!";
    computerScore++;
    comScore.textContent = `CPU: ${computerScore}`;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    response.textContent = "You Win! Scissors beats paper!";
    humanScore++;
    humScore.textContent = `Human: ${humanScore}`;
  } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
    response.textContent = "Tie! No winner declared";
  }
}

function chooseWinner() {
  if (humanScore == 5) {
    response.textContent = "Humans win! Hit reset to play again or keep playing with current score!";
  } else if (computerScore == 5) {
    response.textContent = "Computers win! Hit reset to play again or keep playing with current score!";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humScore.textContent = "Human: 0";
  comScore.textContent = "Computer: 0";
  response.textContent = "Game Reset, Choose Rock/Paper/Scissors to start!"
}


// This is the logic for playing 5 rounds and running the game
//function playGame() {
  //humanScore = 0;
  //computerScore = 0;
  
  //for (let i = 0; i < 5; i++) {
    //let humanSelection = getHumanChoice();
    //let computerSelection = getComputerChoice();
    //playRound(humanSelection, computerSelection);
  //}
  //if (computerScore > humanScore) {
    //alert(`Computer Wins! Final Score -  Computer: ${computerScore} / Human: ${humanScore}`);
  //} else {
    //alert(`Human Wins! Final Score -  Computer: ${computerScore} / Human: ${humanScore}`);
  //}
//}

// playGame();