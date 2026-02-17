import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageCard from "@/components/common/ImageCard";
import React from "react";


jest.mock("next/image",() => ({
    __esModule:true,
    default: (props) =>
    React.createElement("img", {
      ...props,
    }),
}));


const data = {
    image: "/images/test.webp",
    title: "test title",
    description: "test description",
    bgColor: "bg-red-500",
    textSize: "text-lg",
    textTransform: "uppercase",
    textColor: "text-blue-500",
};


describe("Image Component",() =>{
    test("renders name and position",()=>{
        render(<ImageCard textSize={data.textSize} textTransform={data.textTransform} textColor={data.textColor} image={data.image} title={data.title} description={data.description} bgColor={data.bgColor}/>);

        expect(screen.getByText("test title")).toBeInTheDocument();
        expect(screen.getByText('test description')).toBeInTheDocument();

        const heading = screen.getByText("test title");
        expect(heading).toHaveClass('text-lg');
        expect(heading).toHaveClass('uppercase');
        expect(heading).toHaveClass('text-blue-500');


        const container = heading.parentElement; // This is the div wrapping everything
        expect(container).toHaveClass("bg-red-500");
        
        
        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", "/images/test.webp");
    });

    
})