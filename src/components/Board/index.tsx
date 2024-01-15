import { calculateWinner } from "../../utils/calculateWinner";
import { Player } from "../Player";
import { Square } from "../Square";
import { Winner } from "../Winner";

interface Board {
  xIsNext: boolean;
  squares: any[];
  onPlay: (nextSquares: []) => void;
}

export const Board = ({ xIsNext, squares, onPlay }: Board) => {
  const winner = calculateWinner(squares);

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    onPlay(nextSquares);
  };

  return (
    <div>
      {winner ? <Winner winner={winner} /> : <Player xIsNext={xIsNext} />}

      <div className="table">
        <div>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
};
