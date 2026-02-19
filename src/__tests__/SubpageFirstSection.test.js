import { render, screen } from "@testing-library/react";
import SubPagesFirstSection from "@/components/common/SubPagesFirstSection";

// Mock next/image
jest.mock("next/image", () => (props) => {
  return <img {...props} alt={props.alt} />;
});

// Mock child components (IMPORTANT: use same alias path)
jest.mock("../components/common/SectionHeading", () => (props) => (
  <div>
    <h6>{props.minorHeading}</h6>
    <h1>{props.mainHeading}</h1>
    <p>{props.paragraph}</p>
  </div>
));

jest.mock("../components/common/ScheduleCallButton", () => () => (
  <button>Schedule Call</button>
));

describe("SubPagesFirstSection", () => {
  it("renders headings, paragraph, image and button", () => {
    render(
      <SubPagesFirstSection
        minorHeading="Minor"
        mainHeading="Main Heading"
        paragraph="Test paragraph"
        image="/test.jpg"
      />
    );

    expect(screen.getByText("Minor")).toBeInTheDocument();
    expect(screen.getByText("Main Heading")).toBeInTheDocument();
    expect(screen.getByText("Test paragraph")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Schedule Call")).toBeInTheDocument();
  });
});
