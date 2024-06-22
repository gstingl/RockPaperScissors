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

console.log(getComputerChoice());