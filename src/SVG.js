import React from 'react'

const SVG = () => (
			// values are min x,y coordinates followed by width and height

	<svg height={500} width={700} style={{ border: '1px solid black' }} >
		<g transform="translate(0, 0) scale(2)">
			<rect
				fill="#5A7BDD"
				x="0"
				y="0"
				width="100"
				height="100"
				rx="12"
				ry="12"
			/>

			<circle
				fill="#F26941"
				cx="160"
				cy="50"
				r="50"
			/>

			<line
				x1="230"
				y1="90"
				x2="310"
				y2="10"
				stroke="#0F1C3F"
				strokeWidth="5"
				strokeLinecap="round"
			/>

			<polygon
				y="50"
				fill="#F26941"
				points="50,100 95,125 95,175 50,200 5,175 5,125"
			/>

			<path
				y="50"
				fill="none"
				d="M 120 190 c 0 -100 200 -100 200 0"
				stroke="#5A7BDD"
				strokeWidth="5"
				strokeLinecap="round"
			/>
		</g>

	</svg>
		)

export default SVG
