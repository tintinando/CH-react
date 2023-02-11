import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";

const CartContent = ({ setShow }) => {
  const { cart, setCart, handleRemoveItem } = useContext(CartContext);
  const navigate = useNavigate();
  const isEmptyCart = cart.length === 0;
  const location = useLocation();

  const handleEmptyCart = () => {
    if (window.confirm("Desea realmente borrar el carrito? 😦")) {
      setCart([]);
      location.pathname === '/cart' && navigate('/');
    }
  }

  const handleDetailProduct = (d) => {
    navigate(`/detail/${d.item.id}`)
    setShow(false);
  }

  const calcTotal = () => {
    return cart.reduce(((acc, r) => acc + r.item.price * r.qty), 0)
  }

  return (
    <Container className="m-4">
      <Row className="mb-4">
        <Col><h2>Carrito</h2></Col>
        <Col xs='2'>
          {!isEmptyCart && (<Button onClick={() => handleEmptyCart()}>Vaciar</Button>)}
        </Col>
      </Row>
      <Row>
        <Container fluid>
          {cart.map(m => {
            return (
              <Row className="align-items-center" key={m.item.idProduct}>
                <Col xs="3" className="text-center">
                  <Image
                    src={m.item.image} thumbnail fluid
                    onClick={() => handleDetailProduct(m)}
                    style={{ cursor: 'pointer' }}
                  ></Image>
                </Col>
                <Col>
                  <Container>
                    <Row className="align-items-start">
                      <Col><strong>{m.item.title}</strong></Col>
                      <Col xs="3">$ {m.item.price * m.qty}</Col>
                    </Row>
                    <Row>
                      <Col>
                        Cantidad: {m.qty} {m.qty > 1 && `- $ ${m.item.price} c/u`}
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col xs="1">
                  <FontAwesomeIcon
                    icon={faClose}
                    className="usr-close-button"
                    onClick={() => handleRemoveItem(m)}
                  />
                </Col>
              </Row>
            )
          })}
          {
            isEmptyCart
              ? (
                <Row>El carrito está vacío 😥</Row>
              )
              : (
                <Row className="mt-4">
                  <Col className="ms-5" xs="auto"><h3>Total</h3></Col>
                  <Col>
                    <h3>$ {calcTotal()}</h3>
                  </Col>
                  <Col>
                    <Button>
                      Cerrar el pedido
                    </Button>
                  </Col>
                </Row>
              )
          }
        </Container>
      </Row>
    </Container>
  )
}

export default CartContent