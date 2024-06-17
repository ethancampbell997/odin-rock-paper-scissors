//score of human and computer
let humanScore = 0;
let computerScore = 0;
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
//compares the human input to the random computer input
function playRound(humanChoice, computerChoice){
    if(humanChoice==="ROCK" && computerChoice==="PAPER"){
        computerScore++;
        return "You lose! Paper beats rock!";
    }//if
    else if(humanChoice==="ROCK" && computerChoice==="SCISSORS"){
        humanScore++;
        return "You win! Rock beats scissors!";
    }//else if
    else if(humanChoice==="PAPER" && computerChoice==="SCISSORS"){
        computerScore++;
        return "You lose! Scissors beats paper!";
    }//else if
    else if(humanChoice==="PAPER" && computerChoice==="ROCK"){
        humanScore++;
        return "You win! Paper beats rock!";
    }//else if
    else if(humanChoice==="SCISSORS" && computerChoice==="ROCK"){
        computerScore++;
        return "You lose! Rock beats scissors!";
    }//else if
    else if(humanChoice==="SCISSORS" && computerChoice==="PAPER"){
        humanScore++;
        return "You win! Scissors beats paper!";
    }//else if
    else if(humanChoice===computerChoice){
        return "It's a tie!";
    }//else if
    else{
        return "Invalid input.";
    }//else
}//playRound
const hs = document.querySelector("#hs");
const cs = document.querySelector("#cs");
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");
const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.id == "btn1"){
          result.textContent = playRound("ROCK", getComputerChoice());  
        }//if
        else if(button.id == "btn2"){
            result.textContent = playRound("PAPER", getComputerChoice()); 
        }//else if
        else if(button.id == "btn3"){
            result.textContent = playRound("SCISSORS", getComputerChoice()); 
        }//else if
        hs.textContent = "Your Score: " + humanScore;
        cs.textContent = "Computer Score: " + computerScore;
        if(humanScore >= 5|| computerScore >= 5){
            if(humanScore > computerScore){ 
                winner.textContent = "You won overall!"
            }//if
            else if (humanScore < computerScore){
                winner.textContent = "You lost overall!"
            }//else if
            else{
                winner.textContent = "You tied overall!"
            }//else
        }//if
    });
})