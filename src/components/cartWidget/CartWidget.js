// Genera el widget con el carrito de compras presente en el NavBar

// ------------ IMPORT ------------
import "./CartWidget.css"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge, Button, Collapse, Container, Modal, Navbar } from "react-bootstrap";

// ------------ LOGIC -------------
function CartWidget(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container onClick={handleShow} className="d-flex mb-4">
        <FontAwesomeIcon className="me-1" icon={faCartShopping} />
        <Badge bg="dark">{props.length}</Badge>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Finalizar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <FontAwesomeIcon className="usr-modal--icon" icon={faCartShopping} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

// ------------ EXPORT ------------
export default CartWidget