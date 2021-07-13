import React, { Component } from "react";
import styles from "./homeStyle.module.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className={styles["home-div"]}>
        <div className={styles["hero"]}>
          <span>WELCOME TO THE...</span>
          <h1>Little shop Of Horrors</h1>
        </div>
        <picture className={styles["head-container"]}>
          <source
            media="(min-width:768px)"
            srcSet={process.env.PUBLIC_URL + "/assets/skullface.png"}
          />
          <img
            className={styles["head-img"]}
            src={process.env.PUBLIC_URL + "/assets/head.png"}
            alt="head logo thing"
          ></img>
        </picture>
        <div className={styles["cta"]}>
          <p>
            If our collection of films can't quench your thrist for the
            horrific, nothing will.
          </p>
          <Link to="/shop">Enter Shop</Link>
        </div>
      </div>
    );
  }
}
