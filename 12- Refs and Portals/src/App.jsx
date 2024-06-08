import Challenge from "./Component/Challenge"
import WelcomeScreen from "./Component/WelcomeScreen"


function App() {

  return (
    <>
    <div className="h-screen bg-white w-full flex flex-col gap-6 justify-center items-center ">
     {/* <WelcomeScreen/> */}
     
     <div className="h-2/4 w-[70%]  bg-gradient-to-br from-teal-500 via-slate-600 to-teal-700 rounded-md shadow-2xl flex justify-center items-center gap-8">
     <Challenge text="Easy Challenge" targetTime={3}/>
     <Challenge text="Medium Challenge" targetTime={6}/>
     </div>
     
     
     
    </div>
    </>
  )
}

export default App
