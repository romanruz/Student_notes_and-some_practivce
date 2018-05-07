import React, { Component } from "react";
import "./App.css";
import FormCreate from "./FormCreate";
import { Form, Field } from "react-final-form";

class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
    value:''
    };
  }
  
onChange(event,values){
  console.log(values)
  this.setState({value:event.target.value})
  }

  render() {
    return (
     <div>
            <label>{this.props.placeholder}</label>
            <Field
              name={this.props.name}
              component="input"
              type="text"
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
            />
            
          </div>
    );
  }
}

export default Input;