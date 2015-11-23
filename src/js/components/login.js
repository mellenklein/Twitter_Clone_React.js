import React, { PropTypes } from 'react';
import CreateUser from '../models/create-user';
import jQuery from 'jquery';
import createLocation from 'history/lib/createLocation';

import HeaderLogin from '../headers/header-login';

class Login extends React.Component {
  handleLoginClick() {
    console.log('you clicked the login btn!')
  }
  render() {
    return (
      <div className="wrapper">
        <HeaderLogin/>
      <main>
        <section className="form">
          <input type="text" className="email" placeholder="Email or username"/>
          <input type="password" className="pwd" placeholder="Password"/>
          <input type="submit"
                 id="loginBtn"
                 className="login"
                 value="Log in"
                 onClick={this.handleLoginClick}/>
          <p className="instructions">Don't have an account? <a href="#register" className="register">Sign up »</a></p>
        </section>
      </main>
      </div>
    )
  }
}

export default Login;
