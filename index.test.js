const capitalize = require('./scripts/capitalize');
const reverseString = require('./scripts/reverseString');
const calculator = require('./scripts/calculator');
const caesarCipher = require('./scripts/caesarCipher');
const analyzeArray = require('./scripts/analyzeArray');

describe('#capitalize(string)', () => {
    test('Takes a string and returns it with the first character capitalized.', () => {
        expect(capitalize('test string')).toBe('Test string');
        expect(capitalize('helloWorld')).toBe('HelloWorld');
    });
});

describe('#reverseString(string)', () => {
    test('Takes a string and returns it reversed.', () => {
        expect(reverseString('test string')).toBe('gnirts tset');
        expect(reverseString('helloWorld')).toBe('dlroWolleh');
    });
});

describe('#calculator', () => {
    test('add(num1, num2)', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(10, 0)).toBe(10);
        expect(calculator.add(10, 1)).toBe(11);
    });
    test('subtract(num1, num2)', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(12, 3)).toBe(9);
        expect(calculator.subtract(3, 3)).toBe(0);
    });
    test('divide(num1, num2)', () => {
        expect(calculator.divide(5, 3)).toBe(2);
        expect(calculator.divide(12, 3)).toBe(4);
        expect(calculator.divide(3, 3)).toBe(1);
    });
    test('multiply(num1, num2)', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
        expect(calculator.multiply(12, 2)).toBe(24);
        expect(calculator.multiply(3, 3)).toBe(9);
    });
});

describe('#caesarCipher(string)', () => {
    test('Takes a string and returns it with each character “shifted”.', () => {
        expect(caesarCipher('test string')).toBe('whvw vwulqj');
        expect(caesarCipher('helloWorld')).toBe('khoorWruog');
    });
});

describe('#analyzeArray(arr)', () => {
    test('Takes an array of numbers and returns an object with the following properties: average, min, max, and length.', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
        expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
        expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
        expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
    });
});