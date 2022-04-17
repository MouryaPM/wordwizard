import { addTile, gameOver, gameWon } from "./tiles";
import { getWord, isInDictionary } from "./words";

//grap data
let inputE1 = document.querySelector("input");
// word from dictionary
let word = getWord();
// set totalchances
let totalchances = 6;

// when user hits keyboard

inputE1.addEventListener("keyup", (event) => {
  let keypressed = event.key;
  let guess = event.target.value.toLowerCase();
  if (keypressed === "Enter" && guess.length === 5 && totalchances > 0) {
    if (word === guess) {
      gameWon(word);
      event.target.value = "";
      return;
    }
    if (isInDictionary(guess)) {
      for (let x = 0; x < 5; x++) {
        if (word[x] === guess[x]) {
          addTile(guess[x], "green");
        } else if (word.includes(guess[x])) {
          addTile(guess[x], "orange");
        } else {
          addTile(guess[x], "grey");
        }
      }
      totalchances = totalchances - 1;
    }
    event.target.value = "";
  }
  if (totalchances <= 0) {
    gameOver();
    return;
  }
});
