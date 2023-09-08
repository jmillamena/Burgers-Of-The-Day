import React from "react";
import Burgers from "./Burgers";

function BurgerList({ burgers, searchInput, deleteBurger }) {
  const filteredBurgers = burgers.filter((burger) => {
    return burger.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const burgerCards = filteredBurgers.map((burger) => {
    const ingredientsList =
      Array.isArray(burger.ingredients) &&
      burger.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ));

    return (
      <Burgers
        key={burger.id}
        name={burger.name}
        date={burger.date}
        image={burger.image}
        price={burger.price}
        ingredientsList={ingredientsList}
        isNew={burger.isNew}
        handleDeleteBurger={() => deleteBurger(burger.id)}
      />
    );
  });

  return <ul className="cards">{burgerCards}</ul>;
}

export default BurgerList;
