import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbarStyle.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["nav-links-div"]}>
          <NavLink to="/" exact activeClassName={styles["active-nav-link"]}>
            HOME
          </NavLink>

          <NavLink to="/shop" activeClassName={styles["active-nav-link"]}>
            SHOP
          </NavLink>

          <NavLink to="/about" activeClassName={styles["active-nav-link"]}>
            ABOUT
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
