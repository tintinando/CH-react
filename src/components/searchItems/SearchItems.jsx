import React, { useEffect, useState } from 'react'
import './SearchItems.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container, Form, ListGroup, Row } from 'react-bootstrap'
import ProductData from '../db/products.json'
import WelcomePhrases from '../gadgets/WelcomePhrases'

const SearchItems = () => {
  const [itemSuggest, setItemSuggest] = useState([]);

  const searchItemsWhileTyping = () => {
    let interval = null;

    const searchDOM = document.getElementById('usr-search-input');
    searchDOM.addEventListener('keyup', () => {
      interval = setTimeout(() => {
        const inputData = searchDOM.value;
        if (inputData === "") {
          setItemSuggest([])
        } else {
          const currentSuggest = ProductData.filter(e => {
            return e.description.toLowerCase().startsWith(inputData.toLowerCase());
          })
          setItemSuggest(currentSuggest);
        }
      }, 300);
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
          <Form.Control id='usr-search-input' autoComplete='off' placeholder='Buscar bebidas'></Form.Control>
          <Button><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        </Form>
      </Row>
      <Row>
        <ListGroup className='ps-3'>
          {itemSuggest.map(e => {
            return (
              <ListGroup.Item key={e.idProduct}>
                {e.description}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Row>
      <Row className='m-0 p-0'>
        <WelcomePhrases></WelcomePhrases>
      </Row>
    </Container>
  )
}

export default SearchItems