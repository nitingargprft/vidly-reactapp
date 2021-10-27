import React, { Component } from 'react';

class LoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("form Submitted");
    };

    render() { 
        return <div><h1>Login</h1>
        <form onSubmit={this.handleSubmit}> 
            <div className="form-group">
                <lable htmlFor="username">User Name</lable>
                <input id="username" type="text" className="form-control" />
            </div>
            <div className="form-group">
                <lable htmlFor="password">Password</lable>
                <input id="password" type="text" className="form-control" />
            </div>
            <button className="btn btn-primary">Login</button>
        </form>
        </div>;
    }
}
 
export default LoginForm;