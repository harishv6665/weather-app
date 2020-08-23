import React from "react";
import { shallow } from "enzyme";
import ForecastChartAxisLabel from "./ForecastChartAxisLabel";

const AXIS_LABEL = "Temperature";
const AXIS_STYLE = "fill: #000";

describe("ForecastChartAxisLabel tests", () => {

    it("should be defined", () => {
        expect(ForecastChartAxisLabel).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(<ForecastChartAxisLabel label={AXIS_LABEL} style={{AXIS_STYLE}} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = shallow(<ForecastChartAxisLabel label={AXIS_LABEL} style={{AXIS_STYLE}} />);
        expect(wrapper.find("g").length).toBe(1);
        expect(wrapper.find("text").length).toBe(1);
        expect(wrapper.find("g text").length).toBe(1);

        expect(wrapper.find("g text").text()).toEqual(AXIS_LABEL);
        expect(wrapper.find("g").prop('style')).toEqual({AXIS_STYLE});
    });

});
