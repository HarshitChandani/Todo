import React from "react";

export default class LikeCounter extends React.Component {
  state = {
    counter: 0
  };

  like = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log("You liked " + this.state.counter + " times.");
  };
  render() {
    return (
      <div>
        <button onClick={this.like}>like</button>
        <br />
        <span>Counter : {this.state.counter}</span>
      </div>
    );
  }
}
