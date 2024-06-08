import { useRef, useState } from "react";
import Modal from "./Modal";


export default function Challenge({ text, targetTime }) {
  
 
  
  const [remainingTime, setRemainingTime]=useState(targetTime*1000);
  let timer=useRef();
  let dialog=useRef();
  const timerIsActive= remainingTime>0 && remainingTime<targetTime*1000;

  function handleStart()
  { 
    timer.current =setInterval(()=>{
    setRemainingTime(prev=>prev-10)
    },10)
  }

  if(remainingTime<=0)
    { 
    handleStop();
    }

  function handleStop()
  { 

    clearInterval(timer.current);
    setRemainingTime(targetTime*1000)
    dialog.current.open();

    
    
  }
  return (
    <>
    <Modal targetTime={targetTime} result="lost" ref={dialog}/>
     <section className="flex bg-white w-[35%] h-[70%] p-15 rounded-md shadow-md flex-col justify-center items-center gap-2">
      <h1 className="text-2xl font-bold">{text}</h1>
      <p className="text-xl font-medium">Target Time : {targetTime} </p>
      <button onClick={timerIsActive? handleStop : handleStart} className="bg-gradient-to-r from-teal-500 to-teal-700 px-10 text-white rounded-md shadow-sm py-2">
        {timerIsActive? "Stop" : "Start"}
      </button>
      <p className="text-sm">
        {timerIsActive? "Timer is running...":"Timer is In-active"}
        </p>
    </section>
    </>
  );
}
