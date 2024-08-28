import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  function getNextSymbol(nextSymbol) {
    console.log({ nextSymbol });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player defaultName="Player 1" symbol="X" />
          <Player defaultName="Player 2" symbol="O" />
        </ol>
        <GameBoard getNextSymbol={getNextSymbol} />
      </div>
    </main>
  );
}

export default App;
