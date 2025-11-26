import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, dkCounter] = useState(23)

  // let counter = 23

  const addValue=()=>{
    console.log("clicked",counter); 
    counter +=  1
    dkCounter(counter)
  }

  const removeValue=()=>{
    console.log("cllick", counter);
    counter-=1
    dkCounter(counter)
  }
  return (
    <>
     <h1> chai and react</h1>
     <h2> counter value:{counter} </h2>
     <button
     onClick={addValue}
     > add value{counter}</button>
     <br/>
     <button
     onClick={removeValue}
     >remove value {counter} </button>
      <p> footer : {counter} </p>
    </>
  )
}

export default App
