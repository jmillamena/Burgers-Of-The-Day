import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="navigation">
          <NavLink className="button" exact to="/">
            Home
          </NavLink>
          <NavLink className="button" exact to="/Burgers">
            Burgers
          </NavLink>
          <NavLink className="button" exact to="/addBurgers">
            Add Burgers
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
