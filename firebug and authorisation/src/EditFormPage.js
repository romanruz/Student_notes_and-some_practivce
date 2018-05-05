import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormCreate from "./FormCreate";
import firebase from "./firebase";

class EditFormPage extends Component {
  state = { item: {} };
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    const itemRef = firebase.database().ref(`list/${id}`);

    itemRef.on("value", snapshot => {
      let item = snapshot.val();
      this.setState({
        item
      });
    });
  }
  onSubmit(values) {
    const id = this.props.match.params.id;
    const itemRef = firebase.database().ref(`list/${id}`);
    itemRef.update(values);
    this.props.history.push("/");
  }
  render() {
    const { item } = this.state;
    console.log("item", item);
    if (!Object.keys(item).length) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <FormCreate onSubmit={this.onSubmit} initialValues={item} />
      </div>
    );
  }
}

export default EditFormPage;
