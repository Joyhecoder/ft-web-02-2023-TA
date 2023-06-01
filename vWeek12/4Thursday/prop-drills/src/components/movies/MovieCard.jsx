import React from 'react'

const MovieCard = ({title, year, rating}) => {
  console.log("inside movieCard")
  console.log(title, year, rating)
  return (
    <>
      <h1>{title}</h1>
      <span><em>{year}</em> {rating}</span>
    </>
  )
}

export default MovieCard