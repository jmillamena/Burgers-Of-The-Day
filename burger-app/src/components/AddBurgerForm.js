import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function AddBurgerForm({ addBurger }) {
  const [burgerData, setBurgerData] = useState({
    name: "",
    ingredients: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBurgerData({ ...burgerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBurger(burgerData);

    setBurgerData({
      name: "",
      ingredients: "",
      image: "",
      price: "",
    });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h3>Add A Burger</h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Burger Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="burger name"
            placeholder="Burger of the Day"
            name="name"
            value={burgerData.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            name="ingredients"
            onChange={handleChange}
            as="textarea"
            rows={3}
            value={burgerData.ingredients}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Add Image</Form.Label>
          <Form.Control
            name="image"
            value={burgerData.image}
            onChange={handleChange}
            type="file"
          />
        </Form.Group>
        <Form.Label htmlFor="basic-url">Image</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://example.com/users/
          </InputGroup.Text>
          <Form.Control
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={handleChange}
          />
        </InputGroup>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Add Price</Form.Label>
          <Form.Control
            value={burgerData.price}
            name="price"
            type="text"
            placeholder="price of burger"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Burger
        </Button>
      </Form>
    </div>
  );
}

export default AddBurgerForm;
