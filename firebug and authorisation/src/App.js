import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import FormCreate from "./FormCreate";
import firebase from "./firebase";

class App extends Component {
  state = { list: [] };

  componentDidMount() {
    const listRef = firebase.database().ref("list");
    listRef.on("value", snapshot => {
      let list = snapshot.val();
      this.setState({
        list: list
      });
      
    });
  }

  onSubmit(values) {
    const listRef = firebase.database().ref("list");
    listRef.push(values);
  }
  render() {
    const { list } = this.state;
    
    return (
      <div>
        <FormCreate onSubmit={this.onSubmit} />
        <ul>
        {console.log(list)}
          {Object.entries(list).map(([key, { firstName, lastName, email }]) => (
            <li key={key}>
              {`${firstName} - ${lastName}: ${email}`}
              <Link to={key}>Edit</Link>
              
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
