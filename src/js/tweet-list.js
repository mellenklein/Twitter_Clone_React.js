import React from 'react';
import jQuery from 'jquery';
var moment = require('moment');
moment().format();

import Tweet from './tweet';

class TweetList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.users);
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
