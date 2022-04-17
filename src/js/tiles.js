const tilesContainer = document.querySelector('#tiles');
export const gameOver = () => {
  document.body.innerHTML += `<div id="toast" class="lost">Better luck next time</div>`;
  document.querySelector('input').setAttribute('disabled', true);
};

export const gameWon = (word) => {
  word.split('').forEach((c) => addTile(c.toUpperCase(), 'green'));
  document.body.innerHTML += `<div id="toast" class="won">Great Work! The word was: ${word}</div>`;
  document.querySelector('input').setAttribute('disabled', true);
};

export const addTile = (str, color) => {
  tilesContainer.innerHTML += `<div class="tile ${color}">${str.toUpperCase()}</div>`;
};
