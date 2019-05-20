import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  charactorCount= () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.props.maxChars} value={this.state.message} onChange={this.handleMessage}/>
        <p>Number of Charactors remaining: {this.charactorCount()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
