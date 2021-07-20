import React from 'react'
import { screen, render, fireEvent, waitFor } from "@testing-library/react"
import Display from "../Display"
import userEvent from "@testing-library/user-event"

const testShow = {
  //add in approprate test data structure here.
  name: 'The Test',
  summary: 'kid takes a test',
  seasons: [
      {
          id: 1,
          name: 'season1',
          episodes:[]
      },
      {
          id: 2,
          name: 'season2',
          episodes: []
      }
  ]
}

test("Test that the Display component renders without any passed in props", () => {
  render (<Display />);
})

test("Test that when the fetch button is pressed, the show component will display", () => {
  const handleClick = jest.fn()
  render(<Display show={testShow} handleClick={handleClick}/>);

  const button = screen.queryByRole('button');

  userEvent.click(button)
})

test("Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.", () => {
  render(<Display />)
})

test("Test that when the fetch button is pressed, this function is called.", () => {
  render(<Display />)
})












///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.