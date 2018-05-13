import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import Websocket from 'react-websocket';
let arr = [];
let time =[];
const datas = {labels:[23423432,4343434,5665,656565,5656,5656],
				datasets:[
				{
					label:'Bitcoin',
					data:[1,2,3,4,5,76],
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
			charts:datas
		}
		
	}
	
	componentWillMount (){
		console.log ('will mount');
	}
	
	handleData (data){
		 let result = JSON.parse(data)	
		 arr.push(result.events["0"].price)
		 if(arr.length>6){
		 	arr.shift()
		 }
		 
		 time.push(new Date(result.timestamp).toLocaleTimeString())
		 if(time.length>6){
		 	time.shift()
		 }
		 // this.setState(this.state.charts.labels = time)
		 this.setState(this.state.charts.datasets["0"].data = arr)
		 
		 console.log (this.state.charts) 
		 
	}
	render(){
		return(
			<div className="chart">
			<Line
	    	data={this.state.charts}
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