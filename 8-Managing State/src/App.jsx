import { useState } from "react";
import Ball from "./components/Ball";
import DropDown from "./components/DropDown";

function App() {
  const [activeBtn, setActiveBtn] = useState();
  

  function handleClick(color) {
    setActiveBtn(color);
     }

  

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="h-2/3 w-full flex flex-col gap-10 justify-center items-center">
          <DropDown onClick={handleClick} activeBtn={activeBtn} btnText={activeBtn==="bg-teal-500"? "Teal": activeBtn==="bg-amber-600"? "Amber": activeBtn==="bg-purple-700"? "Purple":"Select Color"}/>
          <div className="flex justify-center items-center">
            <Ball
              color="bg-teal-500"
              onClick={handleClick}
              isActive={activeBtn === "bg-teal-500"}
            />
            <Ball
              color="bg-amber-600"
              onClick={handleClick}
              isActive={activeBtn === "bg-amber-600"}
            />
            <Ball
              color="bg-purple-700"
              onClick={handleClick}
              isActive={activeBtn === "bg-purple-700"}
            />
            <Ball
              color="bg-purple-700"
              onClick={handleClick}
              isActive={activeBtn === "bg-purple-700"}
            />
            <Ball
              color="bg-amber-600"
              onClick={handleClick}
              isActive={activeBtn === "bg-amber-600"}
            />
            <Ball
              color="bg-teal-500"
              onClick={handleClick}
              isActive={activeBtn === "bg-teal-500"}
            />
            <Ball
              color="bg-purple-700"
              onClick={handleClick}
              isActive={activeBtn === "bg-purple-700"}
            />
            <Ball
              color="bg-teal-500"
              onClick={handleClick}
              isActive={activeBtn === "bg-teal-500"}
            />
            <Ball
              color="bg-amber-600"
              onClick={handleClick}
              isActive={activeBtn === "bg-amber-600"}
            />
            <Ball
              color="bg-amber-600"
              onClick={handleClick}
              isActive={activeBtn === "bg-amber-600"}
            />
            <Ball
              color="bg-purple-700"
              onClick={handleClick}
              isActive={activeBtn === "bg-purple-700"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
