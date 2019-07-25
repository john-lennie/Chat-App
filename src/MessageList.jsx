import React from 'react';
import Message from './Message.jsx';

function MessageList(props) {
  console.log("Rendering <MessageList />");
  const messages = props.messages.map((message) =>
    // Only do this if items have no stable IDs
    <Message key={message.id} user={message.username} content={message.content} />
  );
  return <div>{messages}</div>;
}

export default MessageList;
