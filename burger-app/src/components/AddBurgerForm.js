import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";

function AddBurgerForm({ addBurger }) {
  const [burgerData, setBurgerData] = useState({
    name: "",
    ingredients: [],
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBurgerData({ ...burgerData, [name]: value });
  };

  const handleIngredientChange = (e, index) => {
    const newIngredients = [...burgerData.ingredients];
    newIngredients[index] = e.target.value;
    setBurgerData({ ...burgerData, ingredients: newIngredients });
  };

  const handleAddIngredient = () => {
    setBurgerData({
      ...burgerData,
      ingredients: [...burgerData.ingredients, ""],
    });
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...burgerData.ingredients];
    newIngredients.splice(index, 1);
    setBurgerData({ ...burgerData, ingredients: newIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBurger = { ...burgerData, isNew: true };
    addBurger(newBurger);

    setBurgerData({
      name: "",
      ingredients: [],
      image: "",
      price: "",
    });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} className="form-container">
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
          {burgerData.ingredients.map((ingredient, index) => (
            <div key={index} className="mb-2">
              <Form.Control
                name="ingredients"
                onChange={(e) => handleIngredientChange(e, index)}
                type="text"
                as="textarea"
                value={ingredient}
                rows={1}
              />
              <Button
                variant="danger"
                type="button"
                onClick={() => handleRemoveIngredient(index)}>
                Remove Ingredient
              </Button>
            </div>
          ))}
          <Button variant="primary" type="button" onClick={handleAddIngredient}>
            Add Ingredient
          </Button>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Add Image</Form.Label>
          <Form.Control
            value={burgerData.image}
            onChange={handleChange}
            name="image"
            type="text"
            placeholder="Add Image Link"
          />
        </Form.Group>
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
