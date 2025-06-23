import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import { useState } from "react";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning_comb";
import GameOver from "./GamerOver";

const PLAYERS={
    X: "Player 1",
    O: "Player 2",
  }
const INTIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") currPlayer = "O";
  else currPlayer = "X";
  return currPlayer;
}

function declareWinner(gameBoard, playerName) {
  let winner;
  for (const comb of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[comb[0].row][comb[0].column];
    const secondSymbol = gameBoard[comb[1].row][comb[1].column];
    const thirdSymbol = gameBoard[comb[2].row][comb[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = playerName[firstSymbol];
    }
  }
  return winner;
}
function createGameBoard(initialGameBoard, gameTurns) {
  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [playerName, setPlayerName] = useState(PLAYERS);

  const [gameTurns, setGameTurns] = useState([]);

  const currActivePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = createGameBoard(INTIAL_GAME_BOARD, gameTurns);

  const winner = declareWinner(gameBoard, playerName);

  const hasDrawn = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prev) => {
      let activePlayer = deriveActivePlayer(prev);
      let updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prev,
      ];

      return updatedTurns;
    });
  }
  function handleReset() {
    setGameTurns([]);
  }
  function handleNameChage(symbol, newName) {
    setPlayerName((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isHighlight={currActivePlayer === "X"}
            onChangeName={handleNameChage}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isHighlight={currActivePlayer === "O"}
            onChangeName={handleNameChage}
          />
        </ol>
        {(winner || hasDrawn) && (
          <GameOver winner={winner} handleClick={handleReset} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} game={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
