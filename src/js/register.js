import React from 'react';
import jQuery from 'jquery';

import HeaderRegister from './headers/header-register';

class Register extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <HeaderRegister/>
      <main>
        <section className="regForm">
          <input type="text" className="email" placeholder="Email"/>
          <input type="text" className="pwd" placeholder="Password"/>
          <input type="text" className="pwd2" placeholder="Confirm password"/>
          <input type="button" className="registerBtn" value="Sign up"/>
          <p className="instructions">Already have an account? <a href="#login" className="loginLink">Login »</a></p>

        </section>
      </main>
      </div>
    )
  }
}

export default Register;
