import React, {useState} from 'react'

const Status = () => {
    const [status, setStatus] = useState('Active')
  return (
    <>
    <h2>{status}</h2>
    <button onClick={()=>setStatus('Active')}>Active</button>
    <button onClick={()=>setStatus('Away')}>Away</button>
    <button onClick={()=>setStatus('Offline')}>Offline</button>
    
    
    </>
  )
}

export default Status