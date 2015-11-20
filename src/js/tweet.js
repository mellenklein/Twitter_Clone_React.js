import React, { PropTypes } from 'react';
import jQuery from 'jquery';
import _ from 'lodash';
var moment = require('moment');
moment().format();

class Tweet extends React.Component {
  render() {
    let date = this.props.tweet.created_at;
    let momentTime = moment(date).fromNow();
    return (
      <article className="tweet">
        <img src="http://www.fillmurray.com/50/50"/>
        <header className="tweetHeader">
          <a className="email" href="#">{this.props.tweet.email}</a>
          <time>{momentTime}</time>
          <p className="tweet">{this.props.tweet.body}</p>
          <a href="#" className="fa fa-reply"></a>
          <a href="#" className="fa fa-retweet"></a>
          <a href="#" className="fa fa-heart"></a>
          <a href="#" className="fa fa-ellipsis-h"></a>
        </header>
      </article>
    )
  }
}

export default Tweet;
