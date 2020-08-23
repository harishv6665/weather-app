import React from "react";
import { shallow } from "enzyme";
import ForecastList from "./ForecastList";

const LIST_CITY = "Munich";
const LIST_LIST = [
    {date: "2020-08-15", avg_temp: 21.16},
    {date: "2020-08-16", avg_temp: 20.8425},
    {date: "2020-08-17", avg_temp: 16.92125},
    {date: "2020-08-18", avg_temp: 17.75125},
    {date: "2020-08-19", avg_temp: 17.54875},
    {date: "2020-08-20", avg_temp: 18.456666666666667},
];
const LIST_ACTIVE_FORECAST_DATE = "2020-08-19";
const LIST_IS_CELSIUS = false;
const LIST_CELSIUS_TEXT = "ºC";
const LIST_FAHRENHEIT_TEXT = "ºF";

describe("ForecastList tests", () => {

    it("should be defined", () => {
        expect(ForecastList).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(<ForecastList
            city={LIST_CITY}
            list={LIST_LIST}
            activeForecastDate={LIST_ACTIVE_FORECAST_DATE}
            isCelsius={LIST_IS_CELSIUS}
            setActiveForecastDate={() => {}}
            setIsCelsius={() => {}}
        />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = shallow(<ForecastList
            city={LIST_CITY}
            list={LIST_LIST}
            activeForecastDate={LIST_ACTIVE_FORECAST_DATE}
            isCelsius={LIST_IS_CELSIUS}
            setActiveForecastDate={() => {}}
            setIsCelsius={() => {}}
        />);
        expect(wrapper.find("Switch").length).toBe(1);
        expect(wrapper.find("Button").length).toBe(2);
        expect(wrapper.find("div div h2").length).toBe(1);
        expect(wrapper.find("div div div label").length).toBe(1);
        expect(wrapper.find("div div div label span").length).toBe(2);
        expect(wrapper.find("div div div label Switch").length).toBe(1);

        expect(wrapper.find("div div h2").text()).toEqual(LIST_CITY);
        expect(wrapper.find("div div div label span").at(0).text()).toEqual(LIST_FAHRENHEIT_TEXT);
        expect(wrapper.find("div div div label span").at(1).text()).toEqual(LIST_CELSIUS_TEXT);
    });

});
