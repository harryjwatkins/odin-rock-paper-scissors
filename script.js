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

    console.log(getPlayerChoice());

})()