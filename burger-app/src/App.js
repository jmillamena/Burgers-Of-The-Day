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
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div class="alert alert-primary" role="alert">
//           <p style={{ display: "none" }} className="d-block">
//             Bootstrap is now successfully installed 😃
//           </p>
//           <p className="d-none">
//             Bootstrap is not installed if you can see this 😢
//           </p>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React from "react";
import BurgerContainer from "./BurgerContainer";

function App() {
  return (
    <div>
      <h1 className="Header">Bob's Burgers of the Day</h1>
      <BurgerContainer />
    </div>
  );
}

export default App;
