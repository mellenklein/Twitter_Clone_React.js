import React from 'react';
import jQuery from 'jquery';
let moment = require('moment');
moment().format();

import User from './user';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  toggleActive(e){
    e.className.toggle('active')
  }
  render() {
    let users = this.props.users.map(user => {
      return <User key={user.id}
                    user={user}/>
    });
    return (
      <section className="users">
        <nav className="tabs">
          <a href="#/dashboard" className="tab"
             onClick={this.toggleActive}>My Tweets</a>
          <a href="#/users" className="tab"
             onClick={this.toggleActive}>Followers</a>
        </nav>
        {users}
      </section>
    )
  }
}

export default UserList;
