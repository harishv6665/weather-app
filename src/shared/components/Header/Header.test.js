import React from "react";
import { shallow } from "enzyme";
import { Header } from "../";

describe("Header tests", () => {

    it("should be defined", () => {
        expect(Header).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("header").length).toBe(1);
        expect(wrapper.find("header h1").length).toBe(1);
        expect(wrapper.find("h1").length).toBe(1);
        expect(wrapper.find("h1").text()).toEqual("Weather");
    });

});
