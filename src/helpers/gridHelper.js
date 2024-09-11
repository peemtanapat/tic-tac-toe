import { INITIAL_GRID } from "../constants";

export const getGrid = (records) => {
  let grid = [...INITIAL_GRID.map((grid) => [...grid])];

  for (const record of records) {
    const { position, player } = record;
    const { row, col } = position;

    grid[row][col] = player;
  }

  return grid;
};
