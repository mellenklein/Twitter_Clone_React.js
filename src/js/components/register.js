import React, { PropTypes } from 'react';
import CreateUser from '../models/create-user';
import createLocation from 'history/lib/createLocation';
import jQuery from 'jquery';

import HeaderRegister from '../headers/header-register';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(e){
    e.preventDefault();

    console.log('you clicked the register btn');
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let passwordConfirm = this.refs.passwordConfirm.value;

    if (email && password && password === passwordConfirm) {
      CreateUser.register({
        email: email,
        password: password
      }, (error, data) => {
        if (!error) {
          //Automatically send user to login screen
        } else {
          alert('There was an error with your information.');
        }
      });
    } else {
      alert('Email, password and password confirmation are required.');
    }
  }

  // sendUser(person) {
  //   let options = {
  //     method: 'POST',
  //     data: {
  //       attributes: {
  //         grant_type: password,
  //         email: JSON.stringify(person),
  //         created_at: new Date()
  //       }
  //     },
  //     contentType: "application/json; charset=utf-8",
  //     dataType: "json"
  //   };
  //   jQuery.ajax('https://twitterapii.herokuapp.com/users.json', options).then(function(response) {
  //     this.props.handleAdd(response);
  //   });
  // }

  render() {
    return (
      <div className="wrapper">
        <HeaderRegister/>
      <main>
        <form className="regForm"
              onSubmit={this.handleRegister}>
          <input type="text"
                 className="email"
                 placeholder="Email"
                 onChange={this.handleEmailChange}
                 onSubmit={this.handleRegister}
                 ref="email"/>
          <input ref="password" type="password" className="pwd" placeholder="Password"/>
          <input ref="passwordConfirm" type="password" className="pwd2" placeholder="Confirm password"/>
          <input type="submit"
                 className="registerBtn"
                 value="Sign up"
                 onClick={this.handleRegister}/>
               <p className="instructions">Already have an account? <a href="#/login" className="loginLink">Login »</a></p>
        </form>
      </main>
      </div>
    )
  }
}

export default Register;
