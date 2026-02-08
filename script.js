let secretNumber;
let attempts
let maxAttempts;
let guesses;
let score;


const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");
const historyEl = document.getElementById("history");
const scoreEl = document.getElementById("score");
const levelSelect = document.getElementById("level");


function setupGame(){
    const level = levelSelect.value;
if(level=="easy"){
    secretNumber = randomNumber(1,10);
    maxAttempts =5 ;

}
else if(level=="medium"){
    secretNumber = randomNumber(1,50);
    maxAttempts =7 ;
}else{
    secretNumber = randomNumber(1,100);
    maxAttempts =10 ;
}
attempts =0;
guesses=[];
score=0;

updateUI();
message.className="message";
message.textContent="";
guessInput.disabled= false;
guessBtn.disabled=false;

}


function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

guessBtn.addEventListener("click",function(){
    const guess = Number(guessInput.value);
    if(!guess){
        message.textContent="Please enter a valid Number";
        message.className="message Wrong";
        return;
    }
    attempts++;
    guesses.push(guess);
    attemptsEl.textContent=attempts;
    historyEl.textContent =guesses.join(", ");

    if(guess === secretNumber){
        message.textContent="Correct! You have guessed the correct";
        message.className = "message correct"
        score = (maxAttempts - attempts)*10;
        scoreEl.textContent=score;
        endGame();
    }
    else if(guess > secretNumber){
        message.textContent = "Too high! try a lower"
    }
})

