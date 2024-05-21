import { act, useState } from "react";
import Button from "./components/Button";

function App() {
 
  const [text, setText] = useState();
  let [borderColor,setBorderColor]=useState(" border-gray-300");
  const [activeBtn, setActiveBtn]=useState();
  
  function handleClick(bg_color)
  {
  
  setActiveBtn(bg_color)
  if(bg_color==="Amber") setBorderColor(" border-gray-300")
  }
  

  return (
    <div className="h-screen w-full flex flex-col justify-center gap-2 items-center">
      <div 
        onClick={(event) => {

          if(event.target.value)        
          {setText(`Meet Me! I am ${event.target.value} Button's Parent.`);   
           //Button event is propagated up. This parent div will catch up 
           setBorderColor(" border-teal-500")
           return;
          }
          
          setText(`Meet Me! I am a div`);
          setBorderColor(" border-gray-300")
          setActiveBtn(" ")
          
        }}
        className={`w-[40rem] h-[16rem] py-20 px-30 border-2 border-gray-300 rounded-md shadow-md  flex flex-col gap-2 justify-center items-center ${borderColor}`}
      >  
      
        <div className="h-44">
        <p className="font-bold text-2xl">{activeBtn!=="Amber" && text}</p>
        </div>
        
        <div className="flex justify-center items-center gap-2">
        <Button bg_color="Teal" onClick={handleClick} isActive={activeBtn==="Teal"} />
        <Button bg_color="Amber"  onClick={handleClick} isActive={activeBtn==="Amber"}/>
        </div>
       
      
      </div>
    </div>
  );
}

export default App;
