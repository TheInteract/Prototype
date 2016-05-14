// Library
import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

// Styles
import styles from './sidebar.component.scss';

class MenuSidebar extends React.Component {
  render(){
  	let cRoute = this.props.currentRoute
  	let menuStyles = {
  		dashboard: cx(['item', {active: cRoute.pathname === '/' }]),
  		heatmap: cx(['item', {active: cRoute.pathname === '/heatmap'}])
  	}
  	let setMaxWidth = cx(['ui', styles.maxWidth, 'secondary', 'vertical', 'inverted', 'menu'])
    return (
    	<div className={setMaxWidth}>
    		<Link className={menuStyles.dashboard} to="/">
    			<i className="dashboard icon"></i>
    			Dashboard
    		</Link>
    		<Link className={menuStyles.heatmap} to="/heatmap">
    			<i className="newspaper icon"></i>
    			Heatmap
    		</Link>
    	</div>
    )
  }
}

MenuSidebar.propTypes = {
	currentRoute: React.PropTypes.object.isRequired	
}

export default MenuSidebar