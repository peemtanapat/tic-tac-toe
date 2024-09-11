export default function GameLog({ records }) {
  return (
    <div id="log">
      {records.map((record) => {
        const { position, player } = record;
        const { row, col } = position;

        return (
          <li key={player + row + col}>{player + ": " + row + ", " + col}</li>
        );
      })}
    </div>
  );
}
