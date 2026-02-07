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


function setupGame{
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
    return Math.floor(Math.random()*(max-min+1))
}