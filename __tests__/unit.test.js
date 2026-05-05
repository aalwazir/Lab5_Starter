// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//test 1
test('valid phone number with area code returns true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
//test 2
test('valid phone number with parentheses returns true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
//test 3
test('phone number without dashes returns false', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
//test 4
test('incomplete phone number returns false', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});
//test 5
test('valid email returns true', () => {
  expect(isEmail('student@example.com')).toBe(true);
});
//test 6
test('valid email with underscore returns true', () => {
  expect(isEmail('student_name@example.org')).toBe(true);
});
//test 7
test('email without @ symbol returns false', () => {
  expect(isEmail('studentexample.com')).toBe(false);
});
//test 8
test('email without domain ending returns false', () => {
  expect(isEmail('student@example')).toBe(false);
});
//test 9
test('password with letters returns true', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});
//test 10
test('strong password with letters numbers and symbol returns true', () => {
  expect(isStrongPassword('A_12345')).toBe(true);
});
//test 11
test('password starting with a number returns false', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});
//test 12
test('password with invalid character returns false', () => {
  expect(isStrongPassword('abc!')).toBe(false);
});
//test 13
test('valid short date returns true', () => {
  expect(isDate('1/1/2024')).toBe(true);
});
//test 14
test('valid date with two digit month and day returns true', () => {
  expect(isDate('12/31/2024')).toBe(true);
});
//test 15
test('date with dashes returns false', () => {
  expect(isDate('12-31-2024')).toBe(false);
});
//test 16
test('date with year first returns false', () => {
  expect(isDate('2024/12/31')).toBe(false);
});
//test 17
test('valid three character hex color returns true', () => {
  expect(isHexColor('#fff')).toBe(true);
});
//test 18
test('valid six character hex color returns true', () => {
  expect(isHexColor('#A1B2C3')).toBe(true);
});
//test 19
test('hex color with too few characters returns false', () => {
  expect(isHexColor('#ff')).toBe(false);
});
//test 20
test('hex color with invalid letters returns false', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});