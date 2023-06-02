import React from 'react'

const Book = ({bookProp}) => {
console.log(bookProp)
  return (
    <>
        <img src={"https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" + bookProp.imageLink} alt="" />
    
    </>
  )
}

export default Book