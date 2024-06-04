// Rock Paper Scissors Game using JavaScript
//Global assigned variables
const options = ["Rock", "Paper", "Scissors"];

// getComputerChoice function provides the random computer choice
function getComputerChoice(max) {
    const randomIndex = Math.floor(Math.random() * max);
    return options[randomIndex];
}

// getHumanChoice function asks user to enter their choice, capitalizes the first letter, returns the result
function getHumanChoice() {
    let playerChoice = prompt("Enter rock, paper, or scissors:");
    playerChoice = playerChoice.toLowerCase(); // Convert the whole input to lowercase
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1); // Capitalize the first letter
    return playerChoice; // Return the player's choice
}

// playRound function to play a single round
function playRound(humanChoice, computerChoice, scores) {
    // Make humanChoice input case-insensitive, user can type it as Rock, rock, roCK
    humanChoice = humanChoice.toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

    // Determine the winner and log the result
    let result = "";
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
        scores.human++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
        scores.computer++;
    }

    // Log the result
    console.log(result);
    console.log(`Scores -> Human: ${scores.human}, Computer: ${scores.computer}`);
}

// playGame function to play 5 rounds and declare the winner
function playGame() {
    let scores = { human: 0, computer: 0 };

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(3);
        console.log(`Round ${i + 1}`);
        console.log("You picked " + humanChoice); // Log the human choice
        console.log("The computer picked " + computerChoice); // Log the computer choice
        playRound(humanChoice, computerChoice, scores);
    }

    // Declare the winner based on the scores
    if (scores.human > scores.computer) {
        console.log("Congratulations! You won the game.");
    } else if (scores.human < scores.computer) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();
