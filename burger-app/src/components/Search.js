import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";

function Search({ searchInput, setSearchInput }) {
  return (
    <>
      <br />
      <InputGroup className="mb-3 search-input-bar">
        <Form.Control
          type="text"
          placeholder="Search Burger"
          aria-label="Search Burger"
          aria-describedby="basic-addon2"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          className="search-button"
          variant="outline-secondary"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>
    </>
  );
}
export default Search;
