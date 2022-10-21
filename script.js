(function (){

    "use strict"

    const rockbutton = document.querySelector("#rock");
    const paperbutton = document.querySelector("#paper");
    const scissorsbutton = document.querySelector("#scissors");
    const buttons = document.querySelectorAll("button");

    rockbutton.addEventListener("click",playRound);
    paperbutton.addEventListener("click",playRound);
    scissorsbutton.addEventListener("click",playRound);

    function getComputerChoice(){
        const choices = ["rock","paper","scissors"];
        // Generate a random number between 0-2
        const randomIndex = Math.floor(Math.random()*choices.length);

        return choices[randomIndex];
    }

    function getResult(playerChoice, computerChoice){
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

    function scoreCounter(roundResult) {
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

    let playerScore = 0;
    let computerScore = 0;
    function playRound() {
        let playerChoice = this.id;
        let computerChoice = getComputerChoice();
        let result = getResult(playerChoice,computerChoice);
        scoreCounter(result);
        if (playerScore === 3 || computerScore === 3) {
            rockbutton.removeEventListener("click",playRound);
            paperbutton.removeEventListener("click",playRound);
            scissorsbutton.removeEventListener("click",playRound);
        }
    }    

})()