import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Loader, Error} from "../../shared/components";
import ForecastList from "./components/ForecastList/ForecastList";
import ForecastChart from "./components/ForecastChart/ForecastChart";
import {getChartData} from "./Weather.util";
import {weatherSelector} from "./Weather.slice";
import {fetchWeatherData} from "./Weather.apis";

const Weather = () => {
    const state = useSelector(weatherSelector);
    const dispatch = useDispatch();
    const [isCelsius, setIsCelsius] = useState(false);
    const [activeForecastDate, setActiveForecastDate] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchWeatherData());
        }, 1300)
    }, []);

    if (state.error) {
        return <Error message={state.error} />
    }

    if (state.isLoading) {
        return <Loader />
    }

    return (
        <React.Fragment>
            {!!state.forecastList.length && <ForecastList
                list={state.forecastList}
                isCelsius={isCelsius}
                city={state.cityInfo.name}
                setIsCelsius={() => setIsCelsius(!isCelsius)}
                activeForecastDate={activeForecastDate}
                setActiveForecastDate={date => setActiveForecastDate(date)}
            />}
            {activeForecastDate && <ForecastChart
                forecastDate={activeForecastDate}
                isCelsius={isCelsius}
                data={getChartData(state.forecastByDate[activeForecastDate], isCelsius)}
            />}
        </React.Fragment>
    );
}

Weather.propTypes = {}

Weather.defaultProps = {}

export default Weather;
