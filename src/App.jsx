import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [players, setPlayersFn] = useState({ X: "Player 1", O: "Player 2" });
  const [nextSymbol, setNextSymbol] = useState("X");

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName={players["X"]}
            symbol="X"
            setPlayersFn={setPlayersFn}
            doHighlight={nextSymbol == "X"}
          />
          <Player
            defaultName={players["O"]}
            symbol="O"
            setPlayersFn={setPlayersFn}
            doHighlight={nextSymbol == "O"}
          />
        </ol>
        <GameBoard
          players={players}
          nextSymbol={nextSymbol}
          setNextSymbol={setNextSymbol}
        />
      </div>
    </main>
  );
}

export default App;
