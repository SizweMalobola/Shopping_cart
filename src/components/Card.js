import React, { Component } from "react";
import styles from "./cardStyle.module.css";
export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.quantityRef = React.createRef();
    this.makeId = this.makeId.bind(this);
  }
  makeId(title) {
    let string = title.toLowerCase().split(" ");
    let Id = string.join("-");
    return Id;
  }

  render() {
    const { image: img, title, handler } = this.props;
    return (
      <div id={this.makeId(title)} className={styles["container"]}>
        <div className={styles["card-top"]}>
          <img src={process.env.PUBLIC_URL + img} alt="movie poster" />
        </div>
        <div className={styles["card-bottom"]}>
          <h4 className={styles["title"]}>{title}</h4>
          <div>
            <div className={styles["qty-div"]}>
              <span>QTY:</span>
              <input
                ref={this.quantityRef}
                type="number"
                max="3"
                min="1"
              ></input>
            </div>
            <button
              className={styles["add-btn"]}
              onClick={(e) => {
                let quantity = this.quantityRef.current;
                if (quantity.value >= 1) {
                  let cardId = this.makeId(title);
                  let image = img;
                  handler({
                    title: title,
                    id: cardId,
                    quantity: parseInt(quantity.value),
                    image: image,
                    price: 140,
                  });
                }
              }}
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    );
  }
}
