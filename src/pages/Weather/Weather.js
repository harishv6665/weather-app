import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Loader, Header, Error} from "../../shared/components";
import ForecastList from "./components/ForecastList/ForecastList";
import ForecastChart from "./components/ForecastChart/ForecastChart";
import {getChartData} from "./Weather.util";
import styles from "./Weather.module.css";
import {fetchWeatherData, weatherSelector} from "./Weather.slice";

const Weather = () => {
    const state = useSelector(weatherSelector);
    const dispatch = useDispatch();
    const [isCelsius, setIsCelsius] = useState(false);
    const [activeForecastDate, setActiveForecastDate] = useState(null);

    useEffect(() => {
        dispatch(fetchWeatherData());
    }, []);

    if (state.errorView) {
        return <Error />
    }

    return (
        (state.forecastList.length) ?
        <React.Fragment>
            <Header />
            <div className={styles.content}>
                <ForecastList
                    list={state.forecastList}
                    isCelsius={isCelsius}
                    city={state.cityInfo.name}
                    setIsCelsius={() => setIsCelsius(!isCelsius)}
                    activeForecastDate={activeForecastDate}
                    setActiveForecastDate={date => setActiveForecastDate(date)}
                />
                {activeForecastDate && <ForecastChart
                    forecastDate={activeForecastDate}
                    isCelsius={isCelsius}
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
