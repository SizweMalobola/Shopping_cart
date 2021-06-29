import React, { Component } from "react";
import styles from "./aboutStyle.module.css";
export default class About extends Component {
  render() {
    return (
      <div className={styles["container"]}>
        <h1>
          <span>THE</span> ONLY PLACE <span>WHERE</span> YOU CAN{" "}
          <span>HAVE</span> YOUR FILL <span>FOR</span> ALL THINGS{" "}
          <span>HORROR</span> FROM <span>FOREIGN</span> TO{" "}
          <span>COSMIC HORROR.</span> WE'VE GOT IT <span>ALL,</span> EVEN THE
          REALLY <span>F$CK*D</span> UP STUFF FOR ALL YOU <span>SICK</span>{" "}
          F!CKS OUT THERE. IF IT AIN'T <span>ILLEGAL</span> WE'VE PROBABLY{" "}
          <span>GOT</span> IT.
        </h1>
        <img
          alt="cannibal holocaust poster"
          src={`${process.env.PUBLIC_URL}/assets/mouth.png`}
        />
      </div>
    );
  }
}
