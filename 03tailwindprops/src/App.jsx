import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username : "dk",
    age : 20
  }
  let newArr = [3,43,3]

  return (
    <>
    <h1 className='bg-green-400'> tailwind test </h1>
    <Card username= "chai aur react" btnText="superman" />
    <Card username= "dikshant" btnText="batman"/>  

    </>
  )
}

export default App
