import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbarStyles.css";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeNav: true,
      shopNav: false,
      aboutNav: false,
    };
  }

  render() {
    return (
      <>
        <nav id="navbar">
          <div id="logo-div">
            {/* <img
              src="https://api.freelogodesign.org/files/14ce6bd6710045fd9be20e56c23292f3/thumb/logo_200x200.png?v=637540055620000000"
              alt="little shop of horrors Logo"
            ></img> */}
          </div>

          <div id="nav-links-div">
            <Link
              to="/Shopping_cart"
              className={this.state.homeNav ? "active-nav-link" : null}
              onClick={() => {
                this.setState({
                  homeNav: true,
                  shopNav: false,
                  aboutNav: false,
                });
              }}
            >
              HOME
            </Link>

            <Link
              to="/shop"
              className={this.state.shopNav ? "active-nav-link" : null}
              onClick={() => {
                this.setState({
                  shopNav: true,
                  homeNav: false,
                  aboutNav: false,
                });
              }}
            >
              SHOP
            </Link>

            <Link
              to="/about"
              className={this.state.aboutNav ? "active-nav-link" : null}
              onClick={() => {
                this.setState({
                  aboutNav: true,
                  homeNav: false,
                  shopNav: false,
                });
              }}
            >
              ABOUT
            </Link>
          </div>
        </nav>
      </>
    );
  }
}
