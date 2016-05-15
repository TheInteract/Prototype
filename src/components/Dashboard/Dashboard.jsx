import React from 'react'
import Chart from '../Shared/ChartJS.jsx'

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="ui segment basic">
                <h1 className="ui header">
                    <i className="dashboard icon"></i>
                    <div className="content">
                        My Dashboard
                    </div>
                </h1>
                <div className="ui segment basic">
                    <Chart.Line />
                </div>
            </div>
        )
    }
}
