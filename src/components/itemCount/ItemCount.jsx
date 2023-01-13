import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './ItemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const ItemCount = (props) => {
  const [count, setCount] = useState(0);

  const addItem = () => {
    if ((props.max && count < props.max) || !props.max) {
      setCount(count + 1);
    }
  }

  const zeroItem = () => {
    setCount(0);
  }

  const subItem = () => {
    if (count > 0) setCount(count - 1);
    console.log(count);
  }

  return (
    <>
      <InputGroup size="sm">
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
    </>
  )
}

export default ItemCount