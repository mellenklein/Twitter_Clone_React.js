import React from 'react';

class Tweet extends React.Component {
  render() {
    return (
      <article className="tweet">
        <img src="http://www.fillmurray.com/50/50"/>
        <header className="tweetHeader">
          <a className="email" href="#user/:id">mellenklein</a>
          <time>3 hours ago</time>
          <p className="tweet">Here is my tweet!</p>
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
