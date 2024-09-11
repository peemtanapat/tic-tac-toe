import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import GameLog from "./components/Gamelog";
import { getNextPlayer, getWinner } from "./helpers/playerHelper";
import { getGrid } from "./helpers/gridHelper";
import { INITIAL_GRID } from "./constants";

const INITIAL_PLAYERS = { X: "Player 1", O: "Player 2" };

function App() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [records, setRecords] = useState([]); // [{"position": {"row": 0, "col": 1}, "player": {symbol: "X"}}]

  const nextPlayer = getNextPlayer(records);

  const grid = getGrid(records);

  const winner = getWinner(grid, players);

  const isDraw = !winner && records.length === 9;

  function handleResetGame() {
    setRecords([]);
    grid = INITIAL_GRID;
  }

  function handleMark(newRow, newCol) {
    setRecords((prevRecords) => {
      const newPlayer = getNextPlayer(prevRecords);

      return [
        { position: { row: newRow, col: newCol }, player: newPlayer },
        ...prevRecords,
      ];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName={players["X"]}
            symbol="X"
            setPlayers={setPlayers}
            doHighlight={nextPlayer === "X"}
          />
          <Player
            defaultName={players["O"]}
            symbol="O"
            setPlayers={setPlayers}
            doHighlight={nextPlayer === "O"}
          />
        </ol>
        <GameBoard grid={grid} handleMark={handleMark} />
        {(winner || isDraw) && (
          <GameOver
            winner={winner}
            isDraw={isDraw}
            handleResetGame={handleResetGame}
          />
        )}
      </div>
      <GameLog records={records} />
    </main>
  );
}

export default App;
