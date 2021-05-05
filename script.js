

// Variable to store the list of guesses 
guesses = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    screenInstruction();

}

function newFunction() {
  showNumberAbove();
  showNumberBelow();
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 */

function displayResult(numberGuess) {
  if (numberGuess < correctNumber) {
    showNumberBelow();
  } else if  (numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess == correctNumber) {
    showYouWon();
  }
}


/**
 * Initialize a new game by resetting all values and content on the page
 */
function initGame(){
  
  location.reload();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 */
function getRandomNumber(){
  
  let correctNumber = Math.floor(Math.random() * 100) + 1;
  return correctNumber;
}

/**
 * Save guess history 
 */
function saveGuessHistory(guess) {
  
  guesses.push(guess);
  console.log(guesses);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li>
 * </ul>
 */
function displayHistory() {
  let i = guesses.length-1; 
  let list = "<ul class='list-group'>";
  
  while( i >= 0 )  {
    list += "<li class='list-group-item'>" + "You guessed " + guesses[i] + "</li>";
    i-=1;
  }

  list += '</ul>'
  document.getElementById("history").innerHTML = list; 
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  
  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  
  dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  
  dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

/* This function is to alert the user to use his phone on landscape for better view*/
function screenInstruction() {
  if (screen.width < 700) {
    alert("Use your phone on landscape for better view")
  } 
}

