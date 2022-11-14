const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const info = document.querySelector(".info");
const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector(".restart-button");

let currentPlayer = "x";

const checkWin = (player) => {
  const cellValues = [];
  for (let cell of cells) {
    cellValues.push(cell.textContent);
  }

  for (let combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (cellValues[a] === player && cellValues[b] === player && cellValues[c] === player) {
      cells.forEach((cell) => cell.removeEventListener("click", handleClick));
      info.innerHTML = `Player <span class="info-player">"${player}"</span> won!`;
    }
  }
};

const handleClick = (event) => {
  const cell = event.target;
  cell.textContent = currentPlayer;
  cell.removeEventListener("click", handleClick);

  // check if the game is over
  checkWin(currentPlayer);

  // switch players
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }

  restartBtn.style.display = "block";
};

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

restartBtn.addEventListener("click", () => {
  restartBtn.style.display = "none";
  currentPlayer = "x";
  info.textContent = "";
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.addEventListener("click", handleClick);
  });
});
