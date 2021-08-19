import { render, screen, fireEvent, act } from "@testing-library/react";
import LoginPage from "../pages/Login";
import React from "react";

describe("Login render Page", () => {
  it("renders the Login page", () => {
    const { getByText } = render(<LoginPage />);
    expect(getByText(/login/i)).toBeInTheDocument();
  });

  it("render 2 input components", () => {
    const { getByLabelText } = render(<LoginPage />);
    expect(getByLabelText("username")).toBeInTheDocument();
    expect(getByLabelText("password")).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    const { getByText } = render(<LoginPage />);
    expect(getByText("Login")).toBeInTheDocument();
  });
});
