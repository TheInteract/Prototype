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
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Session',
                data: [12, 19, 3, 5, 2, 3]
            }]
        },
        options: {}
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
