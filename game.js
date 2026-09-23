
//step 1//
const choices = ["rock", "paper", "scissors"]
function getComputerChoice() {

    let randomChoices =  choices[Math.floor(Math.random() * 3)];

    return randomChoices
}
getComputerChoice()

function getHumanChoice() {
   let huChoices =  prompt("Play The Game  - Rock, Paper, Secissor-  ")
    return  huChoices
}
console.log(getHumanChoice())

