import { useState } from "react"
import "./App.css"
import Button from "./components/Button"

function App() {
  const [count, setCount]=useState(0)   //lifted up state
  function handleClick()
  {
    setCount(count+1)
  }
  return ( 
    <>
     <div className="h-screen w-full flex justify-center items-center"> 
      <div className="flex gap-3 justify-center flex-col items-center h-1/3 w-1/3 bg-purple-300 border-purple-300 rounded-lg shadow-lg">
      <p className="font-semibold text-xl text-purple-800 ">Mutually Updating State : {count}</p>
      <div className="flex gap-2 justify-between items-center">
        {/* passed down the state to Button component*/}
        <Button count={count} onClick={handleClick} text="Add Count"/>  
        <Button count={count} onClick={handleClick} text="Add Count"/>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
