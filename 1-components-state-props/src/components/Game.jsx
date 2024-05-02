import { useState } from "react";
import Board from "./Board.jsx";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [nextMove, setNextMove] = useState(true);
  const [currentMove, setCurrentMove]=useState(0);
  let squares = history[currentMove];

  function handlePlay(newSquares) {
    const newHistory=[...history.slice(0,currentMove+1), newSquares]

    setHistory(newHistory);
    setCurrentMove(newHistory.length-1)
    setNextMove(!nextMove);
  }
  function handleJump(index) {
  setCurrentMove(index);
  setNextMove(index%2===0)
  }
  return (
    <>
      <div className="h-screen w-full bg-purple-300 flex gap-7 justify-center items-center">
        <Board nextMove={nextMove} squares={squares} onPlay={handlePlay} />
        {history.length > 1 && (
          <div>
            <ul className="text-black flex flex-col gap-2">
              {history.map((move, index) => (
                <li key={index}>
                  {index > 0 ? (
                    <button onClick={()=>handleJump(index)} className="bg-purple-500 text-black text-xl px-4 py-2 rounded-md shadow-md font-serif ">{`Move to move ${index}`}</button>
                  ) : (
                    <button onClick={()=>handleJump(index)} className="bg-purple-500  text-black text-xl px-4 py-2 rounded-md shadow-md font-serif">{`Reset Game`}</button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
