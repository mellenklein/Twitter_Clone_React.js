import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import TweetList from './tweet-list'

class App extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <Header/>
        <main>
          <TweetList/>
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
