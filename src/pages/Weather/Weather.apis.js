import axios from "axios";

const API_KEY = "75f972b80e26f14fe6c920aa6a85ad57"; //TODO: should be stored in .env or secure place

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
