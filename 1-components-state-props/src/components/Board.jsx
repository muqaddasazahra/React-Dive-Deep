import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleSquareCLick(index) {
    setSquares((prev) => {
    const newArray=[...prev];
    newArray[index]="X";
    return newArray;

    });
  }
  return (
    <div className="h-screen w-full bg-purple-300 flex justify-center items-center">
      <div className="flex gap-1 flex-col border-white border-2">
        <div className="board-row flex gap-1">
          <Square value={squares[0]} onSquareClick={()=>handleSquareCLick(0)} />
          <Square value={squares[1]} onSquareClick={()=>handleSquareCLick(1)} />
          <Square value={squares[2]} onSquareClick={()=>handleSquareCLick(2)} />
        </div>
        <div className="board-row flex gap-1">
          <Square value={squares[3]} onSquareClick={()=>handleSquareCLick(3)}  />
          <Square value={squares[4]} onSquareClick={()=>handleSquareCLick(4)}  />
          <Square value={squares[5]}  onSquareClick={()=>handleSquareCLick(5)} />
        </div>
        <div className="board-row flex gap-1">
          <Square value={squares[6]} onSquareClick={()=>handleSquareCLick(6)}  />
          <Square value={squares[7]} onSquareClick={()=>handleSquareCLick(7)}  />
          <Square value={squares[8]} onSquareClick={()=>handleSquareCLick(8)}  />
        </div>
      </div>
    </div>
  );
}
