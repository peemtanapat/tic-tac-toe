let initialBlocks = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameOver({ winner, setWinner, setBlocks }) {
  function handleResetGame() {
    setBlocks(initialBlocks);
    setWinner(null);
  }

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner} won!</p>
      <button onClick={handleResetGame}>Rematch</button>
    </div>
  );
}
