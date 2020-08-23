import React from "react";
import { shallow } from "enzyme";
import {Button} from "../";

const BUTTON_TITLE = "CLICK HERE";

describe("Button tests", () => {

    it("should be defined", () => {
        expect(Button).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(<Button>{BUTTON_TITLE}</Button>);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = shallow(<Button>{BUTTON_TITLE}</Button>);
        expect(wrapper.find("button").length).toBe(1);
        expect(wrapper.find("button").text()).toEqual(BUTTON_TITLE);
    });

    it("should match the DOM structure -- for disabled", () => {
        const wrapper = shallow(<Button disabled>{BUTTON_TITLE}</Button>);
        expect(wrapper.find("button").length).toBe(1);
        expect(wrapper.find("button").is('[disabled]')).toBe(true);
    });

    it('should simulate on click', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(
            <Button onClick={mockFn}>{BUTTON_TITLE}</Button>
        );
        wrapper.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });

});
