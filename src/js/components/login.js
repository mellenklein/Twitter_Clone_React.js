import React, { PropTypes } from 'react';
import CreateUser from '../models/create-user';
import createLocation from 'history/lib/createLocation';
import jQuery from 'jquery';

import HeaderLogin from '../headers/header-login';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    console.log('you clicked the login btn!');

    let email = this.refs.email.value;
    let password = this.refs.password.value;

    if(email && password) {
      CreateUser.login({
        username: email,
        password: password
      }, (error, data) => {
        if (!error) {
          console.log(CreateUser.isLoggedIn());
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
