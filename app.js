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

const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");

let currentPlayer = "x";

const handleClick = (event) => {
  const cell = event.target;
  cell.textContent = currentPlayer;

  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
};

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});
