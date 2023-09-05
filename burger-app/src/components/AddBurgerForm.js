import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddBurgerForm() {
  return (
    <div>
      <Form>
        <h3>Add A Burger</h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Burger Name</Form.Label>
          <Form.Control type="burger name" placeholder="Burger of the Day" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Add Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Add Price</Form.Label>
          <Form.Control type="price" placeholder="price of burger" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Burger
        </Button>
      </Form>
    </div>
  );
}

export default AddBurgerForm;
