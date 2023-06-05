import React from 'react'
import contactData from '../data/contact.js'
import Contact from './Contact'

// console.log(contactData)

const ContactList = () => {

  return (
    <>
      {contactData.map((contactObj, index) => {
        return <Contact key={index} contactObj = {contactObj} />
      })}
    </>
  )
}

export default ContactList