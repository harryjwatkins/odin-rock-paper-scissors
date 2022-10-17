(function (){

    "use strict"

    function getComputerChoice(){
        const choices = ["rock","paper","scissors"];
        // Generate a random number between 0-2
        const randomIndex = Math.floor(Math.random()*choices.length);

        return choices[randomIndex];
    }


})()