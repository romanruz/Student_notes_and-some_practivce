import React, {Component} from 'react';
import { connect } from "react-redux";
import './App.css';
import axios from 'axios';
import {getApi}  from './getApi'


class App extends Component {
  constructor(props) {
    super (props)
  this.state = {data:''};
}



  render() {
    return (
      <div>
     it s ok
    {console.log(getApi())}
    </div>);
  }
}

export default App;
