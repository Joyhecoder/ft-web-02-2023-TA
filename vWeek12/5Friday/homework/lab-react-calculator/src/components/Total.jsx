import React from 'react'

const Total = () => {
    const myStyle = {
        backgroundColor: "grey",
        height: "50px",
        color: "white",
        fontSize: "20px",
        margin: "5px",
        textAlign: 'right'
    }
  return (
    <>
        <div className="row">
            <div className="col-6" style={myStyle}>
                <h2>0</h2>
            </div>
        </div>
    </>
  )
}

export default Total