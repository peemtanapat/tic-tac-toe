import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [players, setPlayersFn] = useState({ X: "Player 1", O: "Player 2" });

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            defaultName={players["X"]}
            symbol="X"
            setPlayersFn={setPlayersFn}
          />
          <Player
            defaultName={players["O"]}
            symbol="O"
            setPlayersFn={setPlayersFn}
          />
        </ol>
        <GameBoard players={players} />
      </div>
    </main>
  );
}

export default App;
