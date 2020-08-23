import React from "react";
import { shallow, mount } from "enzyme";
import {Switch} from "../";

describe("Switch tests", () => {

    it("should be defined", () => {
        expect(Switch).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(<Switch />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = shallow(<Switch />);
        expect(wrapper.find("label").length).toBe(1);
        expect(wrapper.find("input").length).toBe(1);
        expect(wrapper.find("span").length).toBe(1);
        expect(wrapper.find("input").props().checked).toEqual(false);
        wrapper.setProps({ checked: true });
        expect(wrapper.find("input").props().checked).toEqual(true);
    });

    it('should simulate on click', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<Switch onChange={mockFn}/>);
        wrapper.find("input").simulate('change');
        expect(mockFn).toHaveBeenCalled();
    });

});
