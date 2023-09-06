import React from "react";
import Card from "react-bootstrap/Card";

function Burgers({ date, name, image, price, ingredientsList }) {
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
      </Card.Body>
    </Card>
  );
}

export default Burgers;
