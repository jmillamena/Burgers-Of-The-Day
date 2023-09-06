import React, { useState, useEffect } from "react";
import Burgers from "./Burgers";

function BurgerList() {
  // const burger = {
  //   id: 1,
  //   date: "2/22/2015",
  //   name: "Itsy Bitsy Teeny Weenie Yellow Polka-Dot Zucchini Burger",
  //   ingredients: ["Yogurt Sauce", "Zucchini", "Beef Patty"],
  //   image: "https://i.ibb.co/KVzjMFf/Screenshot-2023-09-01-at-11-31-40-AM.png",
  //   price: 6.75,
  // };
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/burgers")
      .then((r) => r.json())
      .then((burgers) => setBurgers(burgers));
  }, []);

  const burgerCards = burgers.map((burger) => {
    return (
      <Burgers
        key={burger.id}
        name={burger.name}
        date={burger.date}
        image={burger.image}
        price={burger.price}
        ingredientsList={burger.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      />
    );
  });
  return <ul className="cards">{burgerCards}</ul>;
}

export default BurgerList;
