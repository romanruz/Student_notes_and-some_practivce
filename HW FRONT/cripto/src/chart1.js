import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import Websocket from 'react-websocket';
let arr = [];
let time =[];

class Chart extends Component {
	constructor(props){
		super(props);
		this.state = {
			currency:'',
			time:''
		}
		
	}

	handleData (data){
		 let result = JSON.parse(data)	
		 arr.push(+result.events["0"].price)
		 if(arr.length>5){
		 	arr.shift()
		 }
		 let a = arr.join(',')
		 time.push(new Date(result.timestampms).toLocaleTimeString())
		 if(time.length>5){
		 	time.shift()
		 }
		 let b = time.join(',')
		 this.setState({currency:a})
		 this.setState({time:b})
		
		 

	}
	render(){
		return(
			<div className="chart">
			<Line
	    	data={{
	    		labels:[`${this.state.time}`],
				datasets:[
				{
					label:'Bitcoin',
					data:[`${this.state.currency}`],
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
						]
	    	}}
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