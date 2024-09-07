import { useState } from "react";

export default function Player({
  defaultName,
  symbol,
  setPlayers,
  doHighlight,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(defaultName);

  let playerNameElement = <span className="player-name">{playerName}</span>;

  function handleClickEdit() {
    setIsEditing((editing) => !editing);
  }

  if (isEditing) {
    playerNameElement = (
      <input onChange={handleOnChange} type="text" value={playerName}></input>
    );
  }

  function handleOnChange(event) {
    const newName = event.target.value;
    setPlayers((players) => {
      players[symbol] = newName;
      return players;
    });
    setPlayerName(newName);
  }

  return (
    <li className={doHighlight ? "active" : undefined}>
      <span className="player">{playerNameElement}</span>

      <span className="player-symbol">{symbol}</span>

      <span>
        <button onClick={handleClickEdit}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
