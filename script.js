function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

  
function playRound(playerSelection, computerSelection) {
    // Standardize string input
    const pSelect = playerSelection.toLowerCase();
    const cSelect = computerSelection.toLowerCase();

    const pOut = toTitleCase(pSelect);
    const cOut = toTitleCase(cSelect);

    if (pSelect === cSelect) {
        return "It's a tie!"
    } 
    if ((pSelect === "rock" && cSelect === "scissors") || (pSelect === "scissors" && cSelect === "paper") || (pSelect === "paper" && cSelect === "rock")) {
        return `You win! ${pOut} beats ${cOut}!`
    }
    return `You lose! ${cOut} beats ${pOut}!`
}

// Example usage
const randomChoice = getComputerChoice();
console.log(randomChoice);

const test1 = playRound("paper", "SCIssors");
const test2 = playRound("paper", "paper");
const test3 = playRound("paper", "rock");
const test4 = playRound("rock", "SCIssors");

console.log([test1, test2, test3, test4]);

