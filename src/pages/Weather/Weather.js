import React, {useEffect, useState} from "react";
import Loader from "../../shared/components/Loader/Loader";
import Header from "../../shared/components/Header/Header";
import ForecastList from "./components/ForecastList/ForecastList";
import ForecastChart from "./components/ForecastChart/ForecastChart";
import {getChartData} from "./Weather.util";
import styles from "./Weather.module.css";
import {fetchWeatherData, weatherSelector} from "./Weather.slice";
import {useDispatch, useSelector} from "react-redux";

const Weather = () => {
    const state = useSelector(weatherSelector);
    const dispatch = useDispatch();
    const [isCelsius, setIsCelsius] = useState(true);
    const [activeForecastDate, setActiveForecastDate] = useState(null);

    useEffect(() => {
        dispatch(fetchWeatherData());
    }, [dispatch]);

    return (
        (state.forecastList.length) ?
        <React.Fragment>
            <Header
                title={state.cityInfo.name}
                setIsCelsius={() => setIsCelsius(!isCelsius)}
                isCelsius={isCelsius}
            />
            <div className={styles.content}>
                <ForecastList
                    list={state.forecastList}
                    isCelsius={isCelsius}
                    activeForecastDate={activeForecastDate}
                    setActiveForecastDate={date => setActiveForecastDate(date)}
                />
                {activeForecastDate && <ForecastChart
                    forecastDate={activeForecastDate}
                    data={getChartData(state.forecastByDate[activeForecastDate], isCelsius)}
                />}
            </div>
        </React.Fragment> :
        <Loader />
    );
}

Weather.propTypes = {}

Weather.defaultProps = {}

export default Weather;
