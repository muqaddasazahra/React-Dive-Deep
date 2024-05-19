import React from 'react'

export default function Ball({color, onClick}) {

  let styles=`p-7 rounded-full ${color}`
  function handleClick()
  {
   onClick(color)
  }
  return (
    <button onClick={handleClick} className={styles}>
      ok
    </button>
  )
}
