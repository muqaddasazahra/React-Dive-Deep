import { useState } from "react"
import quotes from "../quotes";
import Text from "./Text";


export default function QuotesGenerator() {
    const [index,setIndex]=useState(0);

  return (
    <div className="h-1/3 w-2/4 border-teal-600 border-2 shadow-md rounded-lg flex flex-col gap-2 justify-center items-center">
      <p className="text-teal-700 font-medium text-2xl font-bold">Your Inspirational Quote is:</p>
      <Text text={quotes[index]}/>
      <button onClick={()=>setIndex((index+1)%quotes.length)}className="bg-teal-700 px-10 py-2 rounded-md text-center text-white text-lg font-bold">
        Next
      </button>
    </div>
  )
}
