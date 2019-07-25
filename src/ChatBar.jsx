import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    if (e.key === 'Enter') {
      event.preventDefault();
      this.props.addMessage(this.props.currentUser.name, e.target.value);
    }
  }
  handleChange(e) {
    const name = e.target.name;
    this.props.updateState(name, e.target.value);
  }
  render() {
    console.log("Rendering <ChatBar />");
    return (
      <footer className="chatbar">
          <input className="chatbar-username" name="currentUser" value={this.props.currentUser.name} onChange={this.handleChange} />
          <input className="chatbar-message" name="message" value={this.props.message}  onChange={this.handleChange} onKeyDown={this.handleSubmit} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default ChatBar;
