import React from 'react';

function Nav(props) {
  console.log("Rendering <Nav />");
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">CHATTY</a>
      <div className="userCount">{props.numOfConnections} {props.numOfConnections < 2 ? "User Online" : "Users Online"}</div>
    </nav>
  );
}
export default Nav;
