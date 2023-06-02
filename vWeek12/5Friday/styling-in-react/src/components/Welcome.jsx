import React from 'react'
import './welcome.css'

const Welcome = () => {
  return (
    <>
        <div style={ {color: "red", margin: '5px', backgroundColor: 'blueviolet', padding: '40px'}}>Welcome to our space</div>
        <div style={myStyles.h1Style}>Welcome to our space</div>
        <div style={myStyles.coreContent}>More styles</div>

        <p className='paragraph'>I am a paragraph tag</p>
    </>
  )
}

// const myStyles = {
//     color: 'purple',
//     fontSize: '50px'

// }

const myStyles = {
    h1Style: {
        color: 'pink',
        fontSize: '50px',
        margin: '10px'
    },

    coreContent: {
        backgroundColor: 'teal',
        fontSize: '30px',

    }
}

export default Welcome