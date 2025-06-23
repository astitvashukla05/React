
export default function GameBoard({onSelectSquare,game}) {
  
  return (
    <ol id="game-board">
      {game.map((row, rIndex) => (
        <li key={rIndex}>
          <ol>
            {row.map((playerSymbol, cIndex) => (
              <li key={cIndex}>
                <button onClick={()=>onSelectSquare(rIndex,cIndex)} disabled={playerSymbol!=null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}


//     const [gameBoard, setGameBoard] = useState(game);
//   function handClick(rowIndex, colIndex) {
//     if(gameBoard[rowIndex][colIndex]!=null){
//        return
//     }

//     setGameBoard((prev) => {
//       let newGameBoard = [...prev.map((innerArr) => [...innerArr])];
//       newGameBoard[rowIndex][colIndex] = currSymbol;
//       return newGameBoard;
//     });
//     onSelectSquare()
//   }