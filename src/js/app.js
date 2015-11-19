import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';

class App extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <Header/>
        <main>
          <h1>Hello world from App!</h1>
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
