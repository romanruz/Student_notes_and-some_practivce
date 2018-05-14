import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import Websocket from 'react-websocket';
let arr = [];
let time =[];
const data = {labels:[1,2,3,4,5,6],
				datasets:[
				{
					label:'Bitcoin',
					data:[1,2,3,4,5,6],
			         backgroundColor:[
				         'rgba(255, 99, 132, 0.6)',
			              'rgba(54, 162, 235, 0.6)',
			              'rgba(255, 206, 86, 0.6)',
			              'rgba(75, 192, 192, 0.6)',
			              'rgba(153, 102, 255, 0.6)',
			              'rgba(255, 159, 64, 0.6)',
			              'rgba(255, 99, 132, 0.6)'
			        	 ]		 
				}
						]}

class Chart extends Component {
	constructor(props){
		super(props);
		this.state = {
			dataCharts:data
		}
		
	}

	handleData (socet){
		
		 let result = JSON.parse(socet)	
		 arr.push(+result.events["0"].price)
		 if(arr.length>5){
		 	arr.shift()
		 }
		 
		 time.push(new Date(result.timestampms).toLocaleTimeString())
		 if(time.length>5){
		 	time.shift()
		 }
		 data.datasets["0"].data = arr;
		 data.labels = time;
		 this.setState({...this.state,dataCharts:data})
		 console.log (this.state)
		 
		
		
		 

	}
	render(){
		return(
			<div className="chart">
			<Line
	    	data={this.state.dataCharts}
	    	options={{
	        maintainAspectRatio: false
    		}}
			/>
			<Websocket
				url='wss://api.gemini.com/v1/marketdata/btcusd'
              	onMessage={this.handleData.bind(this)}
             />
			</div>
			)
	}
}
export default Chart