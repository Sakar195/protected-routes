// __tests__/Dashboard.test.js
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Dashboard from "../Dashboard";
import Cookies from "js-cookie";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("js-cookie", () => ({
  get: jest.fn(),
}));

describe("Dashboard Component", () => {
  it("should redirect to the login page if not authenticated", () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({ push }));
    Cookies.get.mockReturnValue(null);

    render(<Dashboard />);

    expect(push).toHaveBeenCalledWith("/login");
  });

  it("should display the dashboard if authenticated", () => {
    Cookies.get.mockReturnValue("authenticated");

    render(<Dashboard />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(
      screen.getByText("Welcome to the protected dashboard!")
    ).toBeInTheDocument();
  });
});
