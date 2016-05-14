import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

import NotFound from './Error';
import Dashboard from '../dashboard/Dashboard';
import Heatmap from '../heatmap/Heatmap';

class App extends React.Component {
  render(){
    return (
    	<div>
    		<h1>Test</h1>
    		{this.props.children}
    	</div>
    )
  }
}

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Dashboard} />
		<Route path="heatmap" component={Heatmap} />
	</Route>
)