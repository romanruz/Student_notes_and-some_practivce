import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

class SelectArchive extends Component {
	state = {
		selectValue:'',
		year:{
			labels:[],
			data:[]
		}
	}

	componentDidMount() {
		axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.DateFunction(2)}&end=${this.DateFunction(0)}`)
		 .then (res=>{
		 	this.setState({year:{labels:Object.keys(res.data.bpi),data:Object.values(res.data.bpi)}})
		 })
		 
		
	}

	DateFunction = (day)=>{
		let date  = new Date()
			// console.log(new Date(date.setDate(date.getDate()-day)).toISOString().substring(0, 10))
			return new Date(date.setDate(date.getDate()-day)).toISOString().substring(0, 10);
	}
	onChangeHandler = (e)=>{
		this.setState({selectValue:e.target.value});
		console.log (this.state.selectValue)
		console.log (e.target.value)
		axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.selectValue ==='day'?this.DateFunction(2):'2017-05-15'}&end=${this.DateFunction(0)}`)
		 .then (res=>{
		 	this.setState({year:{labels:Object.keys(res.data.bpi),data:Object.values(res.data.bpi)}})
		 
		 	
		 })

	}
	render(){
		return(
			<div>
			<select className='SelectArchive' onChange={this.onChangeHandler}>
              <option value="title" disable>Выберите период</option>
              <option value="day">День</option>
              <option value="month">Месяц</option>
              <option value="year">Год</option>
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