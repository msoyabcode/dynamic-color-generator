import React, { useState } from 'react'

const App = () => {

const [color, setColor] = useState("#FFFFFF")
const [copy, setCopy] = useState("")
const [history, sethistory] = useState([])

const colorChange = () =>{
  const hexColrs = "123456789ABCDEF"
  let newColors = "#"
  for(let i=0; i<6; i++){
    const randomColrs = Math.floor(Math.random()*16)
    newColors+=hexColrs[randomColrs]
  }
  if(newColors===color){
    return 
  } 
  setColor(newColors)

  sethistory(prev=>{
    if(prev.includes(newColors)){
      return prev
    }
   return [...prev, newColors ]})

}


const copyColor = async () =>{
  try{
    await navigator.clipboard.writeText(color)
    setCopy("Copied!")
    setTimeout(()=> setCopy(""),2000)
  }
  catch{
    setCopy("Failed!")
   setTimeout(()=> setCopy(" "),2000)
  }
}

  return (
    <div>
      <div className='h-screen flex flex-col justify-center items-center transition-colors duration-500 ' style={{backgroundColor: color}}>
        <h1 className='text-2xl mb-6 font-bold transition duration-300 '>{color}</h1>
        <div className='mb-4 flex flex-col items-center'>
           <button className='text-lg font-medium bg-white py-2 px-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer' onClick={()=>copyColor()}>Copy Color Code</button>
           {copy&& <span className='mt-2 text-white font-semibold'>{copy}</span>}
          </div>
          <div className='flex gap-2 mt-6 mb-5 flex-wrap p-11 '>
         { history.map((historyColor, index) => (
          <div className='w-8 h-8 border-2' key={index}
          style={{backgroundColor: historyColor}}
          onClick={()=> setColor(historyColor)}>
          </div>
          ))}
          </div>
        <button className='text-3xl font-medium bg-white py-2 px-2 rounded-2xl shadow-2xl transition-shadow duration-300 cursor-pointer' onClick={()=>colorChange()}>Click me to change color </button>
      </div>
    </div>
  )
}

export default App
 