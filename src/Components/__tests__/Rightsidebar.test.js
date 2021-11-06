import React from 'react';
import { render } from '@testing-library/react';
// import {screen} from '@testing-library/dom'
import "@testing-library/jest-dom/extend-expect";
import RightSideBar from '../RightSideBar';

test('tweet button is disable on initial load', () => {
  const component = render(<RightSideBar />);
  const TweetEl = component.getByTestId("tweet-btn");

  expect(TweetEl.textCount).toBe("Schedule")
})