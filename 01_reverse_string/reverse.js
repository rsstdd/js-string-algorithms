// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SLN 1
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// // SLN 2
// function reverse(str) {
//   let reversed = '';
//
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//
//   return reversed;
// }
//
// // SLN 2-a
// function reverse(str) {
//   let reversed = '';
//
//   for (let i = str.length; i >= 0; i--) {
//     reversed += str[i];
//   }
//
//   return reversed;
// }
//
// // SLN 3
// function reverse(str) {
//   return str.split('').reverse().join('');
// }


module.exports = reverse;
