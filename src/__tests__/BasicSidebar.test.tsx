import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Test from "../components/core/Test";
// import BasicSidebar from "../components/core/BasicSidebar";


test("BasicSidebar is in  document", () => {
  render(<Test />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument()
});

test("BasicSidebar is in  document", () => {
  render(<Test />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument()
});

// test("BasicSidebar is in  document", () => {
//   render(<BasicSidebar />);

//   const txt = screen.getByText("Change Theme");
//   expect(txt).toBeInTheDocument()
// });
