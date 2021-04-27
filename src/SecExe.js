import React from "react";

//let loggedIn = true;
export default class SecExe extends React.Component {
  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.state = {
      isUserLoggedIn: false
    };
  }
  loginUser() {
    this.setState({
      isUserLoggedIn: true
    });
  }
  logoutUser = () => {
    this.setState({
      isUserLoggedIn: false
    });
  };
  render() {
    let username = "Harshit";
    // return (
    //   <div>
    //     {
    //       loggedIn && <h1>Hey!&nbsp; { username}</h1>
    //     }
    //     {
    //       !loggedIn && <h1>Log Off </h1>
    //     }
    //   </div>
    // )
    if (this.state.isUserLoggedIn === true) {
      return (
        <div>
          <h1>
            Hello! {username}, <br />
            <span>You are logged in</span>{" "}
          </h1>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.loginUser}>Login</button>
        </div>
      );
    }
  }
}
