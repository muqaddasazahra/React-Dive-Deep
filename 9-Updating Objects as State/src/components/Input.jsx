import React, { useState } from 'react'

export default function Input({placeholder, value, onChange}) {
   
  const [isFocused,setIsFocused]=useState()
  
  return (
    <> 
    {isFocused && <p className="text-sm w-72 px-1 text-left">{placeholder}</p>}
    <input value={value} onFocus={()=>{setIsFocused(true)}} onBlur={()=>setIsFocused(false)} onChange={onChange} type="text" placeholder={placeholder} className='w-72 h-9 bg-indigo-300 py-1 px-2 rounded-md border-gray-400 shadow-md text-indigo-600 font-normal placeholder:text-white focus:outline-none focus:border-indigo-600 focus:border-2 focus:bg-indigo-400 focus:text-white' />
    </>
  )
}
