import React from 'react';

class HeaderHome extends React.Component {
  render() {
    return (
      <header className="top">
        <nav className="nav">
          <a href="#" className="homeBtn"><i className="fa fa-home"></i>Home</a>
        </nav>
        <a href="#" className="twitterBird"><i className="fa fa-twitter"></i></a>
        <div className="homeHeader">
          <a id="forms" href="#login">Log In</a>
          <a id="forms" href="#register">Sign Up</a>
        </div>
      </header>
    )
  }
}

export default HeaderHome;
