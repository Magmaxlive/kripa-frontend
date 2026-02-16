import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TeamCard from "@/components/common/TeamCard";
import React from "react";


jest.mock("next/image",() => ({
    __esModule:true,
    default: (props) =>
    React.createElement("img", {
      ...props,
    }),
}));


const mockData = {
    image:"/images/test.webp",
    name : "test name",
    position: "test position",
    description : (
        <div>
            <p>Paragraph One</p>
            <p>Paragraph Two</p>
            <p>Paragraph Three</p>
        </div>
    ),
};


describe("TeamCard Component",() =>{
    test("renders name and position",()=>{
        render(<TeamCard data={mockData}/>);

        expect(screen.getByText("test name")).toBeInTheDocument();
        expect(screen.getByText('test position')).toBeInTheDocument();
    });

    test("shows only first paragraph initially",()=>{
        render(<TeamCard data={mockData}/>);

        expect(screen.getByText("Paragraph One")).toBeInTheDocument();
        expect(screen.queryByText("Paragraph Two")).not.toBeInTheDocument();
    });

    test("show all paragraph when read more is clicked",() => {
        render(<TeamCard data={mockData}/>);

        fireEvent.click(screen.getByText('Read more'));

        expect(screen.getByText("Paragraph One")).toBeInTheDocument();
        expect(screen.queryByText("Paragraph Two")).toBeInTheDocument();
    });


    test("show only first paragraph when read less is clicked",() => {
        render(<TeamCard data={mockData}/>);

        fireEvent.click(screen.getByText('Read more'));
        fireEvent.click(screen.getByText('Read less'));

        expect(screen.queryByText("Paragraph Two")).not.toBeInTheDocument();
    });
})