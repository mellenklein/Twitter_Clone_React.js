import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        home button
        Twitter logo
        <div className="profileHeader">
          search btn
          login button
          small avatar
          logout btn
        </div>
      </header>
    )
  }
}

export default Header;
