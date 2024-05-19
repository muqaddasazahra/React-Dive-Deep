import { act, useState } from "react";
import Ball from "./components/Ball";


function App() {
  const [activeBtn, setActiveBtn]=useState();
 

  function handleClick(color)
  {
 
  setActiveBtn(color);
  }
  console.log(activeBtn);
  return (
    <>
    <div className="h-screen w-full flex justify-center items-center">
      <Ball color="bg-teal-500"   onClick={handleClick}   isActive={activeBtn===""} />
      <Ball color="bg-amber-600"  onClick={handleClick}  isActive={activeBtn===""}/>
      <Ball color="bg-purple-700"  onClick={handleClick}  isActive={activeBtn===""}/>
      <Ball color="bg-purple-700"  onClick={handleClick}  isActive={activeBtn===""}/>
      <Ball color="bg-amber-600"  onClick={handleClick}  isActive={activeBtn===""}/>
      <Ball color="bg-teal-500"  onClick={handleClick}  isActive={activeBtn===""}/>
      <Ball color="bg-purple-700"  onClick={handleClick}  isActive={activeBtn===""}/>
      <Ball color="bg-teal-500"  onClick={handleClick}  isActive={activeBtn===""}/>
      <Ball color="bg-amber-600"  onClick={handleClick}  isActive={activeBtn===""}/>
      <Ball color="bg-amber-600"  onClick={handleClick}  isActive={activeBtn===""}/>
      <Ball color="bg-purple-700"  onClick={handleClick}  isActive={activeBtn===""}/>
    </div>
   
    </>
  );
}

export default App;
