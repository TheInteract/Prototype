// Library
import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

// Style
import 'semantic-ui-css/semantic';
import styleApp from './App.component.scss';

// Component
import NotFound from './Error';
import Dashboard from '../dashboard/Dashboard';
import Heatmap from '../heatmap/Heatmap';
import { Logo } from '../shared/Index';

class App extends React.Component {
  render(){
    return (
      <div className={styleApp.pusher}>
        <div className={styleApp.fullScreen}>
          <div className={styleApp.toc}>
            <Logo />
          </div>
          <div className={styleApp.article}>
            {this.props.children}
          </div>
        </div>
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