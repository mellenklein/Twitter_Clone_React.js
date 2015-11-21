import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <nav className="nav">
          <a href="#" className="homeBtn"><i className="fa fa-home"></i>Home</a>
          <a href="#" className="homeBtn"><i className="fa fa-bell"></i>Notifications</a>
          <a href="#" className="homeBtn"><i className="fa fa-envelope"></i>Messages</a>
        </nav>
        <a href="#" className="twitterBird"><i className="fa fa-twitter"></i></a>
        <div className="profileHeader">
          <input type="text" className="search" placeholder="Search Twitter"/>
          <a id="searchBtn" href="#">Search</a>
          <a href="#users/:userId"><img src="http://www.fillmurray.com/30/30" alt="avatar small" className="smallAvatar"/></a>
          <a id="logOutBtn" href="#">Log Out</a>
        </div>
      </header>
    )
  }
}

export default Header;
