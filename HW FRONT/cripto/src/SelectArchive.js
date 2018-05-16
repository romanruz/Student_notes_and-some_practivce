import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

class SelectArchive extends Component {
	state = {
		selectValue:'',
		year:{
			labels:[1],
			data:[1]
		}
	}

	componentDidMount() {
		axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.selectValue ==='month'?this.DateFunction(30):this.state.selectValue ==='day'?this.DateFunction(2):this.DateFunction(360)}&end=${this.DateFunction(1)}`)
		 .then (res=>{
		 	this.setState({year:{labels:Object.keys(res.data.bpi),data:Object.values(res.data.bpi)}})
		 })
	}

	DateFunction = (day)=>{
		let date  = new Date()
			return new Date(date.setDate(date.getDate()-day)).toISOString().substring(0, 10);
	}
	onChangeHandler = (e)=>{
		this.setState({selectValue:e.target.value});
		axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${e.target.value ==='month'?this.DateFunction(30):e.target.value ==='day'?this.DateFunction(2):this.DateFunction(360)}&end=${this.DateFunction(0)}`)
		 	.then (res=>{
		 		this.setState({year:{labels:Object.keys(res.data.bpi),data:Object.values(res.data.bpi)}})
		 		})
	}
	render(){
		return(
			<div>
			<select className='SelectArchive' onChange={this.onChangeHandler}>
              <option value="title" disable>Choose Period</option>
              <option value="day">Days</option>
              <option value="month">months</option>
              <option value="year">years</option>
            </select>
            <Line
            width={100}
            height={20}
            data= {{labels: this.state.year.labels,
					  datasets: [
					    {
					      label: 'Bit Coin',
					      fill: false,
					      lineTension: 0.1,
					      backgroundColor: 'rgba(75,192,192,0.4)',
					      borderColor: 'rgba(75,192,192,1)',
					      borderCapStyle: 'butt',
					      borderDash: [],
					      borderDashOffset: 0.0,
					      borderJoinStyle: 'miter',
					      pointBorderColor: 'rgba(75,192,192,1)',
					      pointBackgroundColor: '#fff',
					      pointBorderWidth: 1,
					      pointHoverRadius: 5,
					      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
					      pointHoverBorderColor: 'rgba(220,220,220,1)',
					      pointHoverBorderWidth: 2,
					      pointRadius: 1,
					      pointHitRadius: 10,
					      data: this.state.year.data
					    }
  ]}}
            options={{
              position: "left",
              maintainAspectRatio: true
            }}
          />
          </div>    
		)
	}
}
export default SelectArchive;