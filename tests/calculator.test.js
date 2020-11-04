const calculator = require('../src/calculator');


test('adds two numbers', () => expect(calculator.add(2, 3)).toBe(5));

test('adds two numbers', () => expect(calculator.add(2, 0)).toBe(2));

test('adds two numbers', () => expect(calculator.add(0, 2)).toBe(2));

test('subtracts two numbers', () => expect(calculator.subtract(3, 3)).toBe(0));

test('subtracts two numbers', () => expect(calculator.subtract(0, 3)).toBe(-3));

test('subtracts two numbers', () => expect(calculator.subtract(3, 0)).toBe(3));

test('multiplies two numbers', () => expect(calculator.multiply(2, 3)).toBe(6));

test('multiplies two numbers', () => expect(calculator.multiply(2, 0)).toBe(0));

test('multiplies two numbers', () => expect(calculator.multiply(0, 2)).toBe(0));

test('divides two numbers', () => expect(calculator.divide(10, 2)).toBe(5));

test('divides two numbers', () => expect(calculator.divide(0, 2)).toBe(0));

test('divides two numbers', () => expect(calculator.divide(10, 0)).toBe(Infinity));
