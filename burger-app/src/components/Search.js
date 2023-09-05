import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";

function Search({ searchInput, setSearchInput }) {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search Burger"
        aria-label="Search Burger"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Search
      </Button>
    </InputGroup>
  );
}
export default Search;
