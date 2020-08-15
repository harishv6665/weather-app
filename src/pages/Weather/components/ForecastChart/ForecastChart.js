import React from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import styles from "./ForecastChart.module.css";
import moment from "moment";

const XAxisLabel = () => (
    <g style={{ transform: "translate(50%, 100%)" }}>
        <text>Time</text>
    </g>
)

const ForecastChart = ({ data, forecastDate }) => {
    const getChartWidth = () => {
        const maxChartWidth = 600;
        const containerWidth = window.innerWidth - 48;
        return maxChartWidth > containerWidth ? containerWidth : maxChartWidth;
    }
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{moment(forecastDate).format("Do MMMM")}</h2>
            <div className={styles.chartContainer}>
                <BarChart
                    width={getChartWidth()}
                    height={220}
                    data={data}
                    margin={{ top: 0, right: 0, left: -18, bottom: 0 }}
                >
                    <XAxis dataKey="time" label={<XAxisLabel />} />
                    <YAxis label={{ value: 'Temperature', angle: -90 }} />
                    <Tooltip />
                    <Bar dataKey="temp" fill="#688696" />
                </BarChart>
            </div>
        </div>
    );
}

ForecastChart.propTypes = {
    data: PropTypes.array,
    forecastDate: PropTypes.string,
}

ForecastChart.defaultProps = {
    data: [],
    forecastDate: ""
}

export default ForecastChart;
