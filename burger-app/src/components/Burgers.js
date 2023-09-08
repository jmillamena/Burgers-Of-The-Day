import React, { useState } from "react";
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
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited((isFavorited) => !isFavorited);
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Header>
          {isFavorited ? (
            <button
              onClick={toggleFavorite}
              className="emoji-button favorite active">
              ★
            </button>
          ) : (
            <button onClick={toggleFavorite} className="emoji-button favorite">
              ☆
            </button>
          )}
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
