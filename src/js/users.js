import React from 'react';
import jQuery from 'jquery';
let moment = require('moment');
moment().format();

import HeaderDashboard from './headers/header-dashboard';
import UserList from './user-list';
import Sidebar from './sidebar';



class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false,
      users: [],
      profile: [],
    };
  }
  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    jQuery.ajax('https://twitterapii.herokuapp.com/users.json')
        .then( response => {
          let users = response.data;
          let userData = users.map(function(user){
            return {
              userId: user.id,
              created_at: user.attributes.created_at,
              email: user.attributes.email
            }
          });
          this.setState({
            hasLoaded: true,
            users: userData
          });
        });
  }

  render(){
    return(
      <div className="wrapper">
        <HeaderDashboard/>
      <main>
          <Sidebar />
          <UserList users={this.state.users}
                     hasLoaded={this.state.hasLoaded}/>
      </main>
      </div>
    )
  }
};

export default Users;
