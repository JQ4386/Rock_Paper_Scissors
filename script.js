function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
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
        console.log("It's a tie!")
        return 'tie'
    }
    if ((pSelect === "rock" && cSelect === "scissors") || (pSelect === "scissors" && cSelect === "paper") || (pSelect === "paper" && cSelect === "rock")) {
        console.log(`You win! ${pOut} beats ${cOut}!`)
        return 'win'
    }
    console.log(`You lose! ${cOut} beats ${pOut}!`)
    return 'lose'
}

function game() {
    console.log("<<Game Initiated.>>")
    let pScore = 0;
    let cScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerChoice();

        const res = playRound(playerSelection, computerSelection)
        if (res === 'win') {
            pScore++;
        } else if (res === 'lose') {
            cScore++;
        }
    }

    console.log("Game over!");
    console.log(`Player score: ${pScore}`);
    console.log(`Computer score: ${cScore}`);

    if (pScore > cScore) {
        console.log("Congratulations! You win the game!");
    } else if (pScore < cScore) {
        console.log("You lose the game. Better luck next time!");
    } else {
        console.log("It's a tie! The game ends in a draw.");
    }
}




// // Example usage
// const randomChoice = getComputerChoice();
// console.log(randomChoice);

// const test1 = playRound("paper", "SCIssors");
// const test2 = playRound("paper", "paper");
// const test3 = playRound("paper", "rock");
// const test4 = playRound("rock", "SCIssors");

// console.log([test1, test2, test3, test4]);
// console.log(game())

game();

