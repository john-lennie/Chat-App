import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="message">
          <span className="message-username">{this.props.user}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
        {/* <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div> */}
      </div>
    );
  }
}
export default Message;