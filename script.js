function getComputerChoice() {
    let randomValue = Math.floor(Math.random()*10);
    let computerChoice;
    switch(true) {
        case randomValue <= 3: 
            computerChoice = "Rock";
            break;
        case randomValue > 3 && randomValue <= 6 : 
            computerChoice = "Paper";
            break;
        case randomValue > 6:
            computerChoice = "Scissors"
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your move");
    humanChoice = humanChoice.at(0).toUpperCase() + humanChoice.slice(1);
    return humanChoice;
}

let humanScore = 0, computerScore = 0;
let winner;

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        winner = "Draw";
    } else {
        switch (humanChoice) {
            case "Rock": computerChoice === "Paper" ? winner = "Computer" : winner = "Human";
            break;
            case "Paper": computerChoice === "Rock" ? winner = "Human" : winner = "Computer";
            break;
            case "Scissors": computerChoice === "Rock" ? winner = "Computer" : winner = "Human";
            break;
        }
    
    }
    return winner;
}


function playGame(){
    for (let i =0; i<5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        winner = playRound(humanSelection,computerSelection);
        switch(winner) {
            case "Human": alert("You won!!!");
                break;
            case "Computer": alert("You lost :-(");
                break;
            case "Draw": alert("It's a draw.");
                break;
         }
    }
}

playGame();
