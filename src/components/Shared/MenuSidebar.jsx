import React from 'react';
import { IndexLink, Link } from 'react-router';
import cx from 'classnames';
import styles from './menuSidebar.scss';

export default class MenuSidebar extends React.Component {
    render() {

        let setMaxWidth = cx(['ui', styles.maxWidth, 'secondary', 'vertical', 'inverted', 'menu'])

        return (
            <div className={setMaxWidth}>
                <IndexLink to="/" className="item" activeClassName="active">
                    <i className="dashboard icon"></i>
                    My Dashboard
                </IndexLink>
                <Link to="/heatmap" className="item" activeClassName="active">
                    <i className="newspaper icon"></i>
                    Heatmap Report
                </Link>
                <Link to="/confusion" className="item" activeClassName="active">
                    <i className="random icon"></i>
                    Confusion Detection Report
                </Link>
                <Link to="/webflow" className="item" activeClassName="active">
                    <i className="fork icon"></i>
                    Web Page Flow Report
                </Link>
                <Link to="/form" className="item" activeClassName="active">
                    <i className="keyboard icon"></i>
                    Form Analytic Report
                </Link>
                <div className="item">
                    <div className="header">Accounts</div>
                    <div className="menu">
                        <Link to="/setting" className="item" activeClassName="active">
                            <i className="settings icon"></i>
                            Setting
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
