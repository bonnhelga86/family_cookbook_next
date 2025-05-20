"use client";

import { Container, InputGroup, Form, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap";
import "./SearchBar.scss";

export const SearchBar = () => {
  const handleItemClick = (p) => {
    console.log('click', p);
  }

  return (
    <section className="search">
      <Container>
        <InputGroup>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <Button variant="outline-secondary">Фильтр</Button>
        <Button variant="outline-secondary">Фильтр</Button>
        <Dropdown align={{ lg: 'end' }}>
          <DropdownToggle variant="success" id="dropdown-basic">
            Сортировка
          </DropdownToggle>

          <DropdownMenu>
            <DropdownItem onClick={handleItemClick} eventKey="1">По популярности</DropdownItem>
            <DropdownItem eventKey="2">По новизне</DropdownItem>
            <DropdownItem eventKey="3">По алфавиту вниз</DropdownItem>
            <DropdownItem eventKey="4">По алфавиту вверх</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </InputGroup>
      </Container>
    </section>
  )
};
