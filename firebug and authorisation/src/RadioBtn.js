import React, { Component } from "react";
import "./App.css";
import FormCreate from "./FormCreate";
import firebase from "./firebase";
import { Form, Field } from "react-final-form";

class Radio extends Component {

  render() {
   console.log(this.props);
    return (
     <label>
         		<Field
                  name="sex"
                  component="input"
                  type="radio"
                  value={this.props.sex}
                />{' '}
                {this.props.child}
    </label>
    );
  }
}

export default Radio;