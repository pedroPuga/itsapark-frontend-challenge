import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { processRange } from './RangeProcessor';

beforeAll(() => render(<App />));

describe('Testing itsapark challenge', () => {
  test('renders learn app', () => {
    const appTitle = screen.getByText('ITSAPARK CHALLENGE');
    expect(appTitle).toBeInTheDocument();
  });

  test('Shows an error when both inputs are missing', () => {
    const processResult = processRange('', '');

    expect(processResult).toEqual(
      'Please enter both numbers before processing.'
    );
  });

  test('Shows an error when first input is missing', () => {
    const processResult = processRange('', '17');

    expect(processResult).toEqual(
      'Please enter both numbers before processing.'
    );
  });

  test('Shows an error when second input is missing', () => {
    const processResult = processRange('4', '');

    expect(processResult).toEqual(
      'Please enter both numbers before processing.'
    );
  });

  test('Shows an error when second input is greater than first one', () => {
    const processResult = processRange('200', '1');

    expect(processResult).toEqual(
      'Please make sure first number is greater than second one.'
    );
  });

  test('Shows correct result when both inputs are correct (a)', () => {
    const processResult = processRange('1', '9');

    expect(processResult).toEqual(3);
  });

  test('Shows correct result when both inputs are correct (b)', () => {
    const processResult = processRange('100', '4500');

    expect(processResult).toEqual(1467);
  });
});
