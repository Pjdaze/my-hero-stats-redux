import React from "react";
import SearchBox from "../components/SearchBox";
import { shallow } from "enzyme";

import "./setupTest";

it("to target the value", () => {
  const wrapper = shallow(<SearchBox />);
  wrapper.find('[id="search-box"]');

  expect(wrapper).toMatchSnapshot();
});

it("the function returns the event value", () => {
  console.log("i rendered ");
});
