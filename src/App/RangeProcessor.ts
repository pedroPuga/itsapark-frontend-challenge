import { range } from 'ramda';

export const processRange = (
  firstNumber: number | undefined,
  secondNumber: number | undefined
) => {
  if (firstNumber === undefined || secondNumber === undefined) {
    return 'Please enter both numbers before processing.';
  }

  if (firstNumber > secondNumber) {
    return 'Please make sure first number is greater than second one.';
  }
  // adding one number in order to calculate the whole range, because ramda excludes the second number
  return range(firstNumber, secondNumber + 1).filter((x: number) => x % 3 === 0)
    .length;
};
