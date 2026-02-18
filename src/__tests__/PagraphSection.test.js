import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ParagraphSection from "@/components/common/ParagraphSection";




const mockData = {
    
    paragraph: "paragraph",
    pcolor : "text-red-500",
    class : "justify-start"

    
};


describe("Section Heading Component",() =>{
    test("renders main minor and paragraph",()=>{
        render(<ParagraphSection  paragraph={mockData.paragraph}  paragraphColor={mockData.pcolor} class={mockData.class} /> );

        
        expect(screen.getByText('paragraph')).toBeInTheDocument();


        const p = screen.getByText('paragraph');
        expect(p).toHaveClass('text-red-500');

        const container = p.parentElement;
        expect(container).toHaveClass('justify-start');
    });

    
})