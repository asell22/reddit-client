import React, { Component } from 'react';
class paginationButtons extends Component {
  afterClicked = 0;

  clickHandler = (url) => {
    fetch(url)
      .then(response =>  response.json())
      .then(data => {
        this.props.setThreads(data.data.children)
        this.props.setBeforeChild(data.data.before)
        this.props.setAfterChild(data.data.after)
      })
  }
  onBeforeClickHandler = () => {
    const count = this.afterClicked * 25;
    this.afterClicked -= 1;
    this.clickHandler(`https://www.reddit.com/r/subreddit/new.json?count=${count}&before=${this.props.before}`)
  }

  onAfterClickHandler = () => {
    this.afterClicked += 1;
    this.clickHandler(`https://www.reddit.com/r/subreddit/new.json?count=25&after=${this.props.after}`)
  }
  render() {
    return (
      <div>
        <button 
          onClick={this.onBeforeClickHandler}
          disabled={!this.props.before}>Before</button>
        <button 
          onClick={this.onAfterClickHandler}
          disabled={!this.props.after}>After</button>
      </div>
    );
  }
}


export default paginationButtons;