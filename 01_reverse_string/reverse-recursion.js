
function reverseRecursive(str) {
  if (str === '') {
    return '';
  } else {
    return reverseRecursive(str.substr(1)) + str.charAt(0);
  }
}

module.exports = reverseRecursive;
