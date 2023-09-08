import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Burgers({
  date,
  name,
  image,
  price,
  ingredientsList,
  isNew,
  handleDeleteBurger,
}) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Header>
          {date} <div></div> ${price}
        </Card.Header>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Card.Img src={image} variant="top" />
      <Card.Body>
        <Card.Title>
          <ul>{ingredientsList}</ul>
        </Card.Title>
        {isNew && (
          <Button variant="danger" onClick={handleDeleteBurger}>
            Delete Burger
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Burgers;
