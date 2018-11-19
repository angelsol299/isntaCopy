import React, { Component } from "react";
import FileUpload from "./fileUpload";
import "./App.css";
import firebase from "firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} has started a session`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(result =>
        console.log(`${result.user.email} the session has been ended`)
      )
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton() {
    //si esta logueado
    if (this.state.user) {
      return (
        <div>
          <img
            src={this.state.user.photoURL}
            alt={this.state.user.displayName}
          />
          <p>hola {this.state.user.displayName}</p>
          <button onClick={this.handleLogout}>Logout</button>
          <FileUpload />
        </div>
      );
    } else {
      //si no esta logueado
      return <button onClick={this.handleAuth}>Login con Google</button>;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>insta</h2>
          <p className="App-intro">{this.renderLoginButton()}</p>
        </header>
      </div>
    );
  }
}

export default App;
