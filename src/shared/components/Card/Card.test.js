import React from "react";
import { shallow, mount } from "enzyme";
import {Card} from "../";

const CARD_CONTENT_TEXT = "Card content here";

const CardContent = () => <span>{CARD_CONTENT_TEXT}</span>

describe("Card tests", () => {

    it("should be defined", () => {
        expect(Card).toBeDefined();
    });

    it("should match to snapshot", () => {
        const wrapper = shallow(<Card>
            <CardContent />
        </Card>);
        expect(wrapper).toMatchSnapshot();
    });

    it("should match the DOM structure", () => {
        const wrapper = mount(<Card>
            <CardContent />
        </Card>);
        expect(wrapper.find("div").length).toBe(1);
        expect(wrapper.find("span").length).toBe(1);
        expect(wrapper.find("div span").length).toBe(1);
        expect(wrapper.find("div span").text()).toEqual(CARD_CONTENT_TEXT);
    });

});
