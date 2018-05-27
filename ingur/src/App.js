import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getApi} from './getApi';

class App extends Component {
  constructor(props) {
    super (props)
  this.state = {data:[]};
}
onKlickHandler(){
  this.props.Api();
  this.setState({data:this.props.testStore})

}
  render() {
    return (
      <div>
     it s ok
     <button onClick={this.onKlickHandler.bind(this)}>test</button>
     <div>{console.log(this.props.testStore)}</div>
    </div>);
  }
}

export default connect(
  state => ({
    testStore:state
}),

  dispatch=>({
    Api:()=>{
      dispatch(getApi())
    }
  })
)(App);
