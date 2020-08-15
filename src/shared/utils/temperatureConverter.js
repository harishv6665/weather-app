/**
 * Functions returns celsius or converts celsius to fahrenheit based on boolean state
 *
 * @param {number} tempInCelsius - temperature in celsius
 * @param {boolean} isCelsius
 *
 * @returns {number} - temperature in fahrenheit or celsius
 */

const temperatureConverter = (tempInCelsius, isCelsius) => {
    if (!isCelsius) {
        return Math.round((tempInCelsius * (9 / 5)) + 32);
    }
    return Math.round(tempInCelsius);
}

export default temperatureConverter;
