// ------------ IMPORT ------------
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/CartWidget';

// ------------ LOGIC -------------
function NavBar(props) {
  const cantidadCarrito = 1; // hardcoded 
  // return to renderize
  return (
    <Navbar bg="danger" variant="dark" expand="lg" >
      <Container className='align-items-end'>
        <Navbar.Brand href="#home">
          <div className='usr-logo'>Home Ron</div>
          <div className='usr-logo--sub'>Tus bebidas favoritas</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" >Productos</Nav.Link>
          </Nav>
          {/* Carrito de compras */}
          <Nav>
            <Nav.Link >
              <CartWidget length={cantidadCarrito} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

// ------------ EXPORT ------------
export default NavBar