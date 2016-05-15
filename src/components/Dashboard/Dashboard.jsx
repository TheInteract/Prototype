import React from 'react'
import Chart from '../Shared/ChartJS.jsx'
import styles from './dashboard.scss'
import cx from 'classnames'

export default class Dashboard extends React.Component {
    render() {
        let maxWidth = cx(['ui', 'basic', 'segment', styles.maxWidth])

        let lineChartOne = {
            dataset: [
                {
                    data: [21000, 21921, 13999, 31984, 41200, 21444, 24482, 29187, 23133, 31398, 51525, 45252],
                    label: 'Session of 2016',
                    backgroundColor: 'rgba(255,99,132, 0.4)',
                    pointHoverRadius: 10,
                    pointRadius: 5,
                    pointHitRadius: 10
                },
                {
                    data: [11000, 11921, 18999, 21984, 21200, 25644, 19032, 21187, 24514, 29831, 31393, 37132],
                    label: 'Session of 2015',
                    backgroundColor: 'rgba(255,22,84, 0.4)',
                    pointHoverRadius: 10,
                    pointRadius: 5,
                    pointHitRadius: 10
                }
            ],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
        let lineChartTwo = {
            dataset: [
                {
                    data: [210000, 319210, 219990, 119840, 252000, 194440, 214820, 191870, 121330, 413980, 215250, 352502],
                    label: 'Pageview of 2016',
                    backgroundColor: 'rgba(112,193,179,0.4)',
                    pointHoverRadius: 10,
                    pointRadius: 5,
                    pointHitRadius: 10
                },
                {
                    data: [110000, 329210, 189990, 311840, 412000, 156440, 590932, 311877, 145114, 329831, 111393, 137132],
                    label: 'Pageview of 2015',
                    backgroundColor: 'rgba(36,123,160,0.4)',
                    pointHoverRadius: 10,
                    pointRadius: 5,
                    pointHitRadius: 10
                }
            ],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
        return (
            <div className={maxWidth}>
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <h1 className="ui header">
                            <i className="dashboard icon"></i>
                            <div className="content">
                                My Dashboard
                            </div>
                        </h1>
                        <h4 className="ui horizontal divider header"></h4>
                        <div className="ui two stackable cards">
                            <div className="card">
                                <div className="content">
                                    <div className="header">Session</div>
                                    <div className="description">
                                        <Chart.Line data={lineChartOne} />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="header">Page Views</div>
                                    <div className="description">
                                        <Chart.Line  data={lineChartTwo} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
