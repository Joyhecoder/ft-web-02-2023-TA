import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Calculator = () => {
  return (
    <>
    <div>
    <Container>
      <Row className='total'>
        <Col >0</Col>
      </Row>
      <Row className='operation'>
        <Col className='bg-warning'>AC</Col>
        <Col className='bg-warning'>+/-</Col>
        <Col className='bg-warning'>%</Col>
        <Col className='bg-warning'>X</Col>
      </Row>
      <Row className='operation'>
        <Col className='numbers'>7</Col>
        <Col className='numbers'>8</Col>
        <Col className='numbers'>9</Col>
        <Col className='bg-warning'>X</Col>
      </Row>
      <Row className='operation'>
        <Col className='numbers'>4</Col>
        <Col className='numbers'>5</Col>
        <Col className='numbers'>6</Col>
        <Col className='bg-warning'>-</Col>
      </Row>
      <Row className='operation'>
        <Col className='numbers'>1</Col>
        <Col className='numbers'>2</Col>
        <Col className='numbers'>3</Col>
        <Col className='bg-warning'>+</Col>
      </Row>
      <Row className='operation'>
        <Col className='numbers' sm={6}>0</Col>
      
       
        <Col className='numbers'>.</Col>
        <Col className='bg-warning'>=</Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

export default Calculator