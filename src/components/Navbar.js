import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbarStyles.css";

function Navbar() {
  const [homeNav, setHomeNav] = useState(false);
  const [shopNav, setShopNav] = useState(false);
  const [aboutNav, setAboutNav] = useState(false);
  // Todo figure out why doesn't pathname/history update when I click to different links
  const history = useHistory();
  useEffect(() => {
    let pathname = history.location.pathname;
    // switch (pathname) {
    //   case "/Shopping_cart":
    //     setHomeNav(true);
    //     setShopNav(false);
    //     setAboutNav(false);
    //     break;
    //   case "/about":
    //     setHomeNav(false);
    //     setShopNav(false);
    //     setAboutNav(true);
    //     break;
    //   default:
    //     setHomeNav(false);
    //     setShopNav(true);
    //     setAboutNav(false);
    //     break;
    // }
    // console.log(homeNav, shopNav, aboutNav);
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
          <Link
            to="/Shopping_cart"
            className={homeNav ? "active-nav-link" : null}
          >
            HOME
          </Link>

          <Link to="/shop" className={shopNav ? "active-nav-link" : null}>
            SHOP
          </Link>

          <Link to="/about" className={aboutNav ? "active-nav-link" : null}>
            ABOUT
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
