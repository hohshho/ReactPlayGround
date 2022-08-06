import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.max > 0) {
        barFillHeight = Math.rount((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                {/* TODO: 4분 46초 부터 블로그 글에 정리하면 된다. */}
                <div className="chart-bar__fill" style={{ height: barFillHeight, backgroundColor: 'red' }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;
