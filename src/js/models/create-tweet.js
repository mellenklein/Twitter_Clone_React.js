import React from 'react';

import CreateMsg from './create-msg';

class CreateTweet extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreation = this.handleCreation.bind(this);
  }
  handleCreation(e) {
    e.preventDefault();

    let msg = this.refs.msg.value;

    if (msg) {
      CreateMsg.postTweet({
        body: msg,
      }, (error, data) => {
        if (!error) {
          //Automatically send user to login screen
        } else {
          alert('There was an error with your tweet.');
        }
      });
    } else {
      alert('A message is required.');
    }
  }
  render() {
    let avatarUrl = `http://lorempixel.com/40/40/people/?${this.props.user.id}`;
    return (
      <section className="createTweet">
        <img src={avatarUrl} className="smallAvatar" alt="avatar"/>
        <input type="text" className="tweetText" placeholder="What's happening?" ref="msg"/>
        <input type="submit"
               id="tweetBtn"
               className="tweetBtn"
               value="Tweet"
               onClick={this.handleCreation}/>
      </section>
    )
  }
}

export default CreateTweet;
