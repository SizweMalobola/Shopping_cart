import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav id="navbar">
        <h1>Big Logo</h1>
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/shop">
            <li>SHOP</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
