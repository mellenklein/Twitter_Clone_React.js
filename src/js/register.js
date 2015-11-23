import React from 'react';
import jQuery from 'jquery';

import HeaderRegister from './headers/header-register';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      email: ''
    };
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleEmailChange(e){
    this.setState({email: e.target.value});
  }
  handleRegisterClick(e){
    console.log('you clicked the register btn');
    e.preventDefault();
    var email = this.state.email.trim();
    console.log(email);
    if(!email) {
      return;
    }
    this.sendUser(this.state);
    this.setState({email: ''});
    jQuery('.email').attr('value', '');
  }
  // componentWillMount() {
  //   this.sendUser();
  // }

  sendUser(person) {
    jQuery.ajax({
      url: 'https://twitterapii.herokuapp.com/users.json',
      dataType: 'json',
      type: 'POST',
      data: person,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(e) {
        console.log(e);
      }.bind(this)
  });

  }

  render() {
    return (
      <div className="wrapper">
        <HeaderRegister/>
      <main>
        <form className="regForm"
              onSubmit={this.handleRegisterClick}>
          <input type="text"
                 className="email"
                 placeholder="Email"
                 onChange={this.handleEmailChange}/>
          <input type="password" className="pwd" placeholder="Password"/>
          <input type="password" className="pwd2" placeholder="Confirm password"/>
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
