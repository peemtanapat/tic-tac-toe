import React from "react";

export default function GameBoard({ grid, handleMark }) {
  return (
    <>
      <ol id="game-board">
        {grid.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((symbol, columnIndex) => (
                <li key={columnIndex}>
                  <button
                    onClick={() => handleMark(rowIndex, columnIndex)}
                    disabled={symbol !== null}
                  >
                    {symbol}
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
