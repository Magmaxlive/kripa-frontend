import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import IconCard from "@/components/common/IconCard";

// Mock IconBox and NumberBox if they use next/image or custom code
jest.mock("../components/common/IconBox", () => ({ icon, bg }) => (
  <div data-testid="icon-box">{icon}</div>
));

jest.mock("../components/common/NumberBox", () => ({ number, bg }) => (
  <div data-testid="number-box">{number}</div>
));

const props = {
  icon: "test-icon",
  number: 42,
  title: "Test Title",
  description: "Test description",
  bgColor: "bg-red-500",
  textColor: "text-blue-500",
  textSize: "text-lg",
  textTransform: "uppercase",
  iconbg: "bg-yellow-200",
};

describe("IconCard Component", () => {
  test("renders IconCard with all props correctly", () => {
    render(<IconCard {...props} />);

    // Container div (parent of heading)
    const heading = screen.getByText("Test Title");
    const container = heading.parentElement;

    // Test container background class
    expect(container).toHaveClass("bg-red-500");

    // Test heading classes
    expect(heading).toHaveClass("text-lg", "text-blue-500", "font-semibold", "uppercase", "tracking-wider");

    // Test description
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toHaveClass("text-xs", "text-center");

    // Test IconBox
    const iconBox = screen.getByTestId("icon-box");
    expect(iconBox).toBeInTheDocument();
    expect(iconBox).toHaveTextContent("test-icon");

    // Test NumberBox
    const numberBox = screen.getByTestId("number-box");
    expect(numberBox).toBeInTheDocument();
    expect(numberBox).toHaveTextContent("42");
  });

  test("renders default classes if props are missing", () => {
    render(<IconCard title="Default Test" />);

    const heading = screen.getByText("Default Test");
    const container = heading.parentElement;

    // Defaults
    expect(container).toHaveClass("bg-(--color-button-bg)");
    expect(heading).toHaveClass("text-base", "text-(--color-primary)", "font-semibold", "uppercase", "tracking-wider");
  });
});
