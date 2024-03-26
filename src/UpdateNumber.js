import React, { useState } from 'react'

export default function UpdateNumber() {
    const [num, setNum]= useState(0)
    function handleNum(){
        setNum(num+5)
        setNum(num+2)
        setNum(e=> e+1)
        setNum(42)
        
     
        
        
    }
  return (
    <div>
      <p>{num}</p>
      <button className='btn' onClick={handleNum}>+3</button>
    </div>
  )
}
