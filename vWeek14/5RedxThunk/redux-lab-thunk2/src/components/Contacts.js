import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import loadContactData from '../actions/contacts'
import {useNavigate} from 'react-router-dom'

const Contacts = () => {
  const contactList = useSelector(state=>state.contacts.contacts)
  const contactSize = useSelector(state => state.contacts.contactSize)
  const fetchCount = useSelector(state => state.contacts.count)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    //!the cb function in the contacts.js
    dispatch(loadContactData(()=> navigate('/')))
  
    
  }, [])
  
  return (
    <>
    
      <h1>Contacts</h1>
      <h3>array length: {contactSize}</h3>
      <h3>number of times data fetched: {fetchCount}</h3>
      <ul>
        {contactList.map(contact => {
          return (<li key={contact.id}>{contact.name}</li>)
        })}
      </ul>
    </>
  )
}

export default Contacts