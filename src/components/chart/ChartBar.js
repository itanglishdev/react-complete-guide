import "./ChartBar.css"
// import './Chart' from

const ChartBar = (props) => {
	let barFillHeight = "0%"

	if (props.max > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"
	}

	return (
		<div className="chart-bar">
			<div className="char-bar__inner">
				<div
					className="char-bar__fill"
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className="char-bar__label">{props.label}</div>
		</div>
	)
}

export default ChartBar
