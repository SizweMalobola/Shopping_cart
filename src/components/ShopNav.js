import React, { Component } from "react";
import styles from "./shopNavStyle.module.css";
export default class ShopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.tags = ["all", "gore", "slasher", "foreign"];
  }

  render() {
    const { activationHandler } = this.props;
    return (
      <ul className={styles["container"]} id="shop-nav-container">
        {this.tags.map((val, index) => {
          return (
            <li
              key={index + 222}
              onClick={(e) => {
                activationHandler(e.target);
              }}
            >
              {val}
            </li>
          );
        })}
      </ul>
    );
  }
}
