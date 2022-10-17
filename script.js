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

})()