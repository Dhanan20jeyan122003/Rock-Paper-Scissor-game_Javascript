const Choices = ["Rock","Paper","Scissor"];

const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerChoice");
const Result1 = document.getElementById("Result")
const PlayerscoreDisplay = document.getElementById("Playerscore")
const ComputerscoreDisplay = document.getElementById("ComputerScore")
let Playerscore = 0;
let Computerscore = 0;




function Game (PlayerChoice){
    const ComputerChoice =Choices[ Math.floor(Math.random()*3)];
    let Result = " "; 
    if(PlayerChoice === ComputerChoice){
        Result = "IT'S TIE 🤝"
    }
    else{
        switch(PlayerChoice){
            case "Rock":
                Result = (ComputerChoice === "Scissor" ) ? "You Win 😃" : "You Lose 😭"
                break;
            case "Paper":
                Result = (ComputerChoice === "Rock") ? "You Win 😃" : "You Lose 😭"
                break;
            case "Scissor":
                Result = (ComputerChoice === "Paper") ? "You Win 😃" : "You Lose 😭"
                break;
        }
        
    }
    PlayerDisplay.textContent = ` Player:${PlayerChoice}`;
    ComputerDisplay.textContent = `Computer:${ComputerChoice}`;
    Result1.textContent = Result;
    Result1.classList.remove("wintext","losetext")
      
    switch(Result){
        case "You Win 😃":
           Result1.classList.add("wintext");
           Playerscore++;
           PlayerscoreDisplay.textContent = `${Playerscore}Points`;
           break;
        case "You Lose 😭":
           Result1.classList.add("losetext")
           Computerscore++;
           ComputerscoreDisplay.textContent =`${Computerscore}Points`
           break;
    }

}