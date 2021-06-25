import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./navbarStyles.css";

function Navbar() {
  const history = useHistory();
  useEffect(() => {
    let pathname = history.location.pathname;
    console.log(pathname);
  }, [history]);

  return (
    <>
      <nav id="navbar">
        <div id="logo-div">
          <img
            src="https://api.freelogodesign.org/files/14ce6bd6710045fd9be20e56c23292f3/thumb/logo_200x200.png?v=637540055620000000"
            alt="little shop of horrors Logo"
          ></img>
        </div>

        <div id="nav-links-div">
          <NavLink to="/" exact activeClassName="active-nav-link">
            HOME
          </NavLink>

          <NavLink to="/shop" activeClassName="active-nav-link">
            SHOP
          </NavLink>

          <NavLink to="/about" activeClassName="active-nav-link">
            ABOUT
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
