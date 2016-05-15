import React from 'react'
import styles from './confusion.scss'

export default class Confusion extends React.Component {
    render(){
        var divMaxSize = {
    		width: '100%'
    	}
        return (
        	<div className="ui segment basic" style={divMaxSize}>
                <h1 className="ui header">
                    <i className="random icon"></i>
                    <div className="content">
                        Confusion Detection Report
                    </div>
                </h1>
                <div className="ui divider"></div>
                <img src="assets/imgs/confusion.png" className={styles.imgStyle} alt=""/>
            </div>
        )
    }
}
