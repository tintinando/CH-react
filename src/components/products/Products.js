// ------------ IMPORT ------------
import { Container } from 'react-bootstrap'
import './Products.css'


// ------------ LOGIC -------------
function Products(props) {
  // return to renderize
  return (
    <Container fluid className='text-center m-5 text-light'>
      <img src='./assets/img/tienda.png' alt="Ícono de tienda"></img>
      <p>Bienvenidos a nuestra tienda virtual. Pronto las mejores bebidas</p>
    </Container>
)
}

// ------------ EXPORT ------------
export default Products