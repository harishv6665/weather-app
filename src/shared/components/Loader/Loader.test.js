import React from "react";
import { shallow } from "enzyme";
import {Loader} from "../";

describe("Loader tests", () => {

    it("should be defined", () => {
        expect(Loader).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.find("div").length).toBe(2);
        expect(wrapper.find("div div").length).toBe(1);
        expect(wrapper.find("span").length).toBe(1);
        expect(wrapper.find("div span").length).toBe(1);
        expect(wrapper.find("span").text()).toEqual("Loading...");
    });

});
