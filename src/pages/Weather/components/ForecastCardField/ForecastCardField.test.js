import React from "react";
import { shallow } from "enzyme";
import ForecastCardField from "./ForecastCardField";

const FIELD_LABEL = "FIRST NAME";
const FIELD_VALUE = "JOHN DOE";

describe("ForecastCardField tests", () => {

    it("should be defined", () => {
        expect(ForecastCardField).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(<ForecastCardField label={FIELD_LABEL} value={FIELD_VALUE} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = shallow(<ForecastCardField label={FIELD_LABEL} value={FIELD_VALUE} />);
        expect(wrapper.find("div").length).toBe(1);
        expect(wrapper.find("div span").length).toBe(2);
        expect(wrapper.find("div span").first().text()).toEqual(FIELD_LABEL);
        expect(wrapper.find("div span").at(1).text()).toEqual(FIELD_VALUE);
    });

});
