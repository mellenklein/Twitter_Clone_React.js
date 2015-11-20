import React, { PropTypes } from 'react';
import jQuery from 'jquery';

import Tweet from './tweet';

class TweetList extends React.Component {
  render() {
    return (
      <section className="feed">
        <Tweet/>
      </section>
    )
  }
}

export default TweetList;
