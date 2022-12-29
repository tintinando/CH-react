// Genera el widget con el carrito de compras presente en el NavBar

// ------------ IMPORT ------------
import "./CartWidget.css"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

// ------------ LOGIC -------------
function CartWidget(props) {
  console.log(props);
  return (
   <>
      Ver Carrito <FontAwesomeIcon className="me-1" icon={faCartShopping} />
      <Badge bg="secondary">{props.length}</Badge>
    </>
  )
}

// ------------ EXPORT ------------
export default CartWidget