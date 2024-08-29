import React, { useState } from "react";

let initialBlocks = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ getNextSymbol }) {
  const [nextSymbol, setNextSymbol] = useState("X");
  const [prevSymbol, setPrevSymbol] = useState("");
  const [blocks, setBlocks] = useState(initialBlocks);
  const [rowCol, setRowCol] = useState([null, null]);

  function checkWin(updatedBlocks, symbol, rowCol) {
    const [row, col] = rowCol;

    if (row == null || col == null) {
      return;
    }

    // horizontal
    if (updatedBlocks[row].every((col) => col == symbol)) {
      window.alert(`${symbol} WIN Horizontal -`);
    }
    // vertical
    else if (
      [
        updatedBlocks[0][col],
        updatedBlocks[1][col],
        updatedBlocks[2][col],
      ].every((elem) => elem == symbol)
    ) {
      window.alert(`${symbol} WIN Vertical |`);
    }
    // diagonal /
    else if (
      [updatedBlocks[0][2], updatedBlocks[1][1], updatedBlocks[2][0]].every(
        (elem) => elem == symbol
      )
    ) {
      window.alert(`${symbol} WIN Diagonal /`);
    }
    // diagonal \
    else if (
      [updatedBlocks[0][0], updatedBlocks[1][1], updatedBlocks[2][2]].every(
        (elem) => elem == symbol
      )
    ) {
      window.alert(`${symbol} WIN Diagonal \\`);
    }
  }

  async function handleOnSelectBlock(event) {
    const [row, _, col] = event.target.value;
    setRowCol([row, col]);

    setNextSymbol((curr) => {
      setPrevSymbol(curr);
      const newSymbol = curr === "X" ? "O" : "X";
      getNextSymbol(newSymbol);
      return newSymbol;
    });

    // replace the specific row,col with X
    setBlocks((prevBlocks) => {
      const updatedBlocks = [
        ...prevBlocks.map((innerBlock) => [...innerBlock]),
      ];
      updatedBlocks[row][col] = nextSymbol;
      return updatedBlocks;
    });
  }

  checkWin(blocks, prevSymbol, rowCol);

  return (
    <ol id="game-board">
      {blocks.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  value={[rowIndex, columnIndex]}
                  onClick={handleOnSelectBlock}
                >
                  {playSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
