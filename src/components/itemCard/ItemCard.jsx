import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ItemCount from '../itemCount/ItemCount'

const ItemCard = ({ idProduct, title, image, price, stock }) => {
  return (
    <LinkContainer style={{ width: '18rem' }} className='m-2' to={`/products/${idProduct}`}>
      <Card >
        <Card.Img variant="top" src={image} />
        <Card.Body className='text-center'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            $ {price}
            <br></br>
            Disponibles: {stock}
          </Card.Text>
          <ItemCount max={stock}></ItemCount>
          <Button variant="primary" className='m-3'>Quiero!</Button>
        </Card.Body>
      </Card>
    </LinkContainer>
  )
}

export default ItemCard