/*PSEUDOCODE 
getComputerChoice function
    random number 1-3
    assign 1 to "ROCK," 2 to "PAPER," and 3 to "SCISSORS"
    return the string
getHumanChoice function
    prompt the user for input (rock, paper, or scissors)
    set the string to all caps
    return the string
*/
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
console.log(getComputerChoice());
//returns capitalized version of user input
function getHumanChoice(){
    let str = prompt("Enter rock, paper, or scissors:");
    str = str.toUpperCase();
    return str;
}//getHumanChoice
console.log(getHumanChoice());