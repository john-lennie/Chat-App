import React from 'react';

function Message(props) {
  return (
    <div>
      <div className="message">
        <span className="message-username">{props.user}</span>
        <span className="message-content">{props.content}</span>
      </div>
      {/* <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div> */}
    </div>
  );
}
export default Message;
