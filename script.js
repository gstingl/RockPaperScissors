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

// Get Human Choice by getting input via prompt
function getHumanChoice() {
  let humanChoice = prompt("Enter Rock, Paper or Scissors");
  switch(humanChoice) {
    case 'Rock':
      return "Rock";
      break;
    case 'Paper':
      return "Paper";
      break;
    case 'Scissors':
      return "Scissors";
      break;
    default:
      alert("Not a valid input")
  }
}

//Compare and delacre winner
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    alert("You lose! Paper beats rock!");
    computerScore++;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    alert("You Win! Rock beats scissors!");
    humanScore++;
  } else if (humanChoice === "Rock" && computerChoice === "Rock") {
    alert("Tie! No winner declared");
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    alert("You Win! Paper beats rock!");
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Paper") {
    alert("Tie! No winner declared");
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    alert("You lose! Scissors beats paper!");
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    alert("You Lose! Rock beats Scissors!");
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    alert("You Win! Scissors beats paper!");
    humanScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
    alert("Tie! No winner declared");
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (computerScore > humanScore) {
    alert(`Computer Wins! Final Score -  Computer: ${computerScore} / Human: ${humanScore}`);
  } else {
    alert(`Human Wins! Final Score -  Computer: ${computerScore} / Human: ${humanScore}`);
  }
}

playGame();
