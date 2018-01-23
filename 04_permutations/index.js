// --- Directions
// Given a string, return the permutations of that word
// within the larger string
// --- Examples:
//   palindrome("a great big dog had a big bone", "bone") === 1
//   palindrome("") === false

// Credit To:
// https://gist.github.com/customcommander/e9af9da584ff3a33f5ed

// SLN #1
function permute(str) {

  var ret = [];

  // permutation for one or two characters string is easy:
  // 'a'  -> ['a']
  // 'ab' -> ['ab', 'ba']
  if (str.length == 1) return [str];
  if (str.length == 2) return [str, str[1]+str[0]];

  // otherwise combine each character with a permutation
  // of a subset of the string. e.g. 'abc':
  //
  // 'a' + permutation of 'bc'
  // 'b' + permutation of 'ac'
  // 'c' + permutation of 'ab'
  str.split('').forEach((chr, idx, arr) => {
    let sub = [].concat(arr); // "clone" arr
    sub.splice(idx, 1);
    permute(sub.join('')).forEach((perm) => {
      ret.push(chr + perm);
    });
  });

  return ret;
}


module.exports = permute;
