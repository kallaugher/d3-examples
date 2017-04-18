import React, { PureComponent } from 'react'
import * as d3 from 'd3'

import Circle from './Circle'

import data from './data'

class Scatter extends PureComponent {

	get color() {
		return `#${((1 << 24) * Math.random() | 0).toString(16)}` // eslint-disable-line
	}
	get width() {
		return 700
	}
	get height() {
		return 500
	}

	get xScale() {
		const coordValues = []
		data.map(points => coordValues.push(points.x))
		const xMax = Math.max(...coordValues)
		return d3
			.scaleLinear()
			.domain([0, xMax])
			.range([0, this.width])
	}

	get yScale() {
		const coordValues = []
		data.map(points => coordValues.push(points.y))
		const yMax = Math.max(...coordValues)
		return d3
			.scaleLinear()
			.domain([0, (yMax)])
			.range([this.height, 0])
	}

	get renderNodes() {
		return data.map(d => (
			<Circle
				key={d.label}
				cx={this.xScale(d.x)}
				cy={this.yScale(d.y)}
				color={this.color}
			/>
	))
	}

	render() {
		return (
			<svg
				style={{ border: '1px solid black' }}
				width={this.width}
				height={this.height}
			>
				<g>
					{this.renderNodes}
				</g>
			</svg>
		)
	}
}

export default Scatter
