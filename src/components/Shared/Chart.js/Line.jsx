import React from 'react'

export default class Line extends React.Component {
    constructor() {
        super()
    }
    componentDidMount () {
      let chartCanvas = this.refs.chart
      
      let myChart = new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: this.props.data.labels,
            datasets: this.props.data.dataset
        },
        options: {
            responsive: true,
                legend: {
                    position: 'bottom',
                },
                hover: {
                    mode: 'label'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
        }
      })
      this.setState({chart: myChart})
    }
    componentDidUpdate () {
        // let chart = this.state.chart
        // let data =  this.props.data
        
        // chart.data.labels = data.labels
        // chart.update()
    }
    render() {
        return (
            <canvas ref={'chart'}></canvas>
        )
    }
}
