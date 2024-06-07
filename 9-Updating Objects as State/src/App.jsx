import Button from "./components/Button";
import Input from "./components/Input";
import { useRef, useState } from "react";
import Modal from "./components/Modal";
import FormSection from "./components/FormSection";


function App() {
  let dialog=useRef();
  const defaultForm = {
    name: {
      firstName: "",
      lastName: "",
      middleName: "",
    },
    university: { name: "", dep: "", batch: "" },
    society: { name: "", position: "" },
  };
  const [form, setForm] = useState(defaultForm);
  const [isSubmitted,setIsSubmited]=useState(false)
  function handleChange(section, field, event)
  {
  setIsSubmited(false)
  setForm((f)=>{
    let data={...f,
      [section]:
      {
        ...f[section],
        [field]: event.target.value
      }
    }
    console.log(data)
    return data;
  })
  }
  function handleReset() {
    setIsSubmited(false)
    setForm(defaultForm);
   
  }
  return (
    <>
      
      <div className="h-screen w-full flex flex-col text text-indigo-500 justify-center items-center">
      <Modal form={form} ref={dialog} onEdit={()=>setIsSubmited(false)} onClose={handleReset}/> 
        <form onSubmit={(e)=>e.preventDefault()} className="h-[80%] w-[30%] flex justify-center items-center flex-col border-indigo-500 border-2 gap-2 rounded-md">
          <FormSection section="Full Name">
          <Input value={form.name.firstName} placeholder="First Name" onChange={(event)=>handleChange("name","firstName",event)} />
          <Input value={form.name.middleName} placeholder="Middle Name" onChange={(event)=>handleChange("name","middleName",event)}/>
          <Input value={form.name.lastName} placeholder="Last Name" onChange={(event)=>handleChange("name","lastName",event)}/>
          </FormSection>
          <FormSection section="University Details">
          <Input value={form.university.name} placeholder="University Name" onChange={(event)=>handleChange("university","name",event)} />
          <Input value={form.university.dep} placeholder="Department" onChange={(event)=>handleChange("university","dep",event)}/>
          <Input value={form.university.batch} placeholder="Batch" onChange={(event)=>handleChange("university","batch",event)}/>
          </FormSection>
          <FormSection section="Society Details">
          <Input value={form.society.name} placeholder="Society Name" onChange={(event)=>handleChange("society","name",event)} />
          </FormSection>
          
          <div className="mt-5 flex justify-end w-full mr-20 gap-2 items-center">
            <Button text="Reset" onClick={handleReset} />
            <Button text="Submit" onClick={()=>{setIsSubmited(true); dialog.current.showModal()}}/>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
