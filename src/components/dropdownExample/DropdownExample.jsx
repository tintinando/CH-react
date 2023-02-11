import { useState, useRef } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

function DropdownExample() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
  }

  const suggestions = ['Manzana', 'Banana', 'Bacilos', 'Bart Simpson', 'Zanahoria', 'Pepino'];
  const filteredSuggestion = suggestions.filter((f) => {
    return f.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <Form>
      <Form.Control
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      // onBlur={() => setShowDropdown(false)}
      />
      <Dropdown show={showDropdown}>
        <Dropdown.Menu>
          {filteredSuggestion.map((e, index) => (
            <Dropdown.Item
              key={e}
              ref={dropdownRef}
            // ref={index === 0 ? dropdownRef : null}
            >{e}
            </Dropdown.Item>
          )
          )}
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  )
}

export default DropdownExample