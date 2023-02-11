import { useContext } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";
import CartContext from "../../context/CartContext"

const Order = () => {
  const { cart, calcTotal, calcQty } = useContext(CartContext);

  const orderForm = [
    { name: "fname", placeholder: "Nombre" },
    { name: "lname", placeholder: "Apellido" },
    { name: "email", placeholder: "Correo electrónico" },
    { name: "email2", placeholder: "Repetir correo" },
    { name: "phone", placeholder: "Teléfono" },
  ]

  const handleOkOrder = () =>{
    alert("La orden está en camino");
  }

  return (
    <Container className="p-5">
      {
        cart.length > 0
          ? (
            <>
              <h3 className="mb-4">Para terminar, completá tus datos</h3>
              <Container className="d-flex flex-row">
                <h5>Tenés {calcQty()} {calcQty() === 1 ? 'producto' : 'productos'} por un total de $ {calcTotal()}</h5>
                <LinkContainer to="/" className='ms-3'><a href="/">¡Quiero más!</a></LinkContainer>
              </Container>
              <Form>
                {orderForm.map((m) => {
                  return (
                    <Form.Control
                      key={m.name}
                      className="m-3"
                      name={m.name}
                      placeholder={m.placeholder}
                    />
                  )
                })}
                <Button
                onClick={handleOkOrder}
                >Aceptar</Button>
              </Form>
            </>
          )
          : (
            <h3 className="m-5">No se puede cerrar la orden porque el carrito está vacío</h3>
          )
      }
    </Container>
  )
}

export default Order