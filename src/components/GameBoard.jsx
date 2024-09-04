import React, { useState } from "react";
import GameOver from "./GameOver";

let initialBlocks = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ players, nextSymbol, setNextSymbol }) {
  const [prevSymbol, setPrevSymbol] = useState("");
  const [blocks, setBlocks] = useState(initialBlocks);
  const [rowCol, setRowCol] = useState([null, null]);
  const [count, setCount] = useState(0);

  const [winner, setWinner] = useState(null);

  function checkWin(updatedBlocks, symbol, rowCol) {
    const [row, col] = rowCol;

    if (row == null || col == null) {
      return;
    }

    // horizontal
    if (updatedBlocks[row].every((col) => col == symbol)) {
      setWinner(players[symbol]);
    }
    // vertical
    else if (
      [
        updatedBlocks[0][col],
        updatedBlocks[1][col],
        updatedBlocks[2][col],
      ].every((elem) => elem == symbol)
    ) {
      setWinner(players[symbol]);
    }
    // diagonal /
    else if (
      [updatedBlocks[0][2], updatedBlocks[1][1], updatedBlocks[2][0]].every(
        (elem) => elem == symbol
      )
    ) {
      setWinner(players[symbol]);
    }
    // diagonal \
    else if (
      [updatedBlocks[0][0], updatedBlocks[1][1], updatedBlocks[2][2]].every(
        (elem) => elem == symbol
      )
    ) {
      setWinner(players[symbol]);
    }
  }

  async function handleOnSelectBlock(event) {
    setCount((count) => count + 1);
    const [row, _, col] = event.target.value;
    setRowCol([row, col]);

    setNextSymbol((curr) => {
      setPrevSymbol(curr);
      const newSymbol = curr === "X" ? "O" : "X";
      return newSymbol;
    });

    // replace the specific row,col with X
    setBlocks((prevBlocks) => {
      const updatedBlocks = [
        ...prevBlocks.map((innerBlock) => [...innerBlock]),
      ];
      updatedBlocks[row][col] = nextSymbol;
      checkWin(updatedBlocks, nextSymbol, [row, col]);
      return updatedBlocks;
    });
  }

  const isDraw = winner == null && count === 9;

  return (
    <>
      {(winner || isDraw) && (
        <GameOver
          winner={winner}
          setWinner={setWinner}
          setBlocks={setBlocks}
          setCount={setCount}
          isDraw={isDraw}
        />
      )}
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
    </>
  );
}
