import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  function handleFirstNameClick(e) {
    console.log("handling");
    setName((prev) => {
      let name = { ...prev };
      name.firstName = e.target.value;
      return name;
    });
  }
  function handleLastNameClick(e) {
    setName((prev) => {
      let name = { ...prev };
      name.lastName = e.target.value;
      return name;
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleReset()
  {
   setIsSubmitted(false)
   setName((prev)=>
  {
   let name={...prev};
   name.firstName="";
   name.lastName="";
   return name;
  })
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center gap-2 items-center">
      {isSubmitted && (
        <h1>
          Hey, {name.firstName} {name.lastName}, <b>Welcome!!</b>
        </h1>
      )}
      <form
        className="flex flex-col justify-center items-center gap-2"
        action=""
        onSubmit={handleSubmit}
      >
        <Input
          onChange={handleFirstNameClick}
          value={name.firstName}
          placeholder="Type First Name"
        />
        <Input
          onChange={handleLastNameClick}
          value={name.lastName}
          placeholder="Type Last Name"
        />
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-slate-300 shadow-md rounded-md"
          >
            Reset
          </button>
          <button
            onClick={() => setIsSubmitted(!isSubmitted)}
            className="px-4 py-2 bg-slate-300 shadow-md rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
