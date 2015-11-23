import React from 'react';
import jQuery from 'jquery';
let moment = require('moment');
moment().format();

import User from './user';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let user = this.props.users.map(user => {
      return <User key={user.id}
                    user={user}/>
    });
    return (
      <aside className="sidebar">
        {user}
      </aside>
    )
  }
}

export default Sidebar;
