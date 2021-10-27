import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      UserName: "",
      Password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Submitted");
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <lable htmlFor="username">User Name</lable>
            <input
              id="username"
              type="text"
              className="form-control"
              value={this.state.account.UserName}
              onChange={this.handleChange}
              name="UserName"
            />
          </div>
          <div className="form-group">
            <lable htmlFor="password">Password</lable>
            <input
              id="password"
              type="text"
              className="form-control"
              value={this.state.account.Password}
              onChange={this.handleChange}
              name="Password"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
