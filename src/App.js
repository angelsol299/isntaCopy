import React, { Component } from "react";

import "./App.css";
import firebase from "firebase";

class App extends Component {
  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} has started a session`))
      .catch();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>insta</h2>
          <p className="App-intro">
            <button onClick={this.handleAuth}>Login con Google</button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
