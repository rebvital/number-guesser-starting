let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()* 10);

const compareGuesses = (userGuess , computerGuess, secretTarget) => {
    let pcResult = Math.abs(secretTarget - computerGuess);
    let userResult = Math.abs(secretTarget - userGuess);
    if (userResult === pcResult || userGuess === secretTarget || userResult < pcResult){
        return true;
    } else if (computerGuess === secretTarget || pcResult < userResult){
        return false;
    }
}
const updateScore = winner =>{
if (winner === 'human'){
    humanScore ++;
} if (winner === 'computer'){
    computerScore++;
}
}
const advanceRound = () =>{
    currentRoundNumber ++;
}