import React from "react";
import Card from "react-bootstrap/Card";

function Burgers({ date, name, image, price, ingredients }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Header>
          {date} <div></div> {price}
        </Card.Header>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Card.Img src={image} variant="top" />
      <Card.Body>
        <Card.Title>
          <ul>{ingredients}</ul>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
const burger = {
  id: 1,
  date: "2/22/2015",
  name: "Itsy Bitsy Teeny Weenie Yellow Polka-Dot Zucchini Burger",
  ingredients: ["Yogurt Sauce", "Zucchini", "Beef Patty"],
  image: "https://i.ibb.co/KVzjMFf/Screenshot-2023-09-01-at-11-31-40-AM.png",
  price: 6.75,
};
export default Burgers;
