import {getWeatherList, groupWeatherByDate} from "./Weather.util";
import { fetchWeatherDataSuccess, setError } from "./Weather.slice";
import request from "../../shared/utils/request";

const data = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1597514400,
            "main": {
                "temp": 22.84,
                "feels_like": 24.97,
                "temp_min": 20.73,
                "temp_max": 22.84,
                "pressure": 1015,
                "sea_level": 1014,
                "grnd_level": 955,
                "humidity": 77,
                "temp_kf": 2.11
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 18
            },
            "wind": {
                "speed": 1.32,
                "deg": 9
            },
            "visibility": 10000,
            "pop": 0.98,
            "rain": {
                "3h": 3.16
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-15 18:00:00"
        },
        {
            "dt": 1597525200,
            "main": {
                "temp": 19.48,
                "feels_like": 21.5,
                "temp_min": 18,
                "temp_max": 19.48,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 955,
                "humidity": 84,
                "temp_kf": 1.48
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 10
            },
            "wind": {
                "speed": 0.35,
                "deg": 155
            },
            "visibility": 10000,
            "pop": 0.34,
            "rain": {
                "3h": 0.44
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-15 21:00:00"
        },
        {
            "dt": 1597536000,
            "main": {
                "temp": 17.42,
                "feels_like": 18.6,
                "temp_min": 16.91,
                "temp_max": 17.42,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 955,
                "humidity": 89,
                "temp_kf": 0.51
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 10
            },
            "wind": {
                "speed": 0.93,
                "deg": 216
            },
            "visibility": 10000,
            "pop": 0.26,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-16 00:00:00"
        },
        {
            "dt": 1597546800,
            "main": {
                "temp": 16.04,
                "feels_like": 16.88,
                "temp_min": 15.97,
                "temp_max": 16.04,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 954,
                "humidity": 89,
                "temp_kf": 0.07
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 0.72,
                "deg": 203
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-16 03:00:00"
        },
        {
            "dt": 1597557600,
            "main": {
                "temp": 17.88,
                "feels_like": 19.26,
                "temp_min": 17.88,
                "temp_max": 17.88,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 954,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 0.51,
                "deg": 129
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-16 06:00:00"
        },
        {
            "dt": 1597568400,
            "main": {
                "temp": 23.08,
                "feels_like": 23.94,
                "temp_min": 23.08,
                "temp_max": 23.08,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 954,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 51
            },
            "wind": {
                "speed": 1.82,
                "deg": 81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-16 09:00:00"
        },
        {
            "dt": 1597579200,
            "main": {
                "temp": 25.97,
                "feels_like": 26.24,
                "temp_min": 25.97,
                "temp_max": 25.97,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 954,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 54
            },
            "wind": {
                "speed": 2.42,
                "deg": 65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-16 12:00:00"
        },
        {
            "dt": 1597590000,
            "main": {
                "temp": 25.92,
                "feels_like": 26.18,
                "temp_min": 25.92,
                "temp_max": 25.92,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 953,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.72,
                "deg": 61
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-16 15:00:00"
        },
        {
            "dt": 1597600800,
            "main": {
                "temp": 21.54,
                "feels_like": 22.5,
                "temp_min": 21.54,
                "temp_max": 21.54,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 953,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 9
            },
            "wind": {
                "speed": 2.58,
                "deg": 92
            },
            "visibility": 10000,
            "pop": 0.1,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-16 18:00:00"
        },
        {
            "dt": 1597611600,
            "main": {
                "temp": 18.89,
                "feels_like": 19.65,
                "temp_min": 18.89,
                "temp_max": 18.89,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 953,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 1.93,
                "deg": 123
            },
            "visibility": 10000,
            "pop": 0.3,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-16 21:00:00"
        },
        {
            "dt": 1597622400,
            "main": {
                "temp": 17.68,
                "feels_like": 18.54,
                "temp_min": 17.68,
                "temp_max": 17.68,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 952,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 1.33,
                "deg": 117
            },
            "visibility": 10000,
            "pop": 0.14,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-17 00:00:00"
        },
        {
            "dt": 1597633200,
            "main": {
                "temp": 16.92,
                "feels_like": 18.18,
                "temp_min": 16.92,
                "temp_max": 16.92,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 951,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 89
            },
            "wind": {
                "speed": 0.47,
                "deg": 120
            },
            "visibility": 10000,
            "pop": 0.02,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-17 03:00:00"
        },
        {
            "dt": 1597644000,
            "main": {
                "temp": 17.07,
                "feels_like": 16.38,
                "temp_min": 17.07,
                "temp_max": 17.07,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 952,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 87
            },
            "wind": {
                "speed": 3.6,
                "deg": 269
            },
            "visibility": 6517,
            "pop": 0.68,
            "rain": {
                "3h": 3.18
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-17 06:00:00"
        },
        {
            "dt": 1597654800,
            "main": {
                "temp": 18.8,
                "feels_like": 18.97,
                "temp_min": 18.8,
                "temp_max": 18.8,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 952,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 2.92,
                "deg": 291
            },
            "visibility": 10000,
            "pop": 0.88,
            "rain": {
                "3h": 1.78
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-17 09:00:00"
        },
        {
            "dt": 1597665600,
            "main": {
                "temp": 18.98,
                "feels_like": 17.69,
                "temp_min": 18.98,
                "temp_max": 18.98,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 952,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 4.59,
                "deg": 296
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.33
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-17 12:00:00"
        },
        {
            "dt": 1597676400,
            "main": {
                "temp": 16.31,
                "feels_like": 14.72,
                "temp_min": 16.31,
                "temp_max": 16.31,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 953,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.49,
                "deg": 250
            },
            "visibility": 8606,
            "pop": 1,
            "rain": {
                "3h": 3.52
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-17 15:00:00"
        },
        {
            "dt": 1597687200,
            "main": {
                "temp": 15.52,
                "feels_like": 14.83,
                "temp_min": 15.52,
                "temp_max": 15.52,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 954,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.57,
                "deg": 229
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.59
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-17 18:00:00"
        },
        {
            "dt": 1597698000,
            "main": {
                "temp": 14.09,
                "feels_like": 13.44,
                "temp_min": 14.09,
                "temp_max": 14.09,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 955,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 77
            },
            "wind": {
                "speed": 1.79,
                "deg": 180
            },
            "visibility": 10000,
            "pop": 0.07,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-17 21:00:00"
        },
        {
            "dt": 1597708800,
            "main": {
                "temp": 13.51,
                "feels_like": 12.48,
                "temp_min": 13.51,
                "temp_max": 13.51,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 954,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 2.09,
                "deg": 219
            },
            "visibility": 10000,
            "pop": 0.04,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-18 00:00:00"
        },
        {
            "dt": 1597719600,
            "main": {
                "temp": 13.05,
                "feels_like": 11.89,
                "temp_min": 13.05,
                "temp_max": 13.05,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 953,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 2.03,
                "deg": 217
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-18 03:00:00"
        },
        {
            "dt": 1597730400,
            "main": {
                "temp": 15.21,
                "feels_like": 14.73,
                "temp_min": 15.21,
                "temp_max": 15.21,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 954,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.64,
                "deg": 226
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-18 06:00:00"
        },
        {
            "dt": 1597741200,
            "main": {
                "temp": 20.36,
                "feels_like": 20.24,
                "temp_min": 20.36,
                "temp_max": 20.36,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 954,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.31,
                "deg": 237
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-18 09:00:00"
        },
        {
            "dt": 1597752000,
            "main": {
                "temp": 22.61,
                "feels_like": 22.1,
                "temp_min": 22.61,
                "temp_max": 22.61,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 954,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.34,
                "deg": 275
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-18 12:00:00"
        },
        {
            "dt": 1597762800,
            "main": {
                "temp": 23.44,
                "feels_like": 22.71,
                "temp_min": 23.44,
                "temp_max": 23.44,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 953,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 85
            },
            "wind": {
                "speed": 1.97,
                "deg": 290
            },
            "visibility": 10000,
            "pop": 0.27,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-18 15:00:00"
        },
        {
            "dt": 1597773600,
            "main": {
                "temp": 17.88,
                "feels_like": 17.48,
                "temp_min": 17.88,
                "temp_max": 17.88,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 953,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 74
            },
            "wind": {
                "speed": 2.18,
                "deg": 274
            },
            "visibility": 10000,
            "pop": 0.82,
            "rain": {
                "3h": 1.08
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-18 18:00:00"
        },
        {
            "dt": 1597784400,
            "main": {
                "temp": 15.95,
                "feels_like": 15.37,
                "temp_min": 15.95,
                "temp_max": 15.95,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 953,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 84
            },
            "wind": {
                "speed": 2.1,
                "deg": 245
            },
            "visibility": 10000,
            "pop": 0.24,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-18 21:00:00"
        },
        {
            "dt": 1597795200,
            "main": {
                "temp": 15.65,
                "feels_like": 14.59,
                "temp_min": 15.65,
                "temp_max": 15.65,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 953,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 2.66,
                "deg": 251
            },
            "visibility": 10000,
            "pop": 0.13,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-19 00:00:00"
        },
        {
            "dt": 1597806000,
            "main": {
                "temp": 15.47,
                "feels_like": 14.03,
                "temp_min": 15.47,
                "temp_max": 15.47,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 953,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.29,
                "deg": 244
            },
            "visibility": 10000,
            "pop": 0.55,
            "rain": {
                "3h": 0.2
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-19 03:00:00"
        },
        {
            "dt": 1597816800,
            "main": {
                "temp": 14.81,
                "feels_like": 13.07,
                "temp_min": 14.81,
                "temp_max": 14.81,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 953,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.74,
                "deg": 257
            },
            "visibility": 10000,
            "pop": 0.77,
            "rain": {
                "3h": 0.63
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-19 06:00:00"
        },
        {
            "dt": 1597827600,
            "main": {
                "temp": 18.36,
                "feels_like": 16.83,
                "temp_min": 18.36,
                "temp_max": 18.36,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 954,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 45
            },
            "wind": {
                "speed": 4.02,
                "deg": 280
            },
            "visibility": 10000,
            "pop": 0.9,
            "rain": {
                "3h": 0.75
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-19 09:00:00"
        },
        {
            "dt": 1597838400,
            "main": {
                "temp": 20.63,
                "feels_like": 19.79,
                "temp_min": 20.63,
                "temp_max": 20.63,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 953,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 28
            },
            "wind": {
                "speed": 3.15,
                "deg": 299
            },
            "visibility": 10000,
            "pop": 0.91,
            "rain": {
                "3h": 1.71
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-19 12:00:00"
        },
        {
            "dt": 1597849200,
            "main": {
                "temp": 22.22,
                "feels_like": 21.64,
                "temp_min": 22.22,
                "temp_max": 22.22,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 952,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 2.05,
                "deg": 319
            },
            "visibility": 10000,
            "pop": 0.15,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-19 15:00:00"
        },
        {
            "dt": 1597860000,
            "main": {
                "temp": 17.75,
                "feels_like": 18.09,
                "temp_min": 17.75,
                "temp_max": 17.75,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 952,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 7
            },
            "wind": {
                "speed": 0.96,
                "deg": 37
            },
            "visibility": 10000,
            "pop": 0.11,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-19 18:00:00"
        },
        {
            "dt": 1597870800,
            "main": {
                "temp": 15.5,
                "feels_like": 15.5,
                "temp_min": 15.5,
                "temp_max": 15.5,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 952,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 34
            },
            "wind": {
                "speed": 1.25,
                "deg": 157
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-19 21:00:00"
        },
        {
            "dt": 1597881600,
            "main": {
                "temp": 14.5,
                "feels_like": 14.05,
                "temp_min": 14.5,
                "temp_max": 14.5,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 952,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 42
            },
            "wind": {
                "speed": 1.77,
                "deg": 184
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-20 00:00:00"
        },
        {
            "dt": 1597892400,
            "main": {
                "temp": 13.88,
                "feels_like": 13.18,
                "temp_min": 13.88,
                "temp_max": 13.88,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 952,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 69
            },
            "wind": {
                "speed": 1.78,
                "deg": 195
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-20 03:00:00"
        },
        {
            "dt": 1597903200,
            "main": {
                "temp": 16.22,
                "feels_like": 15.75,
                "temp_min": 16.22,
                "temp_max": 16.22,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 953,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 59
            },
            "wind": {
                "speed": 1.81,
                "deg": 206
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-20 06:00:00"
        },
        {
            "dt": 1597914000,
            "main": {
                "temp": 17.59,
                "feels_like": 17.24,
                "temp_min": 17.59,
                "temp_max": 17.59,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 954,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.6,
                "deg": 202
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-20 09:00:00"
        },
        {
            "dt": 1597924800,
            "main": {
                "temp": 22.6,
                "feels_like": 22.48,
                "temp_min": 22.6,
                "temp_max": 22.6,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 955,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 1.42,
                "deg": 206
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-20 12:00:00"
        },
        {
            "dt": 1597935600,
            "main": {
                "temp": 25.95,
                "feels_like": 26.49,
                "temp_min": 25.95,
                "temp_max": 25.95,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 955,
                "humidity": 48,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 1.08,
                "deg": 218
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-20 15:00:00"
        }
    ],
    "city": {
        "id": 2867714,
        "name": "Munich",
        "coord": {
            "lat": 48.1374,
            "lon": 11.5755
        },
        "country": "DE",
        "population": 1260391,
        "timezone": 7200,
        "sunrise": 1597464521,
        "sunset": 1597516069
    }
};

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "3dcbba7ca4300e233aff5675be8082ab--";

export const fetchWeatherData = () => async dispatch => {
    try {
        const params = {
            APPID: API_KEY,
            q: "Munich,de",
            cnt: "40",
            units: "metric"
        }
        const response = await request(WEATHER_URL, params);
        // const { list, city } = response;
        const forecastByDate = groupWeatherByDate(response.data.list);
        const forecastList = getWeatherList(forecastByDate);
        dispatch(fetchWeatherDataSuccess({ city: response.data.city, forecastByDate, forecastList }));
    } catch (error) {
        dispatch(setError(error.message || "Unknown error occurred"));
    }
};
