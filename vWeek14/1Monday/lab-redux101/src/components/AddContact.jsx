import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addContact, removeContact } from '../actions/addContacts'
import { v4 as uuidv4 } from 'uuid';

const AddContact = () => {
    const [firstName, setFirstName] = useState("")
    const [city, setCity] = useState("")
    let contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        //update the global state
     

        dispatch(addContact(uuidv4(), firstName, city))

        //{id, fN, city}

        //create an action

        //in reducer, create anction type

        //import use dispatch
    }
  return (
    <>

    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='First Name' value={firstName} onChange={e=>setFirstName(e.target.value)} />
        <input type="text" placeholder='City' value={city} onChange={e=>setCity(e.target.value)} />
        <button>Submit</button>
    </form>

    <ul>
        {contacts.map(contact =>{
            return (
                <li>
                    <h1>{contact.firstName}</h1>
                    <span>{contact.city}</span>
                </li>
            )
        })}

    </ul>
   
    
    </>
  )
}

export default AddContact