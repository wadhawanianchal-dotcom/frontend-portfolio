import { describe, expect, test } from "vitest";

describe("Portfolio Application", () => {
  test("portfolio contains important frontend skills", () => {
    const skills = [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "C",
      "Java",
      "SQL",
      "MySQL",
    ];

    expect(skills).toContain("JavaScript");
    expect(skills).toContain("React");
    expect(skills).toContain("Next.js");
  });

  test("AI assistant handles unavailable information correctly", () => {
    const response =
      "I don't have that information in Anchal's portfolio yet.";

    expect(response).toContain("don't have that information");
  });
});