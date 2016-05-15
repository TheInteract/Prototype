import React from 'react';
import styles from './form.scss'

export default class Form extends React.Component {
    render() {
    	var divMaxSize = {
    		width: '100%'
    	}
        return (
        	<div className="ui segment basic" style={divMaxSize}>
                <h1 className="ui header">
                    <i className="fork icon"></i>
                    <div className="content">
                        Form Analytic Report
                    </div>
                </h1>
                <div className="ui divider"></div>
                <img src="public/img/form.png" className={styles.imgStyle} alt=""/>
            </div>
        )
    }
}
