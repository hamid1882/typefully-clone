import React from 'react'
import store from "../../App/store";
import { screen } from './test-utils';
import Navbar from '../Navbar';

  test("should have test Upgrade", () => {
    let state = store.getState();
    expect(state.getByTestId("upgrade-btn")).toBeInTheDocument()
  })