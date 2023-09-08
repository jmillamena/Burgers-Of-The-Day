import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Burgers({ date, name, image, price, ingredientsList }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited((isFavorited) => !isFavorited);
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Header>
          {date} <div></div> ${price}
        </Card.Header>
        <Card.Title>{name}</Card.Title>
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
