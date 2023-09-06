import React, { useState, useEffect } from "react";
import Search from "./Search";
import AddBurgerForm from "./AddBurgerForm";
import BurgerList from "./BurgerList";

function BurgerContainer({ searchInput, setSearchInput }) {
  const [burgers, setBurger] = useState([]);

  const addBurger = (burger) => {
    fetch("http://localhost:3001/burgers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(burger),
    })
      .then((res) => res.json())
      .then((burger) => {
        setBurger([...burgers, burger]);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3001/burgers")
      .then((res) => res.json())
      .then(setBurger);
  }, []);

  return (
    <div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <AddBurgerForm addBurger={addBurger} />
      <BurgerList searchInput={searchInput} burgers={burgers} />
    </div>
  );
}

export default BurgerContainer;
