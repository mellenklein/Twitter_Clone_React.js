import React from 'react';
import jQuery from 'jquery';
let moment = require('moment');
moment().format();

class User extends React.Component {
  render() {
    console.log(this.props);
    let date = this.props.user.created_at;
    let momentTime = new Date(date).toDateString();
    let avatarUrl = `http://lorempixel.com/50/50/people/?${this.props.user.userId}`;
    let coverUrl = `http://lorempixel.com/300/100/?${this.props.user.userId}`;

    return (
      <article className="user">
        <img className="coverPic" src={coverUrl}/>
        <img className="avatar" src={avatarUrl}/>
        <a className="followBtn">Follow</a>
        <a href="#" className="fa fa-cog"></a>
        <header className="userHeader">
          <p className="name">{this.props.user.email}</p>
          <a className="email" href="#/users/:userId">{this.props.user.email}</a>
          <time>Joined {momentTime}</time>
          <p className="bio">#{this.props.user.userId}: I am, and have always been, twitter user Number {this.props.user.userId}!</p>
          <a href="#" className="fa fa-user-plus"></a>
        </header>
      </article>
    )
  }
}

export default User;
