import { useState } from "react";
import Button from "./components/Button";

function App() {
 
  const [text, setText] = useState();
  const [activeBtn, setActiveBtn]=useState();
  
  function handleClick(bg_color)
  {
  setActiveBtn(bg_color)

  }

  return (
    <div className="h-screen w-full flex flex-col justify-center gap-2 items-center">
      <div 
        onClick={(event) => {

          if(event.target.value)        
          {setText(`Meet Me! I am ${event.target.value} Button's Parent.`);   //Button event is propagated up. This parent div will catch up 
          return;
          }
        setText(`Meet Me! I am a div`);
          
        }}
        className="w-[40rem] h-[16rem] py-20 px-30 border-2 border-teal-500 rounded-md shadow-md  flex flex-col gap-2 justify-center items-center"
      >  
        
        <p className="font-bold text-2xl">{activeBtn==="Teal" && text}</p>
        <Button bg_color="Teal" onClick={handleClick} isActive={activeBtn==="Teal"} />
        <Button bg_color="Amber"  onClick={handleClick} isActive={activeBtn==="Amber"}/>
      
      </div>
    </div>
  );
}

export default App;
