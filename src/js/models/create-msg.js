import $ from 'jquery';

class CreateMsg {
  constructor() {
    this.access_token = null;
  }
  isLoggedIn() {
    return this.access_token !== null;
  }

  postTweet(data, done) {
    let url = 'https://twitterapii.herokuapp.com/tweets';

    let options = {
      url: url,
      method: 'POST',
      data: {
        'tweet': data
      }
    };

    $.ajaxSetup({
      header: {
        'Authorization': 'Bearer' + this.access_token
      }
    });

    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  logout() {
    this.token = null;
  }
}

export default new CreateMsg();
