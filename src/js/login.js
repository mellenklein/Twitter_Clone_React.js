import React from 'react';
import jQuery from 'jquery';

import HeaderLogin from './headers/header-login';

class Login extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <HeaderLogin/>
      <main>
        <section className="form">
          <input type="text" className="email" placeholder="Email or username"/>
          <input type="text" className="pwd" placeholder="Password"/>
          <a href="#dashboard" id="loginBtn" className="login">Log in</a>
          <p className="instructions">Don't have an account? <a href="#register" className="register">Sign up »</a></p>
        </section>
      </main>
      </div>
    )
  }
}

export default Login;
