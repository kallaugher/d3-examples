import React, { PureComponent, PropTypes } from 'react'
import * as d3 from 'd3'

class Arc extends PureComponent {
	constructor(props) {
		super(props)
		this.arc = d3.arc()
	}

	componentWillMount() {
		this.arc.innerRadius(50)
		this.arc.outerRadius(this.props.outerRadius)
	}

	get renderLabels() {
		let [labelX, labelY] = this.arc.centroid(this.props.data)
		labelX += 350
		labelY += 250
		const labelTranslate = `translate(${labelX}, ${labelY})`

		return (
			<text
				transform={labelTranslate}
				textAnchor="middle"
			>
				{this.props.data.data.label}
			</text>
		)
	}

	render() {
		return (
			<g>
				<path
					d={this.arc(this.props.data)}
					style={{ fill: this.props.color }}
					transform={'translate(350, 250)'}
				/>
				{this.renderLabels}
			</g>
		)
	}
}


Arc.propTypes = {
	outerRadius: PropTypes.number.isRequired,
	data: PropTypes.object.isRequired,
	color: PropTypes.string.isRequired,
}

export default Arc
