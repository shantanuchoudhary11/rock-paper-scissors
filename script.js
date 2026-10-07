function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

const displayHumanChoice = document.querySelector(".user-choice");
const displayComputerChoice = document.querySelector(".computer-choice");
const winnerDisplay = document.querySelector("#winner");
const buttons = document.querySelector(".buttons");

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return "Draw";
    const humanWins =
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper");
    return humanWins ? "Human" : "Computer";
}

buttons.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    if (humanScore >= 5 || computerScore >= 5) return; // game over

    const humanChoice = e.target.textContent;
    const computerChoice = getComputerChoice();
    const winner = playRound(humanChoice, computerChoice);

    displayHumanChoice.textContent = humanChoice;
    displayComputerChoice.textContent = computerChoice;

    if (winner === "Human") {
        humanScore++;
        winnerDisplay.textContent = "You won this round!";
    } else if (winner === "Computer") {
        computerScore++;
        winnerDisplay.textContent = "Computer won this round!";
    } else {
        winnerDisplay.textContent = "It's a draw!";
    }

    if (humanScore === 5) winnerDisplay.textContent = "You won the game!";
    else if (computerScore === 5) winnerDisplay.textContent = "Computer won the game!";
});
