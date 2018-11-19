import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDTSmLC2G2qDWyqyHCQmL8h9e8JkVUJqrc",
  authDomain: "insta-266d1.firebaseapp.com",
  databaseURL: "https://insta-266d1.firebaseio.com",
  projectId: "insta-266d1",
  storageBucket: "insta-266d1.appspot.com",
  messagingSenderId: "697369412593"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
