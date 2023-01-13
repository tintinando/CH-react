// ------------ IMPORT ------------
import './Categories.css'
import Nav from 'react-bootstrap/Nav';
import CategoriesData from '../db/categories.json'

function CategoriesBar(props) {

  return (
    <Nav
      onSelect={(selectedKey) => {
        alert(`selected ${selectedKey}`);
        console.log(selectedKey);
      }}
      className="justify-content-center bg-dark"
    >
      {
        CategoriesData.map(cat => {
          return (
            <Nav.Item key={cat.idCategory}>
              <Nav.Link>{cat.category}</Nav.Link>
            </Nav.Item>
          )
        })
      }
    </Nav>
  )
}

// ------------ EXPORT ------------
export default CategoriesBar