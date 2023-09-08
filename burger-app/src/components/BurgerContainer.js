import React, { useState, useEffect } from "react";
import Search from "./Search";
import AddBurgerForm from "./AddBurgerForm";
import BurgerList from "./BurgerList";
import Header from "./Header";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";

function BurgerContainer({ searchInput, setSearchInput }) {
  const [burgers, setBurger] = useState([]);

  const fetchBurgers = () => {
    fetch("http://localhost:3001/burgers")
      .then((res) => res.json())
      .then((burgers) => setBurger(burgers));
  };

  useEffect(() => {
    fetchBurgers();
  }, []);

  const addBurger = (burger) => {
    const newBurger = { ...burger, isNew: true };
    fetch("http://localhost:3001/burgers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBurger),
    })
      .then((res) => res.json())
      .then((newBurger) => {
        setBurger([...burgers, newBurger]);
      })
      .then(() => {
        fetchBurgers();
      });
  };

  useEffect(() => {
    fetch("http://localhost:3001/burgers")
      .then((res) => res.json())
      .then(setBurger);
  }, []);

  function handleDeleteBurger(burgerId) {
    fetch(`http://localhost:3001/burgers/${burgerId}`, {
      method: "DELETE",
    })
      .then(() => fetchBurgers())
      .catch((error) => {
        console.error("Failed to delete");
      });
  }

  return (
    <div>
      <h1 className="Header">Bob's Burgers of the Day</h1>
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <Header />
        </Route>
        <Route exact path={"/Burgers"}>
          <Search searchInput={searchInput} setSearchInput={setSearchInput} />
          <BurgerList
            burgers={burgers}
            searchInput={searchInput}
            deleteBurger={handleDeleteBurger}
          />
        </Route>
        <Route exact path={"/addBurgers"}>
          <AddBurgerForm addBurger={addBurger} />
        </Route>
      </Switch>
    </div>
  );
}

export default BurgerContainer;
