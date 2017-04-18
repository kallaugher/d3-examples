import React, { PureComponent, PropTypes } from 'react'

class Circle extends PureComponent {

	get randomNum() {
		return Math.floor(Math.random() * 10)
	}

	render() {
		return (
			<circle
				cx={this.props.cx}
				cy={this.props.cy}
				r={this.randomNum}
				fill={this.props.color}
			/>
		)
	}
}


Circle.propTypes = {
	cx: PropTypes.number.isRequired,
	cy: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
}

export default Circle
