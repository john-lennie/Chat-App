import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const messages = this.props.messages.map((message, index) =>
      // Only do this if items have no stable IDs
      <Message key={index} user={message.username} content={message.content} />
    );
    return (
        <div>{messages}</div>
    )
  }
}
export default MessageList;
