import { useState } from "react";
import Square from "./Square";

export default function Board({nextMove, squares, onPlay}) {
  // const [squares, setSquares] = useState(Array(9).fill(null));  --->state uplifted to let the game component tracks game state(history) at every move 
  // const [nextMove, setNextMove]=useState(true)

  const winner=calculateWinner(squares)
  let status;
  if(winner)
  {
    status=`${winner} won!`;
  }
  else if(squares.every(item=>item===null))
  {
    status= "Player : " + (nextMove? "X":"O")
  }
  else
  {
    status="Next Player : " + (nextMove? "X":"O")
  }

  function handleSquareCLick(index) {
    
    if(squares[index] || calculateWinner(squares))
    return;
    
    const newArray=[...squares];    //immutability-->changing data by making changes in the copy of it , keeping original data intact
    if(nextMove)
    newArray[index]="X";   //immutabailiy approach--> changing data making copy of it that has desired changes , not directly changing squares array
    else
    newArray[index]="O"    //immutabailiy approach--> changing data making copy of it that has desired changes
 
    onPlay(newArray)
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i=0;i<lines.length;i++)
    {
      const [a,b,c]=lines[i];
      if(squares[a] && squares[a]===squares[b]&& squares[a]===squares[c])
      return squares[a];
    }
      
      return null
    }
  
  return (
    <>
       <div className="flex flex-col gap-4 items-center justify-center">
      <div className="text-2xl text-purple-900 font-bold font-serif">{status}</div>
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
      </>
  );
}
