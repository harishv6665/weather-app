import {getAverageTemperature, getChartData, getWeatherList, groupWeatherByDate,} from "./Weather.util";

describe("Weather utils test", () => {
   it("groupWeatherByDate tests", () => {
       const mockInput = [
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
           }
       ];
       const mockOutput = {'2020-08-15': [
               {
                   dt: 1597514400,
                   main: {
                       temp: 22.84,
                       feels_like: 24.97,
                       temp_min: 20.73,
                       temp_max: 22.84,
                       pressure: 1015,
                       sea_level: 1014,
                       grnd_level: 955,
                       humidity: 77,
                       temp_kf: 2.11
                   },
                   weather: [
                       {
                           id: 501,
                           main: 'Rain',
                           description: 'moderate rain',
                           icon: '10d'
                       }
                   ],
                   clouds: {
                       all: 18
                   },
                   wind: {
                       speed: 1.32,
                       deg: 9
                   },
                   visibility: 10000,
                   pop: 0.98,
                   rain: {
                       '3h': 3.16
                   },
                   sys: {
                       pod: 'd'
                   },
                   dt_txt: '2020-08-15 18:00:00'
               },
               {
                   dt: 1597525200,
                   main: {
                       temp: 19.48,
                       feels_like: 21.5,
                       temp_min: 18,
                       temp_max: 19.48,
                       pressure: 1015,
                       sea_level: 1015,
                       grnd_level: 955,
                       humidity: 84,
                       temp_kf: 1.48
                   },
                   weather: [
                       {
                           id: 500,
                           main: 'Rain',
                           description: 'light rain',
                           icon: '10n'
                       }
                   ],
                   clouds: {
                       all: 10
                   },
                   wind: {
                       speed: 0.35,
                       deg: 155
                   },
                   visibility: 10000,
                   pop: 0.34,
                   rain: {
                       '3h': 0.44
                   },
                   sys: {
                       pod: 'n'
                   },
                   dt_txt: '2020-08-15 21:00:00'
               }
           ]};
       expect(groupWeatherByDate(mockInput)).toEqual(mockOutput);
   });

   it("getAverageTemperature tests", () => {
       const mockInput = [
           {
               dt: 1597514400,
               main: {
                   temp: 22.84,
                   feels_like: 24.97,
                   temp_min: 20.73,
                   temp_max: 22.84,
                   pressure: 1015,
                   sea_level: 1014,
                   grnd_level: 955,
                   humidity: 77,
                   temp_kf: 2.11
               },
               weather: [
                   {
                       id: 501,
                       main: 'Rain',
                       description: 'moderate rain',
                       icon: '10d'
                   }
               ],
               clouds: {
                   all: 18
               },
               wind: {
                   speed: 1.32,
                   deg: 9
               },
               visibility: 10000,
               pop: 0.98,
               rain: {
                   '3h': 3.16
               },
               sys: {
                   pod: 'd'
               },
               dt_txt: '2020-08-15 18:00:00'
           },
           {
               dt: 1597525200,
               main: {
                   temp: 19.48,
                   feels_like: 21.5,
                   temp_min: 18,
                   temp_max: 19.48,
                   pressure: 1015,
                   sea_level: 1015,
                   grnd_level: 955,
                   humidity: 84,
                   temp_kf: 1.48
               },
               weather: [
                   {
                       id: 500,
                       main: 'Rain',
                       description: 'light rain',
                       icon: '10n'
                   }
               ],
               clouds: {
                   all: 10
               },
               wind: {
                   speed: 0.35,
                   deg: 155
               },
               visibility: 10000,
               pop: 0.34,
               rain: {
                   '3h': 0.44
               },
               sys: {
                   pod: 'n'
               },
               dt_txt: '2020-08-15 21:00:00'
           }
       ];
       const mockOutput = 21.16;
       expect(getAverageTemperature(mockInput)).toEqual(mockOutput);
   });

   it("getWeatherList tests", () => {
       const mockInput = {'2020-08-15': [
               {
                   dt: 1597514400,
                   main: {
                       temp: 22.84,
                       feels_like: 24.97,
                       temp_min: 20.73,
                       temp_max: 22.84,
                       pressure: 1015,
                       sea_level: 1014,
                       grnd_level: 955,
                       humidity: 77,
                       temp_kf: 2.11
                   },
                   weather: [
                       {
                           id: 501,
                           main: 'Rain',
                           description: 'moderate rain',
                           icon: '10d'
                       }
                   ],
                   clouds: {
                       all: 18
                   },
                   wind: {
                       speed: 1.32,
                       deg: 9
                   },
                   visibility: 10000,
                   pop: 0.98,
                   rain: {
                       '3h': 3.16
                   },
                   sys: {
                       pod: 'd'
                   },
                   dt_txt: '2020-08-15 18:00:00'
               },
               {
                   dt: 1597525200,
                   main: {
                       temp: 19.48,
                       feels_like: 21.5,
                       temp_min: 18,
                       temp_max: 19.48,
                       pressure: 1015,
                       sea_level: 1015,
                       grnd_level: 955,
                       humidity: 84,
                       temp_kf: 1.48
                   },
                   weather: [
                       {
                           id: 500,
                           main: 'Rain',
                           description: 'light rain',
                           icon: '10n'
                       }
                   ],
                   clouds: {
                       all: 10
                   },
                   wind: {
                       speed: 0.35,
                       deg: 155
                   },
                   visibility: 10000,
                   pop: 0.34,
                   rain: {
                       '3h': 0.44
                   },
                   sys: {
                       pod: 'n'
                   },
                   dt_txt: '2020-08-15 21:00:00'
               }
           ]};
       const mockOutput = [{
           date: '2020-08-15',
           avg_temp: 21.16
       }];
       expect(getWeatherList(mockInput)).toEqual(mockOutput);
   });

   it("getChartData", () => {
       const mockInput = [
           {
               dt: 1597514400,
               main: {
                   temp: 22.84,
                   feels_like: 24.97,
                   temp_min: 20.73,
                   temp_max: 22.84,
                   pressure: 1015,
                   sea_level: 1014,
                   grnd_level: 955,
                   humidity: 77,
                   temp_kf: 2.11
               },
               weather: [
                   {
                       id: 501,
                       main: 'Rain',
                       description: 'moderate rain',
                       icon: '10d'
                   }
               ],
               clouds: {
                   all: 18
               },
               wind: {
                   speed: 1.32,
                   deg: 9
               },
               visibility: 10000,
               pop: 0.98,
               rain: {
                   '3h': 3.16
               },
               sys: {
                   pod: 'd'
               },
               dt_txt: '2020-08-15 18:00:00'
           },
           {
               dt: 1597525200,
               main: {
                   temp: 19.48,
                   feels_like: 21.5,
                   temp_min: 18,
                   temp_max: 19.48,
                   pressure: 1015,
                   sea_level: 1015,
                   grnd_level: 955,
                   humidity: 84,
                   temp_kf: 1.48
               },
               weather: [
                   {
                       id: 500,
                       main: 'Rain',
                       description: 'light rain',
                       icon: '10n'
                   }
               ],
               clouds: {
                   all: 10
               },
               wind: {
                   speed: 0.35,
                   deg: 155
               },
               visibility: 10000,
               pop: 0.34,
               rain: {
                   '3h': 0.44
               },
               sys: {
                   pod: 'n'
               },
               dt_txt: '2020-08-15 21:00:00'
           }
       ];
       const mockOutput = [
           {"time":"18:00","temp":73},
           {"time":"21:00","temp":67}
       ];

       expect(getChartData(mockInput, false)).toEqual(mockOutput);
   })
});
