// Library
import React from 'react';
import cx from 'classnames';
// Style
import styles from './logo.component.scss';

class Logo extends React.Component {
  render(){ 
    console.log(styles)
    let setMaxWidth = cx(['ui', 'list', 'relaxed', 'inverted', styles.maxWidth])
    return (
    	<div className="ui basic segment menu">
    		<div className={setMaxWidth}>
    			<div className="item">
    				<h1 className="ui center aligned icon header">
    					<i className="area chart icon"></i>
    					<div className="content">The Interact
    						<div className="sub header">UX Analytic</div>
    					</div>
    				</h1>
    			</div>
    		</div>
    	</div>
    )
  }
}

export default Logo