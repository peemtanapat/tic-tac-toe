import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [players, setPlayersFn] = useState({ X: "Player 1", O: "Player 2" });
  const [nextSymbol, setNextSymbol] = useState("X");
  const [history, setHistory] = useState([]);

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
          setHistory={setHistory}
        />
      </div>
      <div id="log">
        {history.map((hist) => {
          const currSymbol = Object.keys(hist)[0];
          const row = hist[currSymbol][0];
          const col = hist[currSymbol][1];

          return (
            <li key={row + col}>{currSymbol + ": " + row + ", " + col}</li>
          );
        })}
      </div>
    </main>
  );
}

export default App;
