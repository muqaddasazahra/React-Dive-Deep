import React from 'react'

export default function Ball({color, onClick, isActive}) {

  let styles=`p-7 rounded-full border-2 border-gray-300`
  if(isActive)
  styles=`p-7 rounded-full ${color}`
 
 
  return (
    <>
    <button onClick={()=>onClick(color)} className={styles}>
    
    </button>
    </>
  )
}
