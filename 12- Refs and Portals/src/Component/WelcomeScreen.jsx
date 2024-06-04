import { useRef, useState } from "react"

export default function WelcomeScreen() {
  const [player, setPlayer]=useState();
  const name=useRef();

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
    <h1 className='text-white text-2xl font-bold text-center'>Countdown Game</h1>
    <p className="text-xl text-white">Welcome, {player?? "New User"}</p>
    <div className='flex justify-center items-center gap-0 border-2 border-white'>
    <input ref={name} type="text" className='p-2 rounded-md bg-teal-600 text-white focus:outline-none'/>
    <button onClick={()=>setPlayer(name.current.value)} className='bg-white text-teal-600 w-28 p-2'>Let's go</button>
    </div>
    </div>
  )
}
