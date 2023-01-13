import React, { useEffect } from 'react'
import './SearchItems.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container, Form, Row } from 'react-bootstrap'
import WelcomePhrases from '../gadgets/WelcomePhrases'

const SearchItems = () => {

  const searchItemsWhileTyping = () => {
    let interval = null;

    const searchDOM = document.getElementById('usr-search-input');
    searchDOM.addEventListener('keyup', () => {
      interval = setTimeout(() => {
      }, 1000);
    })

    searchDOM.addEventListener('keydown', () => {
      interval && clearInterval(interval);
    })

  }

  useEffect(() => {
    searchItemsWhileTyping();
  }, [])

  return (
    <Container fluid className='d-flex flex-column justify-content-end'>
      <Row>
        <Form className='d-inline-flex'>
          <Form.Control id='usr-search-input' placeholder='Buscar refrescantes bebidas'></Form.Control>
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