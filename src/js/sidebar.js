import React from 'react';
import jQuery from 'jquery';
var moment = require('moment');
moment().format();

import User from './user';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <aside className="sidebar">
        <h1>I am a sidebar</h1>
      </aside>
    )
  }
}

export default Sidebar;
