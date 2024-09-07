let initialBlocks = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameOver({
  winner,
  setWinner,
  setBlocks,
  setCount,
  setHistory,
  isDraw,
}) {
  function handleResetGame() {
    setBlocks(initialBlocks);
    setWinner(null);
    setCount(0);
    setHistory([]);
  }

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{isDraw ? "It's a draw" : winner + " won!"}</p>
      <button onClick={handleResetGame}>Rematch</button>
    </div>
  );
}
