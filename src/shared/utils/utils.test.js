import temperatureConverter from "./temperatureConverter";

describe('Util test', () => {
    it("temperature converter from celsius to fahrenheit", () => {
        // testing celsius to fahrenheit --- 1 °C = 33.8 (rounded will be 34) °F
        expect(temperatureConverter(1, false)).toBe(34);

        // testing celsius to fahrenheit --- 30 °C = 86 °F
        expect(temperatureConverter(30, false)).toBe(86);

        // testing celsius without conversion --- 1 °C = 33.8 (rounded will be 34) °F
        expect(temperatureConverter(1, true)).toBe(1);
    })
})
