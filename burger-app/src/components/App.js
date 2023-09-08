import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import BurgerContainer from "./BurgerContainer";

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <BurgerContainer
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </div>
  );
}

export default App;
