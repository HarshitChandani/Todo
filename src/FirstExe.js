import "./styles.css";
import React from "react";

var numCartItems = 5;

export default class FirstExe extends React.Component {
  constructor(props) {
    super(props);
    this.getCartItem = this.getCartItem.bind(this);
  }
  getCartItem = () => {
    return numCartItems === 0 ? "Empty" : "Not Empty";
  };
  render() {
    return (
      <div>
        <p>Cart Status: </p>
        <h1>{this.getCartItem()}</h1>
      </div>
    );
  }
}
