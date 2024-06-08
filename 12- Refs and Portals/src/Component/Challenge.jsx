import { useRef, useState } from "react";
import Modal from "./Modal";


export default function Challenge({ text, targetTime }) {
  
  const [timerStarted, setTimerStarted]=useState(false)
  const [timerExpired, setTimerExpired]=useState(false);
  let timer=useRef();
  let dialog=useRef();

  function handleStart()
  { 
    timer.current =setTimeout(()=>{
    setTimerExpired(true);
    dialog.current.open();
    setTimerStarted(false);
    }, targetTime*1000)

    setTimerStarted(true)
  }

  function handleStop()
  { 

    clearTimeout(timer.current);
    setTimerStarted(false);
    
  }
  return (
    <>
    <Modal targetTime={targetTime} result="lost" ref={dialog}/>
     <section className="flex bg-white w-[35%] h-[70%] p-15 rounded-md shadow-md flex-col justify-center items-center gap-2">
      <h1 className="text-2xl font-bold">{text}</h1>
      <p className="text-xl font-medium">Target Time : {targetTime} </p>
      <button onClick={timerStarted? handleStop : handleStart} className="bg-gradient-to-r from-teal-500 to-teal-700 px-10 text-white rounded-md shadow-sm py-2">
        {timerStarted? "Stop" : "Start"}
      </button>
      <p className="text-sm">
        {timerStarted? "Timer is running...":"Timer is In-active"}
        </p>
    </section>
    </>
  );
}
