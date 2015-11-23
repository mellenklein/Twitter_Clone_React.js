import React, { PropTypes } from 'react';
import jQuery from 'jquery';
import _ from 'lodash';
let moment = require('moment');
moment().format();

class User extends React.Component {
  render() {
    let date = this.props.user.created_at;
    let momentTime = new Date(date).toDateString();
    return (
      <article className="user">
        <img className="coverPic" src="http://lorempixel.com/300/100/abstract"/>
        <img className="avatar" src="http://lorempixel.com/50/50/people"/>
        <a className="followBtn">Follow</a>
        <a href="#" className="fa fa-cog"></a>
        <header className="userHeader">
          <p className="name">Firstname Lastname</p>
          <a className="email" href="#/users/:userId">{this.props.user.email}</a>
          <time>Joined {momentTime}</time>
          <p className="bio">This is my bio.</p>
          <a href="#" className="fa fa-user-plus"></a>
        </header>
      </article>
    )
  }
}

export default User;
