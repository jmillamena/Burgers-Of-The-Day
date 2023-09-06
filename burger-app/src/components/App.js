import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import BurgerContainer from "./BurgerContainer";

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <h1 className="Header">Bob's Burgers of the Day</h1>
      <BurgerContainer
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </div>
  );
}

export default App;
