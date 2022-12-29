// ------------ IMPORT ------------
import './Categories.css'
import Nav from 'react-bootstrap/Nav';

function CategoriesBar(props) {
  // return to renderize
  
  return (
    <Nav
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className="justify-content-center bg-dark"
    >
      {/* En un futuro captura categorías de la falsa DB con Fetch} */}
      <Nav.Item>
        <Nav.Link>Gaseosas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Licores</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Wiskyies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Aperitivos</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

// ------------ EXPORT ------------
export default CategoriesBar