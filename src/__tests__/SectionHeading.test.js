import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import SectionHeading from "@/components/common/SectionHeading";





const mockData = {
    minorHeading : "minor",
    mainHeading: "major",
    paragraph: "paragraph",
    minorcolor : "text-red-500",
    maincolor : "text-blue-500",
    pcolor : "text-green-500",
    class : "justify-start"

    
};


describe("Section Heading Component",() =>{
    test("renders main minor and paragraph",()=>{
        render(<SectionHeading mainHeading={mockData.mainHeading} minorHeading={mockData.minorHeading} paragraph={mockData.paragraph} minorHeadingColor={mockData.minorcolor} mainHeadingColor={mockData.maincolor} paragraphColor={mockData.pcolor} class={mockData.class} /> );

        expect(screen.getByText("minor")).toBeInTheDocument();
        expect(screen.getByText('major')).toBeInTheDocument();
        expect(screen.getByText('paragraph')).toBeInTheDocument();

        const minor = screen.getByText('minor');
        expect(minor).toHaveClass('text-red-500');

        const main = screen.getByText('major');
        expect(main).toHaveClass('text-blue-500');

        const p = screen.getByText('paragraph');
        expect(p).toHaveClass('text-green-500');

        const container = minor.parentElement;
        expect(container).toHaveClass('justify-start');
    });

    
})