import React, { useState } from 'react'


const App = () => {

const [color, setColor] = useState("#FFFFFF")

const colorChange = () =>{
  const hexColrs = "123456789ABCDEF"
  let newColors = "#"
  for(let i=0; i<6; i++){
    const randomColrs = Math.floor(Math.random()*16)
    newColors+=hexColrs[randomColrs]
  }
  setColor(newColors)
}



  return (
    <div>
      <div className='h-screen flex flex-col justify-center items-center transition-color duration-500 ' style={{backgroundColor: color}}>
        <h1 className='text-2xl mb-6 font-bold transition duration-300 '>{color}</h1>
        <button className='text-3xl font-medium bg-white py-2 px-2 rounded-2xl shadow-2xl transition-shadow duration-300 cursor-pointer' onClick={()=>colorChange()}>Click me to change color </button>
      </div>
    </div>
  )
}

export default App

