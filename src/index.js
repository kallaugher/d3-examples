import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import SVG from './SVG'
import LineChart from './LineChart/LineChart'
import PieChart from './PieChart/PieChart'
import Scatter from './Scatter/Scatter'

ReactDOM.render((
	<Router>
		<div>

			<ul className="link">
				<li><Link to="/">SVG</Link></li>
				<li><Link to="/line">Line</Link></li>
				<li><Link to="/pie">Pie</Link></li>
				<li><Link to="/scatter">Scatter Plot</Link></li>
			</ul>

			<hr />

			<Route exact path="/" component={SVG} />
			<Route exact path="/line" component={LineChart} />
			<Route exact path="/pie" component={PieChart} />
			<Route exact path="/scatter" component={Scatter} />

		</div>
	</Router >
), document.getElementById('root'))
