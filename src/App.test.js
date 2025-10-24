import { render, screen } from "@testing-library/react";
import App from "./App"; 

// Mock the module so tests don’t crash
jest.mock("./data/mock", () => ({
  summaryData: {
    revenue: { value: "IDR 7,852,000", change: "+2.1%", period: "1–12 Dec, 2020" },
    orderTime: [
      { name: "Morning", value: 40 },
      { name: "Afternoon", value: 35 },
      { name: "Evening", value: 25 },
    ],
    ratings: [
      { title: "Packaging", percentage: 92 },
      { title: "Food Taste", percentage: 85 },
    ],
  },
  mostOrderedFoods: [
    { name: "Fresh Salad Bowl", price: "IDR 45,000" },
    { name: "Chicken Noodles", price: "IDR 75,000" },
  ],
  orderGraphData: [
    { name: "1", orders: 100 },
    { name: "2", orders: 200 },
  ],
}));

describe("App Component", () => {
  test("renders Dashboard heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /Dashboard/i });
    expect(heading).toBeInTheDocument();
  });
});



