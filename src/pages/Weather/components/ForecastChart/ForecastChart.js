import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
import ForecastChartAxisLabel from "../ForecastChartAxisLabel/ForecastChartAxisLabel";
import styles from "./ForecastChart.module.css";

const XAxisStyle = { transform: "translate(50%, 100%)" };
const YAxisStyle = { transform: "rotateX(0deg) rotateY(0deg) rotateZ(-90deg) translate(-122px, 12px)" };

const ForecastChart = ({ data, forecastDate, isCelsius }) => (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>{moment(forecastDate).format("Do MMMM")}</h2>
        <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart
                    data={data}
                    margin={{ top: 0, right: 0, left: -12, bottom: 8 }}
                >
                    <XAxis
                        dataKey="time"
                        label={<ForecastChartAxisLabel label="Time" style={XAxisStyle} />}
                    />
                    <YAxis
                        label={<ForecastChartAxisLabel label="Temperature" style={YAxisStyle} />}
                    />
                    <Tooltip
                        labelStyle={{display: "none"}}
                        wrapperStyle={{
                            background: "#fff",
                            padding: "8px 16px",
                            fontSize: "18px",
                            borderRadius: "2px",
                        }}
                        content={({payload}) => {
                            if(payload.length) {
                                return `${payload[0].value} ${isCelsius ? " ºC" : " ºF"}`;
                        }}}
                    />
                    <Bar
                        dataKey="temp"
                        fill="#009fe3"
                        maxBarSize={24}
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
);

ForecastChart.propTypes = {
    data: PropTypes.array.isRequired,
    forecastDate: PropTypes.string.isRequired,
    isCelsius: PropTypes.bool
}

ForecastChart.defaultProps = {
    data: [],
    forecastDate: "",
    isCelsius: false
}

export default ForecastChart;
