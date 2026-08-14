// @vitest-environment jsdom

import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "../app/page";

describe("Portfolio Homepage", () => {
  it("renders the homepage", () => {
    const { container } = render(React.createElement(Home));
    expect(container).toBeTruthy();
  });

  it("renders Anchal Wadhwani", () => {
    const { container } = render(React.createElement(Home));
    expect(container.innerHTML).toContain("Anchal Wadhwani");
  });

  it("renders AI Assistant", () => {
    const { container } = render(React.createElement(Home));
    expect(container.innerHTML).toContain("AI Assistant");
  });

  it("renders My Projects", () => {
    const { container } = render(React.createElement(Home));
    expect(container.innerHTML).toContain("My Projects");
  });

  it("renders Let's Connect", () => {
    const { container } = render(React.createElement(Home));
    expect(container.innerHTML).toContain("Let's Connect");
  });
});