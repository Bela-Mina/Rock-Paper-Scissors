// this is for conosole.log
// //step 1 - computer Choice//
// const choices = ["rock", "paper", "scissors"];
// function getComputerChoice() {
//     return choices[Math.floor(Math.random() * 3)];
// }

// // Human Choice //
// function getHumanChoice() {
//     return prompt("Play The Game  - Rock, Paper, secissor-  ")
// }
// function playRound(humanChoice, computerChoice) {
//    if(
//     (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")
//     ) {
//     console.log(` Human wins! ${humanChoice} beats ${computerChoice}`)
//     // one Professtional way to use each winning team use bracket
//    }  else if (humanChoice === computerChoice) {
//     console.log(`${humanChoice} It's a tie! ${computerChoice}`)
//    } else {
//     console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`)
//    }
// }
// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// console.log(playRound(humanChoice, computerChoice));



const rock  = document.getElementById("rock-choice");
const paper = document.getElementById("paper-choice");
const scissors = document.getElementById("scissors-choice");

const playerChoice = document.getElementById("human-choice")
const computerChoice = document.getElementById("computer-choice")
const Result = document.getElementById("result")
const playerScore = document.getElementById("human")
const computerScore = document.getElementById("computer")
//
const choices = ["rock", "paper", "scissors"];
 function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * 3)];
 };

 
rock.addEventListener("click", function() {
     const computer = getComputerChoice(choices)

   playerChoice.innerHTML = `PLAYER: ${choices[0]}`
    computerChoice.innerHTML = `computer: ${computer}`
    //
    playRound(choices[0], computer)

})
paper.addEventListener("click", function() {
     const computer = getComputerChoice(choices)

   playerChoice.innerHTML  = `PLAYER: ${choices[1]}`
    computerChoice.innerHTML = `computer: ${computer}`
    //
    playRound(choices[1], computer)

})
scissors.addEventListener("click", function() {
    const computer = getComputerChoice(choices)

   playerChoice.innerHTML  = `PLAYER: ${choices[2]}`
    computerChoice.innerHTML = `computer: ${computer}`
    //

    playRound(choices[2], computer)
    
    scoreCounter(choices[2], computer)

})


function playRound(playerChoice, computerChoice) {
    if(
        (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock")
        ) {
        Result.textContent = ` Human wins! ${playerChoice} beats ${computerChoice}`
        // one Professtional way to use each winning team use bracket
        }  else if (playerChoice === computerChoice) {
        Result.innerHTML = `${playerChoice} It's a tie! ${computerChoice}`
         } else {
        Result.innerHTML = `Computer wins! ${computerChoice} beats ${playerChoice}`
    }
}
let playerScore1 = 0;
let computerScore1 = 0;
function scoreCounter (playerChoice, computerChoice) {
    if(
        (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock")
        ) {
             playerScore1++
             playerScore.textContent = playerScore1
        } else if (playerChoice === computerChoice) {
            //none
        } else {
            computerScore1++
           computerScore.textContent =  computerScore1
        }
}
// scoreCounter("rock", "scissors")//human win
// scoreCounter("scissors", "rock")//computer win
// scoreCounter("paper", "scissors")//computer win




