// Library
import React from 'react';
import { Line } from 'react-chartjs';

class Dashboard extends React.Component {
  render(){
  	let sessionData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3]
        }]
    }
    let chartOption = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    return (
    	<div className="ui segment basic">
    		<h1 className="ui header">
    			<i className="dashboard icon"></i>
    			<div className="content">
    				My Dashboard
    				.sub.header{}
    			</div>
    		</h1>
    		<Line data={sessionData} option={chartOption} />
    	</div>
    )
  }
}

export default Dashboard