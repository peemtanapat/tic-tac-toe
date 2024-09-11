import { WIN_RULES } from "../constants";

export const getNextPlayer = (records) => {
  let nextPlayer = "X";
  if (records.length > 0 && records[0]["player"] === "X") {
    nextPlayer = "O";
  }

  return nextPlayer;
};

export const getWinner = (grid, players) => {
  let winner;

  for (const winRule of WIN_RULES) {
    // mark1
    const mark1 = grid[winRule[0].row][winRule[0].col];
    // mark2
    const mark2 = grid[winRule[1].row][winRule[1].col];
    // mark3
    const mark3 = grid[winRule[2].row][winRule[2].col];

    if (mark1 && mark1 === mark2 && mark2 === mark3) {
      winner = players[mark1];
      break;
    }
  }

  return winner;
};
