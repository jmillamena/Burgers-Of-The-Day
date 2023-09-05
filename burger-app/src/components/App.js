// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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
