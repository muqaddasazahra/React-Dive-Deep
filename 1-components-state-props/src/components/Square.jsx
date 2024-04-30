import { useState } from "react";

export default function Square({ value, onSquareClick }) //value props holds the state information passed down to Square component
 {
 /*const [text,setText]=useState(null)  {State is uplifted because the board component needs to 
                                          know tha value of squares in order to decide winner}*/

  return (
    <button
      onClick={onSquareClick}
      className="h-24 w-24 p-0 m-0 bg-purple-800 border-white border-2 block text-2xl text-white"
    >
      {value}
    </button>
  );
}
