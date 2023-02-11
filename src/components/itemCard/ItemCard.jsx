import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import CartContext from '../../context/CartContext'
import ItemCount from '../itemCount/ItemCount'
import './ItemCard.css'

const ItemCard = (props) => {
  const { id, idProduct, title, image, price, stock } = props
  const [qty, setQty] = useState(0);
  const { cart, addToCart, handleRemoveItem } = useContext(CartContext);
  const isInCart = cart.some(s => s.item.idProduct === idProduct)

  const handleQty = (q) => {
    setQty(q);
  }

  return (
    <Card key={idProduct}>
      <Card.Img variant="top" src={image} />
      <Card.Body className='text-center'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          $ {price}
          <br></br>
          Disponibles: {stock}
        </Card.Text>
        <ItemCount max={stock} handleQty={handleQty}></ItemCount>
        <LinkContainer to={`/detail/${id}`}>
          <Button
            variant="primary"
            className='m-3'
          >Detalles</Button>
        </LinkContainer>
        <Button
          variant="primary"
          className='m-3'
          onClick={() => addToCart({ ...props }, qty)}
          disabled={isInCart}
        >Quiero!</Button>
        {isInCart && (
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => handleRemoveItem({ item: { ...props } })}
          />
        )}
      </Card.Body>
      {props.children}
    </Card >
  )
}

export default ItemCard