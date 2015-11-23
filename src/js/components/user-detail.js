import React from 'react';
import jQuery from 'jquery';
let moment = require('moment');
moment().format();

class UserDetail extends React.Component {
  render() {
    let date = this.props.user.created_at;
    let momentTime = new Date(date).toDateString();
    return (
      <article className="userDetail">
        <img className="avatar" src="http://www.fillmurray.com/300/300"/>
        <header className="userDetailHeader">
          <p className="name">{this.props.user.email}</p>
          <a className="email" href="#/users/:userId">{this.props.user.email}</a>
          <br/><time> Joined {momentTime}</time>
          <p className="bio">This is some interesting stuff.</p>
        </header>
      </article>
    )
  }
}

export default UserDetail;
