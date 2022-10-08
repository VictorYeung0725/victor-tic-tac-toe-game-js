function restartGame() {
  activePlayer = 0;
  currentRound = 1;
  gameOverElement.firstElementChild.innerHTML =
    '<h2>You Won! <span id="winner-name">PLAYERNAME</span></h2>';
  gameOverElement.style.display = 'none';

  // reset the gameData by using two demensionnal for loop
  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = '';
      gameBoardItemElement.classList.remove('disabled');
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (player[0].name === '' || player[1].name === '') {
    alert('Please set up your name for both player!');
    return;
  }

  restartGame();
  
  gameAreaElement.style.display = 'block';
  activePlayerNameElement.textContent = player[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = player[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== 'LI') {
    return;
  }
  const selectedField = event.target;

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert('Please select an empty field!');
    return;
  }
  selectedField.textContent = player[activePlayer].symbol;
  selectedField.classList.add('disabled');

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerID = checkForGameOver();

  if (winnerID !== 0) {
    endGame(winnerID);
  }
  console.log(winnerID);

  currentRound = currentRound + 1; // currentRound ++;
  switchPlayer();
}

function checkForGameOver() {
  // longer version for logic
  // if(gameData[0][0] === 1 && gameData[0][1] === 1 && gameData[0][2] === 1){
  //   return 'Player 1 Won!'
  // }
  // if(gameData[0][0] === 1 && gameData[0][1] === 1 && gameData[0][2] === 1){
  //   return 'Player 1 Won!'
  // }

  /*quick but duplicate way for check the answer
   if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[0][1] &&
    gameData[0][1] === gameData[0][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[1][0] > 0 &&
    gameData[1][0] === gameData[1][1] &&
    gameData[1][1] === gameData[1][2]
  ) {
    return gameData[1][0];
  }
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[2][1] &&
    gameData[2][1] === gameData[2][2]
  ) {
    return gameData[2][0];
  }
  */
  for (let i = 0; i < 3; i++) {
    //checking all the rows logic for equality;
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    //checking all the column logic for equality;
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // Diagonal : check for Top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  // Diagonal : check for Bottom left to Top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0; // in case there is no winner yet
}

function endGame(winnerID) {
  gameOverElement.style.display = 'block';

  if (winnerID > 0) {
    const winnerName = player[winnerID - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
