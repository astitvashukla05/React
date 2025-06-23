export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn, index) => {
        const { square, player } = turn;
        const { row, col } = square;
        return <li key={`${row}${col}`}>{`${player} moved on (${row}, ${col})`}</li>;
      })}
    </ol>
  );
}
