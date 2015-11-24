import React, { PropTypes } from 'react';
import createLocation from 'history/lib/createLocation';
import jQuery from 'jquery';

import HeaderLogin from '../headers/header-login';
import CreateUser from '../models/create-user';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();

    let email = this.refs.email.value;
    let password = this.refs.password.value;

    if(email && password) {
      CreateUser.login({
        username: email,
        password: password
      }, (error, data) => {
        if (!error) {
          // this.transitionTo('#/dashboard');
          this.refs.email.value = '';
          this.refs.password.value = '';
        } else {
          alert('There was an error with your information.');
        }
      });
    } else {
      alert('Try again!');
    }
  }

  render() {
    return (
      <div className="wrapper">
        <HeaderLogin/>
      <main>
        <form className="form"
              onSubmit={this.handleLogin}>
          <input type="text"
                 className="email"
                 placeholder="Email or username"
                 ref="email"/>
          <input type="password"
                 className="pwd"
                 placeholder="Password"
                 ref="password"/>
          <input type="submit"
                 id="loginBtn"
                 className="login"
                 value="Log in"
                 onClick={this.handleLogin}/>
               <p className="instructions">Don't have an account? <a href="#/register" className="register">Sign up »</a></p>
        </form>
      </main>
      </div>
    )
  }
}

export default Login;
