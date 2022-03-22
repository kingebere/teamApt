import React from "react";
import {render} from "@testing-library/react";

import WeekBox from "./WeekBox";

it("checks if dates exists", () => {
  const {queryAllByTitle} = render(<WeekBox />);

  const dates = queryAllByTitle("dates");
  expect(dates).toBeTruthy();
});
