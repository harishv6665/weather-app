import React from "react";
import { shallow } from "enzyme";
import ForecastCard from "./ForecastCard";

const CARD_DATA = {};
const CARD_IS_ACTIVE = false;
const CARD_IS_CELSIUS = false;

describe("ForecastCard tests", () => {

    it("should be defined", () => {
        expect(ForecastCard).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(<ForecastCard data={CARD_DATA} isActive={CARD_IS_ACTIVE} isCelsius={CARD_IS_CELSIUS} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = shallow(<ForecastCard data={CARD_DATA} isActive={CARD_IS_ACTIVE} isCelsius={CARD_IS_CELSIUS} />);
        expect(wrapper.find("Card").length).toBe(1);
        expect(wrapper.find("ForecastCardField").length).toBe(2);
        expect(wrapper.find("Card ForecastCardField").length).toBe(2);
    });

    it('should simulate on click', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<ForecastCard
            data={CARD_DATA}
            isActive={CARD_IS_ACTIVE}
            isCelsius={CARD_IS_CELSIUS}
            onCardClick={mockFn}
        />);
        wrapper.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });

});
