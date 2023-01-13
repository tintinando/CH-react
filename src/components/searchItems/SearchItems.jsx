import React from 'react'
import './SearchItems.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container, Form, Row } from 'react-bootstrap'
import WelcomePhrases from '../gadgets/WelcomePhrases'

const SearchItems = () => {
  return (
    <Container fluid className='d-flex flex-column justify-content-end'>
      <Row>
        <Form className='d-inline-flex'>
          <Form.Control placeholder='Buscar refrescantes bebidas'></Form.Control>
          <Button><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        </Form>
      </Row>
      <Row className='m-0 p-0'>
        <WelcomePhrases></WelcomePhrases>
      </Row>
    </Container>
  )
}

export default SearchItems