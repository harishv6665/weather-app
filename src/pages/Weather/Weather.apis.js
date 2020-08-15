import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; //Picked up from github secrets

const getWeather = async () => {
    const location = "Munich,de";
    const cnt = "40";
    try {
        return await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
            params: {
                q: location,
                APPID: API_KEY,
                cnt,
                units: "metric"
            }}
        );
    } catch (error) {
        console.error(error);
    }
}

export default {
    getWeather,
};
