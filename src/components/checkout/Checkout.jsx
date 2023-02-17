import { useRef, useEffect, useContext } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartContext from "../../context/CartContext";
import { useForm } from "../../customHooks/useForm";

const initialForm = {
  name: "",
  email: "",
  email2: "",
  phone: "",
};

const validateForm = (form) => {
  // funcion que pasa por parámetro al useForm y valida los formularios
  let errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.name.trim()) {
    errors.name = "Nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo Nombre es incorrecto";
  }

  if (!form.email.trim()) {
    errors.email = "Mail es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Mail es incorrecto";
  }

  if (!form.email2.trim()) {
    errors.email2 = "Repetir mail por favor";
  } else if (form.email2.trim() !== form.email.trim()) {
    errors.email2 = "Correos no coinciden";
  }

  if (!form.phone.trim()) {
    errors.phone = "Teléfono es requerido";
  }

  return errors;
};

const orderForm = [
  // array para renderizar el formulario
  { name: "name", placeholder: "Nombre completo" },
  { name: "email", placeholder: "Correo electrónico" },
  { name: "email2", placeholder: "Repetir correo" },
  { name: "phone", placeholder: "Teléfono" },
];

const Checkout = () => {
  const { cart, setCart, calcTotal, calcQty } = useContext(CartContext);
  const checkoutRef = useRef(null);

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validateForm, cart);

  useEffect(() => {
    checkoutRef.current.scrollIntoView();
  }, []);

  useEffect(()=>{
    response && setCart([]);
    // eslint-disable-next-line
  },[response])

  return (
    <Container ref={checkoutRef} className="p-3">
      {cart.length > 0 || response ? (
        <>
          <h3 className="mb-4">Ya casi 😁</h3>
          <Container className="d-flex flex-column">
            <h5>
              Tenés {calcQty()} {calcQty() === 1 ? "producto" : "productos"} por
              un total de $ {calcTotal()}:
            </h5>
            <Container className="m-2">
              {cart.map((m) => {
                return (
                  <Row key={m.item.id}>
                    <Col xs="auto">{m.qty}</Col>
                    <Col xs="auto">{m.item.title}</Col>
                    <Col xs="auto">$ {m.item.price}</Col>
                  </Row>
                );
              })}
            </Container>
            <LinkContainer to="/" className="ms-3">
              <a href="/">¡Quiero más!</a>
            </LinkContainer>
          </Container>
          <Container className="m-3" style={{ maxWidth: "600px" }}>
            <h5>Necesitamos tus datos:</h5>
            <Form>
              {orderForm.map((m) => {
                return (
                  <div key={m.name}>
                    <Form.Control
                      className="m-3"
                      name={m.name}
                      type={m.name}
                      placeholder={m.placeholder}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={form[m.name]}
                    />
                    {errors[m.name] && <p>{errors[m.name]}</p>}
                  </div>
                );
              })}
              {loading ? (
                <Spinner />
              ) : response ? (
                <p>{response}</p>
              ) : (
                <Button onClick={handleSubmit}>Aceptar</Button>
              )}
            </Form>
          </Container>
        </>
      ) : (
        <h3 className="m-5">
          No se puede cerrar la orden porque el carrito está vacío
        </h3>
      )}
    </Container>
  );
};

export default Checkout;
