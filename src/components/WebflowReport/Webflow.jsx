import React from 'react'

export default class Webflow extends React.Component {
    render() {
    	var divMaxSize = {
    		width: '100%'
    	}
        return (
        	<div className="ui segment basic" style={divMaxSize}>
                <h1 className="ui header">
                    <i className="fork icon"></i>
                    <div className="content">
                        Web Page Flow Report
                    </div>
                </h1>
                <div className="ui divider"></div>
                <img src="assets/imgs/funnel_full.png" alt=""/>
            </div>
        )
    }
}
