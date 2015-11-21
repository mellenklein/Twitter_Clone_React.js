import React from 'react';
import jQuery from 'jquery';
var moment = require('moment');
moment().format();

import HeaderDashboard from './headers/header-dashboard';
import TweetList from './tweet-list';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false,
      tweets: []
    };
  }
  componentDidMount() {
    this.getTweets();
  }

  getTweets() {
    jQuery.ajax('https://twitterapii.herokuapp.com/users.json?include=tweets')
          .then( response => {
            var tweets = response.included;
            var users = response.data;
            var tweetData = tweets.map(function(tweet){
              return {
                id: tweet.id,
                body: tweet.attributes.body,
                created_at: tweet.attributes.created_at,
                userId: tweet.relationships.user.data.id,
                email: users.filter(function(user) {
                  return user.id === tweet.relationships.user.data.id
                })[0].attributes.email
              }
            });
            this.setState({
              hasLoaded: true,
              tweets: tweetData
            });
          });
  }

  render(){
    return(
      <div className="wrapper">
        <HeaderDashboard/>
      <main>
          <TweetList tweets={this.state.tweets}
                     users={this.state.users}
                     hasLoaded={this.state.hasLoaded}/>
      </main>
      </div>
    )
  }
}

export default Dashboard;
