import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getApi} from './getApi';
import {Filter} from './filter';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter:'day'
    };
  }
  componentDidMount() {
    this.props.Api();
    this.setState({data: this.props.test})

  }
  onFilterChange = (e)=>{
    this.setState({filter:e.target.value});
    console.log(this.state);
  }
  render() {
    return (<div>
      <Filter onClick={this.onFilterChange.bind(this)}/>
      <div>
        {
          <ul>{
                this.props.test.length
                  ? this.props.test.map((pic, index) => <li key={index}><img src={this.props.test[index].images["0"].link} alt ='df.com'/></li>)
                  : 'Loading'
              }</ul>
        }
      </div>
    </div>);
  }
}

export default connect(state => ({
  test: state.length
    ? state[0].filter((item) => {
      return item.images
    })
    : []
}), dispatch => ({
  Api: () => {
    dispatch(getApi(this.state))
  }
}))(App);
