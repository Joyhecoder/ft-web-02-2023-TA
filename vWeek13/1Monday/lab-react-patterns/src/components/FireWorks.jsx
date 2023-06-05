import React, {useState} from 'react'

const FireWorks = () => {
    const [fireWorks, setFireWorks] = useState('🧨')
    const handleClick = () => {
        fireWorks == '🧨' ? setFireWorks('💥') : setFireWorks('🧨')
    }
  return (
    <>
    <h1>{fireWorks}</h1>
    
    <button onClick={()=>handleClick()}>switch</button>
    
    </>

  )
}

export default FireWorks