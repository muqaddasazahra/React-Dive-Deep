
import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const [color, setColor]=useState("pink")
  function handleColor(newColor)
  {  
    setColor(newColor)
  }
  return (
    <>
    <div className='w-full h-screen bg-pink-400 flex justify-center' style={{backgroundColor:color}}>
     <div className='w-2/3 h-20 rounded-md absolute bottom-24 bg-white border-gray-600 shadow-lg flex justify-center items-center gap-4'>
     <Button text="Pink" colorSetter={handleColor}/>
     <Button text="Purple" colorSetter={handleColor}/>
     <Button text="Yellow" colorSetter={handleColor}/>
     <Button text="Olive" colorSetter={handleColor}/>
     <Button text="Grey" colorSetter={handleColor}/>
     <Button text="Green" colorSetter={handleColor}/>
     <Button text="Blue" colorSetter={handleColor}/>
     <Button text="Red" colorSetter={handleColor}/>
     <Button text="White" colorSetter={handleColor}/>
     <Button text="Black" colorSetter={handleColor} style={{color:"white", backgroundColor:"black"}}/>
     </div>
    </div>
    </>
  )
}

export default App
