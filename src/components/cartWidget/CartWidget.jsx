// Genera el widget con el carrito de compras presente en el NavBar

// ------------ IMPORT ------------
import "./CartWidget.css"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge, Container, Offcanvas } from "react-bootstrap";
import CartContent from "./CartContent";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

// ------------ LOGIC -------------
function CartWidget() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cart } = useContext(CartContext);

  return (
    <>
      <Container onClick={handleShow} className="d-flex mb-4">
        <FontAwesomeIcon className="me-1" icon={faCartShopping} />
        <Badge bg="dark">{cart.length}</Badge>
      </Container>
      <LinkContainer to="/cart">
        <FontAwesomeIcon className="me-1" icon={faArrowUpRightFromSquare} />
      </LinkContainer>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement='end'
        size='xxl'
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <CartContent setShow={setShow} />
      </Offcanvas>
    </>
  )
}

// ------------ EXPORT ------------
export default CartWidget