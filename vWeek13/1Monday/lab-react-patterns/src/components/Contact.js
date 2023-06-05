import React from 'react'
import Card from 'react-bootstrap/Card';


const Contact = ({contactObj}) => {
  console.log(contactObj)
  return (
    <>
      
    <Card key={contactObj.name} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={contactObj.imgURL} />
        <Card.Body>
            <Card.Title>{contactObj.name}</Card.Title>

            <Card.Text>
                <ul>
                    <li><b>phone number:</b> {contactObj.phone}</li>
                    <li><b>email:</b> {contactObj.email} </li>
                </ul>
            </Card.Text>
            
        </Card.Body>
        </Card>
    </>
  )
}

export default Contact
