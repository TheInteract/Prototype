import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App/App.jsx'
import NotFound from './components/Errors/NotFound.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import HeatmapReport from './components/HeatmapReport/Heatmap.jsx'
import ConfusionReport from './components/ConfusionReport/Confusion.jsx'
import WebflowReport from './components/WebflowReport/Webflow.jsx'
import FormReport from './components/FormReport/Form.jsx'
import Setting from './components/Setting/Setting.jsx'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Dashboard} />
		<Route path="/heatmap" component={HeatmapReport} />
        <Route path="/confusion" component={ConfusionReport} />
        <Route path="/webflow" component={WebflowReport} />
        <Route path="/form" component={FormReport} />
        <Route path="/setting" component={Setting} />
	</Route>
)
