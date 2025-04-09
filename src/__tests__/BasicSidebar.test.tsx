import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Test from "../components/core/Test";
import BasicSidebar from "../components/core/BasicSidebar";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ToggleReducer from "../store/slices/toggleSlice";
import { MemoryRouter, Route, Routes, useLocation } from "react-router";

test("BasicSidebar is in  document", () => {
  render(<Test />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("BasicSidebar is in  document", () => {
  render(<Test />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

// Component to track current route for assertion
const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

const renderWithProviders = (
  ui: React.ReactElement,
  initialEntries = ["/"]
) => {
  const store = configureStore({
    reducer: {
      toggle: ToggleReducer,
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/" element={ui} />
          <Route path="/invoices" element={<div>Invoices Page</div>} />
        </Routes>
        <LocationDisplay />
      </MemoryRouter>
    </Provider>
  );
};

describe("BasicSidebar Navigation", () => {
  test("navigates to /invoices when 'Create Invoice' link is clicked", () => {
    renderWithProviders(<BasicSidebar />);

    const createInvoiceLink = screen.getByRole("link", {
      name: /create invoice/i,
    });

    fireEvent.click(createInvoiceLink);

    // Check that location changed
    expect(screen.getByTestId("location-display")).toHaveTextContent(
      "/invoices"
    );

    // Check page content
    expect(screen.getByText("Invoices Page")).toBeInTheDocument();
  });
});

// const renderWithProviders = (component: React.ReactElement) => {
//   const store = configureStore({
//     reducer: {
//       toggle: ToggleReducer,
//     },
//   });

//   return render(
//     <Provider store={store}>
//       <MemoryRouter>{component}</MemoryRouter>
//     </Provider>
//   );
// };

// describe("BasicSidebar", () => {
//   beforeEach(() => {
//     renderWithProviders(<BasicSidebar />);
//   });

//   test("is in the document", () => {
//     const txt = screen.getByText("Add Client");
//     expect(txt).toBeInTheDocument();
//   });
// });
