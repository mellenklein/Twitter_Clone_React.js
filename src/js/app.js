import React from 'react';
import {render} from 'react-dom';
import jQuery from 'jquery';
import _ from 'lodash';
import {Router, Route, Link} from 'react-router';

import HeaderDashboard from './header-dashboard';
import HeaderHome from './header-home';
import TweetList from './tweet-list'

class App extends React.Component {
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
        <HeaderHome/>
      <main>
          <TweetList tweets={this.state.tweets}
                     users={this.state.users}
                     hasLoaded={this.state.hasLoaded}/>
      </main>
      {this.props.children}
      </div>
    )
  }
}

let NotFound = () => {
  return (
    <div className="wrapper">
      <h1 className="error">
        404 ERROR: Page not Found!
      </h1>
    </div>
  )
}

let routes = (
  <Router>
    <Route path='/' component={App}>

    </Route>
    <Route path='/header' component={HeaderDashboard}>

    </Route>
    <Route path='/login' component={App}>

    </Route>
    <Route path='/register' component={App}>

    </Route>
    <Route path='/dashboard' component={App, HeaderDashboard}>

    </Route>
    <Route path='/users' component={App}>

    </Route>
    <Route path='/users/:userId' component={App}>

    </Route>
    <Route path='*' component={NotFound} />
  </Router>
)

render(
  routes,
  document.getElementById('app')
);

export default App;
