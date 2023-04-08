import "./Chart.css"
import ChartBar from "./ChartBar.js"

const Chart = props => {
    const dataPointsVals = props.dataPoints.map((dataPoint) => dataPoint.value)
    const totalMax = Math.max(...dataPointsVals);

    return (<div className="chart">
        {props.dataPoints.map(dataPoint => 
            <ChartBar 
                value={dataPoint.value} 
                maxValue={totalMax} 
                label={dataPoint.label} 
                key={dataPoint.label} 
            />
        )}
    </div>)
}

export default Chart;