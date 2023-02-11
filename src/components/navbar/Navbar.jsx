// ------------ IMPORT ------------
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/CartWidget';
import SearchItems from '../searchItems/SearchItems';
import { LinkContainer } from 'react-router-bootstrap';

// ------------ LOGIC -------------
function NavBar(props) {
  // return to renderize
  return (
    <Navbar bg="danger" variant="dark" expand="lg" >
      <Container fluid className='align-items-end'>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <div className='usr-logo'>Home Ron</div>
            <div className='usr-logo--sub'>Tus bebidas favoritas</div>
          </Navbar.Brand>
        </LinkContainer>
        <Nav className='container-fluid'>
          <SearchItems />
        </Nav>
        <Nav>
          <CartWidget/>
        </Nav>
      </Container>
    </Navbar >
  )
}

// ------------ EXPORT ------------
export default NavBar