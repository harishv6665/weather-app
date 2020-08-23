import {getWeatherList, groupWeatherByDate} from "./Weather.util";
import { fetchWeatherDataSuccess, setError } from "./Weather.slice";
import request from "../../shared/utils/request";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "3dcbba7ca4300e233aff5675be8082ab";

export const fetchWeatherData = () => async dispatch => {
    try {
        const params = {
            APPID: API_KEY,
            q: "Munich,de",
            cnt: "40",
            units: "metric"
        }
        const response = await request(WEATHER_URL, params);
        const { list, city } = response.data;
        const forecastByDate = groupWeatherByDate(list);
        const forecastList = getWeatherList(forecastByDate);
        dispatch(fetchWeatherDataSuccess({ city, forecastByDate, forecastList }));
    } catch (error) {
        dispatch(setError(error.message || "Unknown error occurred"));
    }
};
