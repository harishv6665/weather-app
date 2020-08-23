import React from "react";
import { shallow } from "enzyme";
import {Error} from "../";

describe("Error tests", () => {

    it("should be defined", () => {
        expect(Error).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(<Error />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = shallow(<Error />);
        expect(wrapper.find("div").length).toBe(1);
        expect(wrapper.find("span").length).toBe(2);
        expect(wrapper.find("div span").length).toBe(2);
        expect(wrapper.find("div span").first().text()).toEqual("");
        expect(wrapper.find("span").at(1).text()).toEqual("OOPS..! Something went wrong, try refreshing the page.");
    });

});
