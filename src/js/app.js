import React from 'react';
import {render} from 'react-dom';
import jQuery from 'jquery';
import _ from 'lodash';
import {Router, Route, Link} from 'react-router';

import HeaderHome from './headers/header-home';
import Dashboard from './components/dashboard';
import Users from './components/users';
import Register from './components/register';
import Login from './components/login';

class App extends React.Component {

  render(){
    return(
      <div className="wrapper">
        <HeaderHome/>
      <main>
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
    <Route path='/' component={Dashboard}>

    </Route>
    <Route path='/login' component={Login}>

    </Route>
    <Route path='/register' component={Register}>

    </Route>
    <Route path='/dashboard' component={Dashboard}>

    </Route>
    <Route path='/users' component={Users}>

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
