//randomly returns string of ROCK, PAPER, or SCISSORS
function getComputerChoice(){
    let ranNum = Math.floor(Math.random() * 3) + 1;
    let str;
    if(ranNum === 1){
        str = "ROCK";
    }//if
    else if(ranNum === 2){
        str = "PAPER";
    }//else if
    else{
        str = "SCISSORS"
    }//else
    return str;
}//getComputerChoice
//returns capitalized version of user input
function getHumanChoice(){
    let str = prompt("Enter rock, paper, or scissors:");
    str = str.toUpperCase();
    return str;
}//getHumanChoice
let humanScore = 0;
let computerScore = 0;
//compares the human input to the random computer input
function playRound(humanChoice, computerChoice){
    if(humanChoice==="ROCK" && computerChoice==="PAPER"){
        computerScore++;
        return "Computer won";
    }//if
    else if(humanChoice==="ROCK" && computerChoice==="SCISSORS"){
        humanScore++;
        return "Player won";
    }//else if
    else if(humanChoice==="PAPER" && computerChoice==="SCISSORS"){
        computerScore++;
        return "Computer won";
    }//else if
    else if(humanChoice==="PAPER" && computerChoice==="ROCK"){
        humanScore++;
        return "Player won";
    }//else if
    else if(humanChoice==="SCISSORS" && computerChoice==="ROCK"){
        computerScore++;
        return "Computer won";
    }//else if
    else if(humanChoice==="SCISSORS" && computerChoice==="PAPER"){
        humanScore++;
        return "Player won";
    }//else if
    else if(humanChoice===computerChoice){
        return "Tie";
    }//else if
    else{
        return "Invalid input"
    }//else
}//playRound
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(humanScore);
console.log(computerScore);