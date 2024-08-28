import React, { useState } from "react";
// import WinningBoards from "../constants/winningBoards";

let initialBlocks = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ getNextSymbol }) {
  const [currentSymbol, setCurrentSymbol] = useState("X");
  const [blocks, setBlocks] = useState(initialBlocks);

  function checkWin() {
    WinningBoards.forEach((winningBoard) => {
      if (blocks == winningBoard) {
      }
    });
  }

  function handleOnSelectBlock(event) {
    const [row, _, col] = event.target.value;
    console.log({ row, col });

    setCurrentSymbol((curr) => {
      const newSymbol = curr === "X" ? "O" : "X";
      getNextSymbol(newSymbol);
      return newSymbol;
    });

    // replace the specific row,col with X
    console.log({ after: initialBlocks });
    setBlocks((prevBlocks) => {
      const updatedBlocks = [
        ...prevBlocks.map((innerBlock) => [...innerBlock]),
      ];
      updatedBlocks[row][col] = currentSymbol;
      return updatedBlocks;
    });
  }

  console.log("re-render");

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
