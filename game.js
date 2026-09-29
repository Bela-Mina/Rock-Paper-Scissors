const rock  = document.getElementById("rock-choice");
const paper = document.getElementById("paper-choice");
const scissors = document.getElementById("scissors-choice");

const playerChoice = document.getElementById("human-choice")
const computerChoice = document.getElementById("computer-choice")
const result = document.getElementById("result")
const playerScore = document.getElementById("human")
const computerScore = document.getElementById("computer")
//
const choices = ["rock", "paper", "scissors"]

let playerScore1 = 0;
let computerScore1 = 0;
 function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)]
 }
// game logic

function playRound(playerChoice, computerChoice) {
    if(
        (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock")
        ) {
        result.textContent = ` Human wins! ${playerChoice} beats ${computerChoice}`
        playerScore1++
        // one Professtional way to use each winning team use bracket
        }  else if (playerChoice === computerChoice) {
        result.innerHTML = `${playerChoice} It's a tie! ${computerChoice}`
         } else {
        result.innerHTML = `Computer wins! ${computerChoice} beats ${playerChoice}`
        computerScore1++
    }
    scoreCounter()
}

function scoreCounter (playerChoice, computerChoice) {
    
    playerScore.textContent = `Player Score: ${playerScore1}`
       
    computerScore.textContent =  `Computer Score: ${computerScore1}`
}

rock.addEventListener("click", function() {
     const computer = getComputerChoice(choices)

   playerChoice.innerHTML = `PLAYER: ${choices[0]}`
    computerChoice.innerHTML = `computer: ${computer}`
    //
    playRound(choices[0], computer)
    //
    scoreCounter(choices[0], computer)


})
paper.addEventListener("click", function() {
     const computer = getComputerChoice(choices)

   playerChoice.innerHTML  = `PLAYER: ${choices[1]}`
    computerChoice.innerHTML = `computer: ${computer}`
    //
    playRound(choices[1], computer)
    //
    scoreCounter(choices[1], computer)

})
scissors.addEventListener("click", function() {
    const computer = getComputerChoice(choices)

   playerChoice.innerHTML  = `PLAYER: ${choices[2]}`
    computerChoice.innerHTML = `computer: ${computer}`
    //

    playRound(choices[2], computer)
    //
    scoreCounter(choices[2], computer)
})







