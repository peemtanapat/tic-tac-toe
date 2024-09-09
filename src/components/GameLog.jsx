export default function GameLog({ history }) {
  return (
    <div id="log">
      {Object.entries(history).map(([key, value]) => {
        const row = key.charAt(0);
        const col = key.charAt(1);
        const symbol = value;

        return (
          <li key={symbol + row + col}>{symbol + ": " + row + ", " + col}</li>
        );
      })}
    </div>
  );
}
