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
  		heatmap: cx(['item', {active: cRoute.pathname === '/heatmap'}]),
      confusion: cx(['item', {active: cRoute.pathname === '/confusion'}]),
      webflow: cx(['item', {active: cRoute.pathname === '/webflow'}]),
      form: cx(['item', {active: cRoute.pathname === '/form'}]),
      setting: cx(['item', {active: cRoute.pathname === '/setting'}])
  	}
  	let setMaxWidth = cx(['ui', styles.maxWidth, 'secondary', 'vertical', 'inverted', 'menu'])
    return (
    	<div className={setMaxWidth}>
    		<Link className={menuStyles.dashboard} to="/">
    			<i className="dashboard icon"></i>
    			My Dashboard
    		</Link>
    		<Link className={menuStyles.heatmap} to="/heatmap">
    			<i className="newspaper icon"></i>
    			Heatmap Report
    		</Link>
        <Link className={menuStyles.confusion} to="/confusion">
          <i className="random icon"></i>
          Confusion Detection Report
        </Link>
        <Link className={menuStyles.webflow} to="/webflow">
          <i className="fork icon"></i>
          Web Page Flow Report
        </Link>
        <Link className={menuStyles.form} to="/form">
          <i className="keyboard icon"></i>
          Form Analytic Report
        </Link>
        <div className="item">
          <div className="header">Accounts</div>
          <div className="menu">
            <Link className={menuStyles.setting} to="/setting">
              <i className="settings icon"></i>
              Setting
            </Link>
          </div>
        </div>
    	</div>
    )
  }
}

MenuSidebar.propTypes = {
	currentRoute: React.PropTypes.object.isRequired	
}

export default MenuSidebar