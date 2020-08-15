import {createSlice} from "@reduxjs/toolkit";
import {getWeatherList, groupWeatherByDate} from "./Weather.util";
import apis from "./Weather.apis";

const weatherInitialState = {
    cityInfo: {},
    forecastList: [],
    forecastByDate: {},
};

export const weatherSelector = state => ({
    cityInfo: state.weather.cityInfo,
    forecastList: state.weather.forecastList,
    forecastByDate: state.weather.forecastByDate,
});

const weatherSlice = createSlice({
    name: "weather",
    initialState: weatherInitialState,
    reducers: {
        fetchWeatherDataSuccess: (state, action) => {
            const forecastByDate = groupWeatherByDate(action.payload.list);
            const forecastList = getWeatherList(forecastByDate);
            state.cityInfo = action.payload.city;
            state.forecastList = forecastList;
            state.forecastByDate = forecastByDate;
        },
    }
});

const { fetchWeatherDataSuccess } = weatherSlice.actions;

export const fetchWeatherData = () => async dispatch => {
    try {
        const response = await apis.getWeather();
        dispatch(fetchWeatherDataSuccess(response.data))
    } catch (error) {
        console.error(error);
    }
};

export default weatherSlice;
