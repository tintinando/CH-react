// ------------ IMPORT ------------
import './Categories.css'
import Nav from 'react-bootstrap/Nav';
import CategoriesData from '../db/categories.json'
import { LinkContainer } from 'react-router-bootstrap';

function CategoriesBar(props) {

  return (
    <Nav navbarScroll={true} className="justify-content-center bg-dark">
      {
        CategoriesData.map(cat => {
          return (
            <Nav.Item key={cat.idCategory}>
              <LinkContainer to={`/categories/${cat.idCategory}`}>
                <Nav.Link>
                  {cat.category}
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
          )
        })
      }
    </Nav>
  )
}

// ------------ EXPORT ------------
export default CategoriesBar