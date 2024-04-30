import { useState } from "react"

export default function Square() {
    const [text,setText]=useState(null)
    function handleClick()
    {
        setText('X')
    }
  return (
   <button onClick={handleClick} className="h-24 w-24 p-0 m-0 bg-purple-800 border-white border-2 block text-2xl text-white">
    {text}
   </button>
  )
}
