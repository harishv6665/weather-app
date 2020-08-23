import temperatureConverter from "../../shared/utils/temperatureConverter";

/**
 * Groups the array list by date
 *
 * @param {Object[]} list - weather info object list
 *
 * @returns {*} - weather info grouped by date as key
 */

export const groupWeatherByDate = (list) => {
    return list.reduce((acc, item) => {
        const date = item.dt_txt.split(" ", 1);
        if(acc[date]) {
            acc[date].push(item);
        } else {
            acc[date] = [item];
        }
        return acc;
    }, {});
}


/**
 * Function returns average of temperature for a given day's weather info
 *
 * @param {Object[]} day - weather info for single day
 *
 * @returns {number} average temperature for day
 */

export const getAverageTemperature = (day) => {
    const sumTemp = day.reduce((acc, item) => {
        acc += item.main.temp;
        return acc;
    }, 0);
    return sumTemp/day.length;
}


/**
 * Weather info list for cards
 *
 * @param {object} data - weather info grouped by date
 *
 * @returns {Object[]} - array of objects with date and average temperature
 */

export const getWeatherList = (data) => {
    const list = [];
    for(let day in data) {
        const info = {
            date: day,
            avg_temp: getAverageTemperature(data[day]),
        }
        list.push(info);
    }
    return list;
}


/**
 * extracts data to render chart
 *
 * @param {Object[]} data - weather info object list
 * @param {boolean} isCelsius
 *
 * @returns {Object[]} - array of objects with time and temperature
 */

export const getChartData = (data, isCelsius) => {
    return data.map(item => {
        return {
            time: item.dt_txt.substr(item.dt_txt.indexOf(" ") + 1, 5),
            temp: temperatureConverter(item.main.temp, isCelsius),
        }
    })
}
