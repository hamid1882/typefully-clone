import React from "react";
import { render as rtlRender, fireEvent, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../../Features/InputSlice";
import App from "../../App";
import RightSideBar, { ScheduleButton } from "../RightSideBar";
import Navbar from "../Navbar";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}



test("App should be rendered in the document", () => {
  <App />;
});


test("Rightside bar should render", () => {
  <RightSideBar />;
});

test("Navbar bar should render", () => {
  render(<App />);
});
