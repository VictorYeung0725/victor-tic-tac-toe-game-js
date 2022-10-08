const gameData = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];



let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const player = [
  {
    name:'',
    symbol: 'X'
  },
  {
    name:'',
    symbol: 'O'
  },
]



const enableModal = document.querySelector('#config-overlay');
const enableBackDrop = document.querySelector('#backdrop');
const formElement = document.querySelector('form');
const errorOuputElement = document.querySelector('#config-error');
const gameAreaElement = document.querySelector('#active-game');
const activePlayerNameElement = document.querySelector('#active-player-name');
const gameOverElement = document.getElementById('game-over');


const editPlayer1Btn = document.querySelector('#edit-play1-btn');
const editPlayer2Btn = document.querySelector('#edit-play2-btn');
const cancelModalBtn = document.querySelector('#cancel-confi-btn')
const startNewGameBtn = document.querySelector('#start-game-btn');
const gameBoardElement = document.querySelector('#game-board');
// const gameFieldElements = document.querySelectorAll('#game-board li'); testing method;


//listen to the click event occured on edit btn 1 and btn 2
editPlayer1Btn.addEventListener('click',openPlayerConfig);
editPlayer2Btn.addEventListener('click',openPlayerConfig);

//for user to close modal and backdrop if click on either cancel btn or backdrop background
cancelModalBtn.addEventListener('click',closePlayerConfig); 
enableBackDrop.addEventListener('click',closePlayerConfig); 

formElement.addEventListener('submit',savePlayerConfig);

startNewGameBtn.addEventListener('click',startNewGame);


// normal ways to loop through a nodelist 

// for(const gameFieldElement of gameFieldElements){
//   gameFieldElement.addEventListener('click',selectGameField);
// }

// another ways to loop through a nodelist 
gameBoardElement.addEventListener('click',selectGameField);

// method 1. enable the li block clickable by addeventlistener and run a function
// gameFieldElement.forEach(block=>block.addEventListener('click',choice)); 
// method 2. for of loop for looping through the node list 
// for (const gameFieldElement of gameFieldElements ){
//   gameFieldElement.addEventListener('click',selectedGameField);
// }
