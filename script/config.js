function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // +'1' = 1; change the vlaue type by js 
  
  enableModal.style.display = "block";
  enableBackDrop.style.display = "block";
}

function closePlayerConfig() {
  enableModal.style.display = "none";
  enableBackDrop.style.display = "none";
  formElement.firstElementChild.classList.remove('error');
  errorOuputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig (event) {
  event.preventDefault();
  const formData = new FormData(event.target); // build in obeject blueprint
  const enteredPlayerName = formData.get('playername').trim(); // '  ' -> '';

  //yeild falsey value if '' in bolean value;  enterPlayerName === '';
  if (!enteredPlayerName ){
    event.target.firstElementChild.classList.add('error')
    errorOuputElement.textContent = 'Please enter a valid name!';
    return;
  } 

  const updatedPlayerDataElement = document.getElementById(`player-${editedPlayer}-data`);
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;



    player[editedPlayer - 1].name = enteredPlayerName;
    // if(editedPlayer === 1){
    //   player[0].name = enteredPlayerName;
    // } else {
    //   player[1].name = enteredPlayerName;
    // }
    closePlayerConfig(); 
}