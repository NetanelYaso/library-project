import { render, screen } from "@testing-library/react";
import BookScreen from "./Books-Screen";

describe("Test Books Screen component",()=>{
  test("check text in Dom",()=>{
    render(<BookScreen/>);
    const testElement = screen.getByText("Books-Screen");
    expect(testElement).toBeInTheDocument();
  })
})