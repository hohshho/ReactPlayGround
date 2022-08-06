import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    return (
        <div className="chart">
            {props.dataPoint.map((dataPoint) => (
                // label은 고유값을 가져야 해서 Id 대신 사용 가능
                <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={null} label={dataPoint.label} />
            ))}
        </div>
    );
};

export default Chart;
