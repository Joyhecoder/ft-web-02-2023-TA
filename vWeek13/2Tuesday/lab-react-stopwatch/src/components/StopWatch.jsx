import React, {useState, useRef, useEffect} from "react";
import  './styles.css';

const StopWatch = () => {
  const [running, setRunning] = useState(false)
  const [lapse, setLapse] = useState(0)
  const intervalRef = useRef(null)
  // let intervalRef = useRef(null)

  useEffect(() => {
    
  
    return () => {
     clearInterval(intervalRef)
    }
  }, [])
  

  const handelRunState = () => {
    
    if(running){
      //running 
        //stop our clock
        clearInterval(intervalRef.current)


    }else{

      //not running
        //start our clock
        let startTime = Date.now() - lapse;
        intervalRef.current = setInterval(()=>{
          setLapse(Date.now() - startTime)
        }, 0)
    }

    setRunning(!running)
  }

  const handleClearClick = () => {
    clearInterval(intervalRef.current)

    //reset the state back to the original values
    setLapse(0)
    setRunning(false)
  }
  return (
    <div>
      <label> {lapse} ms </label> 

      <button onClick={handelRunState}>{running ? 'Stop' : 'Start'}</button>

      <button onClick={handleClearClick}>Clear</button>
  </div>
  )
}

export default StopWatch
