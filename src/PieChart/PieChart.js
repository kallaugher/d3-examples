import React, { PureComponent } from 'react'
import * as d3 from 'd3'
import data from './data'

import Arc from './Arc'

class PieChart extends PureComponent {

	get colors() {
		return d3.schemeCategory20
	}

	get pie() {
		return d3.pie().value(d => d.value)
	}

	get renderArc() {
		return (
			this.pie(data).map((d, i) => (
				<Arc
					key={`${d.data.label}-arc`}
					data={d}
					innerRadius={50}
					outerRadius={200}
					color={this.colors[i]}
				/>
			),
		))
	}

	render() {
		return (
			<svg
				style={{ border: '1px solid black' }}
				width={700}
				height={500}
			>
				{this.renderArc}
			</svg>
		)
	}
}

export default PieChart
