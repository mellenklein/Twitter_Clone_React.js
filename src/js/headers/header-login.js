import React from 'react';

class HeaderLogin extends React.Component {
  render() {
    return (
      <header className="top">
        <nav className="nav">
          <a href="#" className="homeBtn"><i className="fa fa-home"></i>Home</a>
        </nav>
        <a href="#" className="twitterBird"><i className="fa fa-twitter"></i></a>
        <p className="loginHeader">Log in to Twitter</p>
      </header>
    )
  }
}

export default HeaderLogin;
