import { render,screen } from "@testing-library/react";
import BookCard from "./Book-Card";

describe("Test BookCard component", () => {
  test("find the test Book-Card",  () => {
    render(<BookCard />);
    const textElement =  screen.getByText("Book-Card");
    expect(textElement).toBeInTheDocument();
  })
})