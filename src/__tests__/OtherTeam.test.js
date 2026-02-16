import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OtherTeam from "@/components/common/OtherTeam";
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
    
};


describe("Other TeamCard Component",() =>{
    test("renders name and position",()=>{
        render(<OtherTeam data={mockData}/>);

        expect(screen.getByText("test name")).toBeInTheDocument();
        expect(screen.getByText('test position')).toBeInTheDocument();
    });

    
})