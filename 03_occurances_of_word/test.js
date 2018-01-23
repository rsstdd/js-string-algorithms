const occurances = require('./index');

test('occurances function exists', () => {
  expect(occurances).toBeDefined();
});

test('occurances function is defined', () => {
  expect(typeof occurances).toEqual('function');
});

test('a great big dog had a big bone", "bone"" has an occurance', () => {
  expect(occurances('a great big dog had a big bone', 'bone')).toBeTruthy();
});

test('a great big dog had a big bone", "bone"" has an occurance', () => {
  expect(occurances('a great big dog had a big bone', 'bone')).toBe(1);
});

test('a great big dog had a big bone", "a"" has an occurance', () => {
  expect(occurances('a great big dog had a big bone', 'a')).toBe(2);
});

test('"this does not repeat itself", "bone" is falsy', () => {
  expect(occurances('this does not repeat itself', 'bone')).toBeFalsy();
});

test('"this does not repeat itself", "bone" will occur 0 times', () => {
  expect(occurances('this does not repeat itself', 'bone')).toBe(0);
});
