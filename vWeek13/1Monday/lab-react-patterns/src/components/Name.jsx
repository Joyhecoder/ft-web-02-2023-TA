import React from 'react'

const Name = ({info}) => {
  return (
    <>
      <h3>{info.first} {info.last}</h3>
    </>
  )
}

export default Name