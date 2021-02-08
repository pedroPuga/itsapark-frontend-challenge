import { range } from 'ramda';

export const processRange = (firstValue: string, secondValue: string) => {
  const firstNumber: number = parseInt(firstValue);
  const secondNumber: number = parseInt(secondValue) + 1;

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return 'Please enter both numbers before processing.';
  }

  if (firstNumber > secondNumber) {
    return 'Please make sure first number is greater than second one.';
  }

  return range(firstNumber, secondNumber).filter((x: number) => x % 3 === 0)
    .length;
};
