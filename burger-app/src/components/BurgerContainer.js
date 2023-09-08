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
    fetch("http://localhost:3001/burgers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(burger),
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

  return (
    <div>
      <h1 className="Header">Bob's Burgers of the Day</h1>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <Header />
        </Route>
        <Route exact path={"/Burgers"}>
          <BurgerList burgers={burgers} searchInput={searchInput} />
        </Route>
        <Route exact path={"/addBurgers"}>
          <AddBurgerForm addBurger={addBurger} />
        </Route>
      </Switch>
    </div>
  );
}

export default BurgerContainer;
