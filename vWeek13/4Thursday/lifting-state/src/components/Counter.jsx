import React, {useState} from 'react'
import DisplayCount from './DisplayCount'
import IncrementCount from './IncrementCount'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount( count + 1)
    }
  return (
    <>
    <h1>Counter</h1>
    <DisplayCount countProp={count} />

    <IncrementCount increment={increment} reset={()=>setCount(0)} />
    </>
  )
}

export default Counter