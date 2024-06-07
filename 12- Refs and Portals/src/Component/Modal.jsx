import React, { useState } from 'react'
import { forwardRef } from 'react';


const Modal=forwardRef(function Modal({result, targetTime},ref) {
   
return <dialog ref={ref} className='rounded-md shadow-lg w-fit h-fit p-20 backdrop:bg-black backdrop:opacity-60'>

    <h1 className='text -teal-700 text-4xl font-serif font-semibold'>You {result}</h1>
        <p className='text-xl '>Target time was <strong>{targetTime} seconds.</strong></p>
        <p className='text-xl'>you stopped the timer with <strong>X seconds left</strong></p>
    <form method='dialog'>
        <button className="bg-gradient-to-r from-teal-500 to-teal-700 px-10 text-white rounded-md shadow-sm py-2 mt-5">Close</button>
    </form>   

</dialog>
  
}
)

export default Modal;


