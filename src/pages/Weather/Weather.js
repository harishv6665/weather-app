import React from "react";
import {Loader, Error} from "../../shared/components";
import ForecastList from "./components/ForecastList/ForecastList";
import ForecastChart from "./components/ForecastChart/ForecastChart";
import {getChartData} from "./Weather.util";
import useWeather from "./useWeather";

const Weather = () => {
    const {
        state,
        isCelsius,
        setIsCelsius,
        activeForecastDate,
        setActiveForecastDate
    } = useWeather();

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
                setActiveForecastDate={setActiveForecastDate}
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
