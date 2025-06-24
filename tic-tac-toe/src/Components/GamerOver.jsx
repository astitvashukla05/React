export default function GameOver({ winner,handleClick }) {
  return (
    <div id="game-over">
      <h2>Game Over! </h2>
     {winner && <p>{winner} Won !!!</p>}
     {!winner && <p>Game Tied</p>}
        <button onClick={handleClick}>Restart</button>
    </div>
  )
}
