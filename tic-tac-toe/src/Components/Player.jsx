import { useState } from "react";
export default function Player({ name, symbol, isHighlight, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(name);

  function handleClick() {
    setIsEditing((prev) => !prev);
    if (isEditing) onChangeName(symbol, userName);
  }
  function handleChange(e) {
    setUserName(e.target.value);
  }

  let playerContainer = <span className={`player-name`}>{userName}</span>;

  if (isEditing)
    playerContainer = (
      <input
        placeholder="UserName"
        defaultValue={userName}
        onChange={handleChange}
      />
    );
  else playerContainer = <span className="player-name">{userName}</span>;

  return (
    <li className={isHighlight ? "active" : null}>
      <span className="player">
        {playerContainer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
