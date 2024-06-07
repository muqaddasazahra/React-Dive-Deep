import { useRef, useState } from "react"

export default function WelcomeScreen() {
  const [player, setPlayer]=useState();
  const name=useRef();

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
    <h1 className='text-teal-600 text-4xl font-serif font-bold text-center'>Countdown Game</h1>
    <p className="text-xl text-teal-600 font-serif">Welcome, {player?? "New User"}</p>
    <div className='flex justify-center items-center gap-0 border-2 border-teal-600'>
    <input placeholder="Type Name here ..."  ref={name} type="text" className='py-2 px-3 bg-teal-600 text-white focus:outline-none placeholder:text-slate-200'/>
    <button onClick={()=>setPlayer(name.current.value)} className='bg-white text-teal-600 w-28 p-2'>Let's go</button>
    </div>
    </div>
  )
}
