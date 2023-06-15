import React from 'react'
import {useSelector} from 'react-redux'

const Contacts = () => {
  const contactList = useSelector(state => state.contacts)
  return (
    <>
      Contacts and Redux
      <ul>
        {contactList.map(contact =>{
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

export default Contacts
