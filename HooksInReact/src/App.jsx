import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = ()=>{
    if(counter >= 20){
      alert("counter Reached 20!")
    }
    else
    {
      counter = counter + 1;
      setCounter(counter)
    }
  }


  const RemoveValue=()=>{
    if(counter <= 0){
      alert("Counter Reached Zero!");
    }
    else{
      setCounter(counter -1)
    }
  }
  return (
    <>
      <h1>Learning Hooks In React</h1>
      <h2>counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value : {counter}</button>
      <br /><br />
      <button
      onClick={RemoveValue}
      >Remove Value : {counter}</button>
    </>
  )
}

export default App
