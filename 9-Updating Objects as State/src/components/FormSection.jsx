import React from 'react'

export default function FormSection({children, section}) {

  return (
    <div className="relative w-fit flex gap-2 border-t-2 border-t-indigo-500 px-3 py-3 justify-center flex-col items-center">
    <p className='absolute bg-white px-2 top-[-14px] text-indigo-700 font-medium left-0 text-sm'>{section}</p>
    {children}
    </div>
  )
}
