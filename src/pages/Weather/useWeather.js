import {weatherSelector} from "./Weather.slice";
import {useEffect, useState} from "react";
import {fetchWeatherData} from "./Weather.apis";
import {useDispatch, useSelector} from "react-redux";

const useWeather = () => {
    const state = useSelector(weatherSelector);
    const dispatch = useDispatch();
    const [isCelsius, setIsCelsius] = useState(false);
    const [activeForecastDate, setActiveForecastDate] = useState(null);

    useEffect(() => {
        // intentionally added delay to show loader for 1.3 seconds
        setTimeout(() => {
            dispatch(fetchWeatherData());
        }, 1300)
    }, []);

    return {
        state,
        isCelsius,
        setIsCelsius,
        activeForecastDate,
        setActiveForecastDate
    }
}

export default useWeather;
