(function (){

    "use strict"

    function getComputerChoice(){
        const choices = ["rock","paper","scissors"];
        // Generate a random number between 0-2
        const randomIndex = Math.floor(Math.random()*choices.length);

        return choices[randomIndex];
    }

    function getPlayerChoice(){
        let userChoice = prompt("Please choose rock, paper or scissors");
        userChoice = userChoice.toLowerCase();
        switch (userChoice) {
            case "rock":
            case "scissors":
            case "paper":
                return userChoice;
            default:
                console.log("You did not enter one of rock, paper or scissors");
                getPlayerChoice();
        }
    }

    function playRound(playerChoice, computerChoice){
        let result;
        if (playerChoice === computerChoice) {
            result = "draw";
        } // Situations where player wins
        else if ( (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper") ||(playerChoice === "rock" && computerChoice === "scissors")){
            result = "playerwin";
        }
        else {
            result = "computerwin";
        }
        return result;
    }

    function game(){
        let playerScore = 0;
        let computerScore = 0;
        for (let i = 0; i<5; i++){
            let computerChoice = getComputerChoice();
            let playerChoice = getPlayerChoice();
            let roundResult = playRound(playerChoice,computerChoice);
            if (roundResult === "playerwin") {
                playerScore += 1;
                console.log("The player won that round");
            }
            else if (roundResult === "computerwin") {
                computerScore += 1;
                console.log("The computer won that round");
            }
            else {
                console.log("That round was a draw");
            }
            console.log(`The current score is: ${playerScore}-${computerScore} (player - computer)`);
        }

        if (playerScore > computerScore) {
            console.log("The player has won the game!");
        }
        else if (playerScore < computerScore) {
            console.log("The computer has won the game!");
        }
        else {
            console.log("The game was a draw!");
        }

    }


})()