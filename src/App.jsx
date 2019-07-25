import React, {Component} from 'react';
import Nav from './Nav.jsx';
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
      numOfConnections: 0,
      messages: []
    };
  }
  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001/");
    // code to handle incoming message
    this.socket.onmessage = (event) => {
      let data = JSON.parse(event.data);
      switch(data.type) {
        case "incomingMessage":
          let oldMessages = this.state.messages; // NEED TO CLEAR THIS UP WITH MYSELF
          let newMessages = [...oldMessages, data];
          this.setState({ messages: newMessages });
          break;
        case "incomingNotification":
          // handle incoming notification
          break;
        case "incomingConnectionCount":
          this.setState({ numOfConnections: data.connections });
          break;
        default:
          // show an error in the console if the message type is unknown
          throw new Error("Unknown event type " + data.type);
      }
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
    this.socket.send(`{"type": "postMessage", "username": "${user}", "content": "${message}"}`);
  }
  render() {
    console.log("Rendering <App />");
    return (
      <div>
        <Nav numOfConnections={this.state.numOfConnections} />
        <MessageList messages={this.state.messages} />
        <ChatBar updateState={this.updateState} addMessage={this.addMessage} currentUser={this.state.currentUser} message={this.state.message} />
      </div>
    );
  }
}

export default App;
