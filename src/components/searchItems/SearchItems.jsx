import React, { useEffect, useState } from 'react'
import './SearchItems.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container, Dropdown, Form, Row } from 'react-bootstrap'
import WelcomePhrases from '../gadgets/WelcomePhrases'
import { getDocs, limit, query, where } from 'firebase/firestore/lite'
import { dbProducts } from '../firebase/Firebase'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchItems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemSuggest, setItemSuggest] = useState([]);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const formRef = useRef(null);
  const dropdownRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId = null;

    if (searchTerm) {
      // consulta a la DB cuando pasan 300ms sin escribir
      timeoutId = setTimeout(async () => {
        const startcode = searchTerm.toLowerCase();
        const strlength = searchTerm.length;
        const strFrontCode = startcode.slice(0, strlength - 1);
        const strEndCode = startcode.slice(strlength - 1, searchTerm.length);
        // cadena con la última letra inmediata posterior a startCode
        const endcode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);

        const q = query(dbProducts,
          where("descriptionLowercase", ">=", startcode),
          where("descriptionLowercase", "<", endcode),
          limit(5));
        const querySnapshot = await getDocs(q);
        const items = [];
        querySnapshot.forEach(e => {
          items.push({ id: e.id, ...e.data() });
        })
        setItemSuggest(items);
      }, 300)
    }

    return () => {
      clearTimeout(timeoutId);
    }
  }, [searchTerm])

  useEffect(() => {
    // despliega sugerencias solo si las hay
    itemSuggest.length > 0 && setToggleDropdown(true);
  }, [itemSuggest])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const addDropdownRef = (index, node) => {
    // agrega referencia a cada ítem del dropdown de sugerencias.
    // Código bobo, solo usa el primero para el key event
    dropdownRef.current[index] = node;
  }

  const handleKeyDownInput = (event) => {
    // key event para el cuadro de búsqueda
    if (event.key === 'ArrowDown') {
      dropdownRef.current[0].focus();
    } else if (event.key === "Escape") {
      event.target.value = "";
      setToggleDropdown(false);
      formRef.current.blur();
    }
  }

  const handleClickDropdown = (event) => {
    // evento para el clic en una sugerencia
    setToggleDropdown(false);
    formRef.current.value = "";
    document.activeElement.blur();
    navigate(`/detail/${event.target.id}`);
  }

  const handleKeyDownDropdown = (event) => {
    // key event cuando el foco está en las sugerencias
    if (event.key === "Escape") {
      setToggleDropdown(false);
      formRef.current.focus();
    } else if (event.key === "Enter") {
      handleClickDropdown(event);
    }
  }

  return (
    <Container fluid className='d-flex flex-column justify-content-end'>
      <Row>
        <Form className='d-inline-flex'>
          <Form.Control
            id='usr-search-input'
            ref={formRef}
            autoComplete='off'
            placeholder='Buscar bebidas'
            onChange={handleSearch}
            onKeyDown={handleKeyDownInput}
          />
          <Button><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        </Form>
        <Dropdown
          show={toggleDropdown}
        >
          <Dropdown.Menu >
            {itemSuggest.map((e, index) => {
              return (
                <Dropdown.Item
                  key={e.idProduct}
                  id={e.id}
                  ref={(node) => addDropdownRef(index, node)}
                  onKeyDown={handleKeyDownDropdown}
                  onClick={handleClickDropdown}
                >
                  {e.description}
                </Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Row>
      <Row className='m-0 p-0'>
        <WelcomePhrases></WelcomePhrases>
      </Row>
    </Container >
  )
}

export default SearchItems