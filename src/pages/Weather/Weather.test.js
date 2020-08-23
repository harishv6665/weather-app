import React from "react";
import { shallow, mount } from "enzyme";
import Weather from "./Weather";
import store from "../../store/store";
import {Provider} from "react-redux";

describe("Weather tests", () => {

    it("should be defined", () => {
        expect(Weather).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Weather />
            </Provider>);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = mount(
            <Provider store={store}>
                <Weather />
            </Provider>);
        expect(wrapper.find("Provider").length).toBe(1);
        expect(wrapper.find("Weather").length).toBe(1);
        expect(wrapper.find("Loader").length).toBe(1);
    });

});
