import React from 'react'
import Chart from '../Shared/ChartJS.jsx'
import styles from './dashboard.scss'
import cx from 'classnames'

export default class Dashboard extends React.Component {

    render() {
        return (
            <div className={styles.maxWidth}>
                <div className="ui segment basic">
                    <h1 className="ui header">
                        <i className="dashboard icon"></i>
                        <div className="content">
                            My Dashboard
                        </div>
                    </h1>
                    <div className="ui two column grid">
                        <div className="column">
                            <Chart.Line />
                        </div>
                        <div className="column">
                            Column Two
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
