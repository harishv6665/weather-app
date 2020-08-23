import {createSlice} from "@reduxjs/toolkit";

const weatherInitialState = {
    isLoading: true,
    error: "",
    cityInfo: {},
    forecastList: [],
    forecastByDate: {},
};

export const weatherSelector = state => ({
    isLoading: state.weather.isLoading,
    cityInfo: state.weather.cityInfo,
    forecastList: state.weather.forecastList,
    forecastByDate: state.weather.forecastByDate,
});

const weatherSlice = createSlice({
    name: "weather",
    initialState: weatherInitialState,
    reducers: {
        fetchWeatherDataSuccess: (state, action) => {
            state.isLoading = false;
            state.cityInfo = action.payload.city;
            state.forecastList = action.payload.forecastList;
            state.forecastByDate = action.payload.forecastByDate;
        },
        setError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
});

export const { fetchWeatherDataSuccess, setError } = weatherSlice.actions;

export default weatherSlice;
