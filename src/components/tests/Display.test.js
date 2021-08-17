import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import Display from '../Display'

const testShow = {
  //add in approprate test data structure here.
  name: "test Show",
  summary: "",
  seasons: [
      {
          id: 1,
          name:"season 1",
          episodes: []
      },
      {
          id: 2,
          name:"season 2",
          episodes: []
      },
      {
          id: 3,
          name:"season 3",
          episodes: []
      },
  ]
}

test("Display component renders without any passed in props", () => {
  render(<Display />);
})

test("when the fetch button is pressed, the show component will display", () => {
  const handleClick = jest.fn()
  render(<Display show={testShow} handleClick={handleClick}/>);

  const button = screen.queryByRole("button");

  userEvent.click(button);

  const title = screen.queryByText(/test Show/i)

  expect(title).toBeInTheDocument();
})

test('renders same number of options seasons are passed in', ()=>{
  render(<Display show={testShow} selectedSeason={"none"} />);

  const button = screen.queryByRole("button");

  userEvent.click(button);

  const dropDown = screen.queryAllByTestId("season-option");

  expect(dropDown).toHaveLength(3)
  expect(dropDown).not.toHaveLength(1)
});

test("Test that when the fetch button is pressed, this function is called", () => {
  const mockOnChange = jest.fn()
  render(<Display show={testShow} handleSelect={mockOnChange} />)

  const dropDown = screen.queryByLabelText(/select a season/i);

  userEvent.selectOptions(dropDown, ['1']);
  expect(mockOnChange).toBeCalled();
})














///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props. ✅
//3. Rebuild or copy a show test data element as used in the previous set of tests. ✅
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.