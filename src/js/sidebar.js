import React from 'react';
import jQuery from 'jquery';
let moment = require('moment');
moment().format();

import UserDetail from './user-detail';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let users = this.props.users.map(user => {
      return <UserDetail key={user.id}
                    user={user}/>
    });
    return (
      <aside className="sidebar">
        {users[0]}
      </aside>
    )
  }
}

export default Sidebar;
