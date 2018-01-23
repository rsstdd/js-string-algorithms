// --- Directions
// Given a string, return the occurances of that word
// within the larger string
// --- Examples:
//   palindrome("a great big dog had a big bone", "bone") === 1
//   palindrome("") === false


// SLN #1
function occurancesOfWord(str, wrd) {
  let count = 0;
  const wordArr = str.split(' ');

  wordArr.forEach(word => {
    if (word === wrd) {
      count += 1;
    }
  });

  return count;
}



module.exports = occurancesOfWord;
