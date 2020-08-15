import axios from "axios";

const API_KEY = "3dcbba7ca4300e233aff5675be8082ab"; //TODO: pick from secrets

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
