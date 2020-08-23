import React from "react";
import { shallow } from "enzyme";
import ForecastChart from "./ForecastChart";
import moment from "moment";

const CHART_DATA = [];
const CHART_DATE = "2020-08-15";
const CHART_IS_CELSIUS = false;

describe("ForecastChart tests", () => {

    it("should be defined", () => {
        expect(ForecastChart).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(<ForecastChart data={CHART_DATA} forecastDate={CHART_DATE} isCelsius={CHART_IS_CELSIUS} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = shallow(<ForecastChart data={CHART_DATA} forecastDate={CHART_DATE} isCelsius={CHART_IS_CELSIUS} />);

        expect(wrapper.find("div").length).toBe(2);
        expect(wrapper.find("h2").length).toBe(1);
        expect(wrapper.find("div h2").length).toBe(1);
        expect(wrapper.find("div div").length).toBe(1);

        expect(wrapper.find("ResponsiveContainer").length).toBe(1);
        expect(wrapper.find("BarChart").length).toBe(1);
        expect(wrapper.find("XAxis").length).toBe(1);
        expect(wrapper.find("YAxis").length).toBe(1);
        expect(wrapper.find("Tooltip").length).toBe(1);
        expect(wrapper.find("Bar").length).toBe(1);

        expect(wrapper.find("div h2").text()).toEqual(moment(CHART_DATE).format("Do MMMM"));
    });

});
