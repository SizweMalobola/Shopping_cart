import React, { Component } from "react";
import styles from "./shopGridStyle.module.css";

export default class ShopGrid extends Component {
  r;
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles["container"]} id="shop-grid-div">
        {this.props.children}
      </div>
    );
  }
}
