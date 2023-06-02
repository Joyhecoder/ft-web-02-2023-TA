import React from 'react'
import OperatorPresent from './OperatorPresent'

const Operators = () => {
    const operatorArr = ['AC', '+/-', '%', 'X']
  return (
    <>
        <div className="row">
          
            {operatorArr.map(obj => {
                return <OperatorPresent obj={obj} />
              })}
          
           
        </div>
    
    </>
  )
}

export default Operators