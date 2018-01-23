const permutations = require('./index');

test('permutations function exists', () => {
  expect(permutations).toBeDefined();
});

test('permutations function is defined', () => {
  expect(typeof permutations).toEqual('function');
});

test('abb to have a 6 premutations', () => {
  expect(permutations('abb').length).toBe(6);
});

test('the permutations of abb are correct', () => {
  expect(permutations('abb'))
  .toEqual([ 'abb', 'abb', 'bab', 'bba', 'bab', 'bba' ]);
});
