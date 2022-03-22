import React from "react";
import {screen, render} from "@testing-library/react";

import SideBar from "./SideBar";

describe("checks text", () => {
  const names = [
    "Dashboard",
    "Analytics",
    "Project",
    "Track",
    "History",
    "Settings",
  ];

  test("display text", () => {
    render(<SideBar names={names} />);
    expect(screen.getByRole("button", {name: /Project/i})).toBeInTheDocument();
  });
});
