// __tests__/LoginPage.test.js
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import LoginPage from "../LoginPage";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("js-cookie", () => ({
  set: jest.fn(),
}));

describe("LoginPage Component", () => {
  it("should authenticate and redirect to the dashboard on successful login", () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({ push }));

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "user" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password" },
    });

    fireEvent.click(screen.getByText(/Login/i));

    expect(Cookies.set).toHaveBeenCalledWith(
      "auth",
      "authenticated",
      expect.objectContaining({
        expires: expect.any(Number),
      })
    );
    expect(push).toHaveBeenCalledWith("/dashboard");
  });

  it("should show an alert on invalid credentials", () => {
    global.alert = jest.fn();
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "invalidUser" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "invalidPassword" },
    });

    fireEvent.click(screen.getByText(/Login/i));

    expect(global.alert).toHaveBeenCalledWith("Invalid credentials");
  });
});
