import React from 'react';
import jQuery from 'jquery';
let moment = require('moment');
moment().format();

import Tweet from './tweet';

class TweetList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let tweets = this.props.tweets.map(tweet => {
      return <Tweet key={tweet.id}
                    tweet={tweet}/>
    });
    return (
      <section className="feed">
        {tweets}
      </section>
    )
  }
}

export default TweetList;
