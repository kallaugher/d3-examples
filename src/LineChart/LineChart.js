import React, { PureComponent } from 'react'
import * as d3 from 'd3'

import data from './data'

class LineChart extends PureComponent {

	get colors() {
		return d3.schemeCategory10
	}

	get width() {
		return 700
	}
	get height() {
		return 500
	}

	get xScale() {
		return d3
			.scaleLinear()
			.domain([this.minCoord('x'), this.maxCoord('x')])
			.range([0, this.width])
	}

	get yScale() {
		return d3
			.scaleLinear()
			.domain([this.minCoord('y'), (this.maxCoord('y'))])
			.range([this.height, 0])
	}

	get renderLines() {
		const yScale = this.yScale
		const xScale = this.xScale

		const path = d3
			.line().curve(d3.curveLinear)
			.x(d => xScale(d.x))
			.y(d => yScale(d.y))

		return data.map((d, i) => (
			<path
				key={d.label}
				d={path(d.points)}
				stroke={this.colors[i]}
				strokeWidth={5}
				fill="none"
			/>
		))
	}

	maxCoord(axis) {
		const coordValues = []
		data.map(series => series.points.map(coords => coordValues.push(coords[axis])))
		return Math.max(...coordValues)
	}

	minCoord(axis) {
		const coordValues = []
		data.map(series => series.points.map(coords => coordValues.push(coords[axis])))
		return Math.min(...coordValues)
	}

	render() {
		return (
			<svg
				style={{ border: '1px solid black' }}
				width={this.width}
				height={this.height}
			>
				<g>
					{this.renderLines}
				</g>
			</svg>
		)
	}
}

export default LineChart
