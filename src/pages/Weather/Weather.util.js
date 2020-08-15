import temperatureConverter from "../../shared/utils/temperatureConverter";

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

export const getWeatherList = (data) => {
    const list = [];
    const getAverageTemp = (day) => {
        const sumTemp = day.reduce((acc, item) => {
            acc += item.main.temp;
            return acc;
        }, 0);
        return sumTemp/day.length;
    }
    for(let day in data) {
        const info = {
            date: day,
            avg_temp: getAverageTemp(data[day]),
        }
        list.push(info);
    }
    return list;
}

export const getChartData = (data, isCelsius) => {
    return data.map(item => {
        return {
            time: item.dt_txt.substr(item.dt_txt.indexOf(" ") + 1, 5),
            temp: temperatureConverter(item.main.temp, isCelsius),
        }
    })
}
