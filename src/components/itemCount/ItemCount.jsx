import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './ItemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const ItemCount = ({ max, handleQty }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    handleQty(count);
  }, [count, handleQty])

  const addItem = () => {
    if ((max && count < max) || !max) {
      setCount(count + 1);
    }
  }

  const zeroItem = () => {
    setCount(1);
  }

  const subItem = () => {
    if (count > 1) setCount(count - 1);
  }

  return (
    <Container className='d-flex justify-content-center'>
      <InputGroup size='sm' style={{ maxWidth: '150px' }}>
        <Button variant="outline-secondary" onClick={subItem}>-</Button>
        <input
          type="text"
          value={count}
          readOnly
          className="form-control text-center"
        />
        <Button variant="outline-secondary" onClick={addItem}>+</Button>
        <Button variant="secondary" className='ms-3' onClick={zeroItem}>
          <FontAwesomeIcon style={{ maxWidth: "15px", maxHeight: "18px", margin: 0 }} icon={faRotateLeft} />
        </Button>
      </InputGroup>
    </Container>
  )
}

export default ItemCount