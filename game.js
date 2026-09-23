
//step 1 - computer Choice//

const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
};

// Human Choice //
function getHumanChoice() {
    return prompt("Play The Game  - Rock, Paper, secissor-  ")
};
function playRound(humanChoice, computerChoice) {
   if(
    (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")
    ) {
    console.log(` Human wins! ${humanChoice} beats ${computerChoice}`)
    // one Professtional way to use each winning team use bracket
   }  else if (humanChoice === computerChoice) {
    console.log(`${humanChoice} It's a tie! ${computerChoice}`)
   } else {
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`)
   }
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(playRound(humanChoice, computerChoice));