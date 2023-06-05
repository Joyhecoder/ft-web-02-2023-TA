import React, {useState} from 'react'

const CounterHW = () => {
    const [counter, setCounter] = useState(0)
  return (
    <>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter + 1)}>+1</button>
    <button onClick={()=>setCounter(counter - 1)}>-1</button>
    </>
  )
}

export default CounterHW