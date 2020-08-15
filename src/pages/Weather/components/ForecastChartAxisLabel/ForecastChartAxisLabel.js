import React from "react";
import PropTypes from "prop-types";

const ForecastChartAxisLabel = ({ style, label }) => (
    <g style={style}>
        <text>{label}</text>
    </g>
)

ForecastChartAxisLabel.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
}

ForecastChartAxisLabel.defaultProps = {
    label: "",
    style: {},
}

export default ForecastChartAxisLabel;
