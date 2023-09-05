import React, { useState } from "react";
import Search from "./Search";
import AddBurgerForm from "./AddBurgerForm";
import BurgerList from "./BurgerList";

function BurgerContainer({ searchInput, setSearchInput }) {
  return;
  <div>
    <Search searchInput={searchInput} setSearchInput={setSearchInput} />
    <AddBurgerForm />
    <BurgerList />
  </div>;
}

export default BurgerContainer;
