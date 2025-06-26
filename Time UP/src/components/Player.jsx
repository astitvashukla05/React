import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>
        Welcome, <span style={{ color: "#00eeff", fontWeight: "bold" }}>
          {enteredPlayerName ?? "Unknown Entity"}
        </span>
      </h2>
      <p>
        <input
          type="text"
          ref={playerName}
          placeholder="Enter your name"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
