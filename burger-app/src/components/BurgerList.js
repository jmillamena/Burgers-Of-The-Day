import React, { useState, useEffect } from "react";
import Burgers from "./Burgers";

function BurgerList({ burgers, searchInput }) {
  const filteredBurgers = burgers.filter((burger) => {
    return burger.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const burgerCards = filteredBurgers.map((burger) => {
    return (
      <Burgers
        key={burger.id}
        name={burger.name}
        date={burger.date}
        image={burger.image}
        price={burger.price}
        // ingredientsList={burger.ingredients.map((ingredient, index) => (
        //   <li key={index}>{ingredient}</li>
        // ))}
      />
    );
  });
  return <ul className="cards">{burgerCards}</ul>;
}

export default BurgerList;
