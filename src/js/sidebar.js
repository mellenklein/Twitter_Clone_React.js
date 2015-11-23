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
    return (
      <aside className="sidebar">
      </aside>
    )
  }
}

export default Sidebar;
