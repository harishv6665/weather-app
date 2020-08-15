const temperatureConverter = (tempInCelsius, toCelsius) => {
    if (!toCelsius) {
        return Math.round((tempInCelsius * (9 / 5)) + 32);
    }
    return Math.round(tempInCelsius);
}

export default temperatureConverter;
