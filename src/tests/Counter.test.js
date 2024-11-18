// import necessary react testing library helpers here
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter'

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const increment = screen.getByText("+");
  fireEvent.click(increment);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrement = screen.getByText("-");
  fireEvent.click(decrement);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("-1");
});
