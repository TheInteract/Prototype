import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import styles from './menuSidebar.scss';

export default class MenuSidebar extends React.Component {
    render() {
        let setMaxWidth = cx(['ui', styles.maxWidth, 'secondary', 'vertical', 'inverted', 'menu'])
        return (
            <div className={setMaxWidth}>
                <Link className="item" activeClassName="active" to="/dashboard">
                    <i className="dashboard icon"></i>
                    My Dashboard
                </Link>
                <Link className="item" activeClassName="active" to="/heatmap">
                    <i className="newspaper icon"></i>
                    Heatmap Report
                </Link>
                <Link className="item" activeClassName="active" to="/confusion">
                    <i className="random icon"></i>
                    Confusion Detection Report
                </Link>
                <Link className="item" activeClassName="active" to="/webflow">
                    <i className="fork icon"></i>
                    Web Page Flow Report
                </Link>
                <Link className="item" activeClassName="active" to="/form">
                    <i className="keyboard icon"></i>
                    Form Analytic Report
                </Link>
                <div className="item">
                    <div className="header">Accounts</div>
                    <div className="menu">
                        <Link className="item" activeClassName="active" to="/setting">
                            <i className="settings icon"></i>
                            Setting
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}