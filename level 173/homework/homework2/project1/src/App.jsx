import { useState, useRef } from 'react'

function App() {
  
  return (
    <div>
      <ValueCard />
      <UseRefCard />
      <UseStateCard />
    </div>
  )
    
}

export default App

function ValueCard(){
  let normalVariable = 0;
  return (
    <div>
      <p>{normalVariable}</p>
      <button onClick={()=>{normalVariable + 1}}>increment </button>
      <button onClick={()=>{console.log(normalVariable)}}>console-log</button>
      <button onClick={()=>{window.location.reload()}}>render</button>
    </div>
  )
}

function UseRefCard(){
  let countRef = useRef(0);
  return (
    <div>
      <p>{countRef.current}</p>
      <button onClick={()=>{countRef.current += 1}}>increment </button>
      <button onClick={()=>{console.log(countRef.current)}}>console-log</button>
      <button onClick={()=>{window.location.reload()}}>render</button>
    </div>
  )
}

function UseStateCard(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{setCount(prev => prev + 1);}}>increment </button>
      <button onClick={()=>{console.log(count)}}>console-log</button>
      <button onClick={()=>{setCount(count)}}>render</button>
    </div>
  )
}