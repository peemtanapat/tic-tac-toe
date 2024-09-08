export default function GameLog({ history }) {
  return (
    <div id="log">
      {history.map((hist) => {
        const currSymbol = Object.keys(hist)[0];
        const row = hist[currSymbol][0];
        const col = hist[currSymbol][1];

        return (
          <li key={currSymbol + row + col}>
            {currSymbol + ": " + row + ", " + col}
          </li>
        );
      })}
    </div>
  );
}
