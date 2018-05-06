import React, { Component } from "react";
import "./App.css";
import FormCreate from "./FormCreate";
import firebase from "./firebase";
import { Form, Field } from "react-final-form";

class Select extends Component {

  render() {

    return (
      <div>
            <label>Город</label>
            <Field name="city" component="select">
              <option value="Киев">Киев</option>
              <option value="Не Киев">Не Киев</option>
            </Field>
          </div>
    );
  }
}

export default Select;