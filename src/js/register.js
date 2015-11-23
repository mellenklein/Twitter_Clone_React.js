import React from 'react';
import jQuery from 'jquery';

import HeaderRegister from './headers/header-register';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.state = {
      users: {data: []}
    };
  }

  handleAdd(person) {
    let users = this.state.users;
    users.unshift(person);
  }

  handleEmailChange(e){
    this.setState({email: e.target.value});
  }
  handleRegister(e){
    console.log('you clicked the register btn');
    var email = this.state.email.trim();
    console.log(email);
    if(!email) {
      return;
    }
    let person = JSON.stringify(this.refs.person.value);
    console.log(person);
    this.sendUser(person);
    this.refs.person.value = '';
    this.setState({email: ''});
  }

  sendUser(person) {
    let options = {
      method: 'POST',
      data: {
        attributes: {
          grant_type: password,
          email: JSON.stringify(person),
          created_at: new Date()
        }
      },
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    };
    jQuery.ajax('https://twitterapii.herokuapp.com/users.json', options).then(function(response) {
      this.props.handleAdd(response);
    });
  }

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
                 ref="person"/>
          <input ref="password" type="password" className="pwd" placeholder="Password"/>
          <input ref="passwordConfirm" type="password" className="pwd2" placeholder="Confirm password"/>
          <input type="submit"
                 className="registerBtn"
                 value="Sign up"/>
          <p className="instructions">Already have an account? <a href="#login" className="loginLink">Login »</a></p>
        </form>
      </main>
      </div>
    )
  }
}

export default Register;
