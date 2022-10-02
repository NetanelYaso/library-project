import { render,screen } from "@testing-library/react";
import BooksCard from "./Books-Card";

describe("Test BooskCard component", () => {
  test("find the test Books-Card",  () => {
    render(<BooksCard />);
    const textElement =  screen.getByText("Books-Card");
    expect(textElement).toBeInTheDocument();
  })
})