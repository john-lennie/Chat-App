import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.addMessage = this.addMessage.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      message: "",
      messages: []
    };
  }
  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001/");
    // code to handle incoming message
    this.socket.onmessage = (message) => {
      let messageObject = JSON.parse(message.data);
      let oldMessages = this.state.messages; // NEED TO CLEAR THIS UP WITH MYSELF
      let newMessages = [...oldMessages, messageObject];
      this.setState({ messages: newMessages });
    }

  }
  updateState(name, text) {
    if (name === "currentUser") {
      this.setState({
        currentUser: {
          name: text
        }
      });
    }
    if (name === "message") {
      this.setState({
        message: text
      });
    }
  }
  addMessage(user, message) {
    this.socket.send(`{"username": "${user}", "content": "${message}"}`);
  }
  render() {
    console.log("Rendering <App />");
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">CHATTY</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar updateState={this.updateState} addMessage={this.addMessage} currentUser={this.state.currentUser} message={this.state.message} />
      </div>
    );
  }
}

export default App;
