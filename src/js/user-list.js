import React from 'react';
import jQuery from 'jquery';
let moment = require('moment');
moment().format();

import User from './user';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let users = this.props.users.map(user => {
      return <User key={user.id}
                    user={user}/>
    });
    return (
      <section className="users">
        {users}
      </section>
    )
  }
}

export default UserList;
