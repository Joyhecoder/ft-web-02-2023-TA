import React from 'react'

const OperatorPresent = ({obj}) => {
    const myStyle = {
        backgroundColor: "orange",
        height: "50px",
        color: "black",
        fontSize: "20px",
        margin: "5px",
        textAlign: 'center',
        width: '25vw'
    }
  return (
    <>
        <div className="col-3" style={myStyle}>
            {obj}
        </div>
    </>
  )
}

export default OperatorPresent