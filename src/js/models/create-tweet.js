import React from 'react';

class CreateTweet extends React.Component {
  handleCreation() {
    console.log('you created a tweet!')
  }
  render() {
    let avatarUrl = `http://lorempixel.com/32/32/people/?${this.props.user.id}`;
    console.log(this.props.user);
    return (
      <section className="createTweet">
        <img src={avatarUrl} className="smallAvatar" alt="avatar"/>
        <input type="text" className="tweetText" placeholder="What's happening?"/>
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
