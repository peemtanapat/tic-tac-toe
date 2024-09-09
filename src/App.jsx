import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameLog from "./components/Gamelog";
import { useState } from "react";

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [nextSymbol, setNextSymbol] = useState("X");
  const [history, setHistory] = useState([]);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName={players["X"]}
            symbol="X"
            setPlayers={setPlayers}
            doHighlight={nextSymbol == "X"}
          />
          <Player
            defaultName={players["O"]}
            symbol="O"
            setPlayers={setPlayers}
            doHighlight={nextSymbol == "O"}
          />
        </ol>
        <GameBoard
          players={players}
          nextSymbol={nextSymbol}
          setNextSymbol={setNextSymbol}
          history={history}
          setHistory={setHistory}
        />
      </div>
      <GameLog history={history} />
    </main>
  );
}

export default App;
