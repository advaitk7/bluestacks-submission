/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from './utils/test-utils';
 
import App from './App';

// describe('My Test Suite', () => {
//   it('My Test Case', () => {
//     expect(true).toEqual(true);
//   });
// });

 
describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();
  });
});

function sum(a, b) {
  return a + b;
}

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});