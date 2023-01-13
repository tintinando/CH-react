import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ItemCount from '../itemCount/ItemCount'

const ItemCard = ({ title, image, price, stock }) => {
  return (
    <Card style={{ width: '18rem' }} className='m-2'>
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
  )
}

export default ItemCard