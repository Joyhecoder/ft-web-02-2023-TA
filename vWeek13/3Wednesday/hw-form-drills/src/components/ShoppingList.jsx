
import React, {useState, useEffect} from 'react'

const ShoppingList = () => {
  const [item, setItem] = useState('')
 const [listOfItem, setListOfItem] = useState([])
  const handleSubmit = (e) => {
    // e.preventDefault()
    listOfItem.push(item)
    console.log(listOfItem)
  }


  
  return (
    <>
      <input type="text" onChange={(e) => setItem(e.target.value)} />
      <input type="submit" onClick={handleSubmit}/>

      <ul>
      {listOfItem.map(item =>{
        return <li>{item}</li>
      })}
      </ul>
    </>
  )
}

export default ShoppingList
