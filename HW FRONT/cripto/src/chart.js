import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import Websocket from 'react-websocket';

class Chart extends Component {
	arr = [];
	time = [];
  state = {
    data: undefined
  };
  handleData(data) {
    let result = JSON.parse(data);
    this.time.push(new Date(result.timestampms).toLocaleTimeString()) 
  		if(this.time.length>20){
		 	this.time.shift()
		 }
    this.arr.push(result.events[0].price)
		 if(this.arr.length>20){
		 	this.arr.shift()
		 }
    this.setState({
      data: {
        labels: [...this.time],
        datasets: [
          {
            label: "BTC Real-time",
            fill: true,
            lineTension: 0.05,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 3,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [...this.arr]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <Websocket
          url="wss://api.gemini.com/v1/marketdata/btcusd"
          onMessage={this.handleData.bind(this)}
        />
        {this.state.data && (
          <Line
            width={100}
            height={20}
            data={this.state.data}
            options={{
              position: "left",
              maintainAspectRatio: true
            }}
          />
        )}
      </div>
    );
  }
}

export default Chart;